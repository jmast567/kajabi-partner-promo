'use client'

import { useEffect, useState } from 'react'

function getTimeUntil(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

const AFFILIATE_OPEN = new Date('2026-05-18T06:00:00-07:00')
const SITEWIDE_OPEN = new Date('2026-05-19T00:00:00-07:00')
const FINAL_CLOSE = new Date('2026-06-05T23:59:00-07:00')

export default function Nav() {
  const [time, setTime] = useState<ReturnType<typeof getTimeUntil>>(null)
  const [target, setTarget] = useState<{ label: string; date: Date } | null>(null)

  useEffect(() => {
    const now = new Date()
    if (now < AFFILIATE_OPEN) {
      setTarget({ label: 'Affiliate early access opens in', date: AFFILIATE_OPEN })
    } else if (now < SITEWIDE_OPEN) {
      setTarget({ label: 'Sitewide cart opens in', date: SITEWIDE_OPEN })
    } else if (now < FINAL_CLOSE) {
      setTarget({ label: 'Cart closes in', date: FINAL_CLOSE })
    }
  }, [])

  useEffect(() => {
    if (!target) return
    const tick = () => setTime(getTimeUntil(target.date))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-surface-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold tracking-tight">Kajabi</span>
          <span className="text-white/20 text-sm">/</span>
          <span className="text-white/50 text-sm">Partner Championship</span>
        </div>

        {target && time && (
          <div className="hidden sm:flex items-center gap-3 text-sm">
            <span className="text-white/40">{target.label}</span>
            <div className="flex items-center gap-1 font-mono font-medium tabular-nums">
              <span className="text-gold-400">{String(time.days).padStart(2, '0')}d</span>
              <span className="text-white/30">:</span>
              <span className="text-gold-400">{String(time.hours).padStart(2, '0')}h</span>
              <span className="text-white/30">:</span>
              <span className="text-gold-400">{String(time.minutes).padStart(2, '0')}m</span>
              <span className="text-white/30">:</span>
              <span className="text-gold-400">{String(time.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <a
            href="#leaderboard"
            className="text-sm text-white/60 hover:text-white transition-colors hidden sm:block"
          >
            Leaderboard
          </a>
          <a
            href="#prizes"
            className="text-sm bg-gold-500 hover:bg-gold-400 text-black font-semibold px-3 py-1.5 rounded-md transition-colors"
          >
            Prizes
          </a>
        </div>
      </div>
    </nav>
  )
}
