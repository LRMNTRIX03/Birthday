import { Link } from "react-router-dom"
export default function Collection() {
  // list foto (taruh di public/assets/img/collection/ misalnya)
  const photos = [
    "/assets/img/syamira/1.jpg",
    "/assets/img/syamira/2.jpg",
    "/assets/img/syamira/3.jpg",
    "/assets/img/syamira/4.jpg",
    "/assets/img/syamira/5.jpg",
    "/assets/img/syamira/6.jpg",
    "/assets/img/syamira/7.jpg",
    "/assets/img/syamira/8.jpg",
    "/assets/img/syamira/9.jpg",
    "/assets/img/syamira/10.jpg",
    "/assets/img/syamira/11.jpg",
    "/assets/img/syamira/12.jpg",
    "/assets/img/syamira/13.jpg",
    "/assets/img/syamira/14.jpg",
    "/assets/img/syamira/15.jpg",
    "/assets/img/syamira/16.jpg",
    "/assets/img/syamira/17.jpg",
    "/assets/img/syamira/18.jpg",
    "/assets/img/syamira/19.jpg",
    "/assets/img/syamira/20.jpg",
    "/assets/img/syamira/21.jpg",
    "/assets/img/syamira/22.jpg",
    "/assets/img/syamira/23.jpg",
    "/assets/img/syamira/24.jpg",
    "/assets/img/syamira/25.jpg",
    "/assets/img/syamira/26.jpg",
    "/assets/img/syamira/27.jpg",
    "/assets/img/syamira/28.jpg",
    "/assets/img/syamira/29.jpg",
    "/assets/img/syamira/30.jpg",

  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-800 mb-10">
        Koleksi Kenangan Indah Kita 
      </h1>
      <div className="flex items-center justify-center">
      <Link 
            to="/" 
            className="text-pink-700 hover:underline font-medium text-lg"
          >
            ← Kembali ke Home
          </Link>
          </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
            />
          
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition duration-500 flex justify-center items-center">
              <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
                ❤️ Untukmu Sayang ❤️
              </span>
            </div>
          </div>
        ))}
      </div>

     
      <p className="mt-10 text-center text-pink-700 italic">
        Setiap momen bersama kamu adalah hadiah terindah 💕 maaf yaa ga semuanya sayang...
      </p>
    </div>
  )
}
