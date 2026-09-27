import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-8 sm:px-16 py-5 bg-[#F6F3EC]/90 backdrop-blur-sm border-b border-[#DDD6C7]">
      <Link
        to="/"
        className="font-[Playfair_Display] text-lg text-[#171512] tracking-wide"
      >
        Syamira My Babe
      </Link>
      <span className="text-xs tracking-[0.2em] text-[#8B8579] font-[Inter] hidden sm:block">
        23 Tahun
      </span>
    </div>
  )
}