import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./gallery.css";

function Gallery() {
  return (
    <>
      <div name="gallery"></div>

      <div className="container w-full text-center px-2 py-4 lg:px-16 bg-slate-200 dark:bg-sky-900 text-shades-200 dark:text-shades-150 mt-20 lg:mt-24">
        <p className="text-lg text-center lg:mt-12 mt-8 mb-4">Check Out Our</p>
        <h1 className="text-2xl text-center underline decoration-2 decoration-primary-200 underline-offset-8 my-6 font-bold">
          Gallery
        </h1>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src="/assets/img/bedroom.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/lounge1.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/lounge2.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/stairs3.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/bedroom2.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/stairs.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/environment.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/kidsRoom.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/mainHouse.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/stairs2.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/playArea.webp" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/sittingRoom.webp" alt="slide_image" />
          </SwiperSlide>
          <div className="hidden lg:block">
            <div className="slider-controler lg:flex gap-2 items-center hidden">
              <div className="swiper-button-prev slider-arrow">
                <IoIosArrowBack className="w-8 h-8" />
              </div>
              <div className="swiper-button-next slider-arrow w-fit">
                <IoIosArrowForward className="w-8 h-8" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Gallery;
