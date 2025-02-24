import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-2 col-md-6 col-12">
        {/* <!-- Quick Links --> */}
        <div className="single-widget f-links">
          <h3 className="widget-title">Quick Links</h3>
          <ul>
            <li>
              <Link href="/about-us">
                <i className="fa fa-angle-double-right"></i>About us
              </Link>
            </li>
            <li>
              <Link href="/services">
                <i className="fa fa-angle-double-right"></i>Our Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <i className="fa fa-angle-double-right"></i>Creative Portfolio
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <i className="fa fa-angle-double-right"></i>Our Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <i className="fa fa-angle-double-right"></i>Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
