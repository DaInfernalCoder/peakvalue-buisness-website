import Form from "./Form";
import ContactBg from "../../../../public/images/contact-bg.jpg";

export default function Contact() {
  return (
    <>
      {/* <!-- Contact Area --> */}
      <section className="contact-area">
        <div className="content-area">
          <div
            className="left-col"
            style={{
              backgroundImage: `url(${ContactBg.src})`
            }}
          ></div>
          <div className="right-col">
            <div className="row">
              <div
                className="col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-12 wow animate__fadeInRight"
                data-wow-duration="1s"
              >
                <div className="contact-right">
                  <div className="top-content">
                    <h3>
                      <span>Contact</span>Request A Free Consulting
                    </h3>
                    <p>
                    Find out what your business is really worth and get a clear picture of how the selling process works with our expert help. We&apos;re here to guide you through buying or selling your business, and you can count on us to keep everything completely confidential.
                    </p>
                  </div>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Area --> */}
    </>
  );
}
