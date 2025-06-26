"use client";
import Link from "next/link";
import Button from "../Button/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center bg-transparent justify-center px-24  z-50 absolute top-0 py-6 w-full">
        <div className="flex justify-between max-w-7xl w-full">
          <div>
            <h1 className={`text-2xl font-bold text-center `}>
              Consturctor <span className="text-primary">App.</span>
            </h1>
          </div>
          <ul className={`gap-8 font-medium hidden sm:flex `}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Project</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
            <Button
              type="href"
              href="/whatsapp"
              text="Whatsapp"
              className="bg-transparent"
            />
          </div>
          <div className="flex sm:hidden">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
