'use client'

import { useEffect, useState } from 'react'

const AFFILIATE_OPEN = new Date('2026-05-18T06:00:00-07:00')
const FINAL_CLOSE    = new Date('2026-06-05T23:59:00-07:00')

function StatusPill() {
  const [label, setLabel] = useState('')
  const [live, setLive]   = useState(false)

  useEffect(() => {
    const now = new Date()
    if (now < AFFILIATE_OPEN) {
      setLabel('Affiliate Early Access Opens May 18 at 6 AM PST')
    } else if (now < FINAL_CLOSE) {
      setLabel('Live Now')
      setLive(true)
    } else {
      setLabel('Promo Closed')
    }
  }, [])

  if (!label) return null
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase bg-white/10 border border-white/20 text-white/80 rounded-full px-4 py-1.5">
      {live && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
      {label}
    </span>
  )
}

export default function Hero() {
  return (
    <div id="overview" className="border border-white/[0.08] rounded-[8px] p-10 mb-8 text-white" style={{ background: 'linear-gradient(135deg, #1e1810 0%, #161410 30%, #111111 65%, #0f0f0f 100%)', boxShadow: '0 2px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(214,161,81,0.08)' }}>
      <StatusPill />

      <h1 className="text-[30px] font-black tracking-tight leading-tight mt-5 mb-5">
        May 2026 Partner Promo<br />
        <span className="text-white/55 font-bold text-[22px]">Everything you need to win.</span>
      </h1>

      <div className="flex flex-wrap gap-2 mb-5">
        {['Partner Program', 'Kajabi Hero Access', 'May 18 – June 5, 2026'].map(p => (
          <span key={p} className="bg-white/[0.07] border border-white/10 rounded-full px-3.5 py-1 text-[12px] font-medium text-white/65">{p}</span>
        ))}
      </div>

      {/* Offer card */}
      <div className="rounded-[8px] overflow-hidden mb-4 border border-white/[0.10]">
        <div className="flex items-start gap-4 p-5" style={{ background: 'linear-gradient(135deg, rgba(214,161,81,0.07) 0%, rgba(255,255,255,0.03) 100%)' }}>
          <div className="bg-[#D6A151] rounded-[6px] px-3.5 py-2.5 text-center shrink-0 min-w-[74px]">
            <span className="block text-[28px] font-black leading-none tracking-tight text-[#070707]">50%</span>
            <span className="block text-[10px] font-extrabold tracking-widest uppercase text-black/50 mt-0.5">Off</span>
          </div>
          <div className="flex-1">
            <div className="text-[15px] font-extrabold tracking-tight text-white leading-snug mb-1.5">
              50% off all Kajabi plans for 12 months. New customers only.
            </div>
            <div className="text-[12.5px] text-white/55 leading-relaxed">
              Three weeks. Three major product launches. One leaderboard.{' '}
              <strong className="text-white/85">$250,000 in prizes exclusively for partners.</strong>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/[0.08]">
          <Cell label="Promo Window" value="May 18 – June 2" sub="Extended close June 5" />
          <Cell label="New Products Launching" value="" chips />
          <Cell label="Total Prize Pool" value="$250,000" sub="Partners only. Stacks with commission." amber />
        </div>
      </div>

      {/* 12-month advantage banner */}
      <div className="bg-white/[0.05] border border-white/[0.15] border-l-[3px] border-l-[#D6A151] rounded-r-[8px] px-4 py-3 mb-4 text-[13px] text-white/80 leading-relaxed">
        <strong className="text-white">Affiliate advantage:</strong> Customers who sign up through your link get 50% off for{' '}
        <strong className="text-[#D6A151]">12 months</strong>. All other Kajabi channels only offer 6 months — your link is the best deal available.
      </div>

      <div className="bg-white/[0.04] border border-white/[0.08] rounded-[8px] px-4 py-3.5 text-[13px] text-white/65 leading-relaxed">
        <strong className="text-white/85">How to use this hub:</strong> Prizes and live leaderboard are at the top. Use the Earnings calculator to model your commission. Resources below have your affiliate link and messaging toolkit.
      </div>
    </div>
  )
}

function Cell({ label, value, sub, amber, chips }: {
  label: string; value?: string; sub?: string; amber?: boolean; chips?: boolean
}) {
  return (
    <div className="px-4 py-3.5 border-r border-white/[0.08] last:border-r-0">
      <div className="text-[10px] font-bold tracking-[0.09em] uppercase text-white/30 mb-1">{label}</div>
      {chips ? (
        <div className="flex flex-wrap gap-1 mt-1">
          <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-sm border bg-[rgba(64,91,80,0.15)] text-[#405B50] border-[rgba(64,91,80,0.3)]">Backstage</span>
          <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-sm border bg-[rgba(58,98,120,0.15)] text-[#3A6278] border-[rgba(58,98,120,0.3)]">Amplify</span>
          <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-sm border bg-[rgba(82,64,91,0.15)] text-[#8B6FA3] border-[rgba(82,64,91,0.3)]">Cofounder</span>
        </div>
      ) : (
        <div className={`text-[13px] font-bold tracking-tight leading-snug ${amber ? 'text-[#D6A151]' : 'text-white'}`}>
          {value}
          {sub && <span className="block text-[11.5px] font-normal text-white/45 mt-0.5">{sub}</span>}
        </div>
      )}
    </div>
  )
}
