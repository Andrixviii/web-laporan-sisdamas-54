import { Header } from "../layout/Header";

function TetangKami() {
    const handleSearch = (query: string) => {
        console.log('Search query:', query);
    };

    return (
        <>
        <Header onSearch={handleSearch} />
            <section id="tentang" className="mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Kami adalah kelompok mahasiswa Kuliah Kerja Nyata (KKN) SISDAMAS 54 UIN Sunan Gunung Djati Bandung yang
                        berdedikasi untuk mengembangkan dan mendokumentasikan kegiatan di Desa Harumansari,
                        Kecamatan Kadungora, Kabupaten Garut.
                    </p>
                    <img
                        src="https://ik.imagekit.io/kkn54harumansari/Lainnya/Dokumentasi.JPG?updatedAt=1753707035519"
                        alt="Dokumentasi"
                        className="p-7 w-full h-auto"
                    />
                    <p className="text-gray-600 mt-4">
                        Melalui platform ini, kami ingin membagikan pengalaman, hasil karya, dan
                        kontribusi yang telah kami lakukan selama masa pengabdian masyarakat.
                    </p>
                </div>
            </section>

            <div className="border-t bg-[#66161A] border-[#66161A] mt-8 p-6 text-center text-gray-100">
                <p>&copy; 2025 KKN 54. All rights reserved.</p>
            </div>
        </>
    );
}

export default TetangKami;
