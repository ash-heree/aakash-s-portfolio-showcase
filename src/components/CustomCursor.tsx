import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouch = "ontouchstart" in window;
    if (!isFinePointer || isTouch) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    let x = -100, y = -100;
    let rx = -100, ry = -100;
    let hovering = false;
    let raf = 0;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (dot.style.opacity !== "1") {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      const target = e.target as HTMLElement | null;
      const isHovering = !!target?.closest("a, button, [role='button'], input, textarea, select, .hover-scale");
      if (isHovering !== hovering) {
        hovering = isHovering;
        ring.style.borderColor = hovering ? "rgba(56,189,248,0.9)" : "rgba(0,245,212,0.55)";
        ring.style.boxShadow = hovering
          ? "0 0 22px rgba(56,189,248,0.45), inset 0 0 10px rgba(56,189,248,0.25)"
          : "0 0 14px rgba(0,245,212,0.35)";
      }
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const loop = () => {
      rx += (x - rx) * 0.25;
      ry += (y - ry) * 0.25;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${hovering ? 1.7 : 1})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none opacity-0 w-1.5 h-1.5 rounded-full bg-[#00F5D4] will-change-transform"
        style={{ boxShadow: "0 0 10px rgba(0,245,212,0.9)" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none opacity-0 w-8 h-8 rounded-full border transition-[border-color,box-shadow] duration-200 will-change-transform"
        style={{ borderColor: "rgba(0,245,212,0.55)", boxShadow: "0 0 14px rgba(0,245,212,0.35)" }}
      />
    </>
  );
};

export default CustomCursor;
