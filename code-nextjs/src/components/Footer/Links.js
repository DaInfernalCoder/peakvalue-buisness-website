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
                <i className="fa fa-angle-double-right"></i>About Us
              </Link>
            </li>
            <li>
              <Link href="/services">
                <i className="fa fa-angle-double-right"></i>Our Services
              </Link>
            </li>
            <li>
              <Link href="/business-for-sale">
                <i className="fa fa-angle-double-right"></i>Business For Sale
              </Link>
            </li>
            <li>
              <Link href="/process">
                <i className="fa fa-angle-double-right"></i>Our Process
              </Link>
            </li>
            <li>
              <Link href="/book-consultation">
                <i className="fa fa-angle-double-right"></i>Book Consultation
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <i className="fa fa-angle-double-right"></i>Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
