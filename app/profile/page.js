export default function profile(){
    return(
        <section className="bg-bg-[#F8F7F3] min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl bg-white shadow-md border rounded-2xl flex flex-col md:flex-row overflow-hidden">

                {/* Sidebar */}
                <div className="bg-[#0A3255] text-white w-full md:w-1/3 p-8 space-y-6">
                <div>
                    <h2 className="text-3xl font-bold">Profil</h2>
                    <p className="text-2xl font-semibold text-[#F8BE12]">Anan Dia</p>
                </div>

                <nav className="mt-8 space-y-4 text-lg">
                    <div className="border-b pb-2 font-semibold">Edit Profil</div>
                    <div className="border-b pb-2 hover:underline cursor-pointer">Daftar Lamaran</div>
                </nav>
                </div>

                {/* Form Profil */}
                <form className="w-full md:w-2/3 p-8 space-y-5 text-sm text-[#0A3255]">
                <div>
                    <label className="font-semibold block mb-1">Email</label>
                    <input
                    type="email"
                    value="KantinBorju.labtekv@gmail.com"
                    className="w-full border rounded-md px-4 py-2"
                    />
                </div>

                <div>
                    <label className="font-semibold block mb-1">Password</label>
                    <input
                    type="password"
                    value="******"
                    className="w-full border rounded-md px-4 py-2"
                    />
                </div>

                <div>
                    <label className="font-semibold block mb-1">Nama Lengkap</label>
                    <input
                    type="text"
                    value="Anan Dia"
                    className="w-full border rounded-md px-4 py-2"
                    />
                </div>

                <div>
                    <label className="font-semibold block mb-1">Nomor Telepon</label>
                    <div className="flex gap-2">
                    <input
                        type="text"
                        value="+62"
                        className="w-16 border rounded-md px-2 py-2"
                    />
                    <input
                        type="text"
                        value="081222222222"
                        className="flex-1 border rounded-md px-4 py-2"
                    />
                    </div>
                </div>

                <div>
                    <label className="font-semibold block mb-1">Kota</label>
                    <input
                    type="text"
                    value="Bandung"
                    className="w-full border rounded-md px-4 py-2"
                    />
                </div>

                <div className="flex justify-end pt-4">
                    <button
                    type="submit"
                    className="bg-[#0A3255] text-[#F8BE12] font-semibold px-6 py-2 rounded-md hover:bg-[#092743]"
                    >
                    Simpan
                    </button>
                </div>
                </form>
            </div>
            </section>


    )
}