export default function community(){
    return(
        <section className="bg-[#F8F7F3] px-6 py-12 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A3255] mb-8">Komunitas</h2>

            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Kiri: Post List */}
                <div className="flex-1 space-y-6">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="border-b pb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl">
                        👤
                        </div>
                        <div>
                        <h4 className="font-bold text-[#0A3255]">Imanuela</h4>
                        <p className="text-sm text-gray-600 mb-2">UI/UX Designer</p>
                        <p className="text-sm text-[#0A3255] leading-relaxed">
                            Beberapa bulan lalu, saya terlibat dalam proyek desain inklusif untuk penyandang disabilitas.
                            <br />
                            Awalnya saya kira ini akan menjadi tantangan teknis. Ternyata, tantangan utamanya adalah belajar untuk benar-benar mendengarkan.
                            <br />
                            Dari proses itulah saya sadar: desain terbaik lahir dari empati. Bukan asumsi.
                        </p>

                        {/* Action bar */}
                        <div className="flex gap-6 text-sm mt-3 text-[#0A3255] font-medium">
                            <button className="flex items-center gap-1 hover:underline">
                            Suka <span>👍</span>
                            </button>
                            <button className="flex items-center gap-1 hover:underline">
                            Komentar <span>💬</span>
                            </button>
                            <button className="flex items-center gap-1 hover:underline">
                            Bagikan <span>🔗</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                {/* Kanan: Form */}
                <div className="w-full lg:w-96">
                <div className="bg-gray-100 border border-black rounded-xl p-4 mb-4 flex flex-col gap-4 shadow-sm">
                    <textarea
                    rows="6"
                    placeholder="Tulis sesuatu di Komunitas..."
                    className="w-full border border-dashed p-3 rounded-md text-[#0A3255] resize-none outline-none"
                    ></textarea>

                    <div className="flex justify-end gap-2 text-[#0A3255] text-lg">
                    <button title="Upload Gambar">🖼</button>
                    <button title="Tambahkan Link">🔗</button>
                    </div>
                </div>

                <div className="bg-gray-100 border rounded-xl p-4 mb-4">
                    <p className="text-sm text-[#0A3255] font-semibold">Tambahkan tagar #</p>
                </div>

                <button className="w-full bg-[#0A3255] text-[#F9C536] font-semibold py-2 rounded-md hover:bg-[#092743] transition">
                    Unggah
                </button>
                </div>
            </div>
            </section>

    )
}