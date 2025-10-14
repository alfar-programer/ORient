import { useState, useEffect, useCallback } from 'react'

const useLoadingManager = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState({
    models: false,
    videos: false,
    assets: false
  })

  // Check if all content is loaded
  const checkAllLoaded = useCallback(() => {
    const allLoaded = Object.values(loadingProgress).every(Boolean)
    if (allLoaded) {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [loadingProgress])

  // Mark models as loaded
  const markModelsLoaded = useCallback(() => {
    setLoadingProgress(prev => ({ ...prev, models: true }))
  }, [])

  // Mark videos as loaded
  const markVideosLoaded = useCallback(() => {
    setLoadingProgress(prev => ({ ...prev, videos: true }))
  }, [])

  // Mark assets as loaded
  const markAssetsLoaded = useCallback(() => {
    setLoadingProgress(prev => ({ ...prev, assets: true }))
  }, [])

  // Check loading status whenever progress changes
  useEffect(() => {
    checkAllLoaded()
  }, [loadingProgress, checkAllLoaded])

  return {
    isLoading,
    loadingProgress,
    markModelsLoaded,
    markVideosLoaded,
    markAssetsLoaded
  }
}

export default useLoadingManager
