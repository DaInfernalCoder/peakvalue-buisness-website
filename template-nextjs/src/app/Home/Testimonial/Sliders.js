"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import ClientImg1 from "../../../../public/images/client/client-1.jpg";
import ClientImg2 from "../../../../public/images/client/client-2.jpg";

export default function Sliders() {
  const [testimonialSliders, settestimonialSliders] = useState([
    {
      id: "slider1",
      image: ClientImg1,
      name: "Don Babineaux",
      designation: "Former President and Co-Owner",
      description:
        "\"Sunny's expertise was game changing for selling our business. Highly reccomend for any business owner looking to sell their business!\""
    },
    {
      id: "slider2",
      image: ClientImg2,
      name: "Gonzalo & Yasmin Alvarado",
      designation: "President, Sweet Milly LLC",
      description:
        "\"We could not have sold our business without Sunny's help! He was a great partner.\"",
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
