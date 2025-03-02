"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SingleBlog from "@/components/SingleBlog";

import BlogImg1 from "../../../../public/images/blog/blog-1.jpg";
import BlogImg2 from "../../../../public/images/blog/blog-2.jpg";
import BlogImg3 from "../../../../public/images/blog/blog-3.jpg";
import BlogImg4 from "../../../../public/images/blog/blog-4.jpg";

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
            date="Mar 10"
            title="Understanding Business Valuation: Key Factors That Determine Your Business's Worth"
            excerpt="Learn about the critical elements that influence your business valuation."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg2}
            date="Mar 5"
            title="Preparing Your Business for Sale: A Strategic Guide"
            excerpt="Discover the essential steps to prepare your business for a successful sale."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg3}
            date="Feb 28"
            title="Due Diligence in Business Acquisition: What Buyers Need to Know"
            excerpt="A comprehensive guide to conducting proper due diligence when acquiring a business."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg4}
            date="Feb 20"
            title="Maximizing Business Value: Pre-Sale Improvements"
            excerpt="Practical strategies for enhancing your business's value before selling."
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
