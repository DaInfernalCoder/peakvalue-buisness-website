import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

import PortfolioImg1 from "../../../public/images/portfolio/portfolio-single-1.jpg";
import PortfolioImg2 from "../../../public/images/portfolio/portfolio-single-2.jpg";
import PortfolioImg3 from "../../../public/images/portfolio/portfolio-single-3.jpg";
import Link from "next/link";

export default function PortfolioSingle() {
  return (
    <>
      <Breadcrumbs
        title="Portfolio Single"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="portfolio-single"
        menuText="Portfolio Single"
      />

      {/* <!-- Portfolio Single --> */}
      <section className="portfolio-single-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="p-single-main">
                <div className="p-single-head">
                  <Image src={PortfolioImg1} alt="#" width={730} height={486} />
                </div>
                <div className="p-single-content">
                  <h3>The Modern Way to Make Succesful Business</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi
                  </p>
                  <div className="project-image">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="single-img">
                          <Image
                            src={PortfolioImg2}
                            alt="#"
                            width={350}
                            height={282}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="single-img last">
                          <Image
                            src={PortfolioImg3}
                            alt="#"
                            width={350}
                            height={282}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="portfolio-sidebar">
                {/* <!-- Single Widget --> */}
                <div className="p-sidebar-widget">
                  <div className="project-info">
                    <h4 className="p-widget-title">Project Info</h4>
                    <ul>
                      <li>
                        <i className="fa fa-dot-circle-o"></i>
                        <span>Clients:</span> Tom Cruse
                      </li>
                      <li>
                        <i className="fa fa-dot-circle-o"></i>
                        <span>Category:</span> Agency/Business
                      </li>
                      <li>
                        <i className="fa fa-dot-circle-o"></i>
                        <span>Complete Date:</span> January 04, 2020
                      </li>
                      <li>
                        <i className="fa fa-dot-circle-o"></i>
                        <span>Budget:</span> $980 US Dollar
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Single Widget --> */}
                <div className="p-sidebar-widget">
                  <div className="project-download">
                    <h4 className="p-widget-title">Download</h4>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fa fa-file-o"></i>Company Profile
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-file-o"></i>Portfolio Template
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-file-o"></i>Client Testimonial
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-file-o"></i>Working History
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Single --> */}
    </>
  );
}
