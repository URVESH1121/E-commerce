import React from "react";
import Data from "../component/Data";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen } from "react-icons/bs";

const Design = () => {
  return (
    <>
      {Data.map((val) => {
        return (
          <div className=" shadow-lg hover:scale-105 transition duration-200 ease-in-out">
            <div className="border-2  border-gray-100 rounded-t-xl">
              <img
                className="w-[20vw] h-[30vh] max-sm:w-[50vw] max-sm:h-[50vh]  mx-auto pt-2  "
                src={val.image}
                alt="img"
              />
            </div>

            <div className="bg-gray-200 px-8 py-2 rounded-b-sm">
              <h1 className="h-[17vh] max-sm:h-[20vh] max-sm:text-lg font-semibold max-lg:text-base  text-lg">{val.title}</h1>
              <div>
                <span className="bg-green-500 text-white font-bold rounded px-1">
                  {val.rating.rate}
                </span>
                <span className="ml-2 text-red-800">({val.rating.count})</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-black text-red-800 text-lg">
                  ${val.price}
                </span>
                <span className="">
                  {/* {`/showproduct/${val.title}`} */}
                  <Link
                    to={`/product/${val.title}`}
                    className="bg-red-800 transition  duration-300 ease-in-out hover:text-red-800 hover:bg-white border-2 hover:border-red-800 max-sm:text-lg text-white rounded px-2 py-1 flex  items-center"
                  >
                    <div className=" mr-2">
                     <BsArrowsFullscreen />
                    </div>
                    More Detail
                  </Link>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Design;
