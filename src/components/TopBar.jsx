import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 pt-2">
      <div className="flex items-center">
        <SiYourtraveldottv
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-600">WEEKAWAY</h1>
      </div>
      <div className="flex ">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="m-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">9AM - 5AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="m-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">1-888-815-457</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
