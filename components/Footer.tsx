export default function Footer() {
  return (
    <footer className="section-divider py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">Kajabi Partner Championship</p>
          <p className="text-white/30 text-sm mt-0.5">May 18 – June 5, 2026 · Confidential</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/30">
          <a href="#prizes" className="hover:text-white/60 transition-colors">Prizes</a>
          <a href="#leaderboard" className="hover:text-white/60 transition-colors">Leaderboard</a>
          <span>© 2026 Kajabi</span>
        </div>
      </div>
    </footer>
  )
}
