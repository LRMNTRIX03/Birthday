import './App.css'
import Navbar from './components/Navbar'
import Marquee from 'react-fast-marquee'
import { Gift, Mail, Cake, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Collection from './pages/Collection'
import Letter from './pages/Letter'
import CakeBirthday from './pages/CakeBirthday'

function App() {
  const [songs] = useState([
    { name: "500 Miles", src: "/assets/music/500_mill.mp3" },
    { name: "Happy Birthday", src: "/assets/music/birthday.mp3" },
    { name: "Dandelions", src: "/assets/music/dandelions.mp3" },
  ])
  const [currentSong, setCurrentSong] = useState(songs[0].src)
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay dicegah browser:", err)
      })
    }
  }, [currentSong])

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(audioRef.current.muted)
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#171512]">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Audio global */}
      <audio ref={audioRef} src={currentSong} autoPlay loop />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              songs={songs}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              isMuted={isMuted}
              handleMute={handleMute}
            />
          }
        />
        <Route path="/collection" element={<Collection />} />
        <Route path="/surat" element={<Letter />} />
        <Route path="/kue" element={<CakeBirthday />} />
      </Routes>
    </div>
  )
}

// Halaman utama
function Home({ songs, currentSong, setCurrentSong, isMuted, handleMute }) {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/assets/img/syamira/main.jpeg"
          alt="Syamira"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171512] via-[#171512]/45 to-[#171512]/10" />

        <div className="relative z-10 h-full flex flex-col justify-end px-8 sm:px-16 pb-20 pt-32">
          <p className="text-[#D9CFB8] text-sm sm:text-base tracking-[0.15em] mb-4 font-[Inter]">
            23 Tahun &mdash; Hari yang Ditunggu
          </p>
          <h1 className="text-[#F6F3EC] text-5xl sm:text-7xl leading-[1.05] font-[Playfair_Display] max-w-3xl">
            Selamat Ulang Tahun, Syamira Layna Kesayanganku ❤️
          </h1>
          <p className="text-[#D9CFB8] text-lg sm:text-xl italic font-[Playfair_Display] mt-6 max-w-xl">
            Semoga panjang umur, sehat selalu, dan bahagia.
          </p>
        </div>
      </section>

      {/* Ticker tipis */}
      <div className="w-full border-y border-[#DDD6C7] bg-[#F6F3EC] py-3">
        <Marquee speed={45} gradient={false}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-[#8B8579] text-sm sm:text-base font-[Inter] mx-8"
            >
              Selamat ulang tahun &nbsp;•&nbsp; Semoga sehat selalu &nbsp;•&nbsp; Semoga bahagia
            </span>
          ))}
        </Marquee>
      </div>

      {/* Audio strip */}
      <section className="max-w-3xl mx-auto px-8 py-14 border-b border-[#DDD6C7]">
        <p className="text-xs tracking-[0.15em] text-[#8B8579] font-[Inter] mb-4">
          Sedang Diputar
        </p>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {songs.map((song, index) => {
              const active = currentSong === song.src
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSong(song.src)}
                  className={`font-[Playfair_Display] text-xl sm:text-2xl transition-colors ${
                    active
                      ? "text-[#171512] underline underline-offset-8 decoration-[#A98F5D]"
                      : "text-[#8B8579] hover:text-[#171512]"
                  }`}
                >
                  {song.name}
                </button>
              )
            })}
          </div>

          <button
            onClick={handleMute}
            className="flex items-center gap-2 text-sm text-[#8B8579] hover:text-[#171512] transition-colors font-[Inter]"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </section>

      {/* Navigasi */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <p className="text-xs tracking-[0.15em] text-[#8B8579] font-[Inter] mb-10">
          Jelajahi
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD6C7]">
          <NavCard to="/collection" icon={Gift} title="Koleksi" desc="Kumpulan foto kenangan kita berdua" />
          <NavCard to="/surat" icon={Mail} title="Surat" desc="Sepucuk surat kecil untukmu" />
          <NavCard to="/kue" icon={Cake} title="Kue" desc="Tiup lilin, buat satu permintaan" />
        </div>
      </section>
    </>
  )
}

function NavCard({ to, icon: Icon, title, desc }) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-4 py-8 sm:py-2 sm:px-10 first:sm:pl-0 last:sm:pr-0"
    >
      <Icon className="w-6 h-6 text-[#A98F5D] stroke-[1.4]" />
      <div>
        <h3 className="font-[Playfair_Display] text-2xl text-[#171512] group-hover:text-[#A98F5D] transition-colors">
          {title}
        </h3>
        <p className="text-[#8B8579] text-sm font-[Inter] mt-1">{desc}</p>
      </div>
    </Link>
  )
}

export default App