import { Link } from "react-router-dom"

export default function FormLetter() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 flex flex-col justify-center items-center p-8">
        
     
        <div className="mb-6">
          <Link 
            to="/" 
            className="text-pink-700 hover:underline font-medium text-lg"
          >
            ← Kembali ke Home
          </Link>
        </div>

       
        <div className="bg-white shadow-2xl rounded-2xl max-w-2xl p-10 relative">
          
          <div className="absolute -top-6 -left-6 text-5xl">💌</div>
          <div className="absolute -top-6 -right-6 text-5xl">❤️</div>

          <h1 className="text-4xl text-pink-700 font-bold text-center mb-6 font-[DancingScript]">
            Untukmu, Sayangku Syamira 💕
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed font-[Poppins]">
            Hari ini adalah hari yang sangat spesial, hari di mana kamu hadir ke
            dunia dan memberi warna yang begitu indah dalam hidupku sayang. Aku bersyukur bisa bertemu dengan sayangku terkasih yang sudah memahamiku di segala kondisi yang aku hadapi.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed font-[Poppins]">
            Semoga di umur yang ke-22 ini ayang bisa semakin sukses, semua doa terbaik terkabul, rezeki
            semakin lancar, kesehatan selalu menyertai, usaha startupnya berjalan dengan baik, dan kebahagiaan tidak
            pernah pergi dari hidup ayang. Sayangku pantas mendapatkan yang terbaik di
            dunia ini, sayang. Aku minta maaf ya sayang kalau selama aku jadi pacar kamu aku selalu membebani pikiran dan hati kamu, aku selalu melakukan banyak hal-hal yang tidak baik, aku tidak membuat kamu happy..., aku sayang banget kok sama kamuuu, aku mau dan sedang berusaha untuk berubah menjadi lebih baik agar ayang bisa happy terus sama akuuu 💖. 
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed font-[Poppins]">
            Terima kasih ya sayang sudah berjuang sejauh ini, kamu hebat banget ayang sudah banyak melewati fase-fase kehidupan di umur 20an ini, aku yakin pasti kamu akan sukses sayang aku bisa liat karena ayang semangat sekali, semoga ayang juga lancar yaa untuk proses seminar proposalnya. I Love You 💖
          </p>

          <p className="mt-6 text-right text-pink-600 text-xl font-[DancingScript]">
            I Love You Sayang 💖,<br /><p className="mt-5">[Lutfi Rizaldi Mahida]</p> 
          </p>
        </div>
      </div>
    </>
  )
}
