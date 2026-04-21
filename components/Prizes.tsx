'use client'

import { useState } from 'react'

const TIER1 = [
  { rank: 1, medal: '🥇', name: 'Tesla Model Y 2026', value: '$55,000', gsaMin: 75, desc: 'Base MSRP ~$44,990 + premium trim + delivery' },
  { rank: 2, medal: '🥈', name: 'Dream Trip for 2', value: '$25,000', gsaMin: 50, desc: 'Business class flights + 5-star hotel 7 nights + private experiences' },
  { rank: 3, medal: '🥉', name: 'Luxury Sauna', value: '$20,000', gsaMin: 35, desc: 'Clearlight Sanctuary 5 Full Spectrum Infrared Sauna + installation' },
  { rank: 4, medal: '4', name: 'La Marzocco Café Setup', value: '$15,000', gsaMin: 20, desc: 'GS3 MP espresso machine + Mahlkönig grinder + accessories + 12-month coffee subscription' },
  { rank: 5, medal: '5', name: 'Cold Plunge Pro', value: '$12,000', gsaMin: 15, desc: 'Plunge Pro All-In with active chiller + cover + delivery + extended warranty' },
]

const TIER2 = [
  { ranks: '#6–10', name: 'MacBook Pro 16" M4 Max', value: '$3,999 ea.', gsaMin: 10, winners: 5, desc: '36GB/1TB — 5 winners' },
  { ranks: '#11–15', name: 'MacBook Air 15" M3', value: '$1,299 ea.', gsaMin: 8, winners: 5, desc: '8GB/256GB — 5 winners' },
  { ranks: '#16–20', name: 'iPad Pro 13" M4 + Apple Pencil Pro', value: '$1,428 ea.', gsaMin: 5, winners: 5, desc: 'WiFi 256GB + Pencil Pro — 5 winners' },
]

const TIER3 = [
  { gsaMin: 25, name: 'AirPods Max', value: '~$549', maxWinners: 30, pool: '$16,470' },
  { gsaMin: 15, name: 'Apple Watch Series 10', value: '~$399', maxWinners: 25, pool: '$9,975' },
  { gsaMin: 10, name: 'Apple Store Gift Card', value: '$299', maxWinners: 30, pool: '$14,970' },
]

const BONUS = [
  { name: 'Cart Open Bonus', window: 'May 18 (24 hrs)', prize: '$3K / $2K / $1K cash', winners: 3, desc: 'Top 3 partners by GSA count during the affiliate early access window.' },
  { name: 'Week 2 Midpoint Draw', window: '~May 26', prize: '$1,000 cash each', winners: 5, desc: 'Random draw from all partners who have driven at least 1 referral attempt.' },
  { name: 'Most Improved Award', window: 'Full window', prize: '$3K / $2K / $1K cash', winners: 3, desc: 'Biggest % GSA lift vs. your own prior 3-week baseline.' },
  { name: 'Extension Highest GSA', window: 'Jun 2–5', prize: '$3K / $2K / $1K cash', winners: 3, desc: 'Top 3 partners by GSA count specifically during the extension window.' },
  { name: 'Extension Most Improved', window: 'Jun 2–5', prize: '$3K / $2K / $1K cash', winners: 3, desc: 'Biggest GSA surge during June 2–5 relative to your daily average from Weeks 1–2.' },
]

const TABS = ['Elite (#1–5)', 'Mid Field (#6–20)', 'Milestone Achievers', 'Bonus & Wildcard']

export default function Prizes() {
  const [tab, setTab] = useState(0)

  return (
    <section id="prizes" className="section-divider py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-widest font-medium mb-3">Championship</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">$250,000 Prize Pool</h2>
          <p className="text-white/40 mt-3 max-w-xl mx-auto">
            May 18 – June 2 qualifying window. Milestone and leaderboard prizes are non-exclusive — you can win both.
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex gap-1 p-1 bg-surface-800 border border-white/[0.06] rounded-xl mb-8 overflow-x-auto">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`flex-1 min-w-max px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                tab === i
                  ? 'bg-surface-600 text-white shadow-sm'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tier 1 */}
        {tab === 0 && (
          <div className="space-y-3 animate-fade-in">
            {/* Featured #1 */}
            <div className="relative overflow-hidden rounded-xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 via-surface-800 to-surface-800 p-6 sm:p-8">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="text-5xl">🏆</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest">Rank #1</span>
                    <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full">75 GSA minimum</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Tesla Model Y 2026</h3>
                  <p className="text-white/40 text-sm mt-1">{TIER1[0].desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gradient-gold">$55,000</p>
                  <p className="text-white/30 text-xs mt-1">Est. value</p>
                </div>
              </div>
            </div>

            {/* #2–5 */}
            <div className="grid sm:grid-cols-2 gap-3">
              {TIER1.slice(1).map(({ rank, medal, name, value, gsaMin, desc }) => (
                <div key={rank} className="card-surface p-5 flex gap-4">
                  <div className="text-3xl flex-shrink-0">{medal}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-white/30 uppercase tracking-widest">Rank #{rank}</span>
                      <span className="text-xs text-white/20 bg-white/5 px-2 py-0.5 rounded-full">{gsaMin} GSA min</span>
                    </div>
                    <h3 className="font-bold text-white">{name}</h3>
                    <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-gold-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tier 2 */}
        {tab === 1 && (
          <div className="space-y-3 animate-fade-in">
            <div className="card-surface p-4 text-sm text-white/40 text-center">
              Leaderboard ranks #6–20 · 15 winners total · All prizes are Apple products
            </div>
            {TIER2.map(({ ranks, name, value, gsaMin, winners, desc }) => (
              <div key={ranks} className="card-surface p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-20 flex-shrink-0">
                  <span className="text-sm font-bold text-white/60">{ranks}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{name}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{desc} · {gsaMin} GSA minimum</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">{value}</p>
                  <p className="text-white/30 text-xs">{winners} winners</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tier 3 */}
        {tab === 2 && (
          <div className="animate-fade-in space-y-4">
            <div className="card-surface p-4 text-sm text-white/40 text-center">
              Open to all partners · First-come, first-served · You can win a milestone prize AND a leaderboard prize
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {TIER3.map(({ gsaMin, name, value, maxWinners, pool }) => (
                <div key={name} className="card-surface p-6 text-center space-y-3">
                  <div className="text-4xl">🍎</div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Hit {gsaMin}+ GSAs</p>
                    <h3 className="font-bold text-white">{name}</h3>
                    <p className="text-gold-400 font-semibold mt-1">{value} each</p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.06]">
                    <p className="text-white/30 text-xs">Up to {maxWinners} winners · {pool} total</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bonus */}
        {tab === 3 && (
          <div className="animate-fade-in space-y-3">
            <div className="card-surface p-4 text-sm text-white/40 text-center">
              5 award categories that stack on top of Tier 1–3 prizes · Total pool $46,000 · Full details revealed May 18
            </div>
            {BONUS.map(({ name, window, prize, winners, desc }) => (
              <div key={name} className="card-surface p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-white">{name}</h3>
                      <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full">{window}</span>
                    </div>
                    <p className="text-white/40 text-sm">{desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-gold-400">{prize}</p>
                    <p className="text-white/30 text-xs">{winners} winner{winners > 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
