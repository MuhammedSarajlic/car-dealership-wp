import React from "react";
import { Link, NavLink } from "react-router-dom";
import { streetIcon, mailIcon, phoneIcon, logo } from "../images";

const Navbar = ({ style }) => {
  const activeStyle = "text-mainColor pl-8";

  return (
    <div className={style}>
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
      <div className="h-100 px-150 flex justify-between items-center shadow-lg bg-white">
        <Link to="/">
          <img src={logo} alt="logo" className="w-144 h-72" />
        </Link>
        <div className="flex text-xl">
          <NavLink to="/" className="pl-8">
            {({ isActive }) => {
              return isActive ? (
                <>
                  <p className="text-mainColor">Home</p>
                  <div className="w-full h-0.5 bg-mainColor"></div>
                </>
              ) : (
                "Home"
              );
            }}
          </NavLink>
          <NavLink to="/cars" className="pl-8">
            {({ isActive }) => {
              return isActive ? (
                <>
                  <p className="text-mainColor">Cars for Sale</p>
                  <div className="w-full h-0.5 bg-mainColor"></div>
                </>
              ) : (
                "Cars for Sale"
              );
            }}
          </NavLink>
          <NavLink to="/about" className="pl-8">
            About Us
          </NavLink>
          <NavLink to="/contac" className="pl-8">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
