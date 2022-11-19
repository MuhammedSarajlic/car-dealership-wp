import React from "react";
import { Link } from "react-router-dom";

const ListedCars = ({ carsCollection }) => {
  return (
    <div className="bg-white w-810 h-full rounded-lg p-30">
      <div className="flex justify-between mb-20">
        <p className="text-2xl">{carsCollection.length} cars matching</p>
        <div>
          <select
            name="sorting-type"
            className="outline-none bg-gray h-35 w-250 rounded-md"
          >
            <option value="">Default sorting</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        {carsCollection.map((car, i) => (
          <div key={car.id}>
            <Link
              to={`/cars/${car.id}`}
              className="flex justify-between w-full h-120 my-30"
            >
              <div className="w-190 mr-10">
                <img
                  src={car.displayImageUrl}
                  alt="desc_img"
                  className="w-190 h-120"
                />
              </div>
              <div className="w-1/2 h-120">
                <p className="text-xl font-bold leading-6 mb-10">{car.title}</p>
                <p className="text-sm leading-4 mb-10">{car.specification}</p>
                <p className="text-base leading-5">{car.description}</p>
              </div>
              <div className="w-1/5 h-full">
                <p className="text-right text-xl font-bold">€{car.price}</p>
              </div>
            </Link>
            <div className="h-0.5 w-full bg-gray"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedCars;
