import React from "react";
import { BiHappyHeartEyes } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <div name="home"></div>
      <div className="w-full px-4 py-4 mt-20 lg:mt-24">
        <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-10">
          <div className="my-4 lg:max-w-750 lg:px-10 lg:mr-24">
            <p className="my-2 font-medium">Welcome To</p>
            <h3 className="text-3xl font-bold my-4 lg:text-5xl">
              Branston Lodge
            </h3>
            <p className="text-justify my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              assumenda veritatis harum cupiditate sapiente, aliquam, sed
              voluptatibus magni tempore neque quia temporibus rerum quod eum
              molestias consectetur veniam culpa rem?
            </p>
            <div className="mt-6 mb-4">
              <p className="text-lg font-semibold">
                Call us 07900 530285 or email
                enquiries@anchorcareandeducation.co.uk
              </p>
              <p>For any question or concern </p>
            </div>
            <div>
              <Link to="section" smooth duration={500}>
                <button className="bg-primary-200 text-white py-2 px-3 rounded-xl">
                  View Sections
                </button>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="bg-primary-200 w-full p-4 rounded-lg">
            <img
              src="/assets/img/mainHouse.webp"
              alt="house for hero section"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center my-4 px-4">
          <div className="flex items-center gap-3">
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
          <div className="flex items-center gap-3">
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
          <div className="flex items-center gap-3">
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
