'use client'

import { useState } from 'react'

const PRODUCTS = [
  {
    name: 'Backstage',
    color: 'border-[rgba(64,91,80,0.35)] bg-[rgba(64,91,80,0.07)]',
    accent: 'text-[#5A8070]',
    badge: 'bg-[rgba(64,91,80,0.15)] text-[#5A8070] border-[rgba(64,91,80,0.3)]',
    what: 'A Kajabi add-on built for experts who offer premium, high-ticket services. 1:1 coaching, small group consulting, and structured client delivery — all inside Kajabi alongside existing courses and memberships.',
    who: 'Coaches and consultants delivering high-ticket work outside of Kajabi. Anyone juggling Kajabi for digital products and a separate system for their services.',
    problem: 'Most coaches use Kajabi for courses but move client delivery to a separate tool. Backstage brings it all together — one place to run the business, one experience for the client.',
    angles: [
      'For coaches: "Your courses and your coaching used to live in different places. Now they don\'t."',
      'For consultants: "Stop running your client delivery out of your inbox. Backstage gives you a real system."',
      'For anyone moving upmarket: "You have the expertise. Backstage gives you the infrastructure."',
    ],
  },
  {
    name: 'Amplify',
    color: 'border-[rgba(58,98,120,0.35)] bg-[rgba(58,98,120,0.07)]',
    accent: 'text-[#4A8FAA]',
    badge: 'bg-[rgba(58,98,120,0.15)] text-[#4A8FAA] border-[rgba(58,98,120,0.3)]',
    what: 'An email-based ad network built directly into Kajabi. Creators promote each other\'s offers to their own email lists. Built-in distribution. No paid ads budget required.',
    who: 'Creators and educators who want to grow their audience without spending on ads. Anyone building an email list who wants to reach new audiences without managing paid campaigns.',
    problem: 'Getting new subscribers is expensive. Amplify creates a network effect — Kajabi creators help each other grow by promoting relevant offers to their existing lists.',
    angles: [
      'For creators without an ad budget: "Growth doesn\'t have to mean paid ads. Amplify is Kajabi\'s answer to that."',
      'For email list builders: "Reach more people through the Kajabi network. They\'re already interested in what you do."',
      'For anyone tired of paid ads: "There\'s a better way to grow. It\'s built into Kajabi."',
    ],
  },
  {
    name: 'Cofounder',
    color: 'border-[rgba(82,64,91,0.35)] bg-[rgba(82,64,91,0.07)]',
    accent: 'text-[#8B6FA3]',
    badge: 'bg-[rgba(82,64,91,0.15)] text-[#8B6FA3] border-[rgba(82,64,91,0.3)]',
    what: "Kajabi's AI business partner, built into every account. The upgrade makes it more proactive — instead of waiting for you to ask, it starts managing tasks, taking action, and running parts of your business automatically.",
    who: 'Every Kajabi customer. Especially anyone who feels like they spend more time running their business than doing the work they\'re good at.',
    problem: 'Most AI tools just answer questions. Cofounder builds alongside you. The update makes it more capable of taking things off your plate so you can focus on what makes your business worth building.',
    angles: [
      'For anyone overwhelmed: "Your business has an AI cofounder now. This update makes it even better at running things for you."',
      'For new customers: "You\'re not starting from scratch. Cofounder knows what to do next."',
      'For existing customers: "The Cofounder you already have just got a lot smarter."',
    ],
  },
]

const AUDIENCE_FRAMES = [
  {
    type: 'Coaches',
    lead: 'Lead with Backstage.',
    pitch: 'Kajabi now handles your full business: digital products, high-ticket delivery, and day-to-day operations. Then layer in the 50% off offer and Cofounder.',
  },
  {
    type: 'Course creators & educators',
    lead: 'Lead with the 50% off and the platform story.',
    pitch: 'Layer in Amplify for growth and Cofounder for efficiency. Everything you need in one place, at half the price to start.',
  },
  {
    type: 'Service providers & consultants',
    lead: 'Lead with Backstage.',
    pitch: 'Stop delivering client work out of a patchwork of tools. Kajabi has a real system for it now.',
  },
  {
    type: 'Beginners / considering starting',
    lead: 'Lead with the offer.',
    pitch: '50% off to start on a full-stack platform is a compelling entry point. Keep product details light. Focus on what\'s possible rather than feature names.',
  },
]

export default function Messaging() {
  const [openProduct, setOpenProduct] = useState<string | null>(null)

  return (
    <div id="messaging" className="section-card">
      <div className="section-head">
        <div>
          <h2 className="text-[20px] font-extrabold tracking-tight">Messaging & Positioning</h2>
          <p className="text-[13px] text-white/55 mt-1">Campaign frame, product angles, and audience guidance for May 2026.</p>
        </div>
        <span className="text-[11px] font-bold text-white/30 tracking-widest uppercase shrink-0 pt-0.5">Messaging</span>
      </div>

      <div className="section-body p-7 space-y-8">

        {/* Campaign frame */}
        <div>
          <SectionLabel>The Campaign Frame</SectionLabel>
          <div className="bg-[rgba(214,161,81,0.06)] border border-[rgba(214,161,81,0.2)] rounded-[8px] p-5 mb-4">
            <p className="text-[15px] font-extrabold text-white tracking-tight mb-2">"If you don't know X, you don't know Kajabi."</p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Kajabi has expanded in ways most people don't realize yet. Backstage. Amplify. A smarter Cofounder. These aren't small updates — they change what's possible for experts building businesses on the platform. Use this frame to create a sense of discovery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              '"If you don\'t know Backstage, you don\'t know what Kajabi can do for coaches."',
              '"If you don\'t know Amplify, you don\'t know how Kajabi helps you grow without paid ads."',
              '"If you don\'t know the new Cofounder, you don\'t know how much of your business it can run."',
              '"If you don\'t know Kajabi\'s May promo, you need to."',
            ].map(line => (
              <div key={line} className="bg-white/[0.03] border border-white/[0.07] rounded-[8px] px-4 py-3 text-[12.5px] text-white/65 italic leading-snug">{line}</div>
            ))}
          </div>
        </div>

        {/* Offer positioning */}
        <div>
          <SectionLabel>The Offer — What to Say</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-[rgba(64,91,80,0.06)] border border-[rgba(64,91,80,0.2)] rounded-[8px] p-4">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A8070] mb-3">Emphasize</p>
              {[
                'Full-platform access at half the price',
                'No guessing which tools to use — everything works together',
                'This is the moment to start. Not next month, not when the time feels right.',
                'Your link gives customers 12 months at 50% off — twice as long as any other channel',
              ].map(p => (
                <div key={p} className="flex items-start gap-2 mb-2 last:mb-0">
                  <span className="text-[#5A8070] mt-0.5 shrink-0">✓</span>
                  <p className="text-[13px] text-white/70 leading-snug">{p}</p>
                </div>
              ))}
            </div>
            <div className="bg-[rgba(173,113,92,0.06)] border border-[rgba(173,113,92,0.2)] rounded-[8px] p-4">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#AD715C] mb-3">Avoid</p>
              {[
                'Don\'t make it sound temporary or desperate. The discount is generous, not a fire sale.',
                'Don\'t oversell features. Sell what\'s possible for your specific audience.',
                'Don\'t promise specific revenue outcomes.',
                '"Game-changing," "revolutionary," "all-in-one solution," or other hype language.',
              ].map(p => (
                <div key={p} className="flex items-start gap-2 mb-2 last:mb-0">
                  <span className="text-[#AD715C] mt-0.5 shrink-0">✗</span>
                  <p className="text-[13px] text-white/70 leading-snug">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product positioning */}
        <div>
          <SectionLabel>Product Positioning — New Launches</SectionLabel>
          <div className="space-y-2">
            {PRODUCTS.map(({ name, color, accent, badge, what, who, problem, angles }) => {
              const isOpen = openProduct === name
              return (
                <div key={name} className={`border rounded-[8px] overflow-hidden ${color}`}>
                  <button
                    onClick={() => setOpenProduct(isOpen ? null : name)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${badge}`}>{name}</span>
                      <span className="text-[13px] font-semibold text-white/75">{what.slice(0, 60)}…</span>
                    </div>
                    <span className={`text-[18px] font-bold shrink-0 ml-3 transition-transform ${isOpen ? 'rotate-45' : ''} ${accent}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 space-y-4 border-t border-white/[0.06] pt-4">
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1.5">What it is</p>
                          <p className="text-[13px] text-white/70 leading-relaxed">{what}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1.5">Who it's for</p>
                          <p className="text-[13px] text-white/70 leading-relaxed">{who}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1.5">Problem it solves</p>
                          <p className="text-[13px] text-white/70 leading-relaxed">{problem}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2">Positioning angles</p>
                        <div className="space-y-1.5">
                          {angles.map(a => (
                            <div key={a} className="bg-white/[0.03] border border-white/[0.06] rounded-[6px] px-3.5 py-2.5 text-[12.5px] text-white/65 italic">{a}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Audience framing */}
        <div>
          <SectionLabel>Audience Framing by Type</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-2">
            {AUDIENCE_FRAMES.map(({ type, lead, pitch }) => (
              <div key={type} className="bg-white/[0.03] border border-white/[0.07] rounded-[8px] p-4">
                <p className="text-[12px] font-bold text-white mb-0.5">{type}</p>
                <p className="text-[12px] text-[#D6A151] font-semibold mb-1">{lead}</p>
                <p className="text-[12px] text-white/55 leading-relaxed">{pitch}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tone */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-[8px] p-5">
          <p className="text-[11px] font-bold tracking-widest uppercase text-white/30 mb-3">Tone & Voice</p>
          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { word: 'Direct', note: 'Say what you mean. Skip the setup.' },
              { word: 'Confident', note: "You've used Kajabi. You believe in it. Let that come through." },
              { word: 'Human', note: "Don't write copy that sounds like it came from a marketing deck." },
              { word: 'Outcome-first', note: 'What can your audience build? Start there.' },
            ].map(({ word, note }) => (
              <div key={word}>
                <p className="text-[13px] font-bold text-white mb-0.5">{word}</p>
                <p className="text-[12px] text-white/50 leading-snug">{note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-bold tracking-widest uppercase text-white/30 mb-3 pb-2 border-b border-white/[0.08]">
      {children}
    </div>
  )
}
