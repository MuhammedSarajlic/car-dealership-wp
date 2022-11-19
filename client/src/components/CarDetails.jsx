import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  mailIcon,
  img,
  arrowLeft,
  arrowRight,
  roadIcon,
  calendarIcon,
  carEngineIcon,
  gearboxIcon,
  gasStationIcon,
} from "../images/CarDetails";
import { useParams } from "react-router-dom";

const CarDetails = ({ carsCollection }) => {
  const [currentCar, setCurrentCar] = useState({});
  const { id } = useParams();

  const findCurrentCar = () => {
    setCurrentCar(carsCollection.find((car) => car.id == id));
  };

  useEffect(() => {
    findCurrentCar();
  });

  return (
    <>
      <Navbar />
      <div className="bg-siteBackground flex w-full h-full py-50 px-150">
        <div className="w-750 h-full mr-30">
          <div className="w-full h-600 bg-white rounded-xl overflow-hidden">
            <div className="w-750 h-450 relative overflow-hidden">
              <img
                src={currentCar.displayImageUrl}
                alt=""
                className="w-full h-full"
              />
              <div className="absolute bg-white p-15 rounded-full opacity-90 top-45 left-5 cursor-pointer">
                <img src={arrowLeft} alt="" />
              </div>
              <div className="absolute bg-white p-15 rounded-full opacity-90 top-45 right-5 cursor-pointer hover:opacity-100">
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div className="w-full h-150 flex py-20 px-25">
              <div className="w-160 h-110 overflow-hidden">
                <img src={img} alt="" />
              </div>
              <div className="w-160 h-110 overflow-hidden mx-20">
                <img src={img} alt="" />
              </div>
              <div className="w-160 h-110 overflow-hidden mr-20">
                <img src={img} alt="" />
              </div>
              <div className="w-160 h-110 overflow-hidden">
                <img src={img} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-25 w-full h-200 bg-white py-30 px-50 rounded-xl">
            <div className="flex items-center mb-50">
              <div className="flex w-1/3">
                <img src={roadIcon} alt="" />
                <div className="ml-10">
                  <p className="leading-4 mb-1">Mileage</p>
                  <p className="text-xl font-bold leading-5">
                    {currentCar.mileage}km
                  </p>
                </div>
              </div>
              <div className="flex w-1/3">
                <img src={calendarIcon} alt="" />
                <div className="ml-10">
                  <p className="leading-4 mb-1">First Registration</p>
                  <p className="text-xl font-bold leading-5">
                    {currentCar.year}
                  </p>
                </div>
              </div>
              <div className="flex w-1/3">
                <img src={carEngineIcon} alt="" />
                <div className="ml-10">
                  <p className="leading-4 mb-1">Power</p>
                  <p className="text-xl font-bold leading-5">338 kW (460 Hp)</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-start w-1/3">
                <img src={gearboxIcon} alt="" />
                <div className="ml-10">
                  <p className="leading-4 mb-1">Gearbox</p>
                  <p className="text-xl font-bold leading-5">
                    Automatic
                    <br /> transmission
                  </p>
                </div>
              </div>
              <div className="flex w-1/3">
                <img src={gasStationIcon} alt="" />
                <div className="ml-10">
                  <p className="leading-4 mb-1">Fuel</p>
                  <p className="text-xl font-bold leading-5">Petrol</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-25 rounded-xl bg-white w-full h-full px-20 pt-15">
            <p className="text-xl leading-5 font-bold mb-10">Tehnical data</p>
            <div className="w-full h-px bg-gray mb-20"></div>
            <div className="px-10 mb-20 flex">
              <div className="w-1/2">
                <p className="font-bold">Vehicle condition</p>
                <p className="font-bold my-25">Category</p>
                <p className="font-bold">Vehicle Number</p>
                <p className="font-bold my-25">Origin</p>
                <p className="font-bold">Mileage</p>
                <p className="font-bold my-25">Cubic Capacity</p>
                <p className="font-bold">Power</p>
              </div>
              <div className="w-1/2">
                <p>Accident-free</p>
                <p className="my-25">Sports Car / Coupe</p>
                <p>ahn99734</p>
                <p className="my-25">German edition</p>
                <p>28 km</p>
                <p className="my-25">2.979 ccm</p>
                <p>338 kW (460 Hp)</p>
              </div>
            </div>
            <div>
              <div className="w-full h-px bg-gray"></div>
              <p className="text-center py-20 text-mainColor cursor-pointer">
                Show all
              </p>
            </div>
          </div>
        </div>

        <div className="w-360 h-full bg-white px-30 py-20 rounded-xl">
          <p className="text-xl font-bold leading-5 mb-10">BMW M4</p>
          <p className="truncate mb-20">{currentCar.title}</p>
          <p className="text-2xl font-bold mb-10">€{currentCar.price}</p>
          <div className="w-full h-px bg-gray"></div>
          <p className="font-bold my-10">Autohaus Nordheim GmbH & Co. KG</p>
          <p className="text-sm mb-20">DE-74226 Nordheim bei Heilbronn</p>
          <p className="text-sm font-bold mb-20">Phone: +49 (0)7133 1809975</p>
          <div className="w-full h-50 rounded-xl flex items-center justify-center bg-mainColor cursor-pointer">
            <img src={mailIcon} alt="mail-icon" />
            <p className="text-sm font-bold text-white ml-10">Write Email</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
