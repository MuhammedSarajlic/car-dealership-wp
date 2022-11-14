import React from "react";
import { streetIcon, mailIcon, phoneIcon, logo } from "../images";

const Navbar = () => {
  return (
    <>
      <div class="h-50 bg-mainColor px-150 flex justify-end items-center">
        <div className="flex items-center">
          <img src={streetIcon} alt="street-icon" />
          <p className="ml-2.5 text-white">Street Address, City, State</p>
        </div>
        <div className="h-30 w-px bg-white ml-5"></div>
        <div className="flex items-center ml-5">
          <img src={mailIcon} alt="mail-icon" />
          <p className="ml-2.5 text-white">office@example.com</p>
        </div>
        <div className="h-30 w-px bg-white ml-5"></div>
        <div className="flex items-center ml-5">
          <img src={phoneIcon} alt="phone-icon" />
          <p className="ml-2.5 text-white">+90 12 34 56 78 910</p>
        </div>
      </div>
      <div className="h-100 px-150 flex justify-between items-center shadow-lg	">
        <img src={logo} alt="logo" className="w-144 h-72" />
        <div className="flex text-xl">
          <a href="#" className="pl-8">
            Home
          </a>
          <a href="#" className="pl-8">
            Cars for Sale
          </a>
          <a href="#" className="pl-8">
            About Us
          </a>
          <a href="#" className="pl-8">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
