import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="bg-black text-white px-2 lg:px-8 py-10">
      <div className="w-full text-left lg:text-center my-10">
        <div>
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <img
              src="assets/img/logo-light.svg"
              alt="Anchor Homes logo"
              className="w-20 h-20 object-contain lg:mx-auto"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-5 ml-4 lg:ml-0 lg:inline-block lg:space-x-4 mt-3 mb-5">
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <span>Home</span>
          </Link>
          <Link to="about" smooth duration={500} className="cursor-pointer">
            <span>About Us</span>
          </Link>
          <Link to="section" smooth duration={500} className="cursor-pointer">
            <span>Section</span>
          </Link>
          <Link to="gallery" smooth duration={500} className="cursor-pointer">
            <span>Gallery</span>
          </Link>
          <Link to="/contact" smooth duration={500} className="cursor-pointer">
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start ml-4 lg:ml-0 lg:items-center mt-4 mb-9">
        <p className="mt-16 lg:mt-0">
          &copy; 2024 Anchor Homes. All rights reserved.
        </p>
        <div className="flex flex-col gap-6 lg:flex-row">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
