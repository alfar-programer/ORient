import React, { useState, useEffect } from 'react'
import './LoadingPage.css'

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let totalAssets = 0;
    let loadedAssets = 0;
    let checkInterval;

    // Function to update progress based on actual loaded assets
    const updateProgress = () => {
      if (totalAssets === 0) return;
      
      const newProgress = Math.floor((loadedAssets / totalAssets) * 100);
      setProgress(newProgress);
      
      // Update loading text based on progress
      if (newProgress < 30) {
        setLoadingText('Loading 3D Models...');
      } else if (newProgress < 60) {
        setLoadingText('Loading Videos...');
      } else if (newProgress < 80) {
        setLoadingText('Preparing Assets...');
      } else if (newProgress < 100) {
        setLoadingText('Finalizing...');
      } else {
        setLoadingText('Ready!');
      }
    };

    // Function to count and track all assets
    const trackAssets = () => {
      // Count images
      const images = document.images;
      totalAssets += images.length;
      
      // Count videos
      const videos = document.querySelectorAll('video');
      totalAssets += videos.length;
      
      // Count iframes
      const iframes = document.querySelectorAll('iframe');
      totalAssets += iframes.length;
      
      // Count canvas elements that might have resources
      const canvases = document.querySelectorAll('canvas');
      totalAssets += canvases.length;

      // If no assets found, set to 1 to avoid division by zero
      if (totalAssets === 0) {
        totalAssets = 1;
        loadedAssets = 1;
        updateProgress();
        return;
      }

      // Check already loaded images
      for (let i = 0; i < images.length; i++) {
        if (images[i].complete) {
          loadedAssets++;
        } else {
          images[i].addEventListener('load', () => {
            loadedAssets++;
            updateProgress();
          });
          images[i].addEventListener('error', () => {
            loadedAssets++; // Count errors as loaded to avoid stuck loading
            updateProgress();
          });
        }
      }

      // Check videos
      for (let i = 0; i < videos.length; i++) {
        if (videos[i].readyState >= 3) {
          loadedAssets++;
        } else {
          videos[i].addEventListener('loadeddata', () => {
            loadedAssets++;
            updateProgress();
          });
          videos[i].addEventListener('error', () => {
            loadedAssets++;
            updateProgress();
          });
        }
      }

      // Check iframes
      for (let i = 0; i < iframes.length; i++) {
        if (iframes[i].contentDocument && iframes[i].contentDocument.readyState === 'complete') {
          loadedAssets++;
        } else {
          iframes[i].addEventListener('load', () => {
            loadedAssets++;
            updateProgress();
          });
          iframes[i].addEventListener('error', () => {
            loadedAssets++;
            updateProgress();
          });
        }
      }

      // Consider canvases as loaded immediately
      loadedAssets += canvases.length;

      updateProgress();
    };

    // Wait for DOM to be ready before counting assets
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackAssets);
    } else {
      trackAssets();
    }

    // Check for page completion
    const checkCompletion = () => {
      const allLoaded = loadedAssets >= totalAssets && progress >= 100;
      const documentReady = document.readyState === 'complete';
      
      if (allLoaded && documentReady) {
        clearInterval(checkInterval);
        setProgress(100);
        setLoadingText('Ready!');
        
        setIsComplete(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    };

    // Start checking for completion
    checkInterval = setInterval(checkCompletion, 100);

    // Fallback: if still not complete after 15 seconds, force completion
    const timeoutId = setTimeout(() => {
      clearInterval(checkInterval);
      console.warn('Loading timeout - forcing completion');
      setProgress(100);
      setLoadingText('Ready!');
      setIsComplete(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 15000);

    // Additional window load listener as backup
    window.addEventListener('load', () => {
      setProgress(100);
      setLoadingText('Ready!');
    });

    // Cleanup
    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeoutId);
      window.removeEventListener('load', () => {});
      document.removeEventListener('DOMContentLoaded', trackAssets);
    };
  }, [onLoadingComplete, progress]);

  return (
    <div className={`loading-page ${isComplete ? 'fade-out' : ''}`}>
      <div className="loading-container">
        {/* Company Logo */}
        <div className="loading-logo">
          <div className="logo-container">
            <img 
              src="/images/Logo.png" 
              alt="Company Logo" 
              className="company-logo"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
              onLoad={() => {
                // This image load will be counted in the progress
              }}
            />
            <div className="logo-glow"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="loading-title">Building</h1>
        <p className="loading-subtitle">3D Architecture Experience</p>
        <div className="company-name">
          <span className="company-text">Fortune Code</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            <span className="loading-text">{loadingText}</span>
            <span className="progress-percentage">{progress}%</span>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        {/* Background Animation */}
        <div className="loading-bg">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
          <div className="bg-shape shape-4"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage