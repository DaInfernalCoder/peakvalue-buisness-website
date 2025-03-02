import bgImg from "../../../../public/images/testimonial/testimonial-bg.jpg";
import Sliders from "./Sliders";
import VideoTestimonial from "@/components/VideoTestimonial";

export default function Testimonial() {
  return (
    <>
      {/* <!-- Testimonial-Area --> */}
      <section className="testimonial-area">
        <div
          className="testimonial-bg"
          style={{
            backgroundImage: `url(${bgImg.src})`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="section-title">
                  <h3>Client Testimonials</h3>
                  <div className="line-bot"></div>
                  <p>
                    Read what our clients have to say about their experience working with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial main --> */}
        <div className="testimonial-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 col-12">
                <Sliders />
              </div>
              <div className="col-lg-4 col-md-5 col-12 mt-md-0 mt-5">
                <div className="video-testimonial-heading mb-4">
                  <h4 className="text-center">Watch Surangi&apos;s Story</h4>
                </div>
                <VideoTestimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Area --> */}
    </>
  );
}
