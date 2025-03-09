"use client";

import { createContext, useContext, useState } from 'react';
import CalendlyPopup from '@/components/CalendlyPopup';

// Create the context
const CalendlyContext = createContext({
  openCalendly: () => {},
  closeCalendly: () => {},
});

// Export a hook to use the Calendly context
export const useCalendly = () => useContext(CalendlyContext);

// The provider component
export function CalendlyProvider({ children }) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlyConfig, setCalendlyConfig] = useState({
    url: "peakvalue/consultation",
    primaryColor: "00265F",
    prefill: {}
  });

  // Function to open Calendly with optional config
  const openCalendly = (config = {}) => {
    setCalendlyConfig(prev => ({
      ...prev,
      ...config
    }));
    setIsCalendlyOpen(true);
  };

  // Function to close Calendly
  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly }}>
      {children}
      
      {/* Render the popup component */}
      <CalendlyPopup
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        url={calendlyConfig.url}
        primaryColor={calendlyConfig.primaryColor}
        prefill={calendlyConfig.prefill}
      />
    </CalendlyContext.Provider>
  );
} 