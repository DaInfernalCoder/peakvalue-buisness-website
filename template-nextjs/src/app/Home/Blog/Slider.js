"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SingleBlog from "@/components/SingleBlog";
import { blogPosts } from "../../data/blogData";

export default function Sliders() {
  // Get the first 6 blog posts for the slider
  const featuredPosts = blogPosts.slice(0, 6);
  
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000 }}
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
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {featuredPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div style={{ height: '100%' }}>
              <SingleBlog
                slug={post.slug}
                image={post.image}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
