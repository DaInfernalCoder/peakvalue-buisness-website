"use client";

import { useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';

export default function VideoTestimonial() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasStarted(false);
  };

  return (
    <div className="video-testimonial-container">
      <div className="video-wrapper">
        {!hasStarted && (
          <div className="thumbnail-overlay">
            <div className="preview-placeholder">
              <span>Surangi&apos;s Testimonial</span>
            </div>
            <button 
              className="play-button"
              onClick={handlePlay}
              aria-label="Play testimonial video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" fill="#00265F"></circle>
                <polygon points="10 8 16 12 10 16 10 8" fill="white"></polygon>
              </svg>
            </button>
          </div>
        )}
        
        <div className={`player-container ${hasStarted ? 'visible' : 'hidden'}`}>
          <ReactPlayer
            ref={playerRef}
            url="/images/testimonial/IMG_3319.mp4"
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={hasStarted}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                  disablePictureInPicture: true,
                }
              }
            }}
          />
        </div>
      </div>
      
      <div className="testimonial-caption">
        <h4>Surangi Udugama</h4>
        <p className="designation">CEO, Hanna and Peige Sriwardane Company LLC</p>
      </div>
      
      <style jsx>{`
        .video-testimonial-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          background-color: white;
          transition: transform 0.3s ease;
        }
        
        .video-testimonial-container:hover {
          transform: translateY(-5px);
        }
        
        .video-wrapper {
          position: relative;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          width: 100%;
          background-color: #000;
          border-radius: 16px 16px 0 0;
          overflow: hidden;
        }
        
        .thumbnail-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background: linear-gradient(135deg, #00265F, #0047AB);
        }
        
        .preview-placeholder {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 1px;
        }
        
        .play-button {
          position: relative;
          z-index: 2;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
          padding: 0;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 125px;
        }
        
        .play-button:hover {
          transform: scale(1.1);
        }
        
        .player-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .player-container.visible {
          opacity: 1;
        }
        
        .player-container.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .testimonial-caption {
          padding: 1.5rem;
          background-color: white;
          text-align: center;
        }
        
        .testimonial-caption h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #00265F;
        }
        
        .designation {
          margin: 0;
          font-size: 0.875rem;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .play-button {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
} 