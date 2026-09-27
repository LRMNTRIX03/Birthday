import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function CakeBirthday() {
  const [isLit, setIsLit] = useState(true)

  const shavings = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        left: `${8 + i * 9}%`,
        rotate: (i * 37) % 360,
      })),
    []
  )

  return (
    <div className="min-h-screen bg-[#F6F3EC] pt-28 pb-20 px-8 flex flex-col items-center">
      <div className="w-full max-w-2xl mb-10">
        <Link
          to="/"
          className="text-sm text-[#8B8579] hover:text-[#171512] transition-colors font-[Inter]"
        >
          ← Kembali ke Home
        </Link>
      </div>

      <p className="text-xs tracking-[0.2em] text-[#A98F5D] font-[Inter] mb-3">
        Buat Satu Permintaan
      </p>
      <h1 className="font-[Playfair_Display] italic text-3xl sm:text-4xl text-[#171512] text-center mb-16">
        Selamat Ulang Tahun, Sayang
      </h1>

      <div className="relative w-80 h-[26rem] flex flex-col items-center">
        {/* lilin */}
        <div className="flex flex-col items-center relative z-20">
          <AnimatePresence>
            {isLit && (
              <motion.div
                className="w-5 h-9 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, #FDF4DC 0%, #A98F5D 55%, #6E5A34 100%)",
                  filter: "drop-shadow(0 0 8px rgba(169,143,93,0.55))",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, -4, 0] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isLit && (
              <motion.div
                className="absolute -top-6 text-3xl text-[#8B8579]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 0], y: [-10, -30] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💨
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-3.5 h-16 bg-[#A98F5D] rounded-sm shadow-sm" />
        </div>

        {/* lapisan atas: cream dengan cherry & serutan cokelat */}
        <div className="mt-3 w-48 h-24 bg-[#FBFAF6] rounded-t-sm border border-[#DDD6C7] shadow-sm relative z-10 overflow-hidden">
          <div className="w-full h-full flex flex-wrap content-start justify-center gap-2 pt-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #6B3B44, #3B2229)",
                }}
              />
            ))}
          </div>
          {shavings.map((s, i) => (
            <div
              key={i}
              className="absolute w-4 h-1.5 bg-[#3B392F] rounded-full opacity-60"
              style={{ left: s.left, bottom: "6px", transform: `rotate(${s.rotate}deg)` }}
            />
          ))}
        </div>

        {/* seam & lapisan tengah */}
        <div className="w-64 h-6 bg-[#FBFAF6] relative -top-1 z-[9] border-x border-[#171512]" />
        <div className="w-64 h-16 bg-[#2B2822] relative -top-1 z-[9] border-x border-[#171512] shadow-inner" />

        {/* lapisan dasar */}
        <div className="w-80 h-40 bg-[#171512] rounded-b-sm border border-[#171512] shadow-xl relative -top-2 z-[8] overflow-hidden">
          <div className="w-full h-7 bg-[#FBFAF6] flex justify-center items-center gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #6B3B44, #3B2229)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsLit(!isLit)}
        className="mt-14 px-10 py-3 border border-[#171512] text-[#171512] text-base tracking-[0.05em] font-[Inter] hover:bg-[#171512] hover:text-[#F6F3EC] transition-colors"
      >
        {isLit ? "Tiup Lilin" : "Nyalakan Lilin"}
      </button>
    </div>
  )
}