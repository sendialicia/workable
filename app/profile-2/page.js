import Link from "next/link";

export default function profile2(){
    return(
        <section className="bg-[#F8F7F3] min-h-screen flex items-start justify-center px-4 py-10">
            <div className="w-full max-w-6xl bg-white shadow-md border rounded-2xl flex flex-col md:flex-row overflow-hidden">

                {/* Sidebar Profil */}
                <div className="bg-[#0A3255] text-white w-full md:w-1/3 p-8 space-y-6">
                <div>
                    <h2 className="text-3xl font-bold">Profil</h2>
                    <p className="text-2xl font-semibold text-[#F8BE12]">Anan Dia</p>
                </div>

                <nav className="mt-8 space-y-4 text-lg">
                    <Link href="profile">
                        <div className="border-b pb-2 hover:underline cursor-pointer">Edit Profil</div>
                    </Link>

                    <div className="border-b pb-2 font-semibold text-white underline">Daftar Lamaran</div>
                </nav>
                </div>

                {/* Konten Daftar Lamaran */}
                <div className="w-full md:w-2/3 p-8">
                <h3 className="text-[#0A3255] font-semibold mb-4">Lamaran sedang berjalan</h3>

                {/* Card Lamaran */}
                <div className="border rounded-xl p-4 text-sm space-y-2 relative">
                    <h4 className="text-[#0A3255] font-bold text-[16px]">Asisten Layanan Pelanggan (Remote)</h4>
                    <p className="text-gray-700">🏢 Tokopedia</p>
                    <p className="text-gray-600 text-sm">📍 Jakarta (dapat bekerja dari rumah)</p>

                    <ul className="list-disc ml-5 mt-2 text-gray-700">
                    <li>Menjawab pertanyaan pelanggan melalui email atau chat secara daring.</li>
                    <li>Membantu menyelesaikan keluhan pelanggan dengan sikap yang ramah dan solutif.</li>
                    </ul>

                    {/* Status Lamaran */}
                    <div className="absolute top-4 right-4">
                    <span className="bg-[#0A3255] text-[#F8BE12] px-4 py-1 rounded-md text-sm font-semibold">
                        Dalam Proses
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </section>

        
    )
}