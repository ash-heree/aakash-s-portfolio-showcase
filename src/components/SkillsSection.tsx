import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 42 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0,245,212,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.strokeStyle = `rgba(0,245,212,${(1 - d / 140) * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(56,189,248,0.85)";
        ctx.beginPath(); ctx.arc(a.x, a.y, 2, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />;
};

type Skill = { name: string; icon?: string };
type Category = {
  icon: JSX.Element;
  title: string;
  gradient: string;
  skills: Skill[];
};

const CODE_SYMBOLS = ["{ }", "< >", "( )", "//", "const", "=>", "[]", "*/", "&&", "..."];

const FloatingSymbols = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {CODE_SYMBOLS.map((s, i) => (
      <span
        key={i}
        className="absolute font-mono text-[#38BDF8]/20 select-none animate-float-y"
        style={{
          top: `${(i * 97) % 90 + 5}%`,
          left: `${(i * 53) % 92 + 3}%`,
          fontSize: `${14 + (i % 4) * 6}px`,
          animationDelay: `${(i % 5) * 0.7}s`,
          animationDuration: `${7 + (i % 4)}s`,
        }}
      >
        {s}
      </span>
    ))}
  </div>
);

const PROFICIENCY: { name: string; value: number }[] = [
  { name: "Python", value: 90 },
  { name: "React", value: 80 },
  { name: "SQL", value: 88 },
  { name: "Machine Learning", value: 72 },
];

const CATEGORIES: Category[] = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Programming Languages",
    gradient: "from-[#00F5D4] to-[#38BDF8]",
    skills: [{ name: "Python", icon: "🐍" }, { name: "C" }, { name: "C++" }, { name: "JavaScript", icon: "🟨" }],
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Frontend",
    gradient: "from-[#38BDF8] to-[#7C3AED]",
    skills: [{ name: "HTML", icon: "🟧" }, { name: "CSS", icon: "🟦" }, { name: "React", icon: "⚛" }, { name: "Tailwind" }],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend",
    gradient: "from-[#00FF88] to-[#00F5D4]",
    skills: [{ name: "Node.js", icon: "🟩" }, { name: "Flask", icon: "🧪" }, { name: "REST APIs" }],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database",
    gradient: "from-[#7C3AED] to-[#38BDF8]",
    skills: [{ name: "MySQL", icon: "🐬" }, { name: "SQLite" }, { name: "MS Access" }],
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Tools & Technologies",
    gradient: "from-[#00F5D4] to-[#00FF88]",
    skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "Colab" }, { name: "Canva" }],
  },
];

const SkillPill = ({ s }: { s: Skill }) => (
  <span
    className="gradient-border group inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full text-[#38BDF8] bg-[#050816]/70 backdrop-blur transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-[0_0_18px_rgba(0,245,212,0.4)]"
  >
    {s.icon && <span className="text-sm leading-none">{s.icon}</span>}
    {s.name}
  </span>
);

const ProficiencyBar = ({ name, value, delay }: { name: string; value: number; delay: number }) => (
  <div>
    <div className="flex justify-between text-xs font-mono mb-1.5">
      <span className="text-white/80">{name}</span>
      <span className="text-[#00F5D4]">{value}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-[#00F5D4] via-[#38BDF8] to-[#7C3AED] shadow-[0_0_12px_rgba(0,245,212,0.5)]"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050816 0%, #0B1120 100%)" }}
    >
      <NeuralBackground />
      <div className="absolute inset-0 bg-[#050816]/60" />
      <FloatingSymbols />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[#00F5D4] mb-3 tracking-widest">// SKILLS.MATRIX</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="gradient-border group relative rounded-2xl overflow-hidden bg-[#050816]/70 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,245,212,0.2)]"
              >
                {/* gradient header */}
                <div className={`h-1 w-full bg-gradient-to-r ${cat.gradient}`} />

                <div className="p-6">
                  {/* inner glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{ boxShadow: "inset 0 0 40px rgba(0,245,212,0.15)" }} />

                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${cat.gradient} shadow-[0_6px_24px_rgba(0,245,212,0.35)]`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <SkillPill key={s.name} s={s} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* proficiency widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="gradient-border group relative rounded-2xl overflow-hidden bg-[#050816]/70 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)]"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#7C3AED] via-[#38BDF8] to-[#00F5D4]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#7C3AED] to-[#38BDF8] shadow-[0_6px_24px_rgba(124,58,237,0.4)]">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Proficiency</h3>
                </div>
                <div className="space-y-4">
                  {PROFICIENCY.map((p, i) => (
                    <ProficiencyBar key={p.name} name={p.name} value={p.value} delay={i * 0.12} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
