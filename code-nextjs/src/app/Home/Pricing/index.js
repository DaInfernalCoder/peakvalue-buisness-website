import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <section className="pricing-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="pricing"
                title="See Pricing Plans"
                description="All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing">
                <div className="pricing-head">
                  <h4>Basic</h4>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$20</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Social Media Marketing</li>
                    <li>3.100 Keywords</li>
                    <li>One Way Link Building</li>
                    <li>10 Free Optimization</li>
                    <li>5 Press Releases</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-shopping-cart"></i>Order now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing active">
                <div className="pricing-head">
                  <h4>Standard</h4>
                  <div className="sticker">
                    <span>Best plan</span>
                  </div>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$30</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Social Media Marketing</li>
                    <li>3.100 Keywords</li>
                    <li>One Way Link Building</li>
                    <li>10 Free Optimization</li>
                    <li>5 Press Releases</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-shopping-cart"></i>Order now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing">
                <div className="pricing-head">
                  <h4>Premium</h4>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$50</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Social Media Marketing</li>
                    <li>3.100 Keywords</li>
                    <li>One Way Link Building</li>
                    <li>10 Free Optimization</li>
                    <li>5 Press Releases</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-shopping-cart"></i>Order now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing">
                <div className="pricing-head">
                  <h4>Professional</h4>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$70</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Social Media Marketing</li>
                    <li>3.100 Keywords</li>
                    <li>One Way Link Building</li>
                    <li>10 Free Optimization</li>
                    <li>5 Press Releases</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-shopping-cart"></i>Order now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pricing Area --> */}
    </>
  );
}
