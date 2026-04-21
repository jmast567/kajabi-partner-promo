'use client'

import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import type { LeaderboardEntry } from '@/lib/types'

const AFFILIATE_OPEN = new Date('2026-05-18T06:00:00-07:00')

const TIER_PRIZE_MAP: Record<number, string> = {
  1: 'Tesla Model Y 2026',
  2: 'Dream Trip for 2',
  3: 'Luxury Sauna',
  4: 'La Marzocco Setup',
  5: 'Cold Plunge Pro',
  6: 'MacBook Pro 16"',
  7: 'MacBook Pro 16"',
  8: 'MacBook Pro 16"',
  9: 'MacBook Pro 16"',
  10: 'MacBook Pro 16"',
  11: 'MacBook Air 15"',
  12: 'MacBook Air 15"',
  13: 'MacBook Air 15"',
  14: 'MacBook Air 15"',
  15: 'MacBook Air 15"',
  16: 'iPad Pro 13"',
  17: 'iPad Pro 13"',
  18: 'iPad Pro 13"',
  19: 'iPad Pro 13"',
  20: 'iPad Pro 13"',
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="text-lg">🥇</span>
  if (rank === 2) return <span className="text-lg">🥈</span>
  if (rank === 3) return <span className="text-lg">🥉</span>
  return (
    <span className="w-7 h-7 rounded-full bg-surface-600 border border-white/[0.08] flex items-center justify-center text-xs font-bold text-white/50">
      {rank}
    </span>
  )
}

function TierLabel({ rank }: { rank: number }) {
  if (rank <= 5) return <span className="text-xs text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded-full">Elite</span>
  if (rank <= 20) return <span className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full">Mid Field</span>
  return null
}

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isLive] = useState(() => new Date() >= AFFILIATE_OPEN)

  const fetchEntries = useCallback(async () => {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .order('rank', { ascending: true })
    if (!error && data) {
      setEntries(data)
      setLastUpdated(new Date())
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!isLive) { setLoading(false); return }

    fetchEntries()

    const channel = supabase
      .channel('leaderboard_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'leaderboard' }, () => {
        fetchEntries()
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [isLive, fetchEntries])

  return (
    <section id="leaderboard" className="section-divider py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-widest font-medium mb-3">Championship</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Live Leaderboard</h2>
          {isLive && lastUpdated && (
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/30 text-xs">
                Live · Last updated {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
          )}
        </div>

        {!isLive ? (
          <div className="card-surface p-12 text-center space-y-4">
            <div className="text-5xl">🏁</div>
            <h3 className="text-xl font-bold text-white">Leaderboard Opens May 18</h3>
            <p className="text-white/40 max-w-md mx-auto">
              The Championship begins when affiliate early access opens at 6 AM PST on May 18.
              Check back then to track live standings.
            </p>
            <p className="text-white/20 text-sm">
              Partners need a minimum of 15 GSAs to appear on the public leaderboard.
            </p>
          </div>
        ) : loading ? (
          <div className="space-y-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="card-surface h-16 animate-pulse" />
            ))}
          </div>
        ) : entries.length === 0 ? (
          <div className="card-surface p-12 text-center">
            <p className="text-white/40">No partners on the leaderboard yet. First to hit 15 GSAs will appear here.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {/* Header */}
            <div className="grid grid-cols-[48px_1fr_80px_80px_120px] gap-4 px-4 pb-2 text-xs text-white/30 uppercase tracking-widest">
              <span>Rank</span>
              <span>Partner</span>
              <span className="text-right">GSAs</span>
              <span className="hidden sm:block" />
              <span className="text-right hidden sm:block">Prize</span>
            </div>

            {entries.map((entry, idx) => (
              <div
                key={entry.id}
                className={`grid grid-cols-[48px_1fr_80px_80px_120px] gap-4 items-center px-4 py-4 rounded-xl border transition-colors animate-fade-in ${
                  entry.rank <= 5
                    ? 'bg-gold-500/5 border-gold-500/20 hover:border-gold-500/30'
                    : 'card-surface hover:border-white/[0.12]'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center justify-center">
                  <RankBadge rank={entry.rank} />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white truncate">{entry.partner_name}</span>
                    <TierLabel rank={entry.rank} />
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-bold text-white tabular-nums">{entry.gsas}</span>
                  <span className="text-white/30 text-xs ml-1">GSAs</span>
                </div>

                {/* GSA bar (visible on sm+) */}
                <div className="hidden sm:block">
                  <div className="h-1.5 bg-surface-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        entry.rank <= 5 ? 'bg-gold-500' : 'bg-white/30'
                      }`}
                      style={{ width: `${Math.min((entry.gsas / 80) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-xs text-white/40 truncate">
                    {TIER_PRIZE_MAP[entry.rank] ?? entry.prize_name ?? '—'}
                  </span>
                </div>
              </div>
            ))}

            <p className="text-center text-white/20 text-xs pt-4">
              Minimum 15 GSAs to appear · Updated every Friday · Rankings verified at close
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
