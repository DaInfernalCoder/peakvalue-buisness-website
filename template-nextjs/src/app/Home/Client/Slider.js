"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import ClientImg1 from "../../../../public/images/client/client-1.jpg";
import ClientImg2 from "../../../../public/images/client/client-2.jpg";
import ClientImg3 from "../../../../public/images/client/client-3.jpg";
import ClientImg4 from "../../../../public/images/client/client-4.jpg";
import ClientImg5 from "../../../../public/images/client/client-5.jpg";

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
    {
      id: "slider4",
      img: ClientImg4,
    },
    {
      id: "slider5",
      img: ClientImg5,
    },
  ]);
  return (
    <>
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
            <div className="single-client">
              <Image src={singleSlider.img} alt="#" width={255} height={110} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
