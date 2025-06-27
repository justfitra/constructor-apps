import { StaticImageData } from "next/image";
import project1 from "../../public/images/project1.jpeg";
import project2 from "../../public/images/project2.jpeg";
import project3 from "../../public/images/project3.jpeg";

export interface Project {
  id: number;
    title: string;
    description: string;
    image: StaticImageData;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kontraktor di Arutmin Indonesia",
    description: `Saya adalah kontraktor mitra Arutmin Indonesia yang mendukung
                operasional tambang melalui layanan pengangkutan, pengerukan,
                dan pemeliharaan alat berat dengan mengutamakan keselamatan dan
                efisiensi kerja.`,
    image: project1,
  },
  {
    id: 2,
    title: "Kontraktor di Hutan Rindang Banua ",
    description: ` Kontraktor mitra HRB, mendukung operasional tambang dengan
                layanan angkut, pengerukan, dan perawatan alat berat, berfokus
                pada keselamatan dan efisiensi.`,
    image: project2,
  },
  {
    id: 3,
    title: "Kontraktor di PLTU asam-asam ",
    description: `  Kontraktor di PLTU Asam-Asam, mendukung operasional pembangkit
                melalui layanan teknis dan logistik secara aman dan efisien.`,
    image: project3,
  },
];

export default projects;