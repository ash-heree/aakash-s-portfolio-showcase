import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface SectionIntroAnimationProps {
  section: "home";
  onComplete: () => void;
}

const particles = [
  { left: "9%", top: "22%", delay: 0.08 },
  { left: "18%", top: "72%", delay: 0.18 },
  { left: "31%", top: "34%", delay: 0.12 },
  { left: "68%", top: "27%", delay: 0.22 },
  { left: "79%", top: "69%", delay: 0.16 },
  { left: "91%", top: "42%", delay: 0.26 },
];

const SectionIntroAnimation = ({ section, onComplete }: SectionIntroAnimationProps) => {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const timer = window.setTimeout(() => setVisible(false), 1540);
    return () => window.clearTimeout(timer);
  }, [onComplete, reducedMotion]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key={section}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.035 }}
          transition={{ duration: 0.34, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,245,212,0.26) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.2) 1px, transparent 1px)",
              backgroundSize: "clamp(32px, 5vw, 56px) clamp(32px, 5vw, 56px)",
              maskImage: "radial-gradient(ellipse at center, black 10%, transparent 72%)",
            }}
          />

          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/70 to-transparent shadow-[0_0_16px_rgba(0,245,212,0.65)]"
            initial={{ top: "18%", opacity: 0 }}
            animate={{ top: ["18%", "82%"], opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.15, delay: 0.14, ease: "easeInOut" }}
          />

          {particles.map((particle, index) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className="absolute h-1 w-1 rounded-full bg-[#00F5D4] shadow-[0_0_10px_rgba(0,245,212,0.8)]"
              style={{ left: particle.left, top: particle.top }}
              initial={{ opacity: 0, scale: 0, x: index % 2 === 0 ? -18 : 18 }}
              animate={{ opacity: [0, 0.85, 0.3], scale: [0, 1, 0.7], x: 0 }}
              transition={{ duration: 0.72, delay: particle.delay, ease: "easeOut" }}
            />
          ))}

          <motion.div
            className="absolute left-[8%] right-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 0.45], opacity: [0, 0.8, 0.25] }}
            transition={{ duration: 0.82, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="relative w-[min(84vw,430px)] border border-[#00F5D4]/30 bg-[#0B1120]/80 shadow-[0_0_48px_rgba(0,245,212,0.16)] backdrop-blur-xl"
            initial={{ opacity: 0, scaleX: 0.35, scaleY: 0.82 }}
            animate={{ opacity: [0, 1, 1, 0], scaleX: [0.35, 1, 1, 1.06], scaleY: [0.82, 1, 1, 1.02] }}
            transition={{ duration: 1.3, times: [0, 0.24, 0.76, 1], delay: 0.18, ease: "easeInOut" }}
          >
            <div className="flex h-8 items-center gap-1.5 border-b border-[#38BDF8]/15 px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00F5D4]/65" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]/55" />
              <span className="ml-auto font-mono text-[9px] text-[#38BDF8]/60">SYSTEM.INIT</span>
            </div>
            <motion.div
              className="space-y-2 px-5 py-4 font-mono text-[10px] text-[#89ddff]/70 sm:px-7 sm:text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.05, delay: 0.36, times: [0, 0.2, 0.74, 1] }}
            >
              <p><span className="text-[#00F5D4]">$</span> initializing developer interface...</p>
              <p><span className="text-[#00F5D4]">✓</span> modules synchronized</p>
              <p><span className="text-[#00F5D4]">✓</span> home.route ready</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 1.3, times: [0, 0.62, 0.76, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.86, letterSpacing: "0.42em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.18em" }}
              transition={{ duration: 0.34, delay: 1.02, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-[0.18em] font-mono text-4xl font-bold text-[#00F5D4] drop-shadow-[0_0_20px_rgba(0,245,212,0.45)] sm:text-6xl md:text-7xl"
            >
              HOME
              <motion.span
                className="absolute -inset-x-5 top-1/2 h-px bg-[#38BDF8]/80"
                animate={{ opacity: [0, 0.9, 0], x: [-12, 8, 16] }}
                transition={{ duration: 0.28, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#7C3AED]/50 to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 0.55, 0] }}
            transition={{ duration: 0.72, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionIntroAnimation;