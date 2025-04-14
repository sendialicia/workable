import Image from "next/image";

export default function detailJob(){
    return(
        <section className="bg-[#F8F7F3] min-h-screen py-12 px-6 flex justify-center">
        <div className="bg-[#F8F7F3] border rounded-2xl shadow-md max-w-6xl w-full flex flex-col md:flex-row overflow-hidden">

            {/* Kiri: Sidebar Job Info */}
            <div className="bg-[#0A3255] text-white p-6 md:w-[320px] flex flex-col gap-4">
            <Image
                src="/customersevice.png"
                alt="Tokopedia Customer Service"
                width={265}
                height={190}
                className="rounded-lg h-48 object-cover w-full"
            />

            <div>
                <h2 className="text-xl font-bold text-[#F8BE12] leading-snug">
                Asisten Layanan Pelanggan (Remote)
                </h2>
                <p className="mt-2">🏢 Tokopedia</p>
                <p className="text-sm mt-1">📍 Jakarta (dapat bekerja dari rumah)</p>
                <p className="text-sm mt-1">💰 Rp3.500.000 ~ Rp4.500.000</p>
                <p className="text-sm mt-1">🕒 8 jam/hari (termasuk waktu istirahat)</p>
            </div>
            </div>

            {/* Kanan: Detail */}
            <div className="p-6 flex-1 space-y-6">
            <div>
                <h3 className="text-lg font-bold text-[#0A3255]">Deskripsi</h3>
                <p className="text-sm text-gray-700 mt-2">
                Sebagai Asisten Layanan Pelanggan, Anda akan menjadi garda terdepan dalam memberikan pengalaman terbaik bagi pengguna Tokopedia. Peran pekerjaan ini sangat penting dalam membangun kepercayaan dan kenyamanan pelanggan dengan memberikan respons yang cepat, ramah, dan solutif atas setiap pertanyaan maupun keluhan mereka.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-bold text-[#0A3255]">Tanggung Jawab</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 space-y-1">
                <li>Menjawab pertanyaan pelanggan melalui email, live chat, atau kanal digital lainnya.</li>
                <li>Membantu menyelesaikan keluhan atau kendala pelanggan dengan sikap profesional dan empatik.</li>
                <li>Memberikan informasi yang akurat dan jelas mengenai produk, layanan, maupun proses pemesanan.</li>
                <li>Melaporkan masalah teknis yang berulang kepada tim terkait untuk perbaikan sistem.</li>
                <li>Menjaga standar layanan dan kepuasan pelanggan sesuai dengan nilai perusahaan.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold text-[#0A3255]">Kualifikasi</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 space-y-1">
                <li>Komunikatif, sabar, dan memiliki empati tinggi.</li>
                <li>Mampu menggunakan komputer dan familiar dengan aplikasi komunikasi (email, chat, ticketing system).</li>
                <li>Pengalaman di bidang layanan pelanggan menjadi nilai plus.</li>
                <li>Terbuka untuk penyandang disabilitas.</li>
                </ul>
            </div>

            {/* Tombol */}
            <div className="flex justify-end gap-4 pt-6">
                <button className="text-[#0A3255] font-semibold hover:underline">Kembali</button>
                <button className="bg-[#0A3255] text-[#F8BE12] font-semibold px-6 py-2 rounded-md hover:bg-[#092743] transition">
                Daftar
                </button>
            </div>
            </div>
        </div>
        </section>


    )
}