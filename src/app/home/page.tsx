import {
  faBuilding,
  faHammer,
  faHome,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
        className="min-h-screen w-full bg-cover flex items-center justify-center relative bg-no-repeat bg-center"
      >
        <div className="max-w-7xl w-full flex px-6 sm:px-12 lg:px-24 text-white relative z-10">
          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <h6 className="text-primary text-3xl font-semibold">
              Selamat Datang !!
            </h6>
            <h1 className="text-5xl font-bold my-2">
              Bangun Masa Depan Bersama Kami
            </h1>
            <p className="text-sm my-4">
              Kami adalah mitra terpercaya Anda dalam pembangunan rumah, gedung,
              infrastruktur, hingga renovasi. Dengan pengalaman bertahun-tahun
              dan tim profesional, kami siap mewujudkan proyek Anda dengan
              kualitas terbaik, tepat waktu, dan efisien.
            </p>
          </div>
          <div className="hidden sm:flex w-1/2  h-screen justify-start">
            <Image
              src="/images/profile.png"
              alt="Hero Image"
              width={300}
              height={300}
              className="hidden sm:block w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div
        className="flex items-center justify-start py-10 bg-secondary w-full"
        id="project"
      >
        <div className="max-w-7xl w-full flex flex-col px-6 sm:px-12 lg:px-24 text-dark relative z-10">
          <h1 className="text-2xl font-bold">Layanan Kami</h1>
          <div className="w-full grid grid-cols-4 gap-4 mt-6">
            <div className="p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faHome} className="text-xl" />
              <h1 className="text-lg font-semibold">Konstruksi Perumahan</h1>
              <p className="text-sm text-gray-500">
                Membangun rumah impian dengan presisi dan perhatian.
              </p>
            </div>
            <div className="p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faBuilding} className="text-xl" />
              <h1 className="text-lg font-semibold">Konstruksi Komersial</h1>
              <p className="text-sm text-gray-500">
                Menciptakan ruang komersial yang fungsional dan menginspirasi.
              </p>
            </div>
            <div className="p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faRuler} className="text-xl" />
              <h1 className="text-lg font-semibold">
                Renovasi &amp; Remodeling
              </h1>
              <p className="text-sm text-gray-500">
                Mengubah ruang yang ada untuk memenuhi kebutuhan Anda yang terus
                berkembang.
              </p>
            </div>
            <div className="p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faHammer} className="text-xl" />
              <h1 className="text-lg font-semibold">Desain &amp; Bangun</h1>
              <p className="text-sm text-gray-500">
                Mengintegrasikan desain dan konstruksi secara mulus untuk hasil
                yang optimal
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
