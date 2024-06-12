import React, { useEffect, useRef, useCallback } from "react";
import "./Carousel.css"; // Make sure to create and import the CSS file
import { Link } from "react-scroll";

const Carousel = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  const showSlider = useCallback(
    (type) => {
      const sliderDom = sliderRef.current;
      const thumbnailDom = thumbnailRef.current;
      const carouselDom = carouselRef.current;

      const sliderItemsDom = sliderDom.querySelectorAll(".item");
      const thumbnailItemsDom = thumbnailDom.querySelectorAll(".item");

      if (type === "next") {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        showSlider("next");
      }, timeAutoNext);
    },
    [timeRunning, timeAutoNext]
  );

  useEffect(() => {
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [showSlider, timeAutoNext]);

  return (
    <>
      <div name="home"></div>

      <div
        className="bodyCarousel headerCarousel carousel w-full overflow-x-hidden"
        ref={carouselRef}
      >
        <div className="list" ref={sliderRef}>
          <div className="item bg-black bg-opacity-90">
            <img
              src="/assets/img/mainHouse.webp"
              alt="Slide 1"
              className="bg-primary-100"
            />
            <div className="content shadow-lg bg-black bg-opacity-75 px-8 py-8 w-full">
              <div className="author">WELCOME TO</div>
              <div className="text-xl lg:text-3xl font-bold my-2">ANCHOR'S</div>
              <div className="text-2xl lg:text-5xl font-extrabold uppercase text-primary-200 mb-2">
                Branston Lodge
              </div>
              <div className="des lg:text-lg font-medium">
                We provides high quality residential care to young people
                between the ages of 6 and 18.
              </div>
              <div className="buttons">
                <Link to="contact" smooth duration={500}>
                  <button className="bg-primary-100 text-white">
                    Connect with us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <img
              src="/assets/img/frontDoor.webp"
              alt="Slide 2"
              className="bg-primary-100"
            />
            <div className="content shadow-lg bg-black bg-opacity-75 px-8 py-8 w-full">
              <div className="author">WELCOME TO</div>
              <div className="text-xl lg:text-3xl font-bold my-2">ANCHOR'S</div>
              <div className="text-2xl lg:text-5xl font-extrabold uppercase text-primary-200 mb-2">
                Branston Lodge
              </div>
              <div className="des lg:text-lg font-medium">
                Our front door opens to a world of warmth and care for every
                young person.
              </div>
              <div className="buttons">
                <Link to="contact" smooth duration={500}>
                  <button>Connect with us</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <img
              src="/assets/img/outside.webp"
              alt="Slide 3"
              className="bg-primary-100"
            />
            <div className="content shadow-lg bg-black bg-opacity-75 px-8 py-8 w-full">
              <div className="author">WELCOME TO</div>
              <div className="text-xl lg:text-3xl font-bold my-2">ANCHOR'S</div>
              <div className="text-2xl lg:text-5xl font-extrabold uppercase text-primary-200 mb-2">
                Branston Lodge
              </div>
              <div className="des lg:text-lg font-medium">
                Experience the tranquility and beauty of our home's
                surroundings.
              </div>
              <div className="buttons">
                <Link to="contact" smooth duration={500}>
                  <button>Connect with us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          <div className="item ">
            <img
              src="/assets/img/mainHouse.webp"
              alt="Loading the main house..."
              className="bg-primary-200"
            />
            <div className="content">
              <div className="title text-shadow-lg font-bold text-sm text-primary-100 bg-white w-full p-2 bg-opacity-70">
                Main Building
              </div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item">
            <img
              src="/assets/img/frontDoor.webp"
              alt="Loading the Front door ..."
              className="bg-primary-200"
            />
            <div className="content">
              <div className="title text-shadow-lg font-bold text-sm text-primary-100 bg-white w-full p-2 bg-opacity-70">
                The Entrance
              </div>
            </div>
          </div>
          <div className="item">
            <img
              src="assets/img/outside.webp"
              alt="Loading outside ...."
              className="bg-primary-200"
            />
            <div className="content">
              <div className="title text-shadow-lg font-bold text-sm text-primary-100 bg-white w-full p-2 bg-opacity-70">
                Outside View
              </div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </>
  );
};

export default Carousel;
