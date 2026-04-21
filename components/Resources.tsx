const RESOURCES = [
  {
    icon: '🔗',
    title: 'Your Affiliate Link',
    desc: 'Get your unique referral link from the Kajabi partner dashboard. Goes live May 18 at 6 AM PST. Remember: your link gives customers 12 months at 50% off — the best deal available.',
    cta: 'Go to Partner Dashboard',
    href: 'https://kajabi.com/partner',
    note: null,
    color: 'border-[rgba(58,98,120,0.3)] bg-[rgba(58,98,120,0.06)]',
    ctaColor: 'text-[#3A6278] hover:text-[#5A8FAA]',
  },
  {
    icon: '📋',
    title: 'Messaging & Swipe Copy',
    desc: 'Full messaging guide, campaign positioning, FTC disclosure requirements, and ready-to-send email + social copy for all four product angles: 50% Off, Backstage, Amplify, and Cofounder.',
    cta: 'Open Messaging Hub',
    href: '/messaging-hub.html',
    note: null,
    color: 'border-[rgba(64,91,80,0.3)] bg-[rgba(64,91,80,0.06)]',
    ctaColor: 'text-[#405B50] hover:text-[#5A8070]',
  },
  {
    icon: '❓',
    title: 'Partner FAQ',
    desc: 'Commission structure, eligibility rules, leaderboard rules, sign-up tracking, and prize fulfillment answers. Everything you need before the first send.',
    cta: 'Read FAQ',
    href: '#',
    note: null,
    color: 'border-white/[0.08] bg-white/[0.03]',
    ctaColor: 'text-white/60 hover:text-white/85',
  },
  {
    icon: '📦',
    title: 'Asset Kit',
    desc: 'Email and social copy templates, static graphics in all aspect ratios, and the campaign messaging brief.',
    cta: 'Access Assets',
    href: '#',
    note: 'Available May 7',
    color: 'border-white/[0.08] bg-white/[0.03]',
    ctaColor: 'text-white/60 hover:text-white/85',
  },
]

export default function Resources() {
  return (
    <div id="resources" className="section-card">
      <div className="section-head">
        <div>
          <h2 className="text-[17px] font-extrabold tracking-tight">Resources</h2>
          <p className="text-[12px] text-white/55 mt-1">Everything you need to promote the May 2026 promo.</p>
        </div>
        <span className="text-[11px] font-bold text-white/30 tracking-widest uppercase shrink-0 pt-0.5">Resources</span>
      </div>

      <div className="section-body p-7">
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          {RESOURCES.map(({ icon, title, desc, cta, href, note, color, ctaColor }) => (
            <div key={title} className={`border rounded-[8px] p-5 flex flex-col gap-3 ${color}`}>
              <span className="text-2xl">{icon}</span>
              <div className="flex-1">
                <h3 className="text-[13px] font-bold text-white mb-1">{title}</h3>
                <p className="text-[12px] text-white/50 leading-relaxed">{desc}</p>
              </div>
              <div>
                {note ? (
                  <span className="text-[11px] text-white/30 font-medium">{note}</span>
                ) : (
                  <a
                    href={href}
                    target={href.startsWith('http') || href.endsWith('.html') ? '_blank' : undefined}
                    rel={href.startsWith('http') || href.endsWith('.html') ? 'noopener noreferrer' : undefined}
                    className={`text-[13px] font-bold transition-opacity ${ctaColor}`}
                  >
                    {cta} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="border border-white/[0.08] rounded-[8px] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.03]">
          <div>
            <p className="text-[13px] font-bold text-white">Questions about the promo?</p>
            <p className="text-[12px] text-white/50 mt-0.5">Reach out to Courtney or Janessa directly.</p>
          </div>
          <a
            href="mailto:partners@kajabi.com"
            className="shrink-0 px-5 py-2.5 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white font-bold text-[13px] rounded-[8px] transition-colors"
          >
            Contact Partner Team
          </a>
        </div>
      </div>
    </div>
  )
}
