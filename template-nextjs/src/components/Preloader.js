"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  let pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`preloader-area ${isLoading ? "visible" : "hidden"}`}>
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </div>
  );
}
