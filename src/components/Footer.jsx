import React from "react";
import { AiFillPhone } from "react-icons/ai";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

const Footer = () => {
  return (
    <div className="max-w-[1250px] w-full p-8 m-auto border-t-4">
      <div className="flex items-center justify-center gap-8 md:gap-16">
        <div className="flex items-center">
          <SiYourtraveldottv
            size={30}
            className="text-[var(--primary-dark)] mr-2"
          />
          <h1 className="text-xl font-bold text-gray-600">WEEKAWAY</h1>
        </div>
        <div className="flex justify-center">
          <FaFacebookF className="mx-4 text-[var(--primary-dark)] hover:scale-[120%] hover:shadow-xl ease-in-out duration-300 transition-all cursor-pointer" />
          <FaTwitter className="mx-4 text-[var(--primary-dark)] hover:scale-[120%] hover:shadow-xl ease-in-out duration-300 transition-all cursor-pointer" />
          <FaGooglePlusG className="mx-4 text-[var(--primary-dark)] hover:scale-[120%] hover:shadow-xl ease-in-out duration-300 transition-all cursor-pointer" />
          <FaInstagram className="mx-4 text-[var(--primary-dark)] hover:scale-[120%] hover:shadow-xl ease-in-out duration-300 transition-all cursor-pointer" />
        </div>
        <div className="flex items-center px-6">
          <AiFillPhone size={20} className="m-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">1-888-815-457</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
