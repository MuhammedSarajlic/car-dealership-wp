import React from "react";
import {
  phoneBlackIcon,
  instagramIcon,
  facebookIcon,
  linkedinIcon,
} from "../images/ContactSectionImages";

const ContactSection = () => {
  return (
    <div className="w-full h-full px-150">
      <div className="pt-100 mb-50">
        <h2 className="text-7xl text-center font-bold uppercase">Contac us</h2>
      </div>
      <div className="w-full h-full flex justify-between">
        <div className="h-full flex flex-col w-1/2 mb-100">
          <p className="text-xl text-mainColor font-bold">Leave us a Message</p>
          <form action="" className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Name"
              className="outline-none rounded-md bg-gray px-15 w-full h-50 my-20 placeholder-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="outline-none rounded-md bg-gray px-15 w-full h-50 mb-20 placeholder-black"
            />
            <textarea
              type="message"
              placeholder="Message"
              className="h-160 outline-none rounded-md bg-gray px-15 pt-5 w-full mb-20 placeholder-black"
            />
            <button
              type="submit"
              className="w-1/2 bg-mainColor rounded-md py-10 text-xl uppercase text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-0.5 h-420 bg-grayline mx-69"></div>
        <div className="w-1/2">
          <p className="text-2xl text-mainColor font-bold mb-20">Information</p>
          <p className="text-lg mb-35">
            Street Address,
            <br />
            City Postal Code,
            <br />
            State, Country
          </p>
          <div className="flex felx-col items-center mb-35">
            <img src={phoneBlackIcon} alt="phone-icon" className="h-24 mr-10" />
            <p className="text-xl">+90 12 34 56 78 910</p>
          </div>
          <p className="text-xl mb-35">
            We are open from Monday - Friday
            <br /> 08.00 am - 05.00 pm
          </p>
          <p className="text-mainColor text-2xl font-bold mb-20">Follow Us</p>
          <div className="flex">
            <img src={instagramIcon} alt="instagram" className="mr-20" />
            <img src={facebookIcon} alt="facebook" className="mr-20" />
            <img src={linkedinIcon} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
