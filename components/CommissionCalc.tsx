'use client'

import { useState } from 'react'

const PLANS = [
  { name: 'Basic',  promoPrice: 89.50  },
  { name: 'Growth', promoPrice: 124.50 },
  { name: 'Pro',    promoPrice: 249.50 },
]

function fmt(n: number) { return n.toLocaleString('en-US', { maximumFractionDigits: 0 }) }

export default function CommissionCalc() {
  const [signups, setSignups] = useState(10)
  const [planIdx, setPlanIdx] = useState(0)

  const plan    = PLANS[planIdx]
  const rate    = 0.30
  const monthly = signups * plan.promoPrice * rate
  const annual  = monthly * 12

  return (
    <div id="calc" className="section-card">
      <div className="section-head">
        <div>
          <h2 className="text-[17px] font-extrabold tracking-tight">Earnings Calculator</h2>
          <p className="text-[12px] text-white/55 mt-1">
            Earn recurring commission on every customer you refer — on the promo price — for 12 months.
          </p>
        </div>
        <span className="text-[11px] font-bold text-white/30 tracking-widest uppercase shrink-0 pt-0.5">Earnings</span>
      </div>

      <div className="section-body p-7 space-y-6">

        {/* Plan selector */}
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2.5">Kajabi plan</div>
          <div className="grid grid-cols-3 gap-2">
            {PLANS.map(({ name, promoPrice }, i) => (
              <button
                key={name}
                onClick={() => setPlanIdx(i)}
                className={`py-3 rounded-[8px] text-sm font-semibold border transition-colors ${
                  planIdx === i
                    ? 'bg-[rgba(214,161,81,0.10)] border-[#D6A151]/60 text-white'
                    : 'bg-white/[0.04] border-white/[0.08] text-white/50 hover:text-white/80'
                }`}
              >
                {name}
                <span className="block text-[11px] mt-0.5 font-normal opacity-70">
                  ${promoPrice}/mo
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Sign-ups driven</span>
            <span className="text-[17px] font-extrabold text-white tabular-nums">{signups}</span>
          </div>
          <input
            type="range"
            min={1}
            max={200}
            value={signups}
            onChange={e => setSignups(Number(e.target.value))}
            className="w-full cursor-pointer h-1.5 rounded-full appearance-none bg-white/10 accent-[#D6A151]"
          />
          <div className="flex justify-between text-[11px] text-white/25 mt-1.5 font-medium">
            <span>1</span><span>50</span><span>100</span><span>150</span><span>200</span>
          </div>
        </div>

        {/* Output cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-[#D6A151]/25 rounded-[8px] p-5 text-center" style={{ background: 'linear-gradient(135deg, rgba(214,161,81,0.10) 0%, rgba(214,161,81,0.03) 100%)' }}>
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#D6A151]/60 mb-2">Monthly earnings</div>
            <div className="text-[36px] font-black text-[#D6A151] tracking-tight leading-none">${fmt(monthly)}</div>
            <div className="text-[11px] text-white/40 mt-1.5">{signups} × ${plan.promoPrice} × up to 30%</div>
          </div>
          <div className="border border-white/[0.12] rounded-[8px] p-5 text-center" style={{ background: 'linear-gradient(135deg, #191919 0%, #111111 100%)' }}>
            <div className="text-[10px] font-bold tracking-widest uppercase text-white/35 mb-2">First-year total</div>
            <div className="text-[36px] font-black text-white tracking-tight leading-none">${fmt(annual)}</div>
            <div className="text-[11px] text-white/40 mt-1.5">12 months locked at promo rate</div>
          </div>
        </div>

        {/* 12-month advantage callout */}
        <div className="bg-[rgba(64,91,80,0.08)] border border-[rgba(64,91,80,0.25)] rounded-[8px] px-4 py-3 text-[12.5px] text-[#405B50] leading-relaxed">
          <strong className="text-[#5A8070]">Your 12-month advantage:</strong> Customers signed up through your affiliate link stay on the 50% discount for a full year. Other Kajabi channels only lock in 6 months. That means your recurring commission runs twice as long.
        </div>

        {/* Quick reference */}
        <div className="border-t border-white/[0.08] pt-5">
          <div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-3">Quick reference — {plan.name} plan</div>
          <div className="grid grid-cols-3 gap-2">
            {[10, 25, 50].map(n => (
              <button
                key={n}
                onClick={() => setSignups(n)}
                className="border border-white/[0.08] rounded-[8px] p-3 text-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <div className="text-[11px] text-white/45 font-medium">{n} sign-ups</div>
                <div className="text-[13px] font-bold text-white mt-0.5">
                  ${fmt(n * plan.promoPrice * rate)}/mo
                </div>
                <div className="text-[10.5px] text-white/30 mt-0.5">
                  ${fmt(n * plan.promoPrice * rate * 12)}/yr
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
