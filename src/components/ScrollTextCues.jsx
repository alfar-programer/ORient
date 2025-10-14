import React, { useEffect, useMemo, useState } from "react";
import TextTrail from "./TextTrail";

// Renders a list of cues that appear only within their scroll Y ranges
// props.cues: Array of {
//   id,
//   startY,
//   endY,
//   title?,
//   text?,
//   className?,       // wrapper classes
//   titleClassName?,  // classes for title
//   textClassName?,   // classes for text
//   images?: Array<{ id?: string|number, src: string, alt?: string, className?: string }>,
//   imagesWrapperClassName?: string
// }
// Optional props: offsetY (number) to shift all ranges globally
const ScrollTextCues = ({ cues = [], offsetY = 0 }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const withActivity = useMemo(() => {
    const y = scrollY;
    return cues.map((c) => {
      const start = (c.startY || 0) + offsetY;
      const end = (c.endY ?? c.startY) + offsetY;
      const active = y >= start && y < end;
      return { ...c, __active: active };
    });
  }, [cues, offsetY, scrollY]);

  return (
    <div className="pointer-events-none select-none">
      {withActivity.map((c) => {
        const wrapperClass =
          c.className ||
          "fixed w-full h-[50vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6";
        const hasStructured = typeof c.title !== "undefined" || typeof c.text !== "undefined";

        return (
          <div
            key={c.id}
            className={`${wrapperClass} anim-cue ${c.__active ? "anim-cue-active" : "anim-cue-inactive"}`}
            aria-live="polite"
          >
            {hasStructured ? (
              <>
                {typeof c.title !== "undefined" && (
                  <div text={c.title} className={c.titleClassName || "text-white text-5xl font-extrabold drop-shadow-lg mb-3"}>{c.title}</div>
                
                )}
                  {/* <TextTrail 
                    text="React Bits"
                    fontFamily="Figtree"
                    fontWeight="900"
                    noiseFactor={1.2}
                    noiseScale={0.001}
                    rgbPersistFactor={0.95}
                    alphaPersistFactor={0.92}
                    animateColor={true}
                    startColor="#ff6b6b"
                    textColor="#00000"
                    backgroundColor="#ffff"
                    colorCycleInterval={2000}
                    supersample={2}
                  /> */}
                {typeof c.text !== "undefined" && (
                  <div className={c.textClassName || "text-white/95 text-2xl font-semibold drop-shadow"}>{c.text}</div>
                )}
                {Array.isArray(c.images) && c.images.length > 0 && (
                  <div className={c.imagesWrapperClassName || "mt-4 flex items-center justify-center gap-4 flex-wrap"}>
                    {c.images.map((img, idx) => (
                      <img
                        key={img.id ?? `${c.id}-img-${idx}`}
                        src={img.src}
                        alt={img.alt || ""}
                        className={img.className || "w-28 h-28 object-contain rounded-md bg-white/5 p-2"}
                        draggable={false}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Backward compatibility: if cues previously only had "text"
              <div className={c.textClassName || "text-white text-4xl font-bold drop-shadow-lg"}>{c.text}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollTextCues;


