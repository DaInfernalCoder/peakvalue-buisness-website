import Image from "next/image";
import Link from "next/link";

import AboutImg from "../../../../public/images/about-img.png";

export default function About() {
  return (
    <>
      {/* <!-- About Area --> */}
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInLeft"
              data-wow-duration="1s"
            >
              {/* <!-- About image --> */}
              <div className="about-img" style={{ position: "relative", overflow: "hidden", maxWidth: "500px", margin: "0 auto" }}>
                <Image 

                  src={AboutImg} 
                  alt="About PeakValue" 
                  width={500} 
                  height={500} 
                  style={{ 
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px"
                  }} 
                  priority
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInRight"
              data-wow-duration="1.1s"
            >
              {/* <!-- About content --> */}
              <div className="about-content">
                <span>About PeakValue</span>
                <h2>
                  Your Trusted Partner in Business Transactions
                </h2>
                <p>
                  At PeakValue, we specialize in connecting business sellers with qualified buyers, 
                  providing expert guidance throughout the entire transaction process. 
                  Our professional team ensures a streamlined experience for both 
                  buying and selling businesses.
                </p>
                <div className="feature">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <i className="fa fa-briefcase"></i>
                    <div className="feature-content">
                      <h3>Expert Business Valuation</h3>
                      <p>
                        Professional business valuation services to help you 
                        understand your business&apos;s true market value and potential
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <i className="fa fa-code"></i>
                    <div className="feature-content">
                      <h3>Comprehensive Brokerage Services</h3>
                      <p>
                        End-to-end support for buying and selling businesses, 
                        including marketing, buyer screening, and transaction guidance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-theme-btn">
                  <Link href="/about-us" className="theme-btn">
                    More about us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Area -->	 */}
    </>
  );
}
