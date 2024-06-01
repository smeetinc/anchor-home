import React, { useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import AOS from "aos";
import "../aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div name="about"></div>
      <div className="w-full px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 lg:mt-24">
        <div className="hidden lg:flex items-center gap-4 ">
          <div className="grid grid-cols-2 gap-2 rounded-lg">
            <div>
              <div className="rounded-lg w-fit h-fit">
                <img
                  src="/assets/img/lounge1.webp"
                  className="w-full h-full object-contain my-2 rounded-lg"
                  alt="home one"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="800"
                />
              </div>
              <div className="rounded-lg w-fit h-fit">
                <img
                  src="assets/img/bedroom.webp"
                  className="w-full h-full object-contain my-2 rounded-lg"
                  alt="home one"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="800"
                />
              </div>
            </div>
            <div className="rounded-lg">
              <img
                src="assets/img/playArea.webp"
                className="w-full h-full rounded-lg my-2"
                alt="home one"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              />
            </div>
          </div>
        </div>
        <div>
          <h3
            className="text-primary-200 font-medium text-lg my-4"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            How We
          </h3>
          <h1
            className="text-3xl font-semibold my-4"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            Make Our Clients Happy.
          </h1>
          <p
            className="text-shades-150 mb-3"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum facilis dolor blanditiis dignissimos rem a temporibus
            inventore eos aliquam autem officia, repudiandae aliquid officiis
            accusantium? Quos ex excepturi quisquam exercitationem laudantium
            eaque quasi aliquam, dolorem, quae eveniet minima modi.
          </p>

          <div
            className="my-4 relative group w-fit h-fit cursor-pointer"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-100 to-primary-200  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative flex items-center gap-6 rounded-lg bg-primary-200 py-2 px-3 w-full h-full">
              <FaRegPlayCircle
                size={30}
                className="text-red-300 group-hover:rotate-180 transition duration-200"
              />
              <span className="text-white transition duration-200">
                Check our YouTube Page
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4 text-center">
        <h2
          className="font-bold text-3xl"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Meet Our Super Dedicated Team
        </h2>
        <p
          className="text-shades-150"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi et
          amet optio.
        </p>
        <div className="flex justify-center items-center my-4">
          <div className="grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-3 px-2 lg:px-0">
            <div
              className="w-fit h-fit bg-black rounded-lg"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div>
                <img
                  src="https://placehold.co/300x300.png"
                  alt="team one"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="bg-shades-200 text-white w-full h-full py-2">
                <h4 className="font-bold text-2xl my-2">John Doe</h4>
                <p className="text-sm font-medium">Head of department</p>
              </div>
            </div>

            <div
              className="w-fit h-fit bg-black"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <div>
                <img
                  src="https://placehold.co/300x300.png"
                  alt="team one"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-shades-200 text-white w-full h-full py-2">
                <h4 className="font-bold text-2xl my-2">John Doe</h4>
                <p className="text-sm font-medium">Head of department</p>
              </div>
            </div>

            <div
              className="w-fit h-fit bg-black"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="700"
            >
              <div>
                <img
                  src="https://placehold.co/300x300.png"
                  alt="team one"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-shades-200 text-white w-full h-full py-2">
                <h4 className="font-bold text-2xl my-2">John Doe</h4>
                <p className="text-sm font-medium">Head of department</p>
              </div>
            </div>

            <div
              className="w-fit h-fit bg-black"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img
                  src="https://placehold.co/300x300.png"
                  alt="team one"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-shades-200 text-white w-full h-full py-2">
                <h4 className="font-bold text-2xl my-2">John Doe</h4>
                <p className="text-sm font-medium">Head of department</p>
              </div>
            </div>

            <div
              className="w-fit h-fit bg-black"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img
                  src="https://placehold.co/300x300.png"
                  alt="team one"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-shades-200 text-white w-full h-full py-2">
                <h4 className="font-bold text-2xl my-2">John Doe</h4>
                <p className="text-sm font-medium">Head of department</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
