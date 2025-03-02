"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

export default function Sliders() {
  const [testimonialSliders, settestimonialSliders] = useState([
    {
      id: "slider1",
      name: "Don Babineaux",
      designation: "Former President and Co-Owner, Century Instruments & Machine Co., Inc.",
      image: "/images/testimonial/testi-1.jpg",
      description:
        "\"One of your key strengths lies in your ability to navigate complex negotiations with ease, as you consistently exhibited a deep understanding of the industry landscape, which translated into well-informed decision-making throughout the process.  Your strategic approach, attention to detail, and comprehensive understanding of the market dynamics played a pivotal role in ensuring a seamless and profitable transaction in the sale of our business.\""
    },
    {
      id: "slider2",
      name: "Gonzalo & Yasmin Alvarado",
      designation: "President, Sweet Milly LLC",
      image: "/images/testimonial/testi-2.jpg",
      description:
        "\"Your great enthusiasm, empathy and security , managed to understand what we were looking for and transmit the confidence we needed to achieve it. We are extremely grateful for having counted on your services, since beyond limiting itself to its functions, it managed to exceed our expectations, becoming a fundamental part of achieving the necessary agreements between all parties.\"",
    },
    {
      id: "slider3",
      name: "Surangi Udugama",
      designation: "CEO, Hanna and Peige Sriwardane Company LLC",
      image: "/images/testimonial/testi-3.jpg",
      description:
        "\"You exhibited a genuine interest in understanding our vision and needs as though we felt that we are talking to a trusted friend rather than a business broker. Your commitment to learning about our goals and aspirations for the business truly sets you apart. We wholeheartedly recommend you to anyone seeking a business advisor in selling or buying a business who genuinely cares about their clients success.\"",
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
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <div className="testimnial-left">
                  <div className="testimonial-bottom text-center">
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
