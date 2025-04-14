export default function resume(){
    return(
        <section className="min-h-screen bg-[#F8F7F3] flex items-center justify-center px-4 py-12">
            <div className="max-w-5xl w-full flex flex-col md:flex-row shadow-md rounded-2xl overflow-hidden border border-blue-200">

                {/* Sidebar CTA */}
                <div className="bg-[#0A3255] text-white w-full md:w-1/2 p-8 flex items-center justify-center">
                <h2 className="text-3xl font-bold leading-snug text-center md:text-left">
                    Bangun CV <br /> impianmu <br /> sekarang!
                </h2>
                </div>

                {/* Form Input */}
                <form className="w-full md:w-1/2 bg-[#F8F7F3] p-8 space-y-6 text-sm text-black">

                <div>
                    <label className="block font-bold mb-1">Nama Lengkap*</label>
                    <input type="text" placeholder="Masukkan nama lengkap" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div>
                    <label className="block font-bold mb-1">Email*</label>
                    <input type="email" placeholder="Masukkan email" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div>
                    <label className="block font-bold mb-1">Nomor Telepon*</label>
                    <input type="text" placeholder="Masukkan nomor telepon" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div>
                    <label className="block font-bold mb-1">Pendidikan Terakhir*</label>
                    <input type="text" placeholder="Contoh: S1 Ilmu Komunikasi" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div>
                    <label className="block font-bold mb-1">Pengalaman / Keterampilan</label>
                    <textarea placeholder="Deskripsikan pengalaman kerja atau keterampilan kamu" rows={4} className="w-full px-4 py-2 border rounded-md resize-none"></textarea>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                    type="button"
                    className="bg-[#0A3255] text-[#F9C536] font-semibold px-6 py-2 rounded-md hover:bg-[#092743]"
                    >
                    Simpan / Download PDF
                    </button>
                </div>

                </form>
            </div>
            </section>

    )
}