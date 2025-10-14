import React, { useEffect, useRef } from 'react'

const VideoLoader = ({ onVideoLoaded, videoSrc, style = {} }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlayThrough = () => {
      if (onVideoLoaded) {
        onVideoLoaded()
      }
    }

    const handleError = () => {
      // If video fails to load, still mark as loaded to not block the app
      if (onVideoLoaded) {
        onVideoLoaded()
      }
    }

    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('error', handleError)
    }
  }, [onVideoLoaded])

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      preload="metadata"
      style={{
        display: 'none',
        ...style
      }}
    />
  )
}

export default VideoLoader
