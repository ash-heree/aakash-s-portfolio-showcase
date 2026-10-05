import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  { text: "module.about_me.init", delay: 0.4 },
  { text: "loading personal profile...", delay: 0.75 },
  { text: "loading technical background...", delay: 1.1 },
  { text: "analyzing developer profile...", delay: 1.45 },
  { text: "profile.module.ready ✓", delay: 1.85 },
];

interface Props {
  active: boolean;
  onComplete: () => void;
}

/** Short in-section "module activation" sequence shown before About content reveals. */
const AboutIntro = ({ active, onComplete }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active) return;
    const t = window.setTimeout(() => setVisible(false), 2500);
    return () => window.clearTimeout(t);
  }, [active]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="about-intro"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-[min(100%,100vh)] items-center justify-center"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          {active && (
            <>
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.12 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,245,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                  maskImage: "radial-gradient(ellipse at center, black 5%, transparent 65%)",
                }}
              />
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/70 to-transparent shadow-[0_0_14px_rgba(0,245,212,0.6)]"
                initial={{ top: "20%", opacity: 0 }}
                animate={{ top: ["20%", "80%"], opacity: [0, 0.7, 0] }}
                transition={{ duration: 0.6, delay: 2.0, ease: "easeInOut" }}
              />
              <div className="relative px-6">
                <motion.div
                  className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#38BDF8]/70"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
                  SYS.MODULE // 02
                  <motion.span
                    className="h-px w-16 origin-left bg-gradient-to-r from-[#38BDF8]/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                </motion.div>
                <div className="space-y-1.5 border-l border-[#00F5D4]/25 pl-4 font-mono text-xs text-[#89ddff]/80 drop-shadow-[0_0_10px_rgba(0,245,212,0.3)] sm:text-sm">
                  {LINES.map((l, i) => {
                    const last = i === LINES.length - 1;
                    return (
                      <motion.p
                        key={l.text}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.05, delay: l.delay }}
                      >
                        <span className="text-[#00F5D4]">&gt;</span>
                        <motion.span
                          className={last ? "text-[#00F5D4]" : ""}
                          initial={{ clipPath: "inset(0 100% 0 0)" }}
                          animate={{ clipPath: "inset(0 0% 0 0)" }}
                          transition={{ duration: 0.25, delay: l.delay, ease: "linear" }}
                        >
                          {l.text}
                        </motion.span>
                        <motion.span
                          className="inline-block h-3.5 w-1.5 bg-[#00F5D4]/70"
                          initial={{ opacity: 0 }}
                          animate={
                            last
                              ? { opacity: [0, 1, 0, 1, 0, 1] }
                              : { opacity: [0, 1, 1, 0] }
                          }
                          transition={{
                            duration: last ? 0.9 : 0.35,
                            delay: l.delay,
                            times: last ? undefined : [0, 0.1, 0.9, 1],
                          }}
                        />
                      </motion.p>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutIntro;
