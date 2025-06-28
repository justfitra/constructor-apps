import projects from "@/data/projects";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div
        className="flex items-center justify-start py-20 md:py-40 bg-secondary w-full"
        id="services"
      >
        <div className="max-w-7xl w-full flex flex-col px-8 sm:px-12 lg:px-24 text-dark relative z-10">
          <h1 className="text-xl sm:text-4xl font-bold mb-4 text-dark">
            Project
          </h1>
          <p className="font-medium text-sm text-gray-500">
            Jelajahi portofolio beragam proyek konstruksi sukses kami, yang
            menunjukkan komitmen kami terhadap kualitas dan inovasi.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {projects.map((project) => (
              <div key={project.id} className="rounded-lg my-4">
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

export default Projects;
