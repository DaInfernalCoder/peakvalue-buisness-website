"use client";

import { useState, useEffect } from "react";

const ColorPlate = () => {
  const colors = [
    "#28B463",
    "#FC6761",
    "#6A89CC",
    "#1ABC9C",
    "#E67E22",
    "#78E08F",
    "#38ADA9",
    "#F3A712",
  ];

  const [primaryColor, setPrimaryColor] = useState(colors[0]);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }, [primaryColor]);

  const handleColorClick = (color) => {
    setPrimaryColor(color);
  };

  const [optionsOpen, setOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setOptionsOpen(!optionsOpen);
  };

  return (
    <>
      <div className={`elena-options ${optionsOpen ? "open" : ""}`}>
        <div className="icon inOut" onClick={toggleOptions}>
          <i className="fa fa-cog fa-spin"></i>
        </div>
        <div className="single-option">
          <h4>Choose Exbico Colors</h4>
          <div className="color-plate">
            {colors.map((color, index) => (
              <ColorOption
                key={index}
                color={color}
                onClick={handleColorClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ColorOption = ({ color, onClick }) => {
  return (
    <div
      className="color-option"
      style={{
        backgroundColor: color,
      }}
      onClick={() => onClick(color)}
    ></div>
  );
};

export default ColorPlate;
