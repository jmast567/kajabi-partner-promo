import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PartnerChatLoader from '@/components/PartnerChatLoader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'May 2026 Partner Promo — Kajabi',
  description: '50% off Kajabi for 12 months. $250,000 in prizes. Affiliate early access May 18.',
  robots: 'noindex, nofollow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <PartnerChatLoader />
      </body>
    </html>
  )
}
