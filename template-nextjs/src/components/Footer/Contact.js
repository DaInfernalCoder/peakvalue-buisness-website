import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-widget">
          <h3 className="widget-title">Contact</h3>
          {/* <!-- Footer Contact --> */}
          <div className="footer-contact">
            <ul className="contact-bottom">
              <li>
                <Link href="#">
                  <i className="fa fa-map-marker"></i>28/A Street, The king
                  city, USA
                </Link>
              </li>
              <li>
                <Link href="tel:+0123456789">
                  <i className="fa fa-phone"></i>+0123456789
                </Link>
              </li>
              <li>
                <Link href="mailto:info@example.com">
                  <i className="fa fa-envelope"></i>info@example.com
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Footer Social --> */}
          <div className="f-social">
            <ul>
              <li>
                <Link href="#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
