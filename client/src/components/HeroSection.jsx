import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { searchIcon } from "../images";
import { Navbar } from "../components";
import { useEffect } from "react";

const HeroSection = ({ carsCollection }) => {
  const style = "sticky top-0 z-50";
  const [brandNames, setBrandNames] = useState([]);
  const [models, setModels] = useState([]);
  let brandName = [];
  let model = [];

  const addToArray = () => {
    carsCollection.map((car) => {
      const newCar = car.brandName;
      const newModel = car.model;
      if (!brandName.includes(newCar)) {
        brandName.push(newCar);
      }
    });
  };

  const addToRealArr = () => {
    brandName.map((car) => {
      const newCar = car;
      setBrandNames((car) => [...car, newCar]);
    });
  };

  useEffect(() => {
    addToArray();
    addToRealArr();
    console.log(brandNames);
  }, []);

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Navbar style={style} />
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
              <Suspense>
                <select className="w-250 h-50 outline-none bg-gray border-grayBorder rounded-md">
                  <option value="any">Any</option>
                  {brandNames.map((car) => (
                    <option value="any">{car}</option>
                  ))}
                </select>
              </Suspense>
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
              to="/cars"
              className="w-250 h-50 bg-mainColor flex justify-center items-center rounded-md text-xl text-white"
            >
              <img src={searchIcon} alt="search" className="w-5 h-5 mr-2.5" />
              Search
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default HeroSection;
