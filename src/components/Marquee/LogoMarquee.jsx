import React, { useMemo } from "react";

// Lightweight, CSS-only infinite marquee for logo strips.
// Props:
// - items: Array<{ id?: string|number, src: string, alt?: string }>
// - speed: number (pixels per second)
// - reverse: boolean (scroll direction)
// - gap: number (gap between items in px)
// - itemClassName: string (classes for each <img>)
// - itemHeight: string|number (e.g., '100%', 96, '6rem')
// - itemWidth: string|number
// - containerClassName: string (wrapper classes)
const LogoMarquee = ({
  items = [],
  speed = 60,
  reverse = false,
  gap = 24,
  itemClassName = "object-contain rounded-md bg-white/5 p-2 sm:p-3",
  itemHeight,
  itemWidth,
  containerClassName = "w-full overflow-hidden",
  ariaLabel = "logos marquee"
}) => {
  const animationDuration = useMemo(() => {
    // Duration scales with total width estimate: item width (~112px) + gap
    const estimatedItemWidth = 112; // approx based on default class
    const totalWidth = items.length * (estimatedItemWidth + gap);
    const pxPerSecond = Math.max(20, speed);
    return Math.max(8, Math.round(totalWidth / pxPerSecond));
  }, [items.length, gap, speed]);

  // Responsive gap calculation
  const responsiveGap = useMemo(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return Math.max(16, gap * 0.7); // sm: smaller gap
      if (width < 1024) return Math.max(20, gap * 0.85); // md: medium gap
      return gap; // lg+: full gap
    }
    return gap;
  }, [gap]);

  // Duplicate list for seamless looping
  const loopItems = useMemo(() => [...items, ...items], [items]);

  const direction = reverse ? "reverse" : "normal";

  return (
    <div className={containerClassName} aria-label={ariaLabel} role="region">
      <style>{`
        @keyframes logo-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex flex-nowrap"
        style={{
          marginTop: "3rem",
          width: "40%",
          gap: `${responsiveGap}px`,
          animation: `logo-marquee-scroll ${animationDuration}s linear infinite`,
          animationDirection: direction,
          height: "100%"
        }}
      >
        {loopItems.map((img, idx) => {
          const computedHeight = itemHeight ?? "100%";
          const computedWidth = itemWidth ?? "auto";
          return (
            <img
              key={img.id ?? idx}
              src={img.src}
              alt={img.alt || ""}
              className={itemClassName}
              style={{ height: computedHeight, width: computedWidth, objectFit: "contain" }}
              draggable={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LogoMarquee;


