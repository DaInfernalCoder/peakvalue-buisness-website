"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import HeroBg1 from "../../../../public/images/hero-bg-1.jpg";
import HeroBg2 from "../../../../public/images/hero-bg-2.jpg";
import HeroBg3 from "../../../../public/images/hero-bg-3.jpg";

export default function Sliders() {
// TODO: edit the sliders and link buttons to the different pages in the nav bar 

  const [heroSliders, setheroSliders] = useState([
    {
      id: "slider1",
      bgImg: HeroBg1,
      title: "We Redefine What It Means to Be Business Advisors",
      subTitle:
        "Elevate your business strategy with our expert consultation services. Schedule a session with our advisors to explore tailored solutions for your business challenges.",
      button: {
        text: "Book Consultation",
        link: "/book-consultation",
      },
    },
    {
      id: "slider2",
      bgImg: HeroBg2,
      title: "We do Business Advisory Better",
      subTitle:
        "Connect with our team of experienced business professionals who are ready to help you navigate complex business landscapes and achieve sustainable growth.",
      button: {
        text: "Contact Us",
        link: "/contact",
      },
    },
    {
      id: "slider3",
      bgImg: HeroBg3,
      title: "Where Advisory Services Meet Actionable Results",
      subTitle:
        "Discover our proven methodology that transforms strategic insights into measurable outcomes. Learn more about how our structured process drives business success.",
      button: {
        text: "Our Process",
        link: "/process",
      },
    },
  ]);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <section className="hero-area">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay, Pagination]}
          className="hero-slider"
        >
          {heroSliders.map((singleSlider) => (
            <SwiperSlide
              className="single-slider"
              style={{
                backgroundImage: `url(${singleSlider.bgImg.src})`
              }}
              key={singleSlider.id}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="hero-content" style={{ color: '#fff' }}>
                      <h1>{singleSlider?.title}</h1>
                      <p>{singleSlider?.subTitle}</p>
                      {/* <!-- Slider Button --> */}
                      <div className="button">
                        <a
                          href={singleSlider?.button.link}
                          className="theme-btn"
                        >
                          {singleSlider?.button.text}
                        </a>
                      </div>
                      {/* <!-- End Slider Button --> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* <!-- End Hero Area --> */}
    </>
  );
}
