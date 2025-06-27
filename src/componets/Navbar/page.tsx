"use client";
import Link from "next/link";
import Button from "../Button/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [color, setColor] = useState("text-white");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setColor("text-white");
    }

    if (
      pathname === "/about" ||
      pathname === "/projects" ||
      pathname === "/contact"
    ) {
      setColor("text-dark");
    }
  }, [pathname]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log("Current route:", pathname);
  return (
    <>
      <nav className="flex items-center bg-transparent justify-center px-8 sm:px-24  z-50 absolute top-0 py-6 w-full">
        <div className="flex justify-between max-w-7xl w-full">
          <div>
            <h1
              className={`text-lg sm:text-2xl font-bold text-center ${color}`}
            >
              Consturctor <span className="text-primary">App.</span>
            </h1>
          </div>
          <ul className={`gap-8 font-medium hidden sm:flex ${color}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/projects">Portofolio</Link>
            </li>
            <li>
              <Link href="/contact">Hubungi Kami</Link>
            </li>
          </ul>
          <div className={`sm:flex items-center hidden ${color}`}>
            <FontAwesomeIcon icon={faWhatsapp} className="" />
            <Button
              type="href"
              href="/whatsapp"
              text="Whatsapp"
              className={`bg-transparent ${color}`}
            />
          </div>
          <div className="flex sm:hidden">
            <button
              onClick={() => {
                handleClick();
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>

      {/* hamburger */}
      <div
        className={`${
          isOpen ? "w-1/2" : "w-0 pointer-events-none"
        } sm:hidden fixed top-0 right-0 flex transition-all ease-in-out  h-screen shadow-2xl overflow-hidden bg-secondary z-40  `}
      >
        {isOpen && (
          <div className="flex flex-col py-10 px-6 w-full text-dark h-full relative">
            <button
              className="absolute z-40 top-4 left-4"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <Link
              href="/home"
              className="py-4 text-lg font-semibold"
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-4 text-lg font-semibold"
              onClick={handleClick}
            >
              Tentang Kami
            </Link>
            <Link
              href="/projects"
              className="py-4 text-lg font-semibold"
              onClick={handleClick}
            >
              Portofolio
            </Link>
            <Link
              href="/contact"
              className="py-4 text-lg font-semibold"
              onClick={handleClick}
            >
              Hubungi Kami
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
