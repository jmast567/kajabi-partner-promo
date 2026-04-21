'use client'
import dynamic from 'next/dynamic'

const PartnerChat = dynamic(() => import('./PartnerChat'), { ssr: false })

export default function PartnerChatLoader() {
  return <PartnerChat />
}
