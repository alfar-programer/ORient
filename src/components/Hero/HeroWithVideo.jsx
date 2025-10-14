
// src/components/Hero/HeroWithVideo.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTextCues from "../ScrollTextCues";
import { SCROLL_TEXT_CUES } from "../../constants/data";

gsap.registerPlugin(ScrollTrigger);

const HeroWithVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const rafId = useRef(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const isLoopRunningRef = useRef(false);
  const lastTickMsRef = useRef(0);
  const settleFramesRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let isReady = false;

    const init = () => {
      if (!isReady || !video.duration) return;

      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          // ✅ easing: بطيء في البداية
          let progress = self.progress;
          if (progress < 0.2) {
            // أول 20% من السكروول: بطيء جدًا
            progress = progress * progress * 6; // quadratic ease-in
          }
          targetTimeRef.current = Math.min(progress, 1) * video.duration;
          // ensure loop is running when target changes
          if (!isLoopRunningRef.current) {
            isLoopRunningRef.current = true;
            settleFramesRef.current = 0;
            lastTickMsRef.current = 0;
            rafId.current = requestAnimationFrame(update);
          }
        },
      });

      // Set initial target based on current scroll (so it works without first scroll)
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(1, container.offsetHeight - window.innerHeight);
      const rel = Math.min(Math.max((scrollTop - containerTop) / maxScroll, 0), 1);
      targetTimeRef.current = rel * video.duration;
      try {
        video.currentTime = targetTimeRef.current;
      } catch (e) {
        console.debug("Initial seek skipped:", e?.message || e);
      }

      // Kick the loop once on ready
      if (!isLoopRunningRef.current) {
        isLoopRunningRef.current = true;
        settleFramesRef.current = 0;
        lastTickMsRef.current = 0;
        rafId.current = requestAnimationFrame(update);
      }

      // Ensure ScrollTrigger positions are up-to-date
      st.refresh && st.refresh();

      const update = (/* now from RAF */) => {
        const now = performance.now();
        // throttle to ~30fps
        if (lastTickMsRef.current && now - lastTickMsRef.current < 33) {
          rafId.current = requestAnimationFrame(update);
          return;
        }
        lastTickMsRef.current = now;

        const target = targetTimeRef.current;
        const diff = target - currentTimeRef.current;
        const absDiff = Math.abs(diff);

        if (absDiff > 0.005) {
          // smooth follow; lower factor to reduce CPU
          currentTimeRef.current += diff * 0.5;
          // only seek if change is meaningful to avoid spamming decoder
          try {
            const shouldSeek = Math.abs(video.currentTime - currentTimeRef.current) > 0.01;
            if (shouldSeek) {
              video.currentTime = currentTimeRef.current;
            }
          } catch (e) {
            console.warn("Seek error:", e?.message || e);
          }
          settleFramesRef.current = 0;
        } else {
          // close enough to target; count settle frames then stop
          settleFramesRef.current += 1;
          if (settleFramesRef.current >= 6) {
            isLoopRunningRef.current = false;
            return; // stop without scheduling next frame
          }
        }

        // schedule next frame aligned with video paint when possible
        if (typeof video.requestVideoFrameCallback === "function") {
          video.requestVideoFrameCallback(() => {
            if (isLoopRunningRef.current) {
              rafId.current = requestAnimationFrame(update);
            }
          });
        } else if (isLoopRunningRef.current) {
          rafId.current = requestAnimationFrame(update);
        }
      };

      // kick off only when ready and target changes via onUpdate
    };

    const onReady = () => {
      isReady = true;
      init();
    };

    video.addEventListener("loadedmetadata", onReady);
    video.addEventListener("canplay", onReady);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src="/Videos/hero-video (1).mp4"
        muted
        playsInline
        preload="auto"
        className="fixed top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
      />
      <div ref={containerRef} className="h-[900vh] relative z-10">
        <ScrollTextCues cues={SCROLL_TEXT_CUES} />
      </div>
    </div>
  );
};

export default HeroWithVideo;
