import Link from "next/link";

export default function login(){
    return(
        <section className="min-h-screen bg-[#F8F7F3] flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl w-full flex flex-col md:flex-row shadow-md rounded-2xl overflow-hidden border border-blue-200">

                {/* Kiri: Welcome */}
                <div className="bg-[#0A3255] text-white w-full md:w-1/2 p-8 flex items-center justify-center">
                <h2 className="text-3xl font-bold leading-snug text-center md:text-left">
                    Selamat <br /> datang <br /> kembali!
                </h2>
                </div>

                {/* Kanan: Form Login */}
                <form className="w-full md:w-1/2 bg-white p-8 space-y-6 text-sm text-black">

                {/* Email */}
                <div>
                    <label className="block font-semibold mb-1">
                    Email<span className="text-red-500">*</span>
                    </label>
                    <input
                    type="email"
                    placeholder="Masukkan email Anda..."
                    className="w-full px-4 py-2 border rounded-md text-black"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block font-semibold mb-1">
                    Password<span className="text-red-500">*</span>
                    </label>
                    <input
                    type="password"
                    placeholder="Masukkan password Anda..."
                    className="w-full px-4 py-2 border rounded-md text-black"
                    />
                </div>

                {/* Aksi: login & link daftar */}
                <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-gray-700">
                    Belum mempunyai akun?{" "}
                    <Link href="regis-page-1" passHref className="text-[#0A3255] font-semibold underline">
                        Daftar di sini
                    </Link>
                    </p>

                    <Link href="/" passHref>
                    <button
                        type="button"
                        className="bg-[#0A3255] text-[#F9C536] font-semibold px-6 py-2 rounded-md hover:bg-[#092743]"
                    >
                        Masuk
                    </button>
                    </Link>
                </div>
                </form>

            </div>
            </section>

    )
}