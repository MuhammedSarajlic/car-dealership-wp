import React from "react";
import {
  f_img1,
  f_img2,
  f_img3,
  rightArrow,
} from "../images/FeatureSectionImages";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const FeatureSection = () => {
  const [listOfCars, setListOfCars] = useState([]);

  const carsCollectionRef = collection(db, "cars");

  const getCarsList = async () => {
    const data = await getDocs(carsCollectionRef);
    setListOfCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCarsList();
    console.log(listOfCars);
    console.log(listOfCars[0]);
  }, []);

  return (
    <div className="mt-82">
      <p className="text-2xl text-center text-mainColor">
        Check out our recent cars
      </p>
      <h2 className="text-7xl text-center font-bold uppercase">Feature Car</h2>
      <div className="px-150 w-full h-453 my-100">
        <div className="bg-white w-full h-full flex">
          {listOfCars.map((car) => (
            <Link className="w-1/3 h-453 bg-mainColor mr-15 rounded-xl overflow-hidden">
              <img
                src={car.imageUrl}
                alt="feature-img"
                className="h-1/2 w-full"
              />
              <div className="h-1/2 p-17">
                <p className="text-white text-xl mb-10">{car.Title}</p>
                <div className="w-full h-px bg-white"></div>
                <p className="text-white text-xl my-10">Year: {car.Year}</p>
                <p className="text-white text-xl mb-10">
                  Mileage: {car.Mileage} km
                </p>
                <div className="w-full h-px bg-white"></div>
                <p className="text-white text-2xl mt-10">€ {car.Price}</p>
              </div>
            </Link>
          ))}
          <Link className="w-1/3 h-full bg-mainColor mx-15 rounded-lg">
            <img src={f_img2} alt="feature-img" className="h-1/2 w-full" />
            <div className="h-1/2 p-17">
              <p className="text-white text-xl mb-10">
                AUDI RS6 Johann Abt Signature Edition 800PS Nr.48/64
              </p>
              <div className="w-full h-px bg-white"></div>
              <p className="text-white text-xl my-10">Year: 2022</p>
              <p className="text-white text-xl mb-10">Mileage: 150 km</p>
              <div className="w-full h-px bg-white"></div>
              <p className="text-white text-2xl mt-10">€ 297,660</p>
            </div>
          </Link>
          <Link className="w-1/3 h-full bg-mainColor ml-15 rounded-lg">
            <img src={f_img3} alt="feature-img" className="h-1/2 w-full" />
            <div className="h-1/2 p-17">
              <p className="text-white text-xl mb-10">
                Mercedes-Benz C 63 AMG Coupe AMG SPEEDSHIFT MCT Black Ser...
              </p>
              <div className="w-full h-px bg-white"></div>
              <p className="text-white text-xl my-10">Year: 2012</p>
              <p className="text-white text-xl mb-10">Mileage: 160.000 km</p>
              <div className="w-full h-px bg-white"></div>
              <p className="text-white text-2xl mt-10">€ 160,000</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex px-150 items-center justify-center">
        <div className="h-0.5 w-1/2 bg-grayline"></div>
        <Link
          to="/carslist"
          className="flex items-center justify-center px-15 cursor-pointer"
        >
          <p className="text-xl font-bold pr-10 whitespace-nowrap leading-7">
            See more
          </p>
          <img src={rightArrow} alt="arrow" />
        </Link>
        <div className="h-0.5 w-1/2 bg-grayline"></div>
      </div>
    </div>
  );
};

export default FeatureSection;
