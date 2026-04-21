'use client'

import { useState } from 'react'

const PLANS = [
  { name: 'Basic',  promoPrice: 89.50,  partnerRate: 0.30 },
  { name: 'Growth', promoPrice: 124.50, partnerRate: 0.30 },
  { name: 'Pro',    promoPrice: 249.50, partnerRate: 0.30 },
]

export default function CommissionCalc() {
  const [gsas, setGsas] = useState(10)
  const [planIdx, setPlanIdx] = useState(0)

  const plan = PLANS[planIdx]
  const monthly = gsas * plan.promoPrice * plan.partnerRate
  const annual = monthly * 12

  return (
    <section className="section-divider py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-widest font-medium mb-3">Commission Math</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">What You'll Earn</h2>
          <p className="text-white/40 mt-3">30% of what the customer actually pays. On the promo price.</p>
        </div>

        <div className="card-surface p-8 space-y-8">
          {/* Plan selector */}
          <div className="space-y-3">
            <label className="text-white/50 text-sm">Plan type</label>
            <div className="grid grid-cols-3 gap-2">
              {PLANS.map(({ name }, i) => (
                <button
                  key={name}
                  onClick={() => setPlanIdx(i)}
                  className={`py-3 rounded-lg text-sm font-semibold transition-colors border ${
                    planIdx === i
                      ? 'bg-gold-500/20 border-gold-500/50 text-gold-400'
                      : 'bg-surface-700 border-white/[0.08] text-white/50 hover:text-white/70'
                  }`}
                >
                  {name}
                  <span className="block text-xs mt-0.5 font-normal opacity-60">
                    ${PLANS[i].promoPrice}/mo
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* GSA slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-white/50 text-sm">GSAs driven</label>
              <span className="text-white font-bold text-lg tabular-nums">{gsas}</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              value={gsas}
              onChange={e => setGsas(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2 rounded-full appearance-none bg-surface-600"
            />
            <div className="flex justify-between text-white/20 text-xs">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>

          {/* Output */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-surface-700 rounded-xl p-6 text-center">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Monthly earnings</p>
              <p className="text-4xl font-bold text-gradient-gold">
                ${monthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-white/25 text-xs mt-1">
                {gsas} × ${plan.promoPrice} × 30%
              </p>
            </div>
            <div className="bg-surface-700 rounded-xl p-6 text-center">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Annual earnings</p>
              <p className="text-4xl font-bold text-white">
                ${annual.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-white/25 text-xs mt-1">If all {gsas} stay active 12 months</p>
            </div>
          </div>

          {/* Quick reference */}
          <div className="border-t border-white/[0.06] pt-6">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Quick reference — {plan.name} plan</p>
            <div className="grid grid-cols-3 gap-3">
              {[10, 25, 50].map(n => (
                <button
                  key={n}
                  onClick={() => setGsas(n)}
                  className="text-center p-3 rounded-lg bg-surface-700 hover:bg-surface-600 transition-colors cursor-pointer"
                >
                  <p className="text-white/60 text-xs">{n} GSAs</p>
                  <p className="text-white font-semibold text-sm mt-0.5">
                    ${(n * plan.promoPrice * 0.30).toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
