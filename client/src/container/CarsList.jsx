import React from "react";
import { Navbar, SearchFilter, ListedCars } from "../components";

const CarsList = ({ carsCollection }) => {
  return (
    <>
      <Navbar />
      <div className="bg-siteBackground flex py-50 px-150">
        <SearchFilter />
        <ListedCars carsCollection={carsCollection} />
      </div>
    </>
  );
};

export default CarsList;
