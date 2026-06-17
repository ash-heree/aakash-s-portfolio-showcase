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
      // grid
      ctx.strokeStyle = "rgba(0,245,212,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      // connections
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

const SkillsSection = () => {
  const categories = [
    { icon: <Code2 className="h-6 w-6" />, title: "Programming Languages", skills: ["Python", "C", "C++", "JavaScript"] },
    { icon: <Layout className="h-6 w-6" />, title: "Frontend", skills: ["HTML", "CSS", "React", "Tailwind"] },
    { icon: <Server className="h-6 w-6" />, title: "Backend", skills: ["Node.js", "Python (Flask)", "REST APIs"] },
    { icon: <Database className="h-6 w-6" />, title: "Database", skills: ["MySQL", "SQLite", "MS Access"] },
    { icon: <Wrench className="h-6 w-6" />, title: "Tools & Technologies", skills: ["Git", "GitHub", "VS Code", "Google Colab", "Canva"] },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050816 0%, #0B1120 100%)" }}
    >
      <NeuralBackground />
      <div className="absolute inset-0 bg-[#050816]/60" />

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
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(0,245,212,0.06) 0%, rgba(56,189,248,0.04) 100%)",
                  border: "1px solid rgba(0,245,212,0.18)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: "0 0 40px rgba(0,245,212,0.35), inset 0 0 20px rgba(0,245,212,0.1)" }} />

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[#00F5D4]"
                       style={{ background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.3)" }}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s}
                          className="text-xs font-mono px-3 py-1.5 rounded-md text-[#38BDF8] transition-all duration-300 hover:text-white hover:bg-[#00F5D4]/15"
                          style={{ background: "rgba(11,17,32,0.6)", border: "1px solid rgba(56,189,248,0.2)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
