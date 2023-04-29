import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center space-y-3 ">
        <div className="max-sm:text-7xl text-9xl font-black">404</div>
        <div className="text-2xl font-extrabold">Not Found</div>
        <div className="max-sm:text-center max-sm:w-[70vw] text-xl pb-14">
          The resource requested could not be found on this server!
        </div>
        <div className="bg-black text-white rounded px-3 py-1 font-bold">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </>
  );
};

export default Error;
