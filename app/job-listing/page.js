import Link from 'next/link'

export default function jobListing(){
    return(
        <section className="bg-[#F8F7F3] px-4 md:px-10 py-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

            {/* Filter Sidebar */}
            <aside className="bg-[#0A3255] text-white w-full md:max-w-sm p-6 rounded-2xl space-y-6">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Cari pekerjaan..."
                    className="w-full px-4 py-2 rounded-md text-black bg-[#F8F7F3]"
                />
                <span className="absolute right-3 top-2.5 text-yellow-400 text-lg">🔍</span>
                </div>

                <div>
                <p className="font-bold text-yellow-400 mb-2">Bidang</p>
                <div className="space-y-2 text-sm">
                    {[
                    "Teknologi & Informasi",
                    "Administrasi & Perkantoran",
                    "Desain & Kreatif",
                    "Pemasaran & Penjualan",
                    "Manufaktur & Produksi",
                    "Pendidikan & Pelatihan",
                    "Kuliner & Perhotelan",
                    ].map((item, index) => (
                    <div key={index}>
                        <label className="flex items-center gap-2">
                        <input type="checkbox" /> {item}
                        </label>
                    </div>
                    ))}
                    <a href="#" className="text-sm underline text-white">Lihat selengkapnya</a>
                </div>
                </div>

                <div>
                <p className="font-bold text-yellow-400 mb-2">Lokasi</p>
                <div className="space-y-2 text-sm">
                    {[
                    "DKI Jakarta",
                    "Jawa Barat",
                    "Daerah Istimewa Yogyakarta",
                    "Jawa Tengah",
                    "Sumatera Utara",
                    ].map((item, index) => (
                    <div key={index}>
                        <label className="flex items-center gap-2">
                        <input type="checkbox" /> {item}
                        </label>
                    </div>
                    ))}
                    <a href="#" className="text-sm underline text-white">Lihat selengkapnya</a>
                </div>
                </div>
            </aside>

            {/* Job Cards */}
            <main className="flex-1 space-y-6">
                <h2 className="text-2xl font-bold text-[#0A3255]">Rekomendasi Pekerjaan</h2>

                {/* Card */}
                {[
                {
                    title: "Asisten Layanan Pelanggan (Remote)",
                    company: "Tokopedia",
                    location: "Jakarta (dapat bekerja dari rumah)",
                    badge: "Layanan Pelanggan",
                    tasks: [
                    "Menjawab pertanyaan pelanggan melalui email atau chat secara daring.",
                    "Membantu menyelesaikan keluhan pelanggan dengan sikap yang ramah dan solutif.",
                    ],
                },
                {
                    title: "Penulis Konten",
                    company: "Ruangguru",
                    location: "Jakarta Selatan (Tersedia opsi kerja hybrid)",
                    badge: "Penulisan & Penerjemahan",
                    tasks: [
                    "Menulis artikel bertema edukasi sesuai dengan pedoman yang diberikan.",
                    "Melakukan riset sederhana untuk memperkuat isi konten yang ditulis.",
                    ],
                },
                {
                    title: "Staf Entri Data",
                    company: "Gojek",
                    location: "Yogyakarta",
                    badge: "Administrasi & Perkantoran",
                    tasks: [
                    "Memasukkan dan memperbarui data ke dalam sistem secara akurat.",
                    "Menjaga konsistensi dan ketelitian data agar tidak terjadi kesalahan.",
                    ],
                },
                {
                    title: "Administrator Media Sosial",
                    company: "Halodoc",
                    location: "Surabaya",
                    badge: "Pemasaran & Penjualan",
                    tasks: [
                    "Menjadwalkan dan mengunggah konten ke platform media sosial perusahaan.",
                    "Menanggapi komentar atau pesan dari pengguna dengan gaya komunikasi yang sesuai.",
                    ],
                },
                ].map((job, i) => (
                <div
                    key={i}
                    className="border border-gray-300 rounded-xl p-6 flex flex-col gap-2 shadow-sm bg-[#F8F7F3]"
                >
                    <div className="flex justify-between items-start">
                    <div>
                        <Link href="detail-job" passHref>
                            <h3 className="text-lg font-bold text-[#0A3255] hover:underline">{job.title}</h3>
                        </Link>
                        
                        <p className="text-sm text-[#0A3255] mt-1">🏢 {job.company}</p>
                        <p className="text-sm text-gray-600">📍 {job.location}</p>
                    </div>
                    <span className="bg-[#0A3255] text-[#F8BE12] text-sm px-3 py-1 rounded-md font-medium whitespace-nowrap">
                        {job.badge}
                    </span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                    {job.tasks.map((t, idx) => (
                        <li key={idx}>{t}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </main>
            </section>


    )
}