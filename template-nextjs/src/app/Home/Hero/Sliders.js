"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import HeroBg1 from "../../../../public/images/hero-bg-1.jpg";
import HeroBg2 from "../../../../public/images/hero-bg-2.jpg";
import HeroBg3 from "../../../../public/images/hero-bg-3.jpg";
import ModalVideo from "react-modal-video";

export default function Sliders() {
  const [isOpen, setOpen] = useState(false);

  const [heroSliders, setheroSliders] = useState([
    {
      id: "slider1",
      bgImg: HeroBg1,
      title: "The Best Solutions to Start Your Own Business",
      subTitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      button: {
        text: "Get Started",
        link: "/services",
      },
    },
    {
      id: "slider2",
      bgImg: HeroBg2,
      title: "The Best Solutions to Start Your Own Business",
      subTitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      button: {
        text: "Viwe Portfolio",
        link: "/portfolio",
      },
    },
    {
      id: "slider3",
      bgImg: HeroBg3,
      title: "The Best Solutions to Start Your Own Business",
      subTitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      button: {
        text: "Read Articles",
        link: "/blog",
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
                    <div className="hero-content">
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
                        <div className="video-main">
                          <div className="promo-video">
                            <div className="waves-block">
                              <div className="waves wave-1"></div>
                              <div className="waves wave-2"></div>
                              <div className="waves wave-3"></div>
                            </div>
                          </div>
                          <button
                            className="video video-popup mfp-iframe"
                            onClick={() => setOpen(true)}
                          >
                            <i className="fa fa-play"></i>
                          </button>
                        </div>
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
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="pNje3bWz7V8"
        onClose={() => setOpen(false)}
      />
      {/* <!-- End Hero Area --> */}
    </>
  );
}
