"use client";
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
            {[
              { href: "/", text: "Home" },
              { href: "/about", text: "Tentang Kami" },
              { href: "/projects", text: "Project" },
              { href: "/contact", text: "Hubungi Kami" },
            ].map((item) => (
              <li
                key={item.href}
                className={`relative pb-1 bg-transparent ${
                  pathname === item.href ? "text-primary font-semibold" : ""
                } group`}
              >
                <Button
                  type="href"
                  text={item.text}
                  href={item.href}
                  className={` bg-transparent `}
                />
                <span
                  className={`absolute left-0 top-7 h-[2px] w-full bg-primary transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                    pathname === item.href ? "scale-x-100" : ""
                  }`}
                ></span>
              </li>
            ))}
          </ul>
          <div
            className={`sm:flex items-center hidden hover:text-primary transition-all ease-in-out duration-300 group justify-center ${color}`}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="" />
            <Button
              type="href"
              href="https://wa.me/6281357826070"
              text="Whatsapp"
              className={`bg-transparent group-hover:text-primary ${color}`}
            />
          </div>
          <div className={`flex sm:hidden ${color}`}>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faClose} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* hamburger */}
      <div
        className={`${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        } sm:hidden fixed top-0 left-0 flex transition-all ease-in-out  h-screen shadow-2xl overflow-hidden bg-secondary z-60  `}
      >
        {isOpen && (
          <div className="flex flex-col py-10 px-8 w-full text-dark h-full relative">
            <ul className="flex flex-col gap-8">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "Tentang Kami" },
                { href: "/projects", text: "Project" },
                { href: "/contact", text: "Hubungi Kami" },
              ].map((item) => (
                <li
                  key={item.href}
                  className={`relative pb-1 bg-transparent ${
                    pathname === item.href ? "text-primary font-semibold" : ""
                  } group`}
                >
                  <Button
                    type="href"
                    text={item.text}
                    href={item.href}
                    className={` bg-transparent `}
                  />
                  <span
                    className={`absolute left-0 top-7 h-[1.5px] w-full bg-primary transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                      pathname === item.href ? "scale-x-100" : ""
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
