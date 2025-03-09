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
                            width={250}
                            height={150}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-9 col-4">
                      <div className="main-menu-top">
                        <div className="main-menu" style={{ marginRight: "200px" }}>
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
                                      pathname === "/about-us" ? "active" : ""
                                    }`}
                                    href="/about-us"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/process" ? "active" : ""
                                    }`}
                                    href="/process"
                                  >
                                    Process
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/business-for-sale" ? "active" : ""
                                    }`}
                                    href="/business-for-sale"
                                  >
                                    Business for Sale
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/blog" ? "active" : ""
                                    }`}
                                    href="/blog"
                                  >
                                    Blog
                                  </Link>
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
                          <Link href="/book-consultation" className="theme-btn">
                            book consultation
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
