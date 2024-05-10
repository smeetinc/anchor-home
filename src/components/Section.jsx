import React from "react";

function Section() {
  return (
    <>
      <div name="section"></div>
      <div className="w-full text-center px-2 py-4 lg:px-16 bg-slate-200 dark:bg-sky-900 text-shades-200 dark:text-shades-150 mt-20 lg:mt-24">
        <p className="my-4">View Key</p>
        <h2 className="my-4 font-bold text-3xl">
          Sections of the Homes Available
        </h2>
        <div className="flex flex-col lg:flex-row w-fit h-fit  items-center my-8 bg-primary-200 text-white">
          <div className="w-fit h-fit rounded-s-lg">
            <img
              src="assets/img/img1.jpg"
              alt="home one"
              className="duration-1000 hover:scale-105 transition hover:duration-200 cursor-pointer w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-full  py-auto px-12 ">
            <h3 className="text-center font-bold text-2xl my-4">
              Sitting Room
            </h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              id quam ea laboriosam sint illum voluptatibus culpa odio
              voluptatem repudiandae.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-fit h-fit  items-center my-8 bg-primary-200 text-white">
          <div className="w-full h-full  py-auto px-12 ">
            <h3 className="text-center font-bold text-2xl my-4">Bed Room</h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              id quam ea laboriosam sint illum voluptatibus culpa odio
              voluptatem repudiandae.
            </p>
          </div>

          <div className="w-fit rounded-s-lg justify-self-end">
            <img
              src="assets/img/img1.jpg"
              alt="home one"
              className="duration-1000 hover:scale-105 transition hover:duration-200 cursor-pointer w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-fit h-fit  items-center my-8 bg-primary-200 text-white">
          <div className="w-fit rounded-s-lg">
            <img
              src="assets/img/img1.jpg"
              alt="home one"
              className="duration-1000 hover:scale-105 transition hover:duration-200 cursor-pointer w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-full  py-auto px-12 ">
            <h3 className="text-center font-bold text-2xl my-4">Garage</h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              id quam ea laboriosam sint illum voluptatibus culpa odio
              voluptatem repudiandae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
