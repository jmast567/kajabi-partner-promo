import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import PartnerChatLoader from '@/components/PartnerChatLoader'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'May 2026 Partner Promo — Kajabi',
  description: '50% off Kajabi for 12 months. $250,000 in prizes. Affiliate early access May 18.',
  robots: 'noindex, nofollow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        {children}
        <PartnerChatLoader />
      </body>
    </html>
  )
}
