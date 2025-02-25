import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/footer-logo.png";

export default function About() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        {/* <!-- Single Widget --> */}
        <div className="single-widget footer-about">
          <div className="footer-logo">
            <Link className="logo" href="/">
              <Image src={Logo} alt="#" width={134} height={50} />
            </Link>
          </div>
          <div className="about-description">
            <p>
              PeakValue Business is your trusted partner in business brokerage. We connect qualified buyers 
              with successful sellers, providing expert guidance through every step of your 
              business transaction journey.
            </p>
          </div>
          {/* <!-- Quick Link Box -->	 */}
          <div className="f-contact-box">
            <div className="box-icon">
              <i className="fa fa-headphones"></i>
            </div>
            <div className="contact-text">
              <p>Talk To Our Support</p>
              <h5>1-832-712-4162</h5>
            </div>
          </div>
        </div>
        {/* <!-- End Single Widget --> */}
      </div>
    </>
  );
}
