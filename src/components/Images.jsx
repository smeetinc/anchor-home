import React, { useEffect } from "react";
import "./image.css";
import AOS from "aos";
import "../aos/dist/aos.css";
const Images = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="images-container px-2">
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="image relative hover:scale-105 transition-all duration-500 ease-in-out"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={slide.src} alt={slide.description} loading="lazy" />
          <div className="absolute bottom-0 w-full h-fit py-2 bg-gray-400 bg-opacity-40 rounded-b-lg text-foundation-300 text-sm px-4 font-bold ">
            {slide.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
