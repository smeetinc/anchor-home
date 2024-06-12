import React, { useEffect } from "react";
import AOS from "aos";
import "../aos/dist/aos.css";

function Section() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div name="section"></div>
      <div className="w-full text-center px-2 py-4 lg:px-16 bg-slate-200 dark:bg-sky-900 text-shades-200 dark:text-shades-150 mt-20 lg:mt-24 overflow-x-hidden">
        <p className="my-4 font-medium">View Key</p>
        <h2 className="my-4 font-bold text-3xl">
          Sections of the Homes Available
        </h2>
        <div name="firstLounge"></div>
        <div className="flex flex-col lg:flex-row w-full h-fit  items-center my-8 ">
          <div
            className="w-fit h-fit rounded-s-lg"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <img
              src="assets/img/sittingRoom.webp"
              alt="first lounge"
              className="duration-1000 hover:scale-105 transition hover:duration-500 cursor-pointer w-full h-full object-contain shadow-lg rounded-md"
            />
          </div>
          <div className="w-full h-full  py-auto px-12 ">
            <h3
              className="text-left font-bold text-2xl my-4"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              First Lounge
            </h3>
            <p
              className="my-4 text-left font-medium text-lg"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              The First Lounge offers a cozy and inviting space for relaxation
              and socializing. With comfortable seating and a warm ambiance,
              it's the perfect place to unwind after a long day.
            </p>
          </div>
        </div>

        <div name="secondLounge"></div>
        <div className="flex flex-col-reverse lg:flex-row w-full h-fit  items-center my-8  ">
          <div className="w-full h-full  py-auto px-12 ">
            <h3
              className="text-left font-bold text-2xl my-4"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Second Lounge
            </h3>
            <p
              className="my-4 text-left font-medium text-lg"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              The Second Lounge provides an additional space for entertainment
              and activities. Equipped with modern amenities, it’s ideal for
              movie nights, games, or hosting guests.
            </p>
          </div>

          <div
            className="w-fit rounded-s-lg justify-self-end"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <img
              src="assets/img/lounge2.webp"
              alt="The second lounge"
              className="duration-1000 hover:scale-105 transition hover:duration-500 cursor-pointer w-full h-full object-contain shadow-lg rounded-md"
            />
          </div>
        </div>

        <div name="kitchen"></div>
        <div className="flex flex-col lg:flex-row w-full h-fit  items-center my-8 ">
          <div
            className="w-fit h-fit rounded-s-lg"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <img
              src="assets/img/kitchen.webp"
              alt="The Kitchen"
              className="duration-1000 hover:scale-105 transition hover:duration-500 cursor-pointer w-full h-full object-contain shadow-lg rounded-md"
            />
          </div>
          <div className="w-full h-full  py-auto px-12 ">
            <h3
              className="text-left font-bold text-2xl my-4"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Kitchen
            </h3>
            <p
              className="my-4 text-left font-medium text-lg"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              Our modern kitchen is fully equipped with state-of-the-art
              appliances, making it the heart of the home where delicious meals
              are prepared with care and love.
            </p>
          </div>
        </div>

        <div name="bedroom1"></div>
        <div className="flex flex-col-reverse lg:flex-row w-full h-fit  items-center my-8 ">
          <div className="w-full h-full  py-auto px-12 ">
            <h3
              className="text-left font-bold text-2xl my-4 "
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Bedroom 1
            </h3>
            <p
              className="my-4 text-left font-medium text-lg"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              Bedroom 1 offers a tranquil and comfortable space with ample
              natural light, perfect for restful nights and refreshing mornings.
            </p>
          </div>

          <div
            className="w-fit rounded-s-lg justify-self-end"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <img
              src="assets/img/bedroom.webp"
              alt="home one"
              className="duration-1000 hover:scale-105 transition hover:duration-500 cursor-pointer w-full h-full object-contain shadow-lg rounded-md"
            />
          </div>
        </div>
        <div name="bedroom2"></div>
        <div className="flex flex-col lg:flex-row w-full h-fit  items-center my-8 ">
          <div
            className="w-fit rounded-s-lg"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <img
              src="assets/img/bedroom2.webp"
              alt="home one"
              className="duration-1000 hover:scale-105 transition hover:duration-500 cursor-pointer w-full h-full object-contain shadow-lg rounded-md"
            />
          </div>
          <div className="w-full h-full  py-auto px-12 ">
            <h3
              className="text-left font-bold text-2xl my-4"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Bedroom 2
            </h3>
            <p
              className="my-4 font-medium text-lg text-left"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              Bedroom 2 is designed with comfort and style in mind, offering a
              serene retreat with modern furnishings and cozy bedding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
