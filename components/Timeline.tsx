const MILESTONES = [
  { date: 'Apr 27', label: 'Warm-Up Email 1', desc: '50% is back. Biggest prizes ever. Town hall CTA.', past: true },
  { date: 'May 4',  label: 'Warm-Up Email 2', desc: 'New products teased — Backstage, Amplify, Cofounder.', past: true },
  { date: 'May 6',  label: 'Partner Town Hall', desc: 'Live call. Full promo reveal, prize structure, Q&A.', past: true },
  { date: 'May 7',  label: 'Asset Kit Delivered', desc: 'Email & social templates, graphics, messaging brief, your affiliate link.', past: true },
  { date: 'May 11', label: 'One Week Countdown', desc: 'Final prep. Everything you need is in your hands.', past: true },
  { date: 'May 17', label: 'Eve of Launch Email', desc: 'Cart goes live in 24 hours. Queue your first post tonight.', past: false },
  { date: 'May 18', label: 'Affiliate Early Access', desc: '24-hour exclusive window. Championship begins. Cart opens at 6 AM PST.', past: false, highlight: true },
  { date: 'May 19', label: 'Sitewide Launch', desc: 'Public cart opens. Weekly leaderboard updates every Friday.', past: false },
  { date: 'May 22', label: 'Leaderboard Update #1', desc: 'Early standings + milestone prize status sent to all partners.', past: false },
  { date: 'May 29', label: 'Leaderboard Update #2', desc: '4 days left. Final push.', past: false },
  { date: 'Jun 2',  label: 'Marketed Close', desc: 'Phase 1 close at 11:59 PM PST. Last chance email — single CTA.', past: false },
  { date: 'Jun 3',  label: 'Extension Announcement', desc: '"By popular demand." Cart open through June 5. Countdown timer activated.', past: false },
  { date: 'Jun 5',  label: 'Final Close', desc: 'Cart closes. Championship prize window closes with it.', past: false },
  { date: 'Jun 10', label: 'Winners Announced', desc: 'Prizes fulfilled. Results recap sent to all partners.', past: false },
]

export default function Timeline() {
  return (
    <section className="section-divider py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm uppercase tracking-widest font-medium mb-3">Key Dates</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Campaign Timeline</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-0">
            {MILESTONES.map(({ date, label, desc, past, highlight }) => (
              <div key={date + label} className={`relative flex gap-6 py-4 pl-2 ${past ? 'opacity-40' : ''}`}>
                <div className="w-20 flex-shrink-0 text-right">
                  <span className={`text-xs font-mono font-semibold ${highlight ? 'text-gold-400' : 'text-white/40'}`}>
                    {date}
                  </span>
                </div>

                <div className="relative flex-shrink-0 mt-0.5">
                  <div
                    className={`w-3 h-3 rounded-full border-2 relative z-10 ${
                      highlight
                        ? 'bg-gold-500 border-gold-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                        : past
                        ? 'bg-surface-600 border-surface-500'
                        : 'bg-surface-700 border-white/20'
                    }`}
                  />
                </div>

                <div className="pb-4">
                  <p className={`font-semibold text-sm ${highlight ? 'text-gold-400' : 'text-white'}`}>{label}</p>
                  <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
