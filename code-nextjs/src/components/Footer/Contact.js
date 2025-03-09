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
                  <i className="fa fa-map-marker"></i>Houston, Texas
                </Link>
              </li>
              <li>
                <Link href="tel:1-832-712-4162">
                  <i className="fa fa-phone"></i>1-832-712-4162
                </Link>
              </li>
              <li>
                <Link href="mailto:info@peakvaluebusiness.com">
                  <i className="fa fa-envelope"></i>info@peakvaluebusiness.com
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-clock-o"></i>Mon - Fri: 9:00 AM - 5:00 PM CST
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
