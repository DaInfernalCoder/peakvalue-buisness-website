"use client";

import { useState, useEffect } from 'react';

export default function CalendlyPopup({
  isOpen,
  onClose,
  url = "peakvalue/consultation",
  primaryColor = "00265F",
  prefill = {}
}) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Only load if the popup is open
    if (isOpen && !isScriptLoaded) {
      // Load Calendly widget script dynamically
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      document.body.appendChild(script);

      // Clean up on component unmount
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen, isScriptLoaded]);

  // Only render if popup is open
  if (!isOpen) return null;

  // Construct the Calendly URL with parameters
  const buildCalendlyUrl = () => {
    const baseUrl = `https://calendly.com/${url}`;
    
    // Build query parameters
    const params = new URLSearchParams();
    
    // Add standard parameters
    params.append('hide_gdpr_banner', '1');
    if (primaryColor) params.append('primary_color', primaryColor);
    
    // Add prefill parameters if provided
    if (prefill.name) params.append('name', prefill.name);
    if (prefill.email) params.append('email', prefill.email);
    if (prefill.notes) params.append('note', prefill.notes);
    
    // Combine URL and parameters
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }}>
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl" style={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        width: '100%',
        maxWidth: '64rem',
        maxHeight: '90vh',
        overflow: 'hidden'
      }}>
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'white',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #eee',
            cursor: 'pointer'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Calendly widget */}
        <div 
          className="calendly-inline-widget"
          data-url={buildCalendlyUrl()}
          style={{
            minWidth: '320px',
            height: '700px'
          }}
        />
        
        {/* Hidden elements for Calendly API configuration */}
        <div style={{ display: 'none' }}>
          <input 
            type="hidden" 
            id="calendly_client_id" 
            value={process.env.NEXT_PUBLIC_CALENDY_CLIENT_ID} 
          />
          <input 
            type="hidden" 
            id="calendly_webhook_signing_key" 
            value={process.env.NEXT_PUBLIC_CALENDY_WEBHOOOK_SIGNING_KEY} 
          />
        </div>
      </div>
    </div>
  );
} 