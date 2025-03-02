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
                      className={` ${isActive("/about-us") ? "active" : ""}`}
                      href="/about-us"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/process") ? "active" : ""}`}
                      href="/process"
                    >
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/business-for-sale") ? "active" : ""}`}
                      href="/business-for-sale"
                    >
                      Business for Sale
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/blog") ? "active" : ""}`}
                      href="/blog"
                    >
                      Blog
                    </Link>
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
                  href="/book-consultation"
                  className="theme-btn"
                  onClick={handleClose}
                >
                  <span>book consultation</span>
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
