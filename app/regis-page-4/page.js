import Link from "next/link";

export default function regis4(){
    return(
        <section className="min-h-screen bg-[#F8F7F3] flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl w-full flex flex-col md:flex-row shadow-md rounded-2xl overflow-hidden border border-blue-200">

                {/* Kiri: CTA */}
                <div className="bg-[#0A3255] text-white p-8 md:p-12 w-full md:w-1/2">
                <h2 className="text-[42px] font-bold leading-snug text-center md:text-left">
                    Beritahu kami <br /> pengalaman <br /> mu!
                </h2>
                </div>

                {/* Kanan: Form */}
                <form className="w-full md:w-1/2 bg-[#F8F7F3] p-8 space-y-6 text-sm text-black">

                {/* Riwayat Pendidikan */}
                <div>
                    <label className="block font-bold text-[#0A3255] mb-2">
                    Riwayat Pendidikan<span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                    {[
                        "Sekolah Dasar (SD)",
                        "Sekolah Menengah Pertama (SMP)",
                        "Sekolah Menengah Atas (SMA)",
                        "D1/D2/D3",
                        "D4/S1",
                        "S2",
                        "S3",
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                        <input type="radio" name="pendidikan" id={`edu-${index}`} className="accent-[#0A3255]" />
                        <label htmlFor={`edu-${index}`}>{item}</label>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Pengalaman Kerja */}
                <div>
                    <label className="block font-bold text-[#0A3255] mb-2">
                    Pengalaman Kerja/Keterampilan
                    </label>
                    <textarea
                    rows="4"
                    placeholder="Deskripsikan pengalaman kerja atau keterampilan Anda di sini.."
                    className="w-full px-4 py-2 border rounded-md resize-none text-black"
                    ></textarea>
                </div>

                {/* Tombol */}
                <div className="flex justify-between items-center pt-4">
                    

                    <Link href="job-listing" passHref>
                    <button
                        type="button"
                        className="bg-[#0A3255] text-[#F9C536] font-semibold px-6 py-2 rounded-md hover:bg-[#092743]"
                    >
                        Lanjutkan
                    </button>
                    </Link>
                </div>
                </form>
            </div>
            </section>

    )
}