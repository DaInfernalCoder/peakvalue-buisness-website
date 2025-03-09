"use client";

import { useCalendly } from "@/context/CalendlyContext";

export default function ButtonBookConsultation({
  className = "",
  buttonText = "Book a Consultation",
  variant = "primary", // primary, outline, or text
  size = "md", // sm, md, or lg
  prefill = {},
  calendlyUrl = "peakvalue/consultation"
}) {
  const { openCalendly } = useCalendly();

  // Handle button click to open Calendly popup
  const handleClick = () => {
    openCalendly({
      url: calendlyUrl,
      prefill
    });
  };

  // Define button styles based on variant and size
  const getButtonClasses = () => {
    let baseClasses = "btn ";
    
    // Add variant-specific classes
    if (variant === "primary") {
      baseClasses += "theme-btn ";
    } else if (variant === "outline") {
      baseClasses += "btn-outline-primary ";
    } else if (variant === "text") {
      baseClasses += "btn-link ";
    }
    
    // Add size-specific classes
    if (size === "sm") {
      baseClasses += "btn-sm ";
    } else if (size === "lg") {
      baseClasses += "btn-lg ";
    }
    
    // Add custom classes
    if (className) {
      baseClasses += className;
    }
    
    return baseClasses.trim();
  };

  return (
    <button
      onClick={handleClick}
      className={getButtonClasses()}
    >
      {buttonText}
    </button>
  );
} 