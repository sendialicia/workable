import Link from "next/link";

export default function login(){
    return(
        <section className="bg-[#F8F7F3] p-8 md:p-12 rounded-2xl shadow-md max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden min-h-screen">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-2xl shadow-md overflow-hidden border border-blue-200">
                
                {/* Kiri: CTA */}
                <div className="bg-[#0A3255] text-white p-8 md:p-12 w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                    Bantu kami <span className="text-[#F9C536]">pahami</span> kebutuhanmu <br />
                    agar layanan kami sesuai <br />
                    dengan <span className="text-[#F9C536]">preferensimu</span>
                </h2>
                </div>

                {/* Kanan: Form */}
                <form className="w-full md:w-1/2 bg-[#F8F7F3] p-8 space-y-8 text-sm text-black">
                
                {/* Pertanyaan 1 */}
                <div>
                    <label className="block font-bold text-[#0A3255] mb-2">
                    Apa yang ingin Anda capai dengan Workable?<span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                    {[
                        "Mencari pekerjaan inklusif",
                        "Mengikuti kursus/pengembangan keterampilan",
                        "Bergabung dengan komunitas",
                        "Mendapatkan informasi beasiswa",
                        "Lainnya (isi sendiri)",
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                        <input type="checkbox" id={`goal-${index}`} className="mt-1" />
                        <label htmlFor={`goal-${index}`}>{item}</label>
                        </div>
                    ))}
                    {/* Input lainnya */}
                    <input type="text" placeholder="Isi di sini.." className="w-full px-4 py-2 border rounded-md mt-2" />
                    </div>
                </div>

                {/* Pertanyaan 2 */}
                <div>
                    <label className="block font-bold text-[#0A3255] mb-2">
                    Bidang pekerjaan apa yang Anda minati?<span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                    {[
                        {
                            label: "Teknologi & Informasi",
                            desc: "Contoh: Software Developer, Data Analyst, UI/UX Designer",
                          },
                          {
                            label: "Administrasi & Perkantoran",
                            desc: "Contoh: Administrasi Umum, Sekretaris, Data Entry",
                          },
                          {
                            label: "Desain & Kreatif",
                            desc: "Contoh: Desain Grafis, Ilustrator, Konten Kreator",
                          },
                          {
                            label: "Pemasaran & Penjualan",
                            desc: "Contoh: Digital Marketing, Sales Representative, Copywriting",
                          },
                          {
                            label: "Manufaktur & Produksi",
                            desc: "Contoh: Operator Produksi, Quality Control",
                          },
                          {
                            label: "Pendidikan & Pelatihan",
                            desc: "Contoh: Tutor, Pelatih Soft Skill, Instruktur Online",
                          },
                          {
                            label: "Layanan Pelanggan",
                            desc: "Contoh: Customer Service, Call Center",
                          },
                          {
                            label: "Kuliner & Perhotelan",
                            desc: "Contoh: Barista, Koki, Housekeeping",
                          },
                          {
                            label: "Teknik & Mekanik",
                            desc: "Contoh: Teknisi, Maintenance",
                          },
                          {
                            label: "Hukum & Advokasi Sosial",
                            desc: "Contoh: Paralegal, Aktivis Sosial, Konsultan Inklusivitas",
                          },
                          {
                            label: "Logistik & Operasional",
                            desc: "Contoh: Staff Gudang, Kurir, Logistic Planner",
                          },
                          {
                            label: "Penulisan & Penerjemahan",
                            desc: "Contoh: Content Writer, Copywriter, Penerjemah Bahasa Isyarat",
                          },
                          {
                            label: "Lingkungan & Pertanian",
                            desc: "Contoh: Urban Farming, Pengelolaan Sampah",
                          },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                        <input type="checkbox" id={`job-${index}`} className="mt-1" />
                        <label htmlFor={`job-${index}`}>
                            <span className="font-medium">{item.label}</span><br />
                            <span className="text-sm text-gray-600">{item.desc}</span>
                        </label>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Tombol */}
                <div className="flex justify-end pt-4">
                    <Link href="regis-page-4" passHref>
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