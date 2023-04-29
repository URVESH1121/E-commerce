import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Cartcontext } from "../App";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { cart } = useContext(Cartcontext);

  function showMenu() {
    setMenu(!menu);
  }
  return (
    <>
      <div className=" flex justify-between max-sm:px-5 max-lg:px-14 px-24 py-5 bg-gray-300 fixed w-full top-0 z-10">
        <div className="flex items-center gap-2 text-lg font-bold text-red-800">
          <img className="w-8 rounded-full" src={Logo} alt="" />
          E-Commerce
        </div>
        <div>
          <ul className="max-md:hidden flex gap-20 text-lg font-semibold">
            <Link className="text-red-800 font-black" to="/">
              Home
            </Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
          </ul>
        </div>
        <div className="flex gap-6 text-2xl ">
          <div className="relative">
            <Link to="/cart">
              <button className="absolute z-10 bg-red-800 w-5 h-5 text-white text-[10px] flex justify-center items-center rounded-full -top-2 -right-3">
                {cart.length}
              </button>
              <FaShoppingCart />
            </Link>
          </div>
          <div onClick={showMenu} className="md:hidden">
            <FaBars />
          </div>
        </div>
      </div>

      {/* Mobile-menu  */}
      {menu ? (
        <div className="fixed w-full">
          <ul className="max-md:flex bg-gray-300 flex-col px-14 hidden  text-lg font-semibold   max-md:mt-16 mt-20">
            <Link className="text-red-800 font-black" to="/">
              Home
            </Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
