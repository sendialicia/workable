import Image from "next/image";

export default function Home() {
  return (
    <div>
        <div className="relative bg-white w-full h-screen overflow-hidden">
          <Image
            src="/landingpic.png"
            alt=""
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute top-1/4 left-4 md:left-18 text-white max-w-[600px] px-4">
            <div className="mb-[70px]">
              <h1 className="text-[36px] md:text-[60px] font-[900] leading-tight mb-4">
                Buka Pintu Kesempatan <br /> untuk Semua
              </h1>
              <p className="mb-6 text-lg">
                <strong>Workable</strong> adalah platform inklusif yang membuka akses pendidikan, pekerjaan, dan komunitas bagi penyandang disabilitas di Indonesia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F8BE12] text-blue-900 font-semibold px-6 py-3 rounded-[15px] hover:bg-[#eed383] transition-all duration-200 w-full sm:w-auto">
                Pelajari lebih lanjut ↓
              </button>
            </div>
          </div>
        </div>


      <div class="py-30 px-10 bg-white overflow-x-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          
         
          <div>
            <h2 class="text-[40px] font-bold text-[#0A3255] leading-[37px]">
              Mengapa Workable Hadir <br />
              untuk Penyandang <br />
              Disabilitas?
            </h2>
          </div>

          
          <div>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Di <span class="font-semibold">Indonesia</span>, hanya 2.8% penyandang disabilitas yang mengenyam pendidikan tinggi dan hanya 1% yang berhasil mendapatkan pekerjaan formal. Banyak penyandang disabilitas yang masih terjebak di sektor informal tanpa jaminan sosial. <span class="font-semibold">Workable</span> hadir untuk memutus siklus ini dan menciptakan perubahan nyata.
            </p>
            
            
            <div class="bg-[#EEC54A] p-4 rounded-md space-y-2 text-gray-900">
              <p>🎓 2,8% PWD berpartisipasi di perguruan tinggi (2022)</p>
              <p>💼 1% berhasil mendapatkan pekerjaan formal (2023)</p>
              <p>🚫 Masih banyak stigma dan kurangnya fasilitas aksesibel di tempat kerja</p>
            </div>
          </div>

        </div>
      </div>

      <div className="py-30 px-10 bg-white overflow-x-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">

          <div>
            <p className="text-[#0A3255] text-bold mb-6 leading-relaxed">
              <strong>Workable</strong> hadir dengan tiga pilar utama untuk mendukung kemandirian penyandang disabilitas:
            </p>
            <div className="bg-[#EEC54A] p-4 rounded-md space-y-4 text-gray-900">
              <p>
                📄 <strong>Inclusive Employment</strong><br />
                Temukan lowongan kerja ramah disabilitas dari perusahaan yang berkomitmen menciptakan lingkungan inklusif.
              </p>
              <p>
                🎓 <strong>Course & Skill Development</strong><br />
                Tingkatkan keterampilan melalui kursus, program mentorship, dan akses beasiswa untuk mempersiapkan diri memasuki dunia kerja.
              </p>
              <p>
                🤝 <strong>Community Space</strong><br />
                Bangun jaringan, berbagi kisah inspiratif, dan lawan stigma bersama komunitas yang saling mendukung.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-start md:justify-end">
            <h2 className="text-[40px] font-bold text-[#0A3255] leading-[37px] text-right md:text-right">
              Bagaimana Workable <br />
              Membantu Penyandang <br />
              Disabilitas?
            </h2>
          </div>

        </div>
      </div>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-[40px] font-bold text-[#0A3255] leading-[37px] text-center mb-[50px]">
          Suara dari <span className="text-blue-900">Komunitas</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Gambar testimoni Sardi */}
          <div>
            <Image
              src="/testimoni1.png" // ganti sesuai path file-nya di public/
              alt="Testimoni Sardi"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Testimoni HTML biasa */}
          <div>
            <Image
              src="/testimoni2.png" // ganti sesuai path file-nya di public/
              alt="Testimoni Sardi"
              className="w-full h-auto rounded-2xl"
            />
          </div>

        </div>
      </section>

      <section className="bg-[#0A3255] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          {/* Judul */}
          <div>
            <h2 className="text-3xl font-bold text-[#EEC54A] mb-4">Tentang Workable</h2>
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              Workable adalah platform digital yang berfokus pada pemberdayaan penyandang disabilitas di Indonesia. Kami percaya bahwa inklusivitas bukan hanya slogan, melainkan aksi nyata. Dengan Workable, kami membangun jembatan antara talenta luar biasa dan kesempatan yang setara di dunia pendidikan serta pekerjaan.
            </p>
          </div>

          {/* Dukungan mitra */}
          <div className="space-y-6">
            <p className="text-[#F9C536] font-semibold">Didukung oleh:</p>
            
            <Image
              src="/perusahaan.png"
              alt="Logo mitra Workable"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />

            <p className="text-sm text-white/80 mt-4">
              Kami bekerja sama dengan berbagai mitra strategis, termasuk lembaga pemerintah, perusahaan inklusif, dan komunitas untuk mewujudkan perubahan nyata bagi penyandang disabilitas.
            </p>
          </div>

        </div>
      </section>




              
  
    </div>
  );
}
