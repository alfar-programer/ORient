// =======================
// ScrollTextCues.jsx
// =======================
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoMarquee from "./Marquee/LogoMarquee";
import { LOGOS } from "../constants/data";

const ScrollTextCues = ({ cues = [], offsetY = 0 }) => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () =>
      setScrollY(window.scrollY || window.pageYOffset || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleButtonClick = (button) => {
    if (button.path) navigate(button.path);
    else if (button.onClick) button.onClick();
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
          "fixed w-full h-[80vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-6 flex flex-col";

        const hasStructured =
          typeof c.title !== "undefined" || typeof c.text !== "undefined";

        return (
          <div
            key={c.id}
            className={`${wrapperClass} anim-cue ${
              c.__active ? "anim-cue-active" : "anim-cue-inactive"
            }`}
            style={c.style || {}}
            aria-live="polite"
          >
            {hasStructured ? (
              <>
                {/* ✅ النصوص */}
                <div className="flex-1 flex flex-col justify-center text-center">
                  {c.title && (
                    <div
                      className={
                        c.titleClassName ||
                        "text-white text-6xl md:text-7xl font-extrabold drop-shadow-lg mb-6"
                      }
                    >
                      {c.title}
                    </div>
                  )}

                  {c.text && (
                    <div
                      className={
                        c.textClassName ||
                        "text-white/95 text-2xl font-semibold drop-shadow mb-8"
                      }
                    >
                      {c.text}
                    </div>
                  )}

                  {/* ✅ partners → بطاقات projects أفقية */}
                  {c.marqueeKey === "partners" &&
                    Array.isArray(LOGOS.partners) &&
                    LOGOS.partners.length > 0 && (
                      <div className="marquee-wrapper mt-6 pointer-events-auto overflow-hidden">
                        <div className="flex animate-marquee gap-8">
                          {[...LOGOS.partners, ...LOGOS.partners].map(
                            (item, idx) => (
                              <div
                                key={`${item.id}-${idx}`}
                                className={`${
                                  item.className ||
                                  "box-sizeProjects-scroll bg-white/10 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden min-w-[300px] transition-transform hover:scale-105 duration-300"
                                }`}
                              >
                                {/* ✅ الصورة */}
                                <img
                                  src={item.src}
                                  alt={item.alt}
                                  className={`w-full h-64 object-cover ${
                                    item.imageClassName || ""
                                  }`}
                                />

                                {/* ✅ النصوص */}
                                <div
                                  className={`box-textprojexts-scroll textcard-projects-scroll ${
                                    item.textContainerClass || ""
                                  }`}
                                >
                                  <h3
                                    className={`projects-name-scroll ${
                                      item.titleClassName || ""
                                    }`}
                                  >
                                    {item.title}
                                  </h3>
                                  <p
                                    className={`project-sup-scroll ${
                                      item.descriptionClassName || ""
                                    }`}
                                  >
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* ✅ clients → Marquee القديم */}
                  {c.marqueeKey === "clients" &&
                    Array.isArray(LOGOS.clients) &&
                    LOGOS.clients.length > 0 && (
                      <div className="mt-4 sm:mt-6 pointer-events-auto">
                        <LogoMarquee
                          items={LOGOS.clients}
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

                {/* ✅ الزر العام */}
                {c.button && (
                  <div
                    className={`cue-button-container w-full mt-10 pointer-events-auto ${
                      c.button.buttonContainerClass || ""
                    }`}
                  >
                    <button
                      onClick={() => handleButtonClick(c.button)}
                      className={`text-videoScroll px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl backdrop-blur-sm bg-opacity-90 ${
                        c.button.className ||
                        "bg-gray-800 hover:bg-gray-900 border border-gray-600"
                      }`}
                    >
                      {c.button.text}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex flex-col justify-center text-center">
                <div
                  className={
                    c.textClassName ||
                    "text-white text-4xl font-bold drop-shadow-lg"
                  }
                >
                  {c.text}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollTextCues;
