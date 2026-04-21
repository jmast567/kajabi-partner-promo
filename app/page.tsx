import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import Prizes        from '@/components/Prizes'
import Leaderboard   from '@/components/Leaderboard'
import CommissionCalc from '@/components/CommissionCalc'
import Messaging     from '@/components/Messaging'
import FAQ           from '@/components/FAQ'
import Resources     from '@/components/Resources'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-[860px] mx-auto px-6 py-10 pb-20">
        <Hero />
        <Prizes />
        <Leaderboard />
        <CommissionCalc />
        <Messaging />
        <FAQ />
        <Resources />
        <Footer />
      </main>
    </>
  )
}
