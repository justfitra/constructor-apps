"use client"; // jika pakai App Router

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch(() => {
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div
        className="flex items-center justify-center py-20 md:py-40 bg-secondary w-full"
        id="services"
      >
        <div className="max-w-7xl w-full items-center justify-center  flex flex-col px-8 sm:px-12 lg:px-24 text-dark relative z-10">
          <div className="w-full flex flex-col ">
            <h1 className="text-xl sm:text-4xl font-bold mb-4 text-dark">
              Hubungi Kami
            </h1>
            <p className="font-medium text-sm text-gray-500 ">
              Kami di sini untuk membantu kebutuhan konstruksi Anda. Hubungi
              kami menggunakan formulir di bawah ini atau informasi kontak kami.
            </p>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 mt-8">
              <input
                type="text"
                name="name"
                placeholder="Masukkan Nama"
                required
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                required
                className="w-full border p-2 rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Masukkan Pesan"
                required
                className="w-full border p-2 rounded-lg h-32"
              />
              <button
                type="submit"
                className="bg-primary text-secondary hover:border-primary border px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-all ease-in-out duration-150 cursor-pointer"
                disabled={loading}
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>

              {success === true && (
                <p className="text-green-500">Pesan Terkirim</p>
              )}
              {success === false && (
                <p className="text-red-500">Gagal Mengirim Pesan</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
