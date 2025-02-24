"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";

import Logo from "../../public/images/main-logo.png";

export default function MobileOffcanvas() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to toggle the sub-menu
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Function to check if a menu item is active
  const isActive = (path) => pathname === path;

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="mobile-menu-offcanvas-toggler"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* <!-- Mobile Menu Modal --> */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu-modal">
        <div className="modal-dialog offcanvas-dialog">
          <div className="modal-content">
            <div className="modal-header offcanvas-header">
              <div className="offcanvas-logo">
                <Link href="/">
                  <Image src={Logo} alt="#" width={134} height={50} />
                </Link>
              </div>
              <button type="button" className="btn-close" onClick={handleClose}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu-modal-main-body">
              {/* Offcanvas Menu */}
              <nav id="offcanvas-menu" className="navigation offcanvas-menu">
                <ul id="nav" className="list-none offcanvas-men-list">
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/") ? "active" : ""}`}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/services") ? "active" : ""}`}
                      href="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(1)}
                    >
                      Portfolio
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className={`sub-menu ${openSubMenu === 1 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/portfolio") ? "active" : ""
                          }`}
                          href="/portfolio"
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/portfolio-single") ? "active" : ""
                          }`}
                          href="/portfolio-single"
                        >
                          Portfolio Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(2)}
                    >
                      Blogs<i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className={`sub-menu ${openSubMenu === 2 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/blog") ? "active" : ""}`}
                          href="/blog"
                        >
                          Blog Archive
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/blog-sidebar") ? "active" : ""
                          }`}
                          href="/blog-sidebar"
                        >
                          Blog With Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/blog-single") ? "active" : ""
                          }`}
                          href="/blog-single"
                        >
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(3)}
                    >
                      Pages<i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className={`sub-menu ${openSubMenu === 3 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/about-us") ? "active" : ""
                          }`}
                          href="/about-us"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/team") ? "active" : ""}`}
                          href="/team"
                        >
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/pricing") ? "active" : ""}`}
                          href="/pricing"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/testimonials") ? "active" : ""
                          }`}
                          href="/testimonials"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/faq") ? "active" : ""}`}
                          href="/faq"
                        >
                          Faq&apos;s
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/404") ? "active" : ""}`}
                          href="/404"
                        >
                          404 Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/mail-success") ? "active" : ""
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
                      onClick={handleClose}
                      className={` ${isActive("/contact") ? "active" : ""}`}
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Mobile menu modal bottom */}
              <div className="mobile-menu-modal-bottom">
                <Link
                  href="/contact"
                  className="theme-btn"
                  onClick={handleClose}
                >
                  <span>Get a quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas>
      {/* <!-- End Mobile Menu Modal --> */}
    </>
  );
}
