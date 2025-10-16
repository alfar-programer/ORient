import React, { useState, useEffect } from 'react'
import './LoadingPage.css'

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')
  const [isComplete, setIsComplete] = useState(false)

  const loadingSteps = [
    { text: 'Loading 3D Models...', progress: 30 },
    { text: 'Loading Videos...', progress: 60 },
    { text: 'Preparing Assets...', progress: 80 },
    { text: 'Finalizing...', progress: 100 }
  ]

  useEffect(() => {
    // Check if all page assets are loaded
    const checkPageLoad = () => {
      if (document.readyState === 'complete') {
        return true;
      }
      
      // Check if images are loaded
      const images = document.images;
      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          return false;
        }
      }
      
      // Check if videos are loaded
      const videos = document.querySelectorAll('video');
      for (let i = 0; i < videos.length; i++) {
        if (videos[i].readyState < 3) {
          return false;
        }
      }
      
      return true;
    }

    let currentStep = 0
    const stepInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text)
        setProgress(loadingSteps[currentStep].progress)
        currentStep++
      } else {
        clearInterval(stepInterval)
        
        // Wait for actual page load before completing
        const checkLoadInterval = setInterval(() => {
          if (checkPageLoad()) {
            clearInterval(checkLoadInterval)
            setIsComplete(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 1000)
          }
        }, 100)
      }
    }, 800)

    // Additional event listeners for page load
    window.addEventListener('load', () => {
      setProgress(100)
      setLoadingText('Ready!')
    })

    return () => {
      clearInterval(stepInterval)
      window.removeEventListener('load', () => {})
    }
  }, [onLoadingComplete])

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