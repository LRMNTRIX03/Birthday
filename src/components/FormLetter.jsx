import { Link } from "react-router-dom"

export default function Letter() {
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

      <div className="w-full max-w-2xl border border-[#DDD6C7] bg-[#FBFAF6] p-10 sm:p-14">
        <p className="text-xs tracking-[0.2em] text-[#A98F5D] font-[Inter] text-center mb-6">
          Untuk Syamira
        </p>

        <h1 className="font-[Playfair_Display] italic text-3xl sm:text-4xl text-[#171512] text-center mb-10">
          My Dearest Honey Sweetie Syamira
        </h1>

        <div className="w-16 h-px bg-[#A98F5D] mx-auto mb-10" />

        <div className="space-y-5 text-[#3B392F] text-lg leading-relaxed font-[Inter]">
         <p>
  Hari ini adalah hari yang paling spesial, karena tepat 23 tahun yang lalu kamu hadir ke dunia dan membawa begitu banyak warna indah, bukan cuma untuk keluargamu, tapi juga untuk hidupku. Aku bersyukur banget dipertemukan sama kamu, seseorang yang selalu ada, selalu berusaha memahami aku di berbagai keadaan, dan menemani aku melewati banyak hal.
</p>

<p>
  Semoga di usia yang ke-23 ini semua doa dan harapan terbaik kamu satu per satu bisa terwujud. Semoga karier dan rezekimu semakin lancar, kesehatan selalu menyertai, startup yang sedang kamu bangun berkembang dengan baik, seminar proposalnya dimudahkan, dan semua impian yang sedang kamu perjuangkan bisa tercapai. Kamu pantas mendapatkan banyak kebahagiaan dan hal-hal terbaik dalam hidup ini, sayang.
</p>

<p>
  Sebentar lagi hubungan kita juga akan memasuki tahun ke-6. Buat aku, itu bukan cuma tentang lamanya kita bersama, tapi tentang bagaimana kita terus belajar dan bertumbuh sebagai pasangan. Aku berharap kita berdua bisa terus saling memperbaiki diri, saling mengerti, semakin sepahaman, dan semakin sepandangan dalam menjalani kehidupan serta membangun masa depan kita bersama. Aku ingin kita selalu jadi tim yang saling mendukung dan saling menguatkan di setiap keadaan.
</p>

<p>
  Aku juga mau minta maaf ya, sayang, kalau selama ini aku masih sering membuat kamu kepikiran, sedih, atau kecewa. Aku sadar aku juga masih punya banyak kekurangan, tapi aku benar-benar sedang berusaha menjadi pribadi yang lebih baik supaya kita bisa sama-sama bahagia dan hubungan kita juga semakin dewasa.
</p>

<p>
  Ada satu harapan kecil dari aku juga, sayang. Semoga di usia yang baru ini kamu bisa semakin tenang menghadapi banyak hal. Kalau ada sesuatu yang membuat kamu kesal atau kecewa, semoga kita bisa menyampaikannya dengan lebih lembut dan saling mendengarkan tanpa marah-marah atau emosi berlebihan. Aku percaya kalau kita sama-sama belajar mengendalikan emosi dan berkomunikasi dengan baik, kita akan semakin dekat dan semakin kuat menghadapi apa pun bersama.
</p>

<p>
  Terima kasih ya, sayang, sudah berjuang sejauh ini. Kamu hebat banget sudah melewati banyak fase kehidupan di usia 20-an ini, dan aku selalu bangga sama kamu. Aku yakin kamu akan sukses, karena aku tahu seberapa besar semangat dan usaha yang kamu lakukan untuk mewujudkan semua impianmu.
</p>

<p>
  Happy Birthday untuk perempuan yang paling aku sayang. Semoga usia 23 ini membawa banyak kebahagiaan, keberkahan, kesehatan, dan cerita-cerita indah untuk kamu dan juga untuk kita. I love you so much, sayang. 🤍
</p>
        </div>

        <div className="w-16 h-px bg-[#A98F5D] mx-auto my-10" />

        <div className="text-center">
          <p className="font-[Playfair_Display] italic text-xl text-[#171512]">
            I Love You Sayang,
          </p>
          <p className="font-[Inter] text-sm tracking-[0.1em] text-[#8B8579] mt-3">
            LUTFI RIZALDI MAHIDA
          </p>
        </div>
      </div>
    </div>
  )
}