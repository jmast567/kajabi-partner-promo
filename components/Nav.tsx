'use client'

import { useEffect, useState } from 'react'

const FINAL_CLOSE = new Date('2026-06-05T23:59:00-07:00')

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

const LINKS = [
  { href: '#overview',    label: 'Overview' },
  { href: '#prizes',      label: '🏆 Prizes' },
  { href: '#leaderboard', label: 'Leaderboard' },
  { href: '#calc',        label: 'Earnings' },
  { href: '#messaging',   label: 'Messaging' },
  { href: '#faq',         label: 'FAQ' },
  { href: '#resources',   label: 'Resources' },
]

export default function Nav() {
  const t = useCountdown(FINAL_CLOSE)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] overflow-x-auto flex items-center gap-0 px-6" style={{ scrollbarWidth: 'none', background: 'linear-gradient(135deg, #1a1710 0%, #111111 50%, #0d0d0d 100%)', backdropFilter: 'blur(12px)' }}>
      <style>{`nav::-webkit-scrollbar{display:none}`}</style>
      <span className="text-k-white font-extrabold text-[13px] tracking-tight py-[14px] mr-4 shrink-0">
        Kajabi Partners
      </span>
      {LINKS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-white/50 hover:text-white/85 text-[12px] font-medium px-3 py-[14px] whitespace-nowrap shrink-0 border-b-2 border-transparent transition-colors"
        >
          {label}
        </a>
      ))}
      {t && (
        <div className="ml-auto pl-5 shrink-0 flex items-center gap-1.5 text-[11px] font-bold text-white/35 whitespace-nowrap">
          Closes in
          <span className="text-k-amber tabular-nums">
            {t.d}d {pad(t.h)}h {pad(t.m)}m {pad(t.s)}s
          </span>
        </div>
      )}
    </nav>
  )
}
