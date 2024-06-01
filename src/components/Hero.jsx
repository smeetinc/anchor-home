import React from "react";
import { BiHappyHeartEyes } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <div className="w-full px-4 py-4  ">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4">
          <div
            className="flex items-center gap-3"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <div className="bg-red-500 w-fit h-fit rounded-full p-2 text-white">
              <BiHappyHeartEyes size={30} />
            </div>
            <div>
              <h4 className="font-medium text-lg">Over 10,000 Happy Clients</h4>
              <p className="text-foundation-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-3"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="bg-green-600 w-fit h-fit rounded-full p-2 text-white">
              <GiHomeGarage size={30} />
            </div>
            <div>
              <h4 className="font-medium text-lg">Best Homes</h4>
              <p className="text-foundation-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-3"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="bg-secondary-500 w-fit h-fit rounded-full p-2 text-white">
              <RiTeamLine size={30} />
            </div>
            <div>
              <h4 className="font-medium text-lg">Team Work</h4>
              <p className="text-foundation-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
