import Image from "next/image";
import Link from "next/link";

import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";

import BlogSingleImg from "../../../public/images/blog-single.jpg";

import Comments from "./Comments";
import Form from "./Form";
import Author from "./Author";

export default function BlogSingle() {
  return (
    <>
      <Breadcrumbs
        title="Blog Single"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="blog-single"
        menuText="Blog Single"
      />

      {/* <!-- Blogs-Single-Area --> */}
      <section className="blog-single-post section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="single-area">
                    <div className="single-head">
                      <Image
                        src={BlogSingleImg}
                        alt="#"
                        width={670}
                        height={400}
                      />
                      <div className="blog-title-meta">
                        <div className="blog-meta">
                          <span>
                            <i className="fa fa-user"></i>
                            <Link href="#">By Piklo D. Sindom</Link>
                          </span>
                          <span>
                            <i className="fa fa-calendar"></i>05 June, 2019
                          </span>
                          <span>
                            <i className="fa fa-comments"></i>30 comments
                          </span>
                        </div>
                        <h1>
                          We Provide any Kind of Business and Creative
                          Consultant Solutions.
                        </h1>
                      </div>
                    </div>
                    <div className="single-content">
                      <p>
                        All users on MySpace will know that there are millions
                        of people out there. Every day besides so many people
                        joining this community, there are many others who will
                        be looking out for friends. This will mean that they are
                        naturally looking out for good people who are
                        interesting enough. For this, the profile has to be very
                        interesting. on MySpace will know that there are
                        millions. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco{" "}
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidata.
                      </p>
                      <blockquote>
                        <i className="fa fa-quote-left"></i>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam Lorem
                          ipsum dolor sit amet, consectetur adipisicing commodo.
                        </p>
                        <span>- John V. Doe</span>
                      </blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidata.
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidata.
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt
                      </p>
                      <div className="blog-post-tag">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-12">
                            <div className="post-tag share-tag">
                              <h5>Releted Tags</h5>
                              <ul>
                                <li>
                                  <Link href="#">popular</Link>
                                </li>
                                <li>
                                  <Link href="#">design</Link>
                                </li>
                                <li>
                                  <Link href="#">ux</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="blog-share share-tag">
                              <h5>Share Now</h5>
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
                      </div>
                      <div className="prev-next-btn">
                        <ul>
                          <li className="prev">
                            <i className="fa fa-angle-double-left"></i>
                            <Link href="#">prev</Link>
                          </li>
                          <li>
                            <Link href="#">next</Link>
                            <i className="fa fa-angle-double-right"></i>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Author />

                    <Comments />
                  </div>
                </div>
                <div className="col-12">
                  <Form />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blogs Area --> */}
    </>
  );
}
