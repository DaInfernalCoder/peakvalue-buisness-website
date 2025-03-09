"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 340); // You can adjust the scroll threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${"scrollUp"} ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <i className="fa fa-angle-up"></i>
      </div>
    </>
  );
}
