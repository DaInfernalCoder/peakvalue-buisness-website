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
      designation: "Former President and Co-Owner, Century Instruments & Machine Co., Inc.",
      description:
        "\"Sunny's enthusiasm, empathy and confidence were exactly what we needed. He quickly understood our goals and gave us the reassurance we were looking for throughout the process. We're incredibly thankful we chose to work with Sunny - he went far beyond just doing his job and truly exceeded our expectations. What really stands out is how he became essential in helping all parties reach the necessary agreements. He wasn't just a service provider, but a crucial partner in our success.\""
    },
    {
      id: "slider2",
      image: ClientImg2,
      name: "Gonzalo & Yasmin Alvarado",
      designation: "President, Sweet Milly LLC",
      description:
        "\"Working with Sunny was a game-changer for our business sale. He has this amazing ability to handle complex negotiations like they're second nature. What impressed me most was how deeply he understood our industry - it wasn't just surface knowledge, but real insight that led to smart decisions throughout the entire process. Sunny's strategic thinking, eye for detail, and grasp of market dynamics were instrumental in making our transaction both smooth and profitable. I couldn't have asked for a better partner during such an important transition for our company.\"",
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
