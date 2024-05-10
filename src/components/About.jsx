import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

function About() {
  return (
    <>
      <div name="about"></div>
      <div className="w-full px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 lg:mt-24">
        <div className="hidden lg:flex items-center gap-4 ">
          <div className="grid grid-cols-1 rounded-lg">
            <div className="rounded-lg w-fit h-fit">
              <img
                src="/assets/img/img1.jpg"
                className="w-full h-full object-contain my-2 rounded-lg"
                alt="home one"
              />
            </div>
            <div className="rounded-lg w-fit h-fit">
              <img
                src="assets/img/img1.jpg"
                className="w-full h-full object-contain my-2 rounded-lg"
                alt="home one"
              />
            </div>
          </div>
          <div className="rounded-lg">
            <img
              src="assets/img/img1.jpg"
              className="w-full h-full object-contain rounded-lg"
              alt="home one"
            />
          </div>
        </div>
        <div>
          <h3 className="text-primary-200 font-medium text-lg my-4">How We</h3>
          <h1 className="text-3xl font-semibold my-4">
            Make Our Clients Happy.
          </h1>
          <p className="text-shades-150 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum facilis dolor blanditiis dignissimos rem a temporibus
            inventore eos aliquam autem officia, repudiandae aliquid officiis
            accusantium? Quos ex excepturi quisquam exercitationem laudantium
            eaque quasi aliquam, dolorem, quae eveniet minima modi.
          </p>

          <div className="my-4 relative group w-fit h-fit">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-primary-200  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative flex items-center gap-6 rounded-lg bg-primary-200 py-2 px-3 w-full h-full">
              <FaRegPlayCircle
                size={30}
                className="text-red-300 group-hover:rotate-180 transition duration-200"
              />
              <span className="text-white group-hover:text-xl transition duration-200">
                Check our YouTube Page
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4 text-center">
        <h2 className="font-bold text-3xl">Meet Our Super Dedicated Team</h2>
        <p className="text-shades-150">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi et
          amet optio.
        </p>
        <p>******TEAM PICTURES AND INFO HERE******</p>
      </div>
    </>
  );
}

export default About;
