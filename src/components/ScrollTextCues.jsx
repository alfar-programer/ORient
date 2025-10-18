import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoMarquee from "./Marquee/LogoMarquee";
import { LOGOS } from "../constants/data";
import TextTrail from "./TextTrail";

// Renders a list of cues that appear only within their scroll Y ranges
const ScrollTextCues = ({ cues = [], offsetY = 0 }) => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleButtonClick = (button) => {
    if (button.path) {
      navigate(button.path);
    } else if (button.onClick) {
      button.onClick();
    }
  };

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
          "fixed w-full h-[70vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6 flex flex-col";
        const hasStructured = typeof c.title !== "undefined" || typeof c.text !== "undefined";

        return (
          <div
            key={c.id}
            className={`${wrapperClass} anim-cue ${c.__active ? "anim-cue-active" : "anim-cue-inactive"}`}
            style={c.style || {}}
            aria-live="polite"
          >
            {hasStructured ? (
              <>
                {/* Main Content - grows to push button to bottom */}
                <div className="flex-1 flex flex-col justify-center">
                  {typeof c.title !== "undefined" && (
                    <div className={c.titleClassName || "text-white text-6xl md:text-7xl font-extrabold drop-shadow-lg mb-6"}>
                      {c.title}
                    </div>
                  )}
                  
                  {typeof c.text !== "undefined" && (
                    <div className={c.textClassName || "text-white/95 text-2xl font-semibold drop-shadow mb-8"}>
                      {c.text}
                    </div>
                  )}

                  {c.marqueeKey && Array.isArray(LOGOS[c.marqueeKey]) && LOGOS[c.marqueeKey].length > 0 && (
                    <div className="mt-4 sm:mt-6 pointer-events-auto">
                      <LogoMarquee
                        items={LOGOS[c.marqueeKey]}
                        speed={80}
                        gap={36}
                        itemClassName="rounded-md bg-white/10 backdrop-blur-sm p-2 sm:p-3 shadow-sm"
                        itemHeight="100%"
                        containerClassName="w-full overflow-hidden h-48 sm:h-64 md:h-80"
                        ariaLabel={`${c.title || c.id} logos`}
                      />
                    </div>
                  )}
                </div>

                {/* Button Section - fixed at bottom */}
                {c.button && (
                  <div className="mt-auto pt-8 pointer-events-auto">
                    <button
                      onClick={() => handleButtonClick(c.button)}
                      className={`
                        px-8 py-4 
                        text-lg font-semibold 
                        text-white 
                        rounded-lg 
                        transition-all duration-300 
                        transform hover:scale-105 
                        active:scale-95 
                        shadow-2xl 
                        border
                        backdrop-blur-sm
                        bg-opacity-90
                        ${c.button.className || "bg-gray-800 hover:bg-gray-900 border-gray-600"}
                      `}
                    >
                      {c.button.text}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex flex-col justify-center">
                <div className={c.textClassName || "text-white text-4xl font-bold drop-shadow-lg"}>
                  {c.text}
                </div>
                
                {/* Button for simple text cues */}
                {c.button && (
                  <div className="mt-auto pt-8 pointer-events-auto">
                    <button
                      onClick={() => handleButtonClick(c.button)}
                      className={`
                        px-8 py-4 
                        text-lg font-semibold 
                        text-white 
                        rounded-lg 
                        transition-all duration-300 
                        transform hover:scale-105 
                        active:scale-95 
                        shadow-2xl 
                        border
                        backdrop-blur-sm
                        bg-opacity-90
                        ${c.button.className || "bg-gray-800 hover:bg-gray-900 border-gray-600"}
                      `}
                    >
                      {c.button.text}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollTextCues;