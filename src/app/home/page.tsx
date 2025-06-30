"use client";
import Button from "@/componets/Button/page";
import projects from "@/data/projects";
import {
  faBuilding,
  faHammer,
  faHome,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
        className="py-30 sm:py-0 sm:min-h-screen w-full bg-cover flex items-center justify-center relative bg-no-repeat bg-center"
      >
        <div className="max-w-7xl w-full flex px-6 sm:px-12 lg:px-24 text-white relative z-10">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                duration: 0.3,
              },
              opacity: 1,
            }}
            className="w-full sm:w-1/2 flex flex-col justify-center"
          >
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
            <div className="py-4">
              <Button
                type="href"
                href="/contact"
                className="hover:text-primary hover:bg-secondary"
                text="Hubungi Kami"
              />
            </div>
          </motion.div>
          <div className="hidden sm:flex w-1/2 items-start h-[506px] justify-start">
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
        className="flex items-center justify-center py-10 bg-secondary w-full"
        id="services"
      >
        <div className="max-w-7xl w-full flex flex-col px-6 sm:px-12 lg:px-24 text-dark relative z-10">
          <h1 className="text-2xl font-bold">Layanan Kami</h1>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{
              y: 0,
              transition: {
                type: "tween",
                duration: 1,
              },
              opacity: 1,
            }}
            className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
          >
            <div className="p-4 sm:p-6 border border-dark hover:shadow-2xl transition-all ease-in-out duration-200 rounded-lg">
              <FontAwesomeIcon icon={faHome} className="text-xl" />
              <h1 className="text-base font-semibold">Konstruksi Perumahan</h1>
              <p className="text-xs text-gray-500">
                Membangun rumah impian dengan presisi dan perhatian.
              </p>
            </div>
            <div className="p-4 sm:p-6 border border-dark hover:shadow-lg transition rounded-lg">
              <FontAwesomeIcon icon={faBuilding} className="text-xl" />
              <h1 className="text-base font-semibold">Konstruksi Komersial</h1>
              <p className="text-xs text-gray-500">
                Menciptakan ruang komersial yang fungsional dan menginspirasi.
              </p>
            </div>
            <div className="p-4 sm:p-6 border border-dark hover:shadow-2xl transition-all ease-in-out duration-200 rounded-lg">
              <FontAwesomeIcon icon={faRuler} className="text-xl" />
              <h1 className="text-base font-semibold">
                Renovasi &amp; Remodeling
              </h1>
              <p className="text-xs text-gray-500">
                Mengubah ruang yang ada untuk memenuhi kebutuhan Anda yang terus
                berkembang.
              </p>
            </div>
            <div className="p-4 sm:p-6 border border-dark hover:shadow-2xl transition-all ease-in-out duration-200 rounded-lg">
              <FontAwesomeIcon icon={faHammer} className="text-xl" />
              <h1 className="text-base font-semibold">Desain &amp; Bangun</h1>
              <p className="text-xs text-gray-500">
                Mengintegrasikan desain dan konstruksi secara mulus untuk hasil
                yang optimal
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        className="flex items-center justify-center py-10 bg-secondary w-full"
        id="projects"
      >
        <div className="max-w-7xl w-full flex flex-col px-6 sm:px-12 lg:px-24 text-dark relative z-10">
          <h1 className="text-2xl font-bold">Project Unggulan</h1>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{
              y: 0,
              transition: {
                type: "tween",
                duration: 1,
              },
              opacity: 1,
            }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
          >
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="rounded-lg">
                <div className="overflow-hidden w-full rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full hover:scale-125 transition-all ease-in-out duration-200"
                  />
                </div>
                <h2 className="text-base font-semibold">{project.title}</h2>
                <p className="text-xs text-gray-500">{project.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
