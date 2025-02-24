import About from "./About";
import Links from "./Links";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Copyright from "./Copyright";

import FooterBg from "../../../public/images/footer-bg.jpg";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Area --> */}
      <footer
        className="footer-area"
        style={{
          backgroundImage: `url(${FooterBg.src})`
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <About />
              <Links />
              <Blogs />
              <Contact />
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
      {/* <!-- End Footer Area -->	 */}
    </>
  );
}
