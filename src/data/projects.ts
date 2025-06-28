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
  {
    id: 4,
    title: "Kontraktor di Perumahan Pesona Modern ",
    description: `Saya merupakan kontraktor di proyek Perumahan Pesona Modern dari tahun 2008 hingga 2011, bertanggung jawab atas pembangunan unit rumah tinggal, infrastruktur jalan, dan drainase, dengan fokus pada kualitas konstruksi dan ketepatan waktu pengerjaan.`,
    image: project1,
  },
  {
    id: 5,
    title: "Kontraktor di Griya mawar asri tahun 2010 s/d 2012",
    description: `Kontraktor di Griya Mawar Asri , bertanggung jawab atas pembangunan rumah tinggal, pengerjaan jalan lingkungan, serta sistem drainase. Fokus pada kualitas konstruksi, efisiensi waktu, dan kepuasan penghuni.
`,
image: project2,
  }
];

export default projects;