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
    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text)
        setProgress(loadingSteps[currentStep].progress)
        currentStep++
      } else {
        clearInterval(interval)
        setIsComplete(true)
        setTimeout(() => {
          onLoadingComplete()
        }, 1000)
      }
    }, 800)

    return () => clearInterval(interval)
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
