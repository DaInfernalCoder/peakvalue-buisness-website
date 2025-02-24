"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Main Logo
import Logo from "../../../public/images/main-logo.png";
import MobileOffcanvas from "../MobileOffcanvas";

export default function Navbar() {
  const pathname = usePathname();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <!-- Header Start --> */}
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="header-inner-top">
                <div className="header-inner">
                  <div className="row  align-items-center">
                    <div className="col-lg-2 col-md-3 col-8">
                      {/* <!-- Logo --> */}
                      <div className="logo">
                        <Link className="logo-1" href="/">
                          <Image
                            src={Logo}
                            alt="main-logo"
                            width={133}
                            height={51}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-9 col-4">
                      <div className="main-menu-top">
                        <div className="main-menu">
                          <div className="navbar">
                            <div className="nav-item">
                              {/* <!-- Main-Menu --> */}
                              <ul className="nav-menu mobile-menu navigation">
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/" ? "active" : ""
                                    }`}
                                    href="/"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/services" ? "active" : ""
                                    }`}
                                    href="/services"
                                  >
                                    Services
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Portfolio
                                    <i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/portfolio"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/portfolio"
                                      >
                                        Portfolio
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/portfolio-single"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/portfolio-single"
                                      >
                                        Portfolio Single
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link href="#">
                                    Blogs<i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/blog" ? "active" : ""
                                        }`}
                                        href="/blog"
                                      >
                                        Blog Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/blog-sidebar"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/blog-sidebar"
                                      >
                                        Blog With Sidebar
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/blog-single"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/blog-single"
                                      >
                                        Blog Single
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link href="#">
                                    Pages<i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/about-us"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/about-us"
                                      >
                                        About Us
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/team" ? "active" : ""
                                        }`}
                                        href="/team"
                                      >
                                        Team
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/pricing"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/pricing"
                                      >
                                        Pricing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/testimonials"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/testimonials"
                                      >
                                        Testimonials
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/faq" ? "active" : ""
                                        }`}
                                        href="/faq"
                                      >
                                        Faq&apos;s
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/404" ? "active" : ""
                                        }`}
                                        href="/404"
                                      >
                                        404 Page
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/mail-success"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/mail-success"
                                      >
                                        Mail Success
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/contact" ? "active" : ""
                                    }`}
                                    href="/contact"
                                  >
                                    Contact
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Menu-Right --> */}
                        <div className="menu-right">
                          <Link href="/contact" className="theme-btn">
                            get a quote
                          </Link>
                        </div>
                        {/* <!-- End-Menu-Right --> */}
                      </div>
                      <MobileOffcanvas />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}
