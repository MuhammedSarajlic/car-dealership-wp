import React from "react";
import { Navbar } from "../components";

const CarsList = () => {
  return (
    <>
      <Navbar />
      <div className="bg-siteBackground">
        <div className="py-50 w-full h-full px-150 flex">
          <div className="w-300 h-full mr-30">
            <div className="flex flex-col">
              <div className="bg-mainColor w-full h-50 flex items-center px-15 rounded-t-lg">
                <p className="text-lg text-white">Manufacturer & Model</p>
              </div>
              <div className="px-15 py-20 bg-white">
                <p className="font-bold">Manufacturer</p>
                <select
                  name="Manufacturer"
                  className="w-full h-40 mt-1 mb-10 outline-none bg-gray rounded-md"
                >
                  <option value="">Any</option>
                </select>
                <p className="font-bold">Model</p>
                <select
                  name="Model"
                  className="w-full h-40 mt-1 outline-none bg-gray rounded-md"
                >
                  <option value="">Any</option>
                </select>
              </div>
              <div className="bg-mainColor w-full h-50 flex items-center px-15">
                <p className="text-lg text-white">Vehicle Type & Performance</p>
              </div>
              <div className="w-full px-15 py-20 bg-white">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Convertible/Roadster
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    SUV/Pickup/SUV
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Station wagon
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Limousine
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Sports car/Coupe
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Van/Minibus
                  </label>
                </div>
                <div className="my-15">
                  <p className="font-bold text-sm">First Registration</p>
                  <div className="flex">
                    <select
                      name="Model"
                      className="w-1/2 h-40 mt-1 mr-20 outline-none bg-gray rounded-md"
                    >
                      <option value="">From</option>
                    </select>
                    <select
                      name="Model"
                      className="w-1/2 h-40 mt-1 outline-none bg-gray rounded-md"
                    >
                      <option value="">To</option>
                    </select>
                  </div>
                </div>
                <div className="mt-15">
                  <p className="font-bold text-sm">Kilometre</p>
                  <div className="flex">
                    <select
                      name="Model"
                      className="w-1/2 h-40 mt-1 mr-20 outline-none bg-gray rounded-md"
                    >
                      <option value="">From</option>
                    </select>
                    <select
                      name="Model"
                      className="w-1/2 h-40 mt-1 outline-none bg-gray rounded-md"
                    >
                      <option value="">To</option>
                    </select>
                  </div>
                </div>
                <div className="mt-15">
                  <p className="font-bold text-sm">Power</p>
                  <div className="flex">
                    <select
                      name="Model"
                      className="w-1/2 h-40 mt-1 mr-20 outline-none bg-gray rounded-md"
                    >
                      <option value="">From</option>
                    </select>
                    <select
                      name="Model"
                      className="w-1/2 h-40 mt-1 outline-none bg-gray rounded-md"
                    >
                      <option value="">To</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-mainColor w-full h-50 flex items-center px-15">
                <p className="text-lg text-white">Condition & Price</p>
              </div>
              <div className="w-full bg-white px-15 py-20">
                <p className="font-bold text-sm">Price</p>
                <div className="flex">
                  <select
                    name="Model"
                    className="w-1/2 h-40 mt-1 mr-20 outline-none bg-gray rounded-md"
                  >
                    <option value="">From</option>
                  </select>
                  <select
                    name="Model"
                    className="w-1/2 h-40 mt-1 outline-none bg-gray rounded-md"
                  >
                    <option value="">To</option>
                  </select>
                </div>
                <div className="mt-10">
                  <p className="text-sm font-bold mb-1.5">Vehicle Condition</p>
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      name="option1"
                      value=""
                      className="w-4 h-4 accent-mainColor"
                    />
                    <label for="option1" className="ml-1.5">
                      New
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="option1"
                      value=""
                      className="w-4 h-4 accent-mainColor"
                    />
                    <label for="option1" className="ml-1.5">
                      Used
                    </label>
                  </div>
                </div>
              </div>
              <div className="bg-mainColor w-full h-50 flex items-center px-15">
                <p className="text-lg text-white">Transmission & Fuel</p>
              </div>
              <div className="bg-white w-full px-15 py-20 rounded-b-lg">
                <p className="text-sm font-bold mb-1.5">Transmission</p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Automatic
                  </label>
                </div>
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Manual gearbox
                  </label>
                </div>
                <p className="text-sm font-bold mb-1.5">Fuel types</p>
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Petrol
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Diesel
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="option1"
                    value=""
                    className="w-4 h-4 accent-mainColor"
                  />
                  <label for="option1" className="ml-1.5">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-810 h-full">Cars list</div>
        </div>
      </div>
    </>
  );
};

export default CarsList;
