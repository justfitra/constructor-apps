import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-500 py-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="w-full flex justify-center items-center">
          <ul
            className={`justify-between items-center max-w-7xl w-full sm:px-40 font-medium hidden sm:flex `}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Project</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-6 my-4">
          <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
          <FontAwesomeIcon className="text-2xl" icon={faWhatsapp} />
          <FontAwesomeIcon className="text-2xl" icon={faTwitter} />
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Constructor App. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
