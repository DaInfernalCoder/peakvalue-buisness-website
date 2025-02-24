"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SingleBlog from "@/components/SingleBlog";

import BlogImg1 from "../../../../public/images/blog/blog-1.jpg";
import BlogImg2 from "../../../../public/images/blog/blog-2.jpg";
import BlogImg3 from "../../../../public/images/blog/blog-3.jpg";
import BlogImg4 from "../../../../public/images/blog/blog-4.jpg";
import AdminImg1 from "../../../../public/images/blog/admin/admin-1.jpg";
import AdminImg2 from "../../../../public/images/blog/admin/admin-2.jpg";
import AdminImg3 from "../../../../public/images/blog/admin/admin-3.jpg";

export default function Sliders() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="blog-slider"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <SingleBlog
            image={BlogImg1}
            date="Sep 25"
            title="The Best Dolor Sitamet Consectetur Adipiscing"
            adminImg={AdminImg1}
            adminTitle="Michael"
            comments="15 comments"
            reviews="20"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg2}
            date="Sep 25"
            title="Business is Pulvinar Metuseu Venenatis pellen Praesent"
            adminImg={AdminImg2}
            adminTitle="Michael"
            comments="30 comments"
            reviews="34"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg3}
            date="Aug 25"
            title="Behind the Word Muntains, Far From the Countries"
            adminImg={AdminImg3}
            adminTitle="Michael"
            comments="39 comments"
            reviews="50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg4}
            date="Jul 10"
            title="Consulting Needs the Big Oxmox advised Bestania"
            adminImg={AdminImg1}
            adminTitle="Michael"
            comments="49 comments"
            reviews="58"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
