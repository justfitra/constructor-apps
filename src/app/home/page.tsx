"use client";
import projects from "@/data/projects";
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
        className="py-30 sm:py-0 sm:min-h-screen w-full bg-cover flex items-center justify-center relative bg-no-repeat bg-center"
      >
        <div className="max-w-7xl w-full flex px-6 sm:px-12 lg:px-24 text-white relative z-10">
          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <h6 className="text-primary text-xl sm:text-3xl font-semibold">
              Selamat Datang !!
            </h6>
            <h1 className="text-3xl sm:text-5xl font-bold my-2">
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

      {/* Services Section */}
      <div
        className="flex items-center justify-start py-10 bg-secondary w-full"
        id="services"
      >
        <div className="max-w-7xl w-full flex flex-col px-6 sm:px-12 lg:px-24 text-dark relative z-10">
          <h1 className="text-2xl font-bold">Layanan Kami</h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 sm:p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faHome} className="text-xl" />
              <h1 className="text-base font-semibold">Konstruksi Perumahan</h1>
              <p className="text-xs text-gray-500">
                Membangun rumah impian dengan presisi dan perhatian.
              </p>
            </div>
            <div className="p-4 sm:p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faBuilding} className="text-xl" />
              <h1 className="text-base font-semibold">Konstruksi Komersial</h1>
              <p className="text-xs text-gray-500">
                Menciptakan ruang komersial yang fungsional dan menginspirasi.
              </p>
            </div>
            <div className="p-4 sm:p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faRuler} className="text-xl" />
              <h1 className="text-base font-semibold">
                Renovasi &amp; Remodeling
              </h1>
              <p className="text-xs text-gray-500">
                Mengubah ruang yang ada untuk memenuhi kebutuhan Anda yang terus
                berkembang.
              </p>
            </div>
            <div className="p-4 sm:p-8 border border-dark rounded-lg">
              <FontAwesomeIcon icon={faHammer} className="text-xl" />
              <h1 className="text-base font-semibold">Desain &amp; Bangun</h1>
              <p className="text-xs text-gray-500">
                Mengintegrasikan desain dan konstruksi secara mulus untuk hasil
                yang optimal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        className="flex items-center justify-start py-10 bg-secondary w-full"
        id="projects"
      >
        <div className="max-w-7xl w-full flex flex-col px-6 sm:px-12 lg:px-24 text-dark relative z-10">
          <h1 className="text-2xl font-bold">Project Unggulan</h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <h2 className="text-base font-semibold">{project.title}</h2>
                <p className="text-xs text-gray-500">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
