// src/hooks/useVideoParallax.js
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useVideoParallax = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const timeoutId = setTimeout(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      timeline.to(video, {
        currentTime: video.duration || 5,
        ease: "none",
      });
    }, 100);

    // 🧹 تنظيف عند إزالة المكوّن
    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(video);
    };
  }, []);

  return { videoRef, containerRef };
};
