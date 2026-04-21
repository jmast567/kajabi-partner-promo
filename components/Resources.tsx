const RESOURCES = [
  {
    icon: '📦',
    title: 'Asset Kit',
    desc: 'Email & social copy templates, static graphics (all aspect ratios), campaign messaging brief.',
    cta: 'Access Assets',
    href: '#',
    note: 'Available May 7',
  },
  {
    icon: '🔗',
    title: 'Your Affiliate Link',
    desc: 'Get your unique referral link from your partner dashboard. Goes live May 18 at 6 AM PST.',
    cta: 'Partner Dashboard',
    href: 'https://kajabi.com/partner',
    note: null,
  },
  {
    icon: '❓',
    title: 'FAQ',
    desc: 'Commission structure, eligibility rules, leaderboard rules, and prize fulfillment questions.',
    cta: 'Read FAQ',
    href: '#',
    note: 'Available May 7',
  },
]

export default function Resources() {
  return (
    <section className="section-divider py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-widest font-medium mb-3">Resources</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Everything You Need</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {RESOURCES.map(({ icon, title, desc, cta, href, note }) => (
            <div key={title} className="card-surface p-6 flex flex-col gap-4">
              <span className="text-3xl">{icon}</span>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
              <div>
                {note ? (
                  <div className="text-white/30 text-xs">{note}</div>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    {cta} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card-surface p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">Questions about the Championship?</p>
            <p className="text-white/40 text-sm mt-0.5">Reach out to Courtney or Janessa directly.</p>
          </div>
          <a
            href="mailto:partners@kajabi.com"
            className="flex-shrink-0 px-5 py-2.5 bg-surface-600 hover:bg-surface-500 border border-white/[0.08] text-white font-semibold text-sm rounded-lg transition-colors"
          >
            Contact Partner Team
          </a>
        </div>
      </div>
    </section>
  )
}
