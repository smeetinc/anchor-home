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
            <img src="image/bedroom2.webp" alt="Slide 1" className="" />
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">ANCHOR'S</div>
              <div className="topic uppercase text-primary-200">
                Branston Lodge
              </div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat. itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
              </div>
              <div className="buttons">
                <Link to="bedroom" smooth duration={500}>
                  <button className="bg-primary-100 text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="image/lounge2.webp" alt="Slide 2" />
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">ANCHOR'S</div>
              <div className="topic uppercase text-primary-200">
                Branston Lodge
              </div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
              </div>
              <div className="buttons">
                <Link to="lounge" smooth duration={500}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="image/mainHouse.webp" alt="Slide 3" />
            <div className="content shadow-lg bg-black bg-opacity-75 px-8 py-8 w-full">
              <div className="author">WELCOME TO</div>
              <div className="title">ANCHOR'S</div>
              <div className="topic uppercase text-primary-200">
                Branston Lodge
              </div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
              </div>
              <div className="buttons">
                <Link to="mainHouse" smooth duration={500}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="image/sittingRoom.webp" alt="Slide 4" />
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">ANCHOR'S</div>
              <div className="topic uppercase text-primary-200">
                Branston Lodge
              </div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
              </div>
              <div className="buttons">
                <Link to="sittingRoom" smooth duration={500}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          <div className="item">
            <img src="image/bedroom2.webp" alt="Thumbnail 1" />
            <div className="content">
              <div className="title text-shadow-lg font-bold text-lg">
                Bedroom
              </div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item">
            <img src="image/lounge2.webp" alt="Thumbnail 2" />
            <div className="content">
              <div className="title text-shadow-lg font-bold text-lg">
                {" "}
                Our Lounge
              </div>
            </div>
          </div>
          <div className="item">
            <img src="image/mainHouse.webp" alt="Thumbnail 3" />
            <div className="content">
              <div className="title text-shadow-lg font-bold text-lg">
                Main House
              </div>
            </div>
          </div>
          <div className="item">
            <img src="image/sittingRoom.webp" alt="Thumbnail 4" />
            <div className="content">
              <div className="title text-shadow-lg font-bold text-lg">
                Sitting Room
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
