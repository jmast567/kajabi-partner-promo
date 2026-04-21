export default function OfferDetails() {
  return (
    <section className="section-divider py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm uppercase tracking-widest font-medium mb-3">The Offer</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Everything you need to promote</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: '⚡',
              title: '50% Off All Plans',
              desc: 'Monthly and annual plans — 50% off for new and churned customers sitewide.',
            },
            {
              icon: '🎯',
              title: 'Affiliate Early Access',
              desc: 'Partners get a 24-hour exclusive window starting May 18 at 6 AM PST before the public.',
            },
            {
              icon: '🔄',
              title: '30-Day Trial Still Available',
              desc: 'The 30-day trial and 3-for-$99 options remain available. Don\'t redirect away from them.',
            },
            {
              icon: '👥',
              title: 'New & Churned Only',
              desc: 'Offer applies to new customers and previously churned accounts — not existing active subscribers.',
            },
            {
              icon: '📅',
              title: 'May 18 – June 5',
              desc: 'Phase 1 marketed close June 2. "By popular demand" extension through June 5 final close.',
            },
            {
              icon: '💰',
              title: '30% Commission',
              desc: 'You earn 30% of what the customer actually pays. On the promo price, not the standard price.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card-surface p-6 space-y-3 hover:border-white/[0.12] transition-colors">
              <span className="text-2xl">{icon}</span>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
