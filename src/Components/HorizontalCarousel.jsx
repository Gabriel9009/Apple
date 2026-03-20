import { useRef, useState, useEffect } from "react";

const HorizontalCarousel = ({ children }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 8
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons, {
      passive: true,
    });
    updateScrollButtons();
    return () =>
      el.removeEventListener("scroll", updateScrollButtons);
  }, [children]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth =
      el.querySelector("[data-card]")?.offsetWidth ?? 300;

    el.scrollBy({
      left: dir === "left"
        ? -(cardWidth + 24)
        : (cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide "
      >
        {children}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all
            ${canScrollLeft
              ? "border-gray-300 text-gray-700 hover:bg-gray-100"
              : "border-gray-200 text-gray-300 cursor-default"}`}
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all
            ${canScrollRight
              ? "border-gray-300 text-gray-700 hover:bg-gray-100"
              : "border-gray-200 text-gray-300 cursor-default"}`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
