import React, { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  progress, // optional external normalized progress [0,1]
}) => {
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll('.inline-block');

    // Build a timeline so we can drive it either by ScrollTrigger or external progress
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      charElements,
      { willChange: 'opacity, transform', opacity: 0, yPercent: 120, scaleY: 2.3, scaleX: 0.7, transformOrigin: '50% 0%' },
      { opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1, ease, stagger }
    );
    tlRef.current = tl;

    if (typeof progress !== 'number') {
      // Use ScrollTrigger only when external progress not provided
      ScrollTrigger.create({
        trigger: el,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
        onUpdate: (self) => {
          tl.progress(self.progress);
        },
      });
    } else {
      // Initialize to current external progress
      tl.progress(Math.min(1, Math.max(0, progress)));
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, progress]);

  return (
    <h2 ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;


