import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const TERMINAL_LINES: Array<
  | { type: "cmd"; text: string }
  | { type: "out"; text: string; color?: string }
  | { type: "blank" }
> = [
  { type: "cmd", text: "cat interests.txt" },
  { type: "out", text: "→ Full Stack Development" },
  { type: "out", text: "→ Python Programming" },
  { type: "out", text: "→ Machine Learning" },
  { type: "out", text: "→ Data Analytics" },
  { type: "blank" },
  { type: "cmd", text: "echo $LOCATION" },
  { type: "out", text: "Chennai, Tamil Nadu, India" },
  { type: "blank" },
  { type: "cmd", text: "echo $STATUS" },
  { type: "out", text: "Open to opportunities ✓", color: "text-[#00FF88]" },
];

const PROCESSING = "Processing...";

const ProcessingPrompt = () => {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "idle">("typing");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < PROCESSING.length) {
        t = setTimeout(() => setText(PROCESSING.slice(0, text.length + 1)), 90);
      } else {
        t = setTimeout(() => setPhase("pausing"), 1500);
      }
    } else if (phase === "pausing") {
      t = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 45);
      } else {
        t = setTimeout(() => setPhase("idle"), 1800);
      }
    } else {
      t = setTimeout(() => setPhase("typing"), 600);
    }
    return () => clearTimeout(t);
  }, [text, phase]);

  return (
    <div className="text-white/90 mt-1">
      <span className="text-[#00FF88]">$</span> <span className="text-white/90">{text}</span>
      <span className="inline-block w-2.5 h-4 bg-[#00F5D4] align-middle ml-0.5 animate-[blink_1s_steps(2)_infinite]" />
    </div>
  );
};

const Terminal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (step >= TERMINAL_LINES.length) return;
    const line = TERMINAL_LINES[step];
    const delay = line.type === "cmd" ? 700 : line.type === "blank" ? 200 : 350;
    const t = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [inView, step]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="rounded-xl overflow-hidden border border-[#00F5D4]/25 bg-[#050816]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(0,245,212,0.15)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0B1120] border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-mono text-white/40">aakash@portfolio: ~</span>
      </div>
      <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed min-h-[340px]">
        {TERMINAL_LINES.slice(0, step).map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-3" />;
          if (line.type === "cmd")
            return (
              <div key={i} className="text-white/90">
                <span className="text-[#00FF88]">$</span> {line.text}
              </div>
            );
          return (
            <div key={i} className={line.color ?? "text-[#38BDF8]"}>
              {line.text}
            </div>
          );
        })}
        {step >= TERMINAL_LINES.length && <ProcessingPrompt />}
      </div>
    </motion.div>
  );
};

const Counter = ({ to, label }: { to: number; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
    const unsub = rounded.on("change", setVal);
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to]);
  return (
    <div
      ref={ref}
      className="rounded-xl border border-[#00F5D4]/20 bg-white/[0.03] backdrop-blur-md p-5 text-center hover:border-[#00F5D4]/60 hover:shadow-[0_0_25px_rgba(0,245,212,0.25)] transition-all duration-300"
    >
      <div className="text-3xl sm:text-4xl font-bold font-mono text-[#00F5D4]">
        {val}+
      </div>
      <div className="text-xs sm:text-sm text-white/60 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top right, rgba(124,58,237,0.14) 0%, transparent 55%), radial-gradient(ellipse at bottom left, rgba(56,189,248,0.10) 0%, transparent 55%), linear-gradient(180deg, #0A0B24 0%, #050816 100%)",
      }}
    >
      {/* animated blurred blobs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <span className="text-[#00F5D4]">#</span> about_me
            <span className="inline-block w-3 h-7 sm:h-9 bg-[#00F5D4] ml-2 align-middle animate-[blink_1s_steps(2)_infinite]" />
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-[#00F5D4] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-white/80 leading-relaxed"
          >
            <p>
              I'm an <span className="text-[#00F5D4] font-semibold">MCA student</span> at the{" "}
              <span className="text-[#38BDF8]">University of Madras (IDE)</span>, building a
              strong foundation across modern software engineering and applied AI.
            </p>
            <p>
              My focus areas include{" "}
              <span className="text-[#00F5D4]">Full Stack Development</span> and{" "}
              <span className="text-[#00F5D4]">Python Programming</span>, with growing
              expertise in <span className="text-[#38BDF8]">Machine Learning</span> and{" "}
              <span className="text-[#38BDF8]">Data Analytics</span> through a recent ML
              internship.
            </p>
            <p>
              I've shipped real-world projects like an{" "}
              <span className="text-white font-medium">AI Virtual Mouse</span> using computer
              vision and a{" "}
              <span className="text-white font-medium">
                Machine Learning Based Transaction Risk Analysis
              </span>{" "}
              system for intelligent fraud detection.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <Counter to={8} label="Projects" />
              <Counter to={2} label="Internships" />
              <Counter to={6} label="Certifications" />
              <Counter to={5} label="Workshops" />
            </div>
          </motion.div>

          {/* RIGHT: terminal */}
          <Terminal />
        </div>
      </div>

      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
    </section>
  );
};

export default AboutSection;
