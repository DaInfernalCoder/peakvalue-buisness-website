import React from 'react';
import Image from 'next/image';

// Default image paths (including Unsplash URLs for professional business imagery)
const DEFAULT_IMAGES = {
  about: "https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Professional contract signing
  process: "/images/business-meeting.jpg",
  business: "/images/business-handshake.jpg",
  contact: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Professional signing document
  consultation: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Business meeting/consultation
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Professional workspace with laptop/documents
  default: "/images/breadcrumbs-bg.jpg"
};

export default function HeaderBanner({ 
  title, 
  backgroundImage = "/images/breadcrumbs-bg.jpg",
  bannerType, // New prop for selecting from our preset images
  height = "400px",
  overlayColor = "rgba(0, 38, 95, 0.8)", // Using brand blue with opacity
  titleWidth = "800px", // Making the title container wider as requested
  showOverlay = true // New prop to control whether to show the overlay or not
}) {
  // Determine which background image to use
  let bgImage = backgroundImage;
  if (bannerType && DEFAULT_IMAGES[bannerType]) {
    bgImage = DEFAULT_IMAGES[bannerType];
  }
  return (
    <div className="header-banner" style={{ 
      position: 'relative', 
      height: height,
      backgroundImage: `url("${bgImage}")`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      marginBottom: '50px'
    }}>
      {/* Only render the overlay if showOverlay is true */}
      {showOverlay && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: overlayColor
        }}></div>
      )}
      <div style={{ 
        position: 'relative', 
        textAlign: 'center', 
        maxWidth: titleWidth, 
        padding: '0 20px',
        width: '100%'
      }}>
        <h1 style={{ 
          fontSize: '42px', 
          fontWeight: '700', 
          marginBottom: '15px',
          textTransform: 'capitalize',
          color: 'white', // Explicitly setting text color to white
          textShadow: '0 2px 4px rgba(0,0,0,0.5)' // Adding shadow to ensure text visibility on any background
        }}>
          {title}
        </h1>
      </div>
    </div>
  );
}
