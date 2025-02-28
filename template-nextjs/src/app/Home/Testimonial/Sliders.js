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
        "\"One of Sunny’s key strengths lies in his ability to navigate complex negotiations with ease, as you consistently exhibited a deep understanding of the industry landscape, which translated into well-informed decision-making throughout the process.  Your strategic approach, attention to detail, and comprehensive understanding of the market dynamics played a pivotal role in ensuring a seamless and profitable transaction in the sale of our business.\""
    },
    {
      id: "slider2",
      image: ClientImg2,
      name: "Gonzalo & Yasmin Alvarado",
      designation: "President, Sweet Milly LLC",
      description:
        "\"Sunny with great enthusiasm, empathy and security , managed to understand what we were looking for and transmit the confidence we needed to achieve it. We are extremely grateful for having counted on Sunny’s services, since beyond limiting itself to its functions, it managed to exceed our expectations, becoming a fundamental part of achieving the necessary agreements between all parties.\"",
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
