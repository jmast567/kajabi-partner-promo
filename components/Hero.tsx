'use client'

import { useEffect, useState } from 'react'

function Countdown({ target, label }: { target: Date; label: string }) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [done, setDone] = useState(false)

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setDone(true); return }
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  if (done) return null

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-white/40 text-sm uppercase tracking-widest">{label}</p>
      <div className="flex items-center gap-3">
        {[
          { v: t.days, l: 'Days' },
          { v: t.hours, l: 'Hours' },
          { v: t.minutes, l: 'Min' },
          { v: t.seconds, l: 'Sec' },
        ].map(({ v, l }, i) => (
          <div key={l} className="flex items-center gap-3">
            {i > 0 && <span className="text-white/20 text-2xl font-light mb-4">:</span>}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-surface-700 border border-white/[0.08] flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-gradient-gold">
                  {String(v).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white/30 text-xs mt-1.5 uppercase tracking-wider">{l}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const AFFILIATE_OPEN = new Date('2026-05-18T06:00:00-07:00')
const SITEWIDE_OPEN = new Date('2026-05-19T00:00:00-07:00')
const FINAL_CLOSE = new Date('2026-06-05T23:59:00-07:00')

function StatusBadge() {
  const now = new Date()
  if (now < AFFILIATE_OPEN) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        Affiliate Early Access Opens May 18
      </span>
    )
  }
  if (now >= AFFILIATE_OPEN && now < SITEWIDE_OPEN) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        Affiliate Exclusive Window — Live Now
      </span>
    )
  }
  if (now >= SITEWIDE_OPEN && now < FINAL_CLOSE) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Cart Open — Championship Live
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
      Promo Closed
    </span>
  )
}

export default function Hero() {
  const now = new Date()
  const countdownTarget = now < AFFILIATE_OPEN ? AFFILIATE_OPEN : now < FINAL_CLOSE ? FINAL_CLOSE : null
  const countdownLabel = now < AFFILIATE_OPEN ? 'Affiliate early access opens in' : 'Cart closes in'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-14 px-4 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 py-20">
        <StatusBadge />

        <div className="space-y-4">
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-medium">
            May 2026 Partner Championship
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05]">
            <span className="text-white">50% Off Kajabi.</span>
            <br />
            <span className="text-gradient-gold">$250,000</span>
            <span className="text-white"> in Prizes.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            The biggest promo in Kajabi history. New &amp; churned customers only.
            Affiliate early access starts May 18 — sitewide May 19 through June 5.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#prizes"
            className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-lg transition-colors text-sm"
          >
            View Prize Structure
          </a>
          <a
            href="#leaderboard"
            className="px-6 py-3 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-lg transition-colors border border-white/[0.08] text-sm"
          >
            Live Leaderboard
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 pt-8 max-w-xl mx-auto">
          {[
            { value: '$250K', label: 'Prize Pool' },
            { value: '3 Weeks', label: 'Championship' },
            { value: '110+', label: 'Prizes Available' },
          ].map(({ value, label }) => (
            <div key={label} className="card-surface p-4 text-center">
              <p className="text-2xl font-bold text-gradient-gold">{value}</p>
              <p className="text-white/40 text-xs mt-1 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {countdownTarget && (
          <div className="pt-8">
            <Countdown target={countdownTarget} label={countdownLabel} />
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
