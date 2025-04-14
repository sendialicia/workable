export default function scholarship(){
    return(
        <section className="bg-[#F8F7F3] px-4 md:px-10 py-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

            {/* Filter Sidebar */}
            <aside className="bg-[#0A3255] text-white w-full md:max-w-sm p-6 rounded-2xl space-y-6">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Cari beasiswa..."
                    className="w-full px-4 py-2 rounded-md text-black"
                />
                <span className="absolute right-3 top-2.5 text-yellow-400 text-lg">🔍</span>
                </div>

                <div>
                <p className="font-bold text-yellow-400 mb-2">Jenjang</p>
                <div className="space-y-2 text-sm">
                    {["SMA/Sederajat", "D3", "S1", "S2", "S3"].map((item, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" /> {item}
                    </label>
                    ))}
                </div>
                </div>

                <div>
                <p className="font-bold text-yellow-400 mb-2">Kategori</p>
                <div className="space-y-2 text-sm">
                    {["Dalam Negeri", "Luar Negeri"].map((item, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" /> {item}
                    </label>
                    ))}
                </div>
                </div>

                <div>
                <p className="font-bold text-yellow-400 mb-2">Fasilitas</p>
                <div className="space-y-2 text-sm">
                    {["Bebas Biaya Pendidikan", "Tunjangan Hidup", "Akomodasi", "Tiket Pesawat", "Bimbingan Karier"].map((item, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" /> {item}
                    </label>
                    ))}
                </div>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 space-y-6">
                <h2 className="text-2xl font-bold text-[#0A3255]">Rekomendasi Beasiswa</h2>

                {[
                {
                    title: "Beasiswa LPDP Reguler",
                    provider: "Kementerian Keuangan RI",
                    location: "Dalam Negeri & Luar Negeri",
                    desc: "Program pembiayaan studi jenjang S2 dan S3 untuk WNI yang memiliki prestasi akademik & kepemimpinan.",
                    tags: ["Bebas Biaya", "Tunjangan", "Luar Negeri"],
                },
                {
                    title: "Beasiswa Indonesia Maju (BIM)",
                    provider: "Kemendikbudristek",
                    location: "Dalam Negeri",
                    desc: "Beasiswa penuh untuk siswa SMA berprestasi akademik dan non-akademik untuk melanjutkan studi ke PTN.",
                    tags: ["Bebas Biaya", "Pendampingan", "Bimbingan Karier"],
                },
                {
                    title: "Australia Awards Scholarship",
                    provider: "Pemerintah Australia",
                    location: "Australia",
                    desc: "Program beasiswa jenjang S2 dan S3 bagi warga negara Indonesia untuk studi di universitas di Australia.",
                    tags: ["Luar Negeri", "Tiket Pesawat", "Tunjangan Hidup"],
                },
                ].map((scholar, i) => (
                <div key={i} className="border border-gray-300 rounded-xl p-6 shadow-sm flex flex-col gap-2 bg-F8F7F3">
                    <div className="flex justify-between items-start flex-wrap">
                    <div>
                        <h3 className="text-lg font-bold text-[#0A3255]">{scholar.title}</h3>
                        <p className="text-sm text-[#0A3255]">🎓 {scholar.provider}</p>
                        <p className="text-sm text-gray-600">📍 {scholar.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        {scholar.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-[#0A3255] text-[#F8BE12] text-xs px-3 py-1 rounded-md font-medium"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    </div>
                    <p className="text-sm text-gray-700">{scholar.desc}</p>
                </div>
                ))}
            </main>
            </section>

    )
}