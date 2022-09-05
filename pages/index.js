import Bio from "../components/Bio"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Header />
      <Bio />
      <Portfolio />
    </div>

  )
}
