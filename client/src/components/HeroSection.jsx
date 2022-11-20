import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { searchIcon } from "../images";
import { Navbar } from "../components";
import { useEffect } from "react";

const HeroSection = ({ carsCollection, setSearchQuery, filterCars }) => {
  const [brandNames, setBrandNames] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  const style = "sticky top-0 z-50";

  let brandName = [];
  let year = [];

  let date = new Date();
  let y = date.getFullYear();
  for (let i = 1950; i <= y; i++) {
    year.push(i);
  }

  const addToArray = () => {
    carsCollection.map((car) => {
      const newCar = car.brandName;
      if (!brandName.includes(newCar)) {
        brandName.push(newCar);
      }
    });
  };

  const addToRealArr = () => {
    setBrandNames([]);
    brandName.map((car) => {
      const newCar = car;
      setBrandNames((car) => [...car, newCar]);
    });
    year.map((y) => {
      const newYear = y;
      setYears((y) => [...y, newYear]);
    });
  };

  const handleBrandChange = (e) => {
    setModels([]);
    carsCollection.map((item) => {
      const model = item.model;
      item.brandName.toLowerCase() === e.target.value.toLowerCase() &&
        setModels((prevModels) => [...prevModels, model]);
    });
    setSearchQuery((prev) => ({ ...prev, bn: e.target.value.toLowerCase() }));
  };

  const handleModelChange = (e) => {
    setSearchQuery((prev) => ({ ...prev, md: e.target.value.toLowerCase() }));
  };

  const handleYearChange = (e) => {
    setSearchQuery((prev) => ({ ...prev, yr: e.target.value.toLowerCase() }));
  };

  useEffect(() => {
    addToArray();
    addToRealArr();
    setSearchQuery({
      bn: "",
      md: "",
      yr: "",
    });
  }, []);

  return (
    <>
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
              <select
                className="w-250 h-50 outline-none bg-gray border-grayBorder rounded-md"
                onChange={handleBrandChange}
              >
                <option value="any">Any</option>
                {brandNames?.map((car, i) => (
                  <option key={i} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>
            <div className="mr-25">
              <p className="text-xl">Model</p>
              <select
                className="w-250 h-50 outline-none bg-gray border-grayBorder rounded-md"
                onChange={handleModelChange}
              >
                <option value="volvo">Any</option>
                {models?.map((model, i) => (
                  <option key={i} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <div className="mr-25">
              <p className="text-xl">Year</p>
              <select
                className="w-250 h-50 outline-none bg-gray border-grayBorder rounded-md"
                onChange={handleYearChange}
              >
                <option value="any">Any</option>
                {years.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>
            <Link
              to="/cars"
              className="w-250 h-50 bg-mainColor flex justify-center items-center rounded-md text-xl text-white"
              onClick={filterCars}
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
