export interface LeaderboardEntry {
  id: string
  rank: number
  partner_name: string
  gsas: number
  prize_name: string | null
  tier: 'elite' | 'mid_field' | 'milestone'
  updated_at: string
}

export type CartStatus = 'pre_affiliate' | 'affiliate_only' | 'live' | 'extended' | 'closed'

export function getCartStatus(): CartStatus {
  const now = new Date()
  const affiliateOpen = new Date('2026-05-18T06:00:00-07:00')
  const sitewideOpen = new Date('2026-05-19T00:00:00-07:00')
  const phase1Close = new Date('2026-06-02T23:59:00-07:00')
  const extension = new Date('2026-06-03T06:00:00-07:00')
  const finalClose = new Date('2026-06-05T23:59:00-07:00')

  if (now < affiliateOpen) return 'pre_affiliate'
  if (now >= affiliateOpen && now < sitewideOpen) return 'affiliate_only'
  if (now >= sitewideOpen && now < phase1Close) return 'live'
  if (now >= extension && now < finalClose) return 'extended'
  return 'closed'
}
