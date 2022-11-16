import React from "react";
import { Navbar, SearchFilter, ListedCars } from "../components";

const CarsList = () => {
  return (
    <>
      <Navbar />
      <div className="bg-siteBackground flex py-50 px-150">
        <SearchFilter />
        <ListedCars />
      </div>
    </>
  );
};

export default CarsList;
