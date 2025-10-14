// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import LoadingPage from './components/Loading/LoadingPage';
import VideoLoader from './components/VideoLoader/VideoLoader';
import useLoadingManager from './hooks/useLoadingManager';
import './styles/globals.css';

function App() {
  const { markModelsLoaded, markVideosLoaded, markAssetsLoaded } = useLoadingManager();
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  // ✅ Preload all assets at startup
  useEffect(() => {
    const preloadAssets = async () => {
      try {
        // ✅ Preload image
        const logoImg = new Image();
        logoImg.src = '/images/Logo.png'; // <-- no "/public" prefix here

        // ✅ Preload video
        const video = document.createElement('video');
        video.src = '/Videos/hero-video.mp4'; // <-- remove /public
        video.preload = 'metadata';

        // ✅ Wait for both to load (resolve on error too)
        await Promise.all([
          new Promise((resolve) => {
            logoImg.onload = resolve;
            logoImg.onerror = resolve;
          }),
          new Promise((resolve) => {
            video.oncanplaythrough = resolve;
            video.onerror = resolve;
          }),
        ]);

        // ✅ Mark all as loaded
        markModelsLoaded();
        markVideosLoaded();
        markAssetsLoaded();
      } catch (error) {
        console.warn('⚠️ Some assets failed to load, continuing...', error);
        markModelsLoaded();
        markVideosLoaded();
        markAssetsLoaded();
      }
    };

    preloadAssets();
  }, [markModelsLoaded, markVideosLoaded, markAssetsLoaded]);

  return (
    <BrowserRouter>
      {!showContent ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <AppRoutes />
      )}

      {/* ✅ Hidden video preloader (no /public prefix) */}
      <VideoLoader 
        onVideoLoaded={markVideosLoaded}
        videoSrc="/Videos/hero-video.mp4"
      />
    </BrowserRouter>
  );
}

export default App;
