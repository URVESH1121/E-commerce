import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 flex justify-between bg-gray-300 px-20 py-2 gap-5 max-sm:px-10 max-lg:mt-64   mt-24 ">
        <div className="max-md:w-[50vw] w-[25vw]">
          <div className="flex items-center gap-2 text-lg font-bold text-red-800">
            <div>
              <img className="w-8 rounded-full" src={Logo} alt="" />
            </div>
            <div>E-commerce</div>
          </div>
          <div className="max-md:w-[75vw] text-justify pt-2 pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, minima
            harum, ipsum ipsa adipisci officia a numquam atque repellat.
          </div>
        </div>
        <div className="max-md:w-[75vw] w-[25vw]">
          <div className="font-bold text-lg">| Contact Us</div>
          <div className="flex items-center gap-2 pl-2 pt-2">
            <IoLocationSharp />
            Ahmedabad
          </div>
          <div className="flex items-center gap-2 pl-2">
            <BsTelephoneFill />
            +91 9265695847
          </div>
          <div className="flex items-center gap-2 pl-2">
            <IoTimeSharp />
            Monday – Friday 9:00 AM – 5:00 PM
          </div>
          <div className="flex items-center gap-2 pl-2">
            <MdEmail />
            demo@gmail.com
          </div>
        </div>
        <div className="max-md:w-[50vw] w-[25vw]">
          <div className="font-bold text-lg">| Help & Support</div>
          <div className="flex flex-col pt-2">

          <Link to="/" className="pl-2">Shop</Link>
          <Link to="/about" className="pl-2">About Us</Link>
          <Link to="/contact" className="pl-2">Contact</Link>
          </div>
        </div>
        <div className="max-md:w-[50vw] w-[25vw]">
          <div className="font-bold text-lg">| News Letter</div>
          <div className=" flex gap-2 pl-2 pt-2">
            <input
              placeholder="Enter Your Email"
              className="bg-gray-400 placeholder-white px-2 py-2 max-sm:w-[45vw] w-[35vw] rounded-md"
              type="email"
              name=""
              id=""
            />
            <button className="bg-gray-500 rounded-md px-2 text-white">
              Subscribe
            </button>
          </div>
          <p className="max-sm:w-[75vw] pl-2 pt-1">
            By signing up, you agree to our Terms & Conditions and Privacy
            Policy
          </p>
          <div>
            <div className="font-bold text-lg mt-5">| Socials</div>
            <div className="flex gap-5 pl-2 text-3xl pt-2">
              <div className="text-blue-500">
                <a href="https://www.facebook.com/login/"><BsFacebook /></a> 
              </div>
              <div className="text-pink-600">
                <a href="https://www.instagram.com/"><BsInstagram /></a>
              </div>
              <div className="text-blue-400">
               <a href="https://www.twitter.com/"><BsTwitter /></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr  className=""/>
      <div className="max-sm:flex-col max-sm:text-center  flex justify-between max-sm:px-10  px-20 bg-gray-300 py-5">
        <div>copyright © E-commerce 2023</div>
        <div className="max-sm:gap-1 max-sm:justify-center flex gap-5">
          <div>Privacy Policy</div>
          <div>|</div>
          <div>Terms & Conditions</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
