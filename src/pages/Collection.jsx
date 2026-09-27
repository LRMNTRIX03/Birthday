import { Link } from "react-router-dom"

export default function Collection() {
  const photos = Array.from(
    { length: 28 },
    (_, i) => `/assets/img/syamira/${i + 1}.jpg`
  )
  

  return (
    <div className="min-h-screen bg-[#F6F3EC] pt-28 pb-20 px-8">
      <div className="max-w-5xl mx-auto mb-14">
        <Link
          to="/"
          className="text-sm text-[#8B8579] hover:text-[#171512] transition-colors font-[Inter]"
        >
          ← Kembali ke Home
        </Link>

        <h1 className="font-[Playfair_Display] text-4xl sm:text-5xl text-[#171512] mt-6">
          Koleksi Kenangan Indah Kita
        </h1>
        <p className="text-[#8B8579] font-[Inter] mt-3 max-w-xl">
          Arahkan kursor ke tiap foto untuk mengenang warnanya kembali.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#DDD6C7]">
        {photos.map((src, index) => (
          <div key={index} className="relative group overflow-hidden bg-[#F6F3EC] aspect-[4/5]">
            <img
              src={src}
              alt={`Foto kenangan ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#171512]/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-[#F6F3EC] text-sm font-[Playfair_Display] italic">
                Untukmu, sayang
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="max-w-2xl mx-auto mt-14 text-center text-[#8B8579] italic font-[Playfair_Display] text-lg">
        Setiap momen bersama kamu adalah hadiah terindah — maaf yaa ga semuanya sayang...
      </p>
    </div>
  )
}