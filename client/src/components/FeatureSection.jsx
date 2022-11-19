import React from "react";
import rightArrow from "../images/FeatureSectionImages/rightArrow.png";
import { Link } from "react-router-dom";

const FeatureSection = ({ carsCollection }) => {
  return (
    <div className="mt-82">
      <p className="text-2xl text-center text-mainColor">
        Check out our recent cars
      </p>
      <h2 className="text-7xl text-center font-bold uppercase">Feature Car</h2>
      <div className="px-150 w-full h-453 my-100">
        <div className="bg-white w-full h-full flex">
          {carsCollection.map(
            (car, i) =>
              i < 3 && (
                <Link
                  key={car.id}
                  to={`/cars/${car.id}`}
                  className="w-1/3 h-453 bg-mainColor mr-15 rounded-xl overflow-hidden"
                >
                  <img
                    src={car.displayImageUrl}
                    alt="feature-img"
                    className="h-1/2 w-full"
                  />
                  <div className="h-1/2 p-17">
                    <p className="text-white text-xl mb-10">{car.title}</p>
                    <div className="w-full h-px bg-white"></div>
                    <p className="text-white text-xl my-10">Year: {car.year}</p>
                    <p className="text-white text-xl mb-10">
                      Mileage: {car.mileage} km
                    </p>
                    <div className="w-full h-px bg-white"></div>
                    <p className="text-white text-2xl mt-10">€ {car.price}</p>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
      <div className="flex px-150 items-center justify-center">
        <div className="h-0.5 w-1/2 bg-grayline"></div>
        <Link
          to="/cars"
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
