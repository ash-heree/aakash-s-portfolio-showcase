import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { User, Target, Rocket, GitBranch, Cpu, MemoryStick, MapPin, Clock, Activity, FolderGit2, Briefcase, Award, Presentation } from "lucide-react";

/* ---------- Terminal ---------- */
type Line =
  | { type: "cmd"; text: string }
  | { type: "ok"; text: string }
  | { type: "label"; text: string }
  | { type: "val"; text: string; color?: string }
  | { type: "blank" };

const TERMINAL_LINES: Line[] = [
  { type: "cmd", text: "npm run portfolio" },
  { type: "ok", text: "✔ Portfolio Loaded" },
  { type: "blank" },
  { type: "label", text: "Skills:" },
  { type: "val", text: "Python  React  Flask  Machine Learning" },
  { type: "blank" },
  { type: "label", text: "Git Branch:" },
  { type: "val", text: "main", color: "text-[#00F5D4]" },
  { type: "blank" },
  { type: "label", text: "Status:" },
  { type: "val", text: "Available for Work", color: "text-[#00FF88]" },
];

const LiveTime = () => {
  const [t, setT] = useState(() => new Date().toLocaleTimeString());
  useEffect(() => {
    const id = setInterval(() => setT(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="text-[#38BDF8]">{t}</span>;
};

const Terminal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView || step >= TERMINAL_LINES.length) return;
    const line = TERMINAL_LINES[step];
    const delay = line.type === "cmd" ? 650 : line.type === "blank" ? 150 : 280;
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
      className="gradient-border rounded-xl overflow-hidden bg-[#050816]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(0,245,212,0.15)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0B1120] border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-mono text-white/40">aakash@portfolio: ~</span>
        <span className="ml-auto text-[10px] font-mono text-white/30 flex items-center gap-1">
          <Activity className="h-3 w-3 text-[#00FF88]" /> online
        </span>
      </div>
      <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed min-h-[420px]">
        {TERMINAL_LINES.slice(0, step).map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-3" />;
          if (line.type === "cmd")
            return <div key={i} className="text-white/90"><span className="text-[#00FF88]">$</span> {line.text}</div>;
          if (line.type === "ok") return <div key={i} className="text-[#00FF88]">{line.text}</div>;
          if (line.type === "label") return <div key={i} className="text-white/60">{line.text}</div>;
          return <div key={i} className={line.color ?? "text-[#38BDF8]"}>{line.text}</div>;
        })}

        {step >= TERMINAL_LINES.length && (
          <>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div className="flex items-center gap-2 text-white/70"><Cpu className="h-3.5 w-3.5 text-[#00F5D4]" /> CPU: <span className="text-[#38BDF8] font-semibold">23%</span></div>
              <div className="flex items-center gap-2 text-white/70"><MemoryStick className="h-3.5 w-3.5 text-[#00F5D4]" /> RAM: <span className="text-[#38BDF8] font-semibold">61%</span></div>
              <div className="flex items-center gap-2 text-white/70"><GitBranch className="h-3.5 w-3.5 text-[#00F5D4]" /> branch: <span className="text-[#00F5D4]">main</span></div>
              <div className="flex items-center gap-2 text-white/70"><MapPin className="h-3.5 w-3.5 text-[#00F5D4]" /> <span className="text-[#38BDF8]">Chennai</span></div>
              <div className="flex items-center gap-2 text-white/70 col-span-2"><Clock className="h-3.5 w-3.5 text-[#00F5D4]" /> time: <LiveTime /></div>
            </div>
            <div className="mt-3 text-white/90">
              <span className="text-[#00FF88]">$</span>
              <span className="inline-block w-2.5 h-4 bg-[#00F5D4] align-middle ml-2 animate-[blink_1s_steps(2)_infinite]" />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

/* ---------- Stat card ---------- */
const StatCard = ({
  icon,
  to,
  label,
  delay = 0,
}: { icon: React.ReactNode; to: number; label: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString().padStart(2, "0"));
  const [val, setVal] = useState("00");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
    const unsub = rounded.on("change", setVal);
    return () => { controls.stop(); unsub(); };
  }, [inView, to]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="gradient-border group relative rounded-2xl p-5 bg-[#050816]/70 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,245,212,0.25)]"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 group-hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] transition-shadow">
          {icon}
        </div>
        <div className="text-3xl sm:text-4xl font-bold font-mono text-[#00F5D4] leading-none">{val}+</div>
      </div>
      <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

/* ---------- Keyword badge ---------- */
const Kw = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] font-mono px-2.5 py-1 mx-0.5 rounded-md text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 shadow-[0_0_12px_rgba(0,245,212,0.18)] align-middle">
    {children}
  </span>
);

/* ---------- Content block ---------- */
const Block = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="relative pl-4">
    <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#00F5D4]/50 via-[#38BDF8]/30 to-transparent" />
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[#00F5D4]">{icon}</span>
      <h4 className="font-mono text-sm uppercase tracking-widest text-white/80">{title}</h4>
    </div>
    <p className="text-white/75 leading-relaxed">{children}</p>
  </div>
);

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
      {/* soft spotlight behind left card */}
      <div className="absolute top-1/3 left-[8%] w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(0,245,212,0.15), transparent 65%)" }} />

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
          {/* LEFT: premium glass card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="gradient-border rounded-2xl p-7 sm:p-9 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-7">
              <Block icon={<User className="h-4 w-4" />} title="Introduction">
                I'm an <Kw>MCA Student</Kw> at the University of Madras (IDE), passionate about
                building things that live at the intersection of clean engineering and applied
                intelligence.
              </Block>

              <Block icon={<Target className="h-4 w-4" />} title="Current Focus">
                Sharpening my craft as a <Kw>Full Stack Developer</Kw> with <Kw>Python</Kw>,
                while going deeper into <Kw>Machine Learning</Kw> and <Kw>Data Analytics</Kw>{" "}
                through a recent ML internship and real-world projects.
              </Block>

              <Block icon={<Rocket className="h-4 w-4" />} title="Career Objective">
                To join a product-driven team where I can ship reliable, user-first software and
                grow into an engineer who blends full-stack fluency with data-informed decisions.
              </Block>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-white/10">
              <StatCard icon={<FolderGit2 className="h-5 w-5" />} to={8} label="Projects" delay={0} />
              <StatCard icon={<Briefcase className="h-5 w-5" />} to={2} label="Internships" delay={0.08} />
              <StatCard icon={<Award className="h-5 w-5" />} to={6} label="Certifications" delay={0.16} />
              <StatCard icon={<Presentation className="h-5 w-5" />} to={5} label="Workshops" delay={0.24} />
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
