'use client'

import { useEffect, useState, useCallback } from 'react'

const API_URL = '/api/leaderboard'

const AFFILIATE_OPEN = new Date('2026-05-18T06:00:00-07:00')
const PROMO_CLOSE    = new Date('2026-06-02T23:59:00-07:00')

const PRIZE: Record<number, string> = {
  1: 'Tesla Model Y',  2: 'Dream Trip for 2',   3: 'The Sanctuary Sauna',
  4: 'The Café Setup', 5: 'The Cold Plunge',
  6: 'MacBook Pro', 7: 'MacBook Pro', 8: 'MacBook Pro', 9: 'MacBook Pro', 10: 'MacBook Pro',
  11: 'MacBook Air', 12: 'MacBook Air', 13: 'MacBook Air', 14: 'MacBook Air', 15: 'MacBook Air',
  16: 'iPad Pro',  17: 'iPad Pro',  18: 'iPad Pro',  19: 'iPad Pro',  20: 'iPad Pro',
}

const PRIZE_REF = [
  { rank: '🥇 #1',  name: 'Tesla Model Y',      value: '$55,000',  req: '150 min', gold: true },
  { rank: '🥈 #2',  name: 'Dream Trip for 2',   value: '$25,000',  req: '100 min' },
  { rank: '🥉 #3',  name: 'Sanctuary Sauna',    value: '$20,000',  req: '75 min' },
  { rank: '#4',      name: 'The Café Setup',     value: '$15,000',  req: '50 min' },
  { rank: '#5',      name: 'The Cold Plunge',    value: '$12,000',  req: '25 min' },
  { rank: '#6–10',   name: 'MacBook Pro 16"',    value: '$3,999 ea', req: '10 min' },
  { rank: '#11–15',  name: 'MacBook Air 15"',    value: '$1,299 ea', req: '8 min' },
  { rank: '#16–20',  name: 'iPad Pro 13"',       value: '$1,428 ea', req: '5 min' },
]

interface Row { rank: number; partner_name: string; gsas: number }

async function fetchSheet(): Promise<Row[]> {
  const res = await fetch(API_URL, { cache: 'no-store' })
  return res.json()
}

function pad(n: number) { return String(n).padStart(2, '0') }

function useCountdown(target: Date) {
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number } | null>(null)
  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setT(null); return }
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}

export default function Leaderboard() {
  const [entries, setEntries]         = useState<Row[]>([])
  const [loading, setLoading]         = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [error, setError]             = useState(false)
  const isLive = new Date() >= AFFILIATE_OPEN
  const countdown = useCountdown(PROMO_CLOSE)

  const refresh = useCallback(async () => {
    try {
      const rows = await fetchSheet()
      setEntries(rows)
      setLastUpdated(new Date())
      setError(false)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
    const id = setInterval(refresh, 60_000)
    return () => clearInterval(id)
  }, [refresh])

  const top3 = entries.slice(0, 3)
  const rest = entries.slice(3)

  return (
    <div id="leaderboard" className="section-card">

      {/* Header */}
      <div className="section-head">
        <div>
          <h2 className="text-[17px] font-extrabold tracking-tight">Live Leaderboard</h2>
          <p className="text-[12px] text-white/55 mt-1">Standings update every minute. Final lock: June 2 at 11:59 PM PST.</p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase shrink-0 pt-0.5">
          {isLive ? (
            <><span className="w-[7px] h-[7px] rounded-full bg-[#69FF81] animate-pulse-dot" /><span className="text-[#69FF81]">Live</span></>
          ) : (
            <><span className="w-[7px] h-[7px] rounded-full bg-[#69FF81]/40" /><span className="text-[#69FF81]/60">Preview</span></>
          )}
        </div>
      </div>

      <div className="section-body">

        {/* Countdown bar */}
        <div className="border-b border-white/[0.06] px-7 py-4 flex flex-wrap items-center gap-5">
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/30 shrink-0">
            {countdown ? 'Closes in' : 'Promo closed'}
          </span>
          {countdown && (
            <div className="flex items-center gap-1.5">
              {[
                { v: countdown.d, l: 'Days' },
                { v: countdown.h, l: 'Hrs' },
                { v: countdown.m, l: 'Min' },
                { v: countdown.s, l: 'Sec' },
              ].map(({ v, l }, i) => (
                <div key={l} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-[20px] font-black text-white/20 -mt-1.5">:</span>}
                  <div className="text-center">
                    <span className="block text-[22px] font-black tracking-tighter text-white leading-none min-w-[36px] tabular-nums">{pad(v)}</span>
                    <span className="block text-[9px] font-bold tracking-widest uppercase text-white/30 mt-0.5">{l}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <span className="ml-auto text-[11.5px] text-white/35 font-medium">
            June 2, 2026 · <strong className="text-white/65">11:59 PM PST</strong>
          </span>
        </div>

        {/* Prize reference row */}
        <div className="px-7 pt-5">
          <div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2.5">Prize at stake by position</div>
          <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {PRIZE_REF.map(({ rank, name, value, req, gold }) => (
              <div key={rank} className={`border rounded-[8px] px-3 py-2.5 shrink-0 text-center min-w-[112px] ${
                gold ? 'border-[#D6A151]/50 bg-[rgba(214,161,81,0.06)]' : 'border-white/[0.08] bg-white/[0.025]'
              }`}>
                <div className={`text-[9px] font-extrabold tracking-wide uppercase mb-0.5 ${gold ? 'text-[#D6A151]' : 'text-white/30'}`}>{rank}</div>
                <div className="text-[11.5px] font-bold text-white leading-tight mb-0.5">{name}</div>
                <div className={`text-[12px] font-extrabold mb-0.5 ${gold ? 'text-[#D6A151]' : 'text-[#AD715C]'}`}>{value}</div>
                <div className="text-[10px] text-white/35">{req}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Standings */}
        <div className="px-7 pt-5 pb-7">
          <div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2.5">Current standings</div>

          {loading ? (
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-14 rounded-[8px] bg-white/[0.04] animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="border border-dashed border-white/[0.12] rounded-[8px] px-4 py-3.5 text-[12.5px] text-white/40 text-center">
              Unable to load standings. Will retry automatically.
            </div>
          ) : entries.length === 0 ? (
            <div className="border border-dashed border-white/[0.12] rounded-[8px] px-4 py-3.5 text-[12.5px] text-white/40 text-center">
              No entries yet.
            </div>
          ) : (
            <>
              {/* Podium */}
              {top3.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                  {top3.map((e) => (
                    <div key={e.partner_name} className={`border rounded-[8px] p-3.5 text-center ${
                      e.rank === 1 ? 'border-[#D6A151]/50 bg-[rgba(214,161,81,0.06)]' :
                      e.rank === 2 ? 'border-white/[0.15] bg-white/[0.04]' :
                      'border-white/[0.08] bg-white/[0.025]'
                    }`}>
                      <div className={`text-[11px] font-extrabold tracking-wide mb-1.5 ${
                        e.rank === 1 ? 'text-[#D6A151]' : e.rank === 2 ? 'text-white/50' : 'text-white/30'
                      }`}>
                        {e.rank === 1 ? '🥇 #1' : e.rank === 2 ? '🥈 #2' : '🥉 #3'}
                      </div>
                      <div className="text-[14px] font-extrabold text-white tracking-tight mb-1">{e.partner_name}</div>
                      <div className="text-[20px] font-black text-white leading-none tabular-nums">{e.gsas}</div>
                      <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wide">sign-ups</div>
                      <span className="inline-block mt-2 text-[11.5px] font-bold text-white/80 bg-white/[0.08] border border-white/[0.12] px-2.5 py-0.5 rounded-sm">
                        {PRIZE[e.rank] ?? '—'}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Rows 4+ */}
              {rest.length > 0 && (
                <div className="border border-white/[0.08] rounded-[8px] overflow-hidden">
                  {rest.map((e) => (
                    <div key={e.partner_name} className="grid grid-cols-[36px_1fr_auto_auto] items-center px-4 py-2.5 border-b border-white/[0.06] last:border-b-0 gap-3 text-[13px] hover:bg-white/[0.03] transition-colors">
                      <span className="text-[12px] font-bold text-white/30 text-center">#{e.rank}</span>
                      <div className="font-semibold text-white tracking-tight">{e.partner_name}</div>
                      <span className="text-[12px] font-semibold text-white/45 whitespace-nowrap">{e.gsas} sign-ups</span>
                      <span className="text-[11px] font-bold text-white/40 bg-white/[0.05] border border-white/[0.08] rounded-sm px-1.5 py-0.5 whitespace-nowrap">
                        {PRIZE[e.rank] ?? '—'}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {lastUpdated && (
                <p className="text-center text-[11.5px] text-white/25 pt-4">
                  Updated {lastUpdated.toLocaleTimeString()} · Refreshes every 60 seconds
                </p>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  )
}
