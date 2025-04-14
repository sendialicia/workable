import Link from "next/link";

export default function regis2() {
    return(
        <section className="bg-[#F8F7F3] p-8 md:p-12 rounded-2xl shadow-md max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden">
            
           
            <div className="bg-[#0A3255] text-white p-8 flex-1 rounded-2xl md:rounded-r-none flex items-start">
                <h2 className="text-2xl md:text-[42px] font-bold leading-tight">
                Bantu kami  <br /> pahami <br /> <span className="text-[#EEC54A]">kebutuhanmu</span> <br /> agar layanan <br /> kami sesuai <br /> dengan <br /> <span className="text-[#EEC54A]">preferensimu</span>
                </h2>
            </div>

          
            <form className="flex-1 bg-[#F8F7F3] p-8 space-y-6 text-sm">

              
                <div>
                <label className="block font-bold text-black mb-2">
                    Jenis Disabilitas<span className="text-red-500">*</span>
                </label>
                <div className="space-y-2 text-black">
                    {["Disabilitas Fisik", "Disabilitas Sensorik (Pendengaran/Penglihatan)", "Disabilitas Intelektual", "Disabilitas Psikososial", "Lainnya (isi sendiri)"].map((item, index) => (
                    <div key={index} className="flex items-center">
                        <input type="checkbox" id={`dis-${index}`} className="mr-2" />
                        <label htmlFor={`dis-${index}`}>{item}</label>
                    </div>
                    ))}
                    {/* Input untuk Lainnya */}
                    <input type="text" placeholder="Isi di sini.." className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                </div>

                {/* Kebutuhan Aksesibilitas Khusus */}
                <div>
                <label className="block font-bold text-[#0A3255] mb-2">
                    Kebutuhan Aksesibilitas Khusus
                </label>
                <div className="space-y-2 text-black">
                    {["Tidak memiliki", "Teks ukuran besar", "Dukungan pembaca layar", "Bahasa Isyarat", "Lainnya (isi sendiri)"].map((item, index) => (
                    <div key={index} className="flex items-center">
                        <input type="checkbox" id={`akses-${index}`} className="mr-2" />
                        <label htmlFor={`akses-${index}`}>{item}</label>
                    </div>
                    ))}
                    {/* Input untuk Lainnya */}
                    <input type="text" placeholder="Isi di sini.." className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                </div>

               
                <div className="flex justify-end">
                <Link href="regis-page-3" passHref>
                    <button type="button" className="bg-[#0A3255] text-[#F9C536] font-semibold px-6 py-2 rounded-md hover:bg-[#092743]">
                    Lanjutkan
                    </button>
                </Link>
                </div>

            </form>

            </section>

            
  
    )
  }