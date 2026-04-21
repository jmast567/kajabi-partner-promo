const T1 = [
  { rank: 1, medal: '🥇', name: 'Tesla Model Y 2026',     value: '$55,000', min: '150 sign-ups' },
  { rank: 2, medal: '🥈', name: 'Dream Trip for 2',        value: '$25,000', min: '100 sign-ups' },
  { rank: 3, medal: '🥉', name: 'The Sanctuary Sauna',     value: '$20,000', min: '75 sign-ups' },
  { rank: 4, medal: '',    name: 'The Café Setup',          value: '$15,000', min: '50 sign-ups' },
  { rank: 5, medal: '',    name: 'The Cold Plunge',         value: '$12,000', min: '25 sign-ups' },
]

const T2 = [
  { ranks: '#6–10',  name: 'MacBook Pro 16" M4 Max',   value: '$3,999 each · 5 winners', min: '10 sign-ups' },
  { ranks: '#11–15', name: 'MacBook Air 15" M3',        value: '$1,299 each · 5 winners', min: '8 sign-ups' },
  { ranks: '#16–20', name: 'iPad Pro 13" M4 + Pencil', value: '$1,428 each · 5 winners', min: '5 sign-ups' },
]

const T3 = [
  { threshold: '25+ sign-ups', name: 'AirPods Max',           value: '$549 each', cap: 'Up to 30 winners' },
  { threshold: '15+ sign-ups', name: 'Apple Watch Series 10', value: '$399 each', cap: 'Up to 25 winners' },
  { threshold: '10+ sign-ups', name: 'AirPods Pro 2nd gen',   value: '$249 each', cap: 'Up to 20 winners' },
  { threshold: '5+ sign-ups',  name: 'Apple Store Gift Card', value: '$250 each', cap: 'Up to 40 winners' },
]

const BONUS = [
  { name: 'Cart Open Bonus',      when: '$3K / $2K / $1K cash · Top 3 in first 24 hrs · May 18' },
  { name: 'Week 2 Midpoint Draw', when: 'Random draw · 1+ sign-up · ~May 25' },
  { name: 'Most Improved Award',  when: '% lift vs. 3-week baseline · 3 winners · June 2' },
  { name: 'Most Creative Promo',  when: 'Submit to partners@kajabi.com by June 2' },
]

export default function Prizes() {
  return (
    <div id="prizes" className="section-card">
      <div className="section-head">
        <div>
          <h2 className="text-[20px] font-extrabold tracking-tight">Championship Prizes — $250,000</h2>
          <p className="text-[12px] text-white/55 mt-1">Leaderboard, milestone, and bonus prizes all stack. You can win more than one.</p>
        </div>
        <span className="text-[11px] font-bold text-white/30 tracking-widest uppercase shrink-0 pt-0.5">Prizes</span>
      </div>

      <div className="section-body p-7">

        {/* Tier 1 */}
        <TierLabel>Tier 1 — Leaderboard Elite{' '}
          <span className="text-white/55 font-normal tracking-normal normal-case">· Top 5 by June 2 · $127,000 total</span>
        </TierLabel>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
          {T1.map(({ rank, medal, name, value, min }) => (
            <div key={rank} className={`border rounded-[8px] p-3.5 ${
              rank === 1 ? 'border-[#D6A151]/50' :
              rank === 2 ? 'border-white/[0.15]' :
              'border-white/[0.08]'
            }`} style={{
              background: rank === 1
                ? 'linear-gradient(135deg, rgba(214,161,81,0.12) 0%, rgba(214,161,81,0.04) 100%)'
                : rank === 2
                ? 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)'
            }}>
              <div className={`text-[10px] font-extrabold tracking-wide uppercase mb-1.5 ${
                rank === 1 ? 'text-[#D6A151]' : rank === 2 ? 'text-white/50' : 'text-white/30'
              }`}>
                {medal} Rank #{rank}
              </div>
              <div className="text-[13px] font-extrabold text-white leading-snug mb-1">{name}</div>
              <div className="text-[13px] font-bold text-[#AD715C] mb-1">{value}</div>
              <div className="text-[10.5px] text-white/45">Min. <strong className="text-white/75">{min}</strong></div>
            </div>
          ))}
        </div>

        {/* Tier 2 */}
        <TierLabel>Tier 2 — Mid Field{' '}
          <span className="text-white/55 font-normal tracking-normal normal-case">· Ranks #6–20 · $35,000 total</span>
        </TierLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
          {T2.map(({ ranks, name, value, min }) => (
            <div key={ranks} className="border border-white/[0.08] rounded-[8px] p-3.5 bg-white/[0.03]">
              <div className="text-[10px] font-bold tracking-wide uppercase text-white/30 mb-1.5">{ranks}</div>
              <div className="text-[13px] font-bold text-white mb-0.5 tracking-tight">{name}</div>
              <div className="text-[12px] text-white/50 mb-0.5">{value}</div>
              <div className="text-[10.5px] text-white/45">Min. <strong className="text-white/75">{min}</strong></div>
            </div>
          ))}
        </div>

        {/* Tier 3 */}
        <TierLabel>Tier 3 — Milestone Prizes{' '}
          <span className="text-white/55 font-normal tracking-normal normal-case">· First to hit threshold · $42,000 total · Open to all partners</span>
        </TierLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {T3.map(({ threshold, name, value, cap }) => (
            <div key={threshold} className="border border-[rgba(64,91,80,0.3)] rounded-[8px] p-3.5 bg-[rgba(64,91,80,0.07)]">
              <div className="text-[11px] font-extrabold tracking-wide text-[#405B50] mb-1.5">{threshold}</div>
              <div className="text-[13px] font-bold text-white mb-0.5 tracking-tight">{name}</div>
              <div className="text-[12px] text-white/50 mb-0.5">{value}</div>
              <div className="text-[10.5px] text-[#405B50] font-medium opacity-80">{cap}</div>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-[8px] p-4">
          <div className="text-[11px] font-bold tracking-widest uppercase text-white/30 mb-3">
            Bonus &amp; Wildcard Awards — 4 awards · Stack on top of everything above
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {BONUS.map(({ name, when }) => (
              <div key={name} className="bg-white/[0.04] border border-white/[0.07] rounded-[8px] p-2.5">
                <div className="text-[11.5px] font-bold text-white mb-0.5">{name}</div>
                <div className="text-[10.5px] text-white/50">{when}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function TierLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-bold tracking-widest uppercase text-white/30 mb-3 pb-2 border-b border-white/[0.08]">
      {children}
    </div>
  )
}
