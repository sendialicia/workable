export default function eduListing(){
    return(
        <section className="bg-[#F8F7F3] px-4 md:px-10 py-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

            {/* Sidebar Filter */}
            <aside className="bg-[#0A3255] text-white w-full md:max-w-sm p-6 rounded-2xl space-y-6">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Cari pelatihan..."
                    className="w-full px-4 py-2 rounded-md text-black bg-[#F8F7F3]"
                />
                <span className="absolute right-3 top-2.5 text-yellow-400 text-lg">🔍</span>
                </div>

                {/* Bidang */}
                <div>
                <p className="font-bold text-yellow-400 mb-2">Kategori</p>
                <div className="space-y-2 text-sm">
                    {["Teknologi & Digital", "Desain & Kreatif", "Komunikasi", "Bisnis & Manajemen", "Keterampilan Umum", "Bahasa"].map((item, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" /> {item}
                    </label>
                    ))}
                </div>
                </div>

                {/* Mode */}
                <div>
                <p className="font-bold text-yellow-400 mb-2">Mode Belajar</p>
                <div className="space-y-2 text-sm">
                    {["Online", "Offline", "Hybrid"].map((item, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" /> {item}
                    </label>
                    ))}
                </div>
                </div>
            </aside>

            {/* Konten Listing */}
            <main className="flex-1 space-y-6">
                <h2 className="text-2xl font-bold text-[#0A3255]">Rekomendasi Pelatihan</h2>

                {/* Kartu pelatihan */}
                {[
                {
                    title: "Kelas Dasar UI/UX Design",
                    provider: "Dicoding",
                    mode: "Online",
                    tags: ["Gratis", "Bersertifikat"],
                    desc: "Pelajari dasar-dasar desain antarmuka dan pengalaman pengguna untuk aplikasi digital.",
                },
                {
                    title: "Pelatihan Soft Skill untuk Dunia Kerja",
                    provider: "Skill Academy",
                    mode: "Online (Self-paced)",
                    tags: ["Diskon 100%", "Untuk Pemula"],
                    desc: "Tingkatkan kepercayaan diri, komunikasi, dan kemampuan teamwork untuk siap kerja.",
                },
                {
                    title: "Microsoft Excel untuk Data Entry",
                    provider: "Kartu Prakerja x MyEduSolve",
                    mode: "Hybrid (Jakarta & Online)",
                    tags: ["Populer", "Bersertifikat"],
                    desc: "Pelatihan Excel dari dasar hingga menengah untuk kebutuhan administrasi & entry data.",
                },
                ].map((course, i) => (
                <div key={i} className="border border-gray-300 rounded-xl p-6 shadow-sm flex flex-col gap-2 bg-[#F8F7F3]">
                    <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-[#0A3255]">{course.title}</h3>
                        <p className="text-sm text-[#0A3255]">🎓 {course.provider}</p>
                        <p className="text-sm text-gray-600">📍 {course.mode}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-[#0A3255] text-[#F8BE12] text-xs px-3 py-1 rounded-md font-medium"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    </div>
                    <p className="text-sm text-gray-700">{course.desc}</p>
                </div>
                ))}
            </main>
            </section>

    )
}