"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import TestimonialImg1 from "../../../../public/images/testimonial/testi-1.jpg";
import TestimonialImg2 from "../../../../public/images/testimonial/testi-2.jpg";
import TestimonialImg3 from "../../../../public/images/testimonial/testi-3.jpg";

export default function Sliders() {
  const [testimonialSliders, settestimonialSliders] = useState([
    {
      id: "slider1",
      image: TestimonialImg1,
      name: "John Smith",
      designation: "Freelancer, Upwork",
      description:
        "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we boast a years and years of service.",
    },
    {
      id: "slider2",
      image: TestimonialImg2,
      name: "Poppy Jany",
      designation: "Digital Marketer",
      description:
        "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we boast a years and years of service.",
    },
    {
      id: "slider3",
      image: TestimonialImg3,
      name: "William Kanal",
      designation: "Seo Expert",
      description:
        "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we boast a years and years of service.",
    },
  ]);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay, Pagination]}
        className="testimnial-slider"
      >
        {testimonialSliders.map((singleSlider) => (
          <SwiperSlide className="testimonial-item" key={singleSlider.id}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="testimnial-left">
                  <div className="testimonial-head">
                    <Image
                      src={singleSlider.image}
                      alt="#"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="testimonial-bottom">
                    <h6>{singleSlider.name}</h6>
                    <p>{singleSlider.designation}</p>
                  </div>
                  <ul className="testimonial-social">
                    <li>
                      <Link href="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <div className="testimonial-right">
                  <p>{singleSlider.description}</p>
                  <div className="stars">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
