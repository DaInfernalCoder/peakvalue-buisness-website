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
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          {/* <!-- Quick Link Box -->	 */}
          <div className="f-contact-box">
            <div className="box-icon">
              <i className="fa fa-headphones"></i>
            </div>
            <div className="contact-text">
              <p>Talk To Our Support</p>
              <h5>1-322-344-888</h5>
            </div>
          </div>
        </div>
        {/* <!-- End Single Widget --> */}
      </div>
    </>
  );
}
