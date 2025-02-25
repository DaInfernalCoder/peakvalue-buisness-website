import bgImg from "../../../../public/images/testimonial/testimonial-bg.jpg";
import Sliders from "./Sliders";

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
              <div className="col-12">
                <Sliders />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Area --> */}
    </>
  );
}
