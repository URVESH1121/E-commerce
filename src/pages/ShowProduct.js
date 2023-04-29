import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Data from "../component/Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../ShowProduct.css";
import { Cartcontext } from "../App";
import { useEffect } from "react";

const ShowProduct = () => {
  const { title } = useParams();

const {addToCart} = useContext(Cartcontext)

  const filterData = Data.filter((item) => item.title === title);
  //   const [counter, setCounter] = useState(1);

  // const incrementCounter = () => {
  //   setCounter(counter + 1);
  // };

  // const decrementCounter = () => {
  //   if (counter !== 0) {
  //     setCounter(counter - 1);
  //   }
  // };

  useEffect(()=> {
    window.scrollTo(0,0)
  })

  // console.log(filterData);
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col max-lg:mt-52 max-md:mt-32  max-sm:mt-64 pt-24">
      {filterData.map((val) => {
        return (
          <>
            <div className="max-lg:flex-col flex justify-center items-center gap-10 ">
              <div>
                <img
                  className=" max-md:h-[60vh] max-lg:w-[70vw] max-lg:h-[70vh]   w-[35vw] h-[70vh] border-2 max-md:p-8 p-14 rounded "
                  src={val.image}
                  alt="img"
                />
              </div>

              <div className="max-lg:w-[70vw] w-[40vw] ">
                <h1 className="font-black text-2xl pb-3">{val.title}</h1>
                <div className="pb-3">
                  <span className="bg-green-500 text-white font-bold rounded px-1 ">
                    {val.rating.rate}
                  </span>
                  <span className="ml-2 text-red-800">
                    ({val.rating.count})
                  </span>
                </div>
                <h2 className="font-black text-red-800 text-2xl pb-10">
                  ${val.price}
                </h2>

                <div className="text-red-800 font-bold pb-3">Details:</div>
                <div className="cutoff-text   mb-2  font-semibold">
                  {val.description}
                </div>
                <input
                  type="checkbox"
                  className="expand-btn mb-10 font-semibold "
                />

                <div className="max-sm:flex-col flex gap-10 max-sm:items-start items-center">
                  {/* <span className="font-bold text-xl">
                    Quality:
                    <span className="bg-gray-200 text-xl font-bold  rounded px-3 py-2 ">
                     
                      <button onClick={decrementCounter} className="text-2xl">
                        -
                      </button>
                      {counter}
                      <button onClick={incrementCounter} className="text-2xl">
                        +
                      </button>
                    </span>
                  </span> */}

                  <button onClick={() => addToCart(val)} className="bg-red-800 hover:text-red-800 transition  duration-300 ease-in-out hover:bg-white border-2 border-red-800 hover:border-red-800 text-white rounded px-3 py-2 flex  items-center">
                    <div className="mr-2">
                      <FaShoppingCart />
                    </div>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <Link to="/" className=" flex justify-center max-sm:mb-72 pt-10">
              <button className="bg-red-800 text-white px-3 py-2 rounded">
                Back To Home
              </button>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default ShowProduct;
