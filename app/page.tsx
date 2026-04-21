import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import OfferDetails from '@/components/OfferDetails'
import Timeline from '@/components/Timeline'
import Prizes from '@/components/Prizes'
import Leaderboard from '@/components/Leaderboard'
import CommissionCalc from '@/components/CommissionCalc'
import Resources from '@/components/Resources'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OfferDetails />
        <Timeline />
        <Prizes />
        <Leaderboard />
        <CommissionCalc />
        <Resources />
      </main>
      <Footer />
    </>
  )
}
