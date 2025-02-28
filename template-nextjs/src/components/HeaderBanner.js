import React from 'react';
import Image from 'next/image';

export default function HeaderBanner({ 
  title, 
  backgroundImage = "/images/breadcrumbs-bg.jpg",
  height = "400px",
  overlayColor = "rgba(0, 38, 95, 0.8)", // Using brand blue with opacity
  titleWidth = "800px", // Making the title container wider as requested
  showOverlay = true // New prop to control whether to show the overlay or not
}) {
  return (
    <div className="header-banner" style={{ 
      position: 'relative', 
      height: height,
      backgroundImage: `url("${backgroundImage}")`, 
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