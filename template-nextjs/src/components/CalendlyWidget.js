"use client";

import { useEffect } from 'react';

export default function CalendlyWidget({
  url = "peakvalue/consultation",
  height = 700,
  primaryColor = "00265F",
  hideGdprBanner = true,
  prefill = {},
  className = ""
}) {
  useEffect(() => {
    // Load Calendly widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Construct the Calendly URL with parameters
  const buildCalendlyUrl = () => {
    const baseUrl = `https://calendly.com/${url}`;
    
    // Build query parameters
    const params = new URLSearchParams();
    
    // Add standard parameters
    if (hideGdprBanner) params.append('hide_gdpr_banner', '1');
    if (primaryColor) params.append('primary_color', primaryColor);
    
    // Add prefill parameters if provided
    if (prefill.name) params.append('name', prefill.name);
    if (prefill.email) params.append('email', prefill.email);
    if (prefill.notes) params.append('note', prefill.notes);
    
    // Combine URL and parameters
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className={className}>
      <div 
        className="calendly-inline-widget"
        data-url={buildCalendlyUrl()}
        style={{
          minWidth: '320px',
          height: `${height}px`,
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
          overflow: 'hidden'
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
  );
} 