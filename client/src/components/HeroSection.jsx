import React from "react";
import { Link } from "react-router-dom";
import { streetIcon, mailIcon, phoneIcon, logo, searchIcon } from "../images";
import { Navbar } from "../components";

const HeroSection = () => {
  return (
    <>
      {/* <div class="h-50 bg-mainColor px-150 flex justify-end items-center">
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
      <div className="h-100 px-150 flex justify-between items-center">
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
      </div> */}
      <Navbar />
      <div className="relative w-full h-595 bg-backgroundImg">
        <div className="w-full h-full bg-black opacity-50"></div>
        <p className="px-150 pt-100 absolute top-0 left-0 text-white text-7xl font-bold font-sans">
          FIND THE RIGHT <br />
          CAR FOR YOU
        </p>
        <div className="absolute w-full h-140 bottom-0 px-150">
          <div className="flex items-end w-full h-full p-30 mt-32 bg-white rounded-lg drop-shadow-customShadow">
            <div className="mr-25">
              <p className="text-xl">Brand Name</p>
              <select className="w-250 h-50 outline-none bg-gray border-grayBorder rounded-md">
                <option value="volvo">Any</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="mr-25">
              <p className="text-xl">Model</p>
              <select className="w-250 h-50 outline-none bg-gray border-grayBorder rounded-md ">
                <option value="volvo">Any</option>
                <option value="saab">...</option>
                <option value="mercedes">...</option>
                <option value="audi">...</option>
              </select>
            </div>
            <div className="mr-25">
              <p className="text-xl">Year</p>
              <select className="w-250 h-50 outline-none bg-gray border-grayBorder rounded-md ">
                <option value="volvo">Any</option>
                <option value="saab">2001</option>
                <option value="mercedes">2002</option>
                <option value="audi">2003</option>
              </select>
            </div>
            <Link
              to="/carslist"
              className="w-250 h-50 bg-mainColor flex justify-center items-center rounded-md text-xl text-white"
            >
              <img src={searchIcon} alt="search" className="w-5 h-5 mr-2.5" />
              Search
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
