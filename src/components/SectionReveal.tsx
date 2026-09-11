import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  image: string;
  label?: string;
}

/**
 * Wraps a section and plays a short technical-illustration intro
 * (scale + fade in, float, scale + fade out) before revealing content.
 */
const SectionReveal = ({ children, image, label }: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-25% 0px -25% 0px" });
  const [phase, setPhase] = useState<"idle" | "intro" | "done">(reduced ? "done" : "idle");

  useEffect(() => {
    if (reduced) {
      setPhase("done");
      return;
    }
    if (!inView || phase !== "idle") return;
    setPhase("intro");
    const t = setTimeout(() => setPhase("done"), 1750);
    return () => clearTimeout(t);
  }, [inView, phase, reduced]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {phase === "intro" && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ background: "linear-gradient(180deg, #05070F 0%, #0B1120 100%)" }}
          >
            {/* technical grid */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,245,212,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.35) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
              }}
            />

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.82, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.12, filter: "blur(8px)" }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* orbiting rings */}
              <motion.div
                className="absolute -inset-10 rounded-full border border-[#00F5D4]/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />
              <motion.div
                className="absolute -inset-16 rounded-full border border-[#38BDF8]/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />

              {/* floating particles */}
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#00F5D4]"
                  style={{
                    top: `${[10, 80, 30, 68][i]}%`,
                    left: `${[-8, 104, 102, -6][i]}%`,
                    boxShadow: "0 0 12px rgba(0,245,212,0.8)",
                  }}
                  animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden border border-[#00F5D4]/30 shadow-[0_0_60px_rgba(0,245,212,0.22)]"
              >
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-transparent" />
                {/* scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-16"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(0,245,212,0.22), transparent)",
                  }}
                  animate={{ y: ["-20%", "320%"] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {label && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="mt-5 text-center font-mono text-xs tracking-[0.3em] uppercase text-[#00F5D4]/80"
                >
                  {label}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionReveal;
