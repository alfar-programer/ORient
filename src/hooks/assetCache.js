// useAssetCache.js
import { useEffect, useState } from "react";

// كاش بسيط في الذاكرة
const assetCache = new Map();

const useAssetCache = (assets) => {
  const [loadedAssets, setLoadedAssets] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = assets.length;
    const loadedArray = [];

    assets.forEach((url) => {
      if (assetCache.has(url)) {
        // الصورة اتحملت قبل كده ✅
        loaded++;
        loadedArray.push(assetCache.get(url));
        setProgress(Math.round((loaded / total) * 100));
        if (loaded === total) {
          setLoadedAssets(loadedArray);
          setIsComplete(true);
        }
      } else {
        // نحمل الصورة لأول مرة
        const img = new Image();
        img.src = url;
        img.onload = () => {
          assetCache.set(url, img); // نخزنها في الكاش
          loaded++;
          loadedArray.push(img);
          setProgress(Math.round((loaded / total) * 100));
          if (loaded === total) {
            setLoadedAssets(loadedArray);
            setIsComplete(true);
          }
        };
        img.onerror = () => {
          console.error("Failed to load:", url);
          loaded++;
          setProgress(Math.round((loaded / total) * 100));
        };
      }
    });
  }, [assets]);

  return { loadedAssets, progress, isComplete };
};

export default useAssetCache;