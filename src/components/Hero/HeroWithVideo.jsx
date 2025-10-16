// src/components/Hero/HeroWithVideo.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTextCues from "../ScrollTextCues";
import { SCROLL_TEXT_CUES } from "../../constants/data";

gsap.registerPlugin(ScrollTrigger);

const HeroWithVideo = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 306;

  // 🧩 تحميل كل الفريمات
  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/Videos/frames/frame_${String(i).padStart(5, "0")}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // 🧩 رسم الفريم المناسب على الكانفس
  useEffect(() => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // 🧠 خلي الكانفس دايمًا قد مساحة الشاشة
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const renderFrame = (index) => {
      const img = images[index];
      if (!img) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        // لو الشاشة أعرض من الصورة
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // لو الصورة أطول من الشاشة
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // 🌀 تحريك الفريمات مع السكرول
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 2.5, // ⏳ قللنا السرعة هنا (كان 1.2)
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (frameCount - 1));
        renderFrame(frameIndex);
      },
    });

    // أول فريم
    renderFrame(0);

    return () => {
      st.kill();
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 🖼️ الكانفس اللي بيعرض الفريمات */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* 🔲 سكشن السكرول الطويل */}
      <div ref={containerRef} className="h-[900vh] relative z-10">
        <ScrollTextCues cues={SCROLL_TEXT_CUES} />
      </div>
    </div>
  );
};

export default HeroWithVideo;
