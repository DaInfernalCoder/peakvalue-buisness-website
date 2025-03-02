"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import ClientImg1 from "../../../../public/images/client/client-1.jpg";
import ClientImg2 from "../../../../public/images/client/client-2.jpg";
import ClientImg3 from "../../../../public/images/client/client-3.jpg";

export default function Sliders() {
  const [clientSliders, setclientSliders] = useState([
    {
      id: "slider1",
      img: ClientImg1,
    },
    {
      id: "slider2",
      img: ClientImg2,
    },
    {
      id: "slider3",
      img: ClientImg3,
    },
  ]);
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-5xl mx-auto px-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="client-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            360: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            1140: {
              slidesPerView: 4,
            },
          }}
        >
          {clientSliders.map((singleSlider) => (
            <SwiperSlide key={singleSlider.id}>
              <div className="single-client flex items-center justify-center h-[110px] bg-white rounded-md p-4">
                <Image 
                  src={singleSlider.img} 
                  alt="Client logo" 
                  width={255} 
                  height={110}
                  className="object-contain max-h-[90px] w-auto mx-auto"
                  style={{ objectFit: 'contain' }} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}
