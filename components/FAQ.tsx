'use client'

import { useState } from 'react'

const FAQS = [
  {
    category: 'The Offer',
    items: [
      {
        q: 'Who is eligible for the 50% discount?',
        a: 'New customers and churned customers only. The promo runs May 18 – June 2, 2026 (extended close June 5). 30-day trial and 3-for-$99 options remain available and are not replaced by the campaign.',
      },
      {
        q: 'How long does the discount last for customers referred through my affiliate link?',
        a: 'Customers who sign up through your affiliate link get 50% off for 12 months. All other Kajabi channels (ads, email, etc.) only offer 6 months. Your link is the best deal available anywhere — and it means your commission runs twice as long.',
      },
      {
        q: 'When does my affiliate link go live?',
        a: 'Your link goes live on May 18 at 6:00 AM PST — 24 hours before the sitewide public launch on May 19. This is your exclusive early access window. The leaderboard Championship competition begins the moment your link goes live.',
      },
      {
        q: 'Does the extension affect my commissions?',
        a: 'Yes — the cart extends through June 5 at 11:59 PM PST. Any sign-up through your link during that window still earns you commission. The Championship leaderboard locks at June 2, but dedicated bonus prizes cover the June 2–5 extension window.',
      },
    ],
  },
  {
    category: 'Commission & Tracking',
    items: [
      {
        q: 'How much do I earn per sign-up?',
        a: 'You earn recurring commission on what the customer actually pays — on the promo price, for 12 months. Commission rate varies by partner tier. At the 30% rate: Basic plan $26.85/mo per sign-up ($322/yr) · Growth plan $37.85/mo ($454/yr) · Pro plan $74.85/mo ($898/yr). Check your partner dashboard for your specific rate. Commissions continue as long as referred customers remain active on Kajabi.',
      },
      {
        q: 'What counts as a sign-up (GSA)?',
        a: 'A GSA (Gross Subscriber Acquisition) is an active, paying subscriber — a customer who activates a paid Kajabi plan through your referral link. Sign-ups only count if they convert to a paid plan within the contest window.',
      },
      {
        q: 'When are leaderboard standings updated?',
        a: 'Leaderboard standings are posted every Friday on this partner landing page. The live leaderboard also updates in real time as data comes in from Kajabi\'s referral attribution system.',
      },
      {
        q: 'How are final GSA counts verified?',
        a: "Final GSA counts are verified against Kajabi's referral attribution data. Leaderboard winners are notified within 10 business days of the June 2 close. Milestone winners are notified on a rolling basis as thresholds are hit.",
      },
    ],
  },
  {
    category: 'Leaderboard & Prize Eligibility',
    items: [
      {
        q: 'What is the minimum to appear on the public leaderboard?',
        a: 'Partners need a minimum of 25 GSAs to appear on the public leaderboard. This matches the Tier 1 #5 floor (The Cold Plunge). If you rank in the top 20 but haven\'t hit your prize tier\'s minimum, the prize rolls to the next qualifier.',
      },
      {
        q: 'Can I win both a leaderboard prize and a milestone prize?',
        a: 'Yes. Leaderboard prizes (Tier 1 and Tier 2) and milestone prizes (Tier 3) are not mutually exclusive. You can qualify for both simultaneously. Bonus & Wildcard Awards stack on top of everything — a partner can win a Tier 1 prize AND a Bonus Award at the same time.',
      },
      {
        q: 'What are the GSA minimums for each leaderboard prize?',
        a: '#1 Tesla Model Y: 150 GSAs · #2 Dream Trip for 2: 100 GSAs · #3 Sanctuary Sauna: 75 GSAs · #4 Café Setup: 50 GSAs · #5 Cold Plunge: 25 GSAs · #6–10 MacBook Pro: 10 GSAs · #11–15 MacBook Air: 8 GSAs · #16–20 iPad Pro: 5 GSAs. If a partner holds rank but hasn\'t hit the floor, the prize rolls to the next qualifier.',
      },
      {
        q: 'When does the leaderboard lock?',
        a: 'Tier 1 and Tier 2 rankings lock at June 2 at 11:59 PM PST. The June 2–5 extension window has its own dedicated bonus prizes but does not count toward Tier 1–3 leaderboard ranking. Winners are notified within 10 business days of close.',
      },
      {
        q: 'How do Tier 3 milestone prizes work?',
        a: 'Tier 3 prizes are first-come, first-served. The first partner to hit each GSA threshold claims a prize — once the winner cap is reached, that tier closes. Thresholds: 5 GSAs (Apple Store Gift Card, up to 40 winners) · 10 GSAs (AirPods Pro, up to 20 winners) · 15 GSAs (Apple Watch Series 10, up to 25 winners) · 25 GSAs (AirPods Max, up to 30 winners).',
      },
      {
        q: 'Do Hero and non-Hero partners compete on the same leaderboard?',
        a: 'Yes. All active Kajabi partners — Hero and non-Hero — are eligible for leaderboard, milestone, and bonus prizes. Everyone competes on the same leaderboard.',
      },
    ],
  },
  {
    category: 'Bonus & Wildcard Awards',
    items: [
      {
        q: 'What is the Cart Open Bonus?',
        a: 'The Cart Open Bonus rewards the top 3 partners by GSA count during the May 18 exclusive 24-hour affiliate window. 1st: $3,000 cash · 2nd: $2,000 cash · 3rd: $1,000 cash. This is separate from the leaderboard and stacks on top of any Tier 1–3 prize.',
      },
      {
        q: 'What is the Most Improved Award?',
        a: 'Biggest percentage GSA lift versus your own prior 3-week baseline. Tiered — rewards growth at any volume level, not just top performers. 3 winners: 1st $3,000 · 2nd $2,000 · 3rd $1,000. Evaluated at June 2 close.',
      },
      {
        q: 'How do I enter the Most Creative Promo award?',
        a: 'Submit your best single piece of promotional content — email, social post, video, any format — to partners@kajabi.com by June 2. Judged by the Kajabi partner team on creativity, brand representation, and audience fit. 3 winners: 1st $3,000 · 2nd $2,000 · 3rd $1,000.',
      },
    ],
  },
  {
    category: 'Promoting & Compliance',
    items: [
      {
        q: 'Are there FTC disclosure requirements?',
        a: 'Yes. As an affiliate, you must clearly disclose that you earn a commission when someone signs up through your link. A simple disclosure like "I may earn a commission if you sign up through my link" is required in emails, social posts, and any promotional content.',
      },
      {
        q: 'Where do I find my affiliate link?',
        a: 'Your affiliate link is available in the Kajabi partner dashboard at kajabi.com/partner. Your link goes live on May 18 at 6 AM PST. Make sure you\'re using your unique referral link — not the generic Kajabi homepage URL.',
      },
      {
        q: 'Can I promote before May 18?',
        a: 'You can warm up your audience and build anticipation, but do not share specific promo details, discount amounts, or exact product information until you receive official notification. The cart is officially embargoed until May 18 at 6 AM PST.',
      },
    ],
  },
]

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <div id="faq" className="section-card">
      <div className="section-head">
        <div>
          <h2 className="text-[20px] font-extrabold tracking-tight">Partner FAQ</h2>
          <p className="text-[13px] text-white/55 mt-1">Commission structure, eligibility, leaderboard rules, and prize fulfillment.</p>
        </div>
        <span className="text-[11px] font-bold text-white/30 tracking-widest uppercase shrink-0 pt-0.5">FAQ</span>
      </div>

      <div className="section-body p-7 space-y-6">
        {FAQS.map(({ category, items }) => (
          <div key={category}>
            <div className="text-[11px] font-bold tracking-widest uppercase text-white/30 mb-3 pb-2 border-b border-white/[0.08]">
              {category}
            </div>
            <div className="space-y-1.5">
              {items.map(({ q, a }) => {
                const key = category + q
                const isOpen = openKey === key
                return (
                  <div key={q} className={`border rounded-[8px] overflow-hidden transition-colors ${isOpen ? 'border-white/[0.12] bg-white/[0.04]' : 'border-white/[0.07] bg-white/[0.02]'}`}>
                    <button
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="w-full flex items-start justify-between px-5 py-3.5 text-left gap-4"
                    >
                      <span className="text-[14px] font-semibold text-white leading-snug">{q}</span>
                      <span className={`text-[18px] font-bold shrink-0 mt-0.5 transition-transform text-[#D6A151] ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-[13.5px] text-white/65 leading-relaxed border-t border-white/[0.06] pt-3">
                        {a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
