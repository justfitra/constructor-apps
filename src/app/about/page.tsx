import React from "react";

const About = () => {
  return (
    <div
      className="flex items-center justify-start py-40 bg-secondary w-full"
      id="services"
    >
      <div className="max-w-7xl w-full flex flex-col px-6 sm:px-12 lg:px-24 text-dark relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-dark">Tentang Kami</h1>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Kami adalah perusahaan kontraktor yang berdedikasi dalam mendukung
          kelancaran operasional industri pertambangan dan energi di Indonesia.
          Berpengalaman melayani berbagai proyek besar seperti{" "}
          <strong>Arutmin Indonesia</strong>, <strong>HRB</strong>, dan{" "}
          <strong>PLTU Asam-Asam</strong>, kami hadir sebagai mitra kerja yang
          andal, efisien, dan berorientasi pada keselamatan.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Didukung oleh tim profesional dan peralatan modern, kami menyediakan
          layanan seperti:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Pengangkutan & logistik batubara</li>
          <li>Pengerukan (overburden removal)</li>
          <li>Pemeliharaan alat berat</li>
          <li>Dukungan teknis operasional</li>
        </ul>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Kami percaya bahwa keberhasilan proyek tidak hanya ditentukan oleh
          hasil akhir, tetapi juga oleh proses yang aman, tepat waktu, dan ramah
          lingkungan. Oleh karena itu, komitmen kami adalah memberikan{" "}
          <strong>solusi terintegrasi</strong> yang mengedepankan{" "}
          <strong>keamanan kerja</strong>, <strong>kualitas layanan</strong>,
          dan <strong>kepatuhan terhadap regulasi</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Bersama kami, Anda tidak hanya mendapatkan tenaga kerja—tetapi{" "}
          <strong>mitra strategis</strong> yang siap tumbuh bersama industri
          energi Indonesia.
        </p>
      </div>
    </div>
  );
};

export default About;
