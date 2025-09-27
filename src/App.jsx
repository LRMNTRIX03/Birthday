import './App.css'
import Navbar from './components/Navbar'
import Marquee from 'react-fast-marquee'
import { Gift, Mail, Cake } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Pages
import Collection from './pages/Collection'
import Letter from './pages/Letter'
import CakeBirthday from './pages/CakeBirthday'
// import Surat from './pages/Surat'
// import Kue from './pages/Kue'

function App() {
  const [songs] = useState([
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
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
      <Navbar />

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
      {/* Marquee */}
      <div className="w-full py-6 mt-10">
        <Marquee
          speed={60}
          gradient={false}
          className="w-full text-4xl font-bold text-pink-700 overflow-hidden"
        >
          🎉 Selamat Ulang Tahun Syamira Layna! Semoga Panjang Umur, Sehat
          Selalu, dan Bahagia 🎁
        </Marquee>
      </div>

      {/* Playlist Selector */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <h2 className="text-lg font-semibold text-pink-700">Pilih Lagu 🎶</h2>
        <div className="flex gap-3">
          {songs.map((song, index) => (
            <button
              key={index}
              onClick={() => setCurrentSong(song.src)}
              className={`px-4 py-2 rounded-lg shadow-md transition ${
                currentSong === song.src
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-pink-700 hover:bg-pink-100'
              }`}
            >
              {song.name}
            </button>
            
          ))}
         <button
          onClick={handleMute}
          className="bg-white text-pink-700 hover:bg-pink-100 px-4 py-2 rounded-lg shadow-md"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
        </div>
      </div>

      {/* Foto utama */}
      <div className="img-container w-full h-full flex justify-center items-center">
        <img
          src="/assets/img/syamira/syam.jpg"
          alt=""
          className="w-1/4 h-auto rounded-b-full mt-5"
        />
      </div>

      {/* Tombol navigasi */}
      <div className="flex flex-col items-center gap-6 mt-[5vh] pb-5">
        <h2 className="text-2xl font-semibold text-pink-800">Klik Aku 🎀</h2>
        <div className="grid grid-cols-3 gap-6">
          <Link
            to="/collection"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:bg-pink-100 transition-all duration-300"
          >
            <Gift className="w-10 h-10 text-pink-600 mb-2" />
            <span className="font-medium text-pink-700">Koleksi</span>
          </Link>

          <Link
            to="/surat"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:bg-pink-100 transition-all duration-300"
          >
            <Mail className="w-10 h-10 text-pink-600 mb-2" />
            <span className="font-medium text-pink-700">Surat</span>
          </Link>

          <Link
            to="/kue"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:bg-pink-100 transition-all duration-300"
          >
            <Cake className="w-10 h-10 text-pink-600 mb-2" />
            <span className="font-medium text-pink-700">Kue</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
