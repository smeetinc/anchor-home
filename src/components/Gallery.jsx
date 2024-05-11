import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./gallery.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Gallery() {
  return (
    <>
      <div name="gallery"></div>
      <div className="w-full text-center px-2 py-4 lg:px-16   mt-20 lg:mt-24 overflow-x-hidden swiperContain">
        <p class="text-lg text-center lg:mt-12 mt-8 mb-4">Check Out Our</p>
        <h1 class="text-2xl text-center underline decoration-2 decoration-primary-200 underline-offset-8 my-6 font-bold">
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
          <div className="slider-controler ">
            <div className="swiper-button-prev slider-arrow dark:bg-white dark:text-primary-100">
              <IoIosArrowBack className="" />
            </div>
            <div className="swiper-button-next slider-arrow dark:bg-white dark:text-primary-100">
              <IoIosArrowForward />
            </div>
            <div className="swiper-pagination hidden md:block"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Gallery;
