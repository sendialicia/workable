import Link from "next/link";

export default function regis() {
  return(
    <div className="bg-[#F8F7F3] p-8 md:p-12 rounded-2xl shadow-md max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden">
      
     
      <div className="bg-[#0A3255] text-white p-8 flex-1 rounded-2xl md:rounded-r-none text-left flex flex-col justify-start">
        <h2 className="text-[42px] font-bold leading-tight text-left">
          Mulai <br />
          perjalanan <br />
          bersama <br />
          <span className="text-[#EEC54A]">workable</span>, <br />
          buat akunmu sekarang!
        </h2>
      </div>

    
      <form className="flex-1 bg-[#F8F7F3] p-8 space-y-5">
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email<span class="text-red-500">*</span></label>
          <input type="email" placeholder="Masukkan email Anda.." class="w-full px-4 py-2 border rounded-md text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap<span class="text-red-500">*</span></label>
          <input type="text" placeholder="Masukkan nama lengkap Anda.." class="w-full px-4 py-2 border rounded-md text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nomor Telepon<span class="text-red-500">*</span></label>
          <div className="flex">
            <span className="px-4 py-2 border border-r-0 rounded-l-md bg-gray-100 text-gray-700">+62</span>
            <input type="text" placeholder="Masukkan nomor telepon Anda.." class="w-full px-4 py-2 border rounded-r-md text-black" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Kota<span class="text-red-500">*</span></label>
          <input type="text" placeholder="Masukkan kota Anda.." class="w-full px-4 py-2 border rounded-md text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password<span class="text-red-500">*</span></label>
          <input type="password" placeholder="Masukkan password Anda.." class="w-full px-4 py-2 border rounded-md text-black" />
        </div>

       
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-gray-600">Sudah mempunyai akun? <Link href="login-page" passHref class="text-[#0A3255] font-semibold underline">Login di sini</Link></p>
          
          <Link href="regis-page-2" passHref>
            <button type="button" className="bg-[#0A3255] text-[#F9C536] font-semibold px-6 py-2 rounded-md hover:bg-[#092743]">
              Lanjutkan
            </button>
          </Link>
        </div>
        
      </form>

    </div>

  )
}