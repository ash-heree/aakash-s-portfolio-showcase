import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const ROLES = ["MCA Student", "Full Stack Developer", "Python Enthusiast"];

const MatrixRain = () => {
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
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);
    const chars = "01ｱｲｳｴｵｶｷｸｹｺ{}<>/$#*+";
    let last = 0;
    const draw = (t: number) => {
      if (t - last > 60) {
        last = t;
        ctx.fillStyle = "rgba(5, 8, 22, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 245, 212, 0.55)";
        ctx.font = `${fontSize}px monospace`;
        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};

const TypingRoles = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      if (!del) {
        if (i < ROLES.length) {
          setText(ROLES.slice(0, i + 1));
          setI(i + 1);
        } else {
          setTimeout(() => setDel(true), 2200);
        }
      } else {
        if (i > 0) {
          setText(ROLES.slice(0, i - 1));
          setI(i - 1);
        } else {
          setDel(false);
        }
      }
    }, del ? 30 : 65);
    return () => clearTimeout(t);
  }, [i, del]);
  return (
    <span className="font-mono text-base sm:text-lg md:text-xl text-[#00F5D4]">
      {text}
      <span className="inline-block w-[2px] h-5 bg-[#00F5D4] ml-1 align-middle animate-[blink_1s_steps(2)_infinite]" />
    </span>
  );
};

const CodeEditor = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative"
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="rounded-xl overflow-hidden border border-[#00F5D4]/25 bg-[#0B1120]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(0,245,212,0.18)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#050816]/80 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-mono text-white/40">developer.py</span>
      </div>
      <pre className="p-5 sm:p-6 text-[13px] sm:text-sm font-mono leading-relaxed overflow-x-auto">
<code>
<span className="text-[#ff79c6]">class</span> <span className="text-[#00F5D4]">Developer</span>:
{"\n  "}<span className="text-[#38BDF8]">name</span> = <span className="text-[#00FF88]">"Aakash S"</span>
{"\n  "}<span className="text-[#38BDF8]">role</span> = <span className="text-[#00FF88]">"MCA Student"</span>
{"\n  "}<span className="text-[#38BDF8]">skills</span> = [
{"\n    "}<span className="text-[#00FF88]">"Python"</span>,
{"\n    "}<span className="text-[#00FF88]">"JavaScript"</span>,
{"\n    "}<span className="text-[#00FF88]">"React"</span>,
{"\n    "}<span className="text-[#00FF88]">"MySQL"</span>
{"\n  "}]
{"\n  "}<span className="text-[#38BDF8]">interests</span> = [
{"\n    "}<span className="text-[#00FF88]">"Full Stack Development"</span>,
{"\n    "}<span className="text-[#00FF88]">"Machine Learning"</span>,
{"\n    "}<span className="text-[#00FF88]">"Data Analytics"</span>
{"\n  "}]
</code>
      </pre>
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top left, rgba(0,245,212,0.12) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(56,189,248,0.10) 0%, transparent 55%), linear-gradient(180deg, #050816 0%, #0B1120 100%)",
      }}
    >
      <MatrixRain />
      <div className="absolute inset-0 bg-[#050816]/40" />

      {/* floating particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00F5D4]/70"
          style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm text-white/60 mb-4"
            >
              <span className="text-[#00FF88]">$</span> whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #00F5D4 50%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(0,245,212,0.35))",
              }}
            >
              Aakash S
            </motion.h1>

            <div className="mb-6 min-h-[2rem]">
              <TypingRoles />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
            >
              Building modern web applications and exploring Python, Machine Learning,
              and Data Analytics through real-world projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => scroll("#projects")}
                className="px-6 py-3 rounded-lg font-semibold text-[#050816] bg-gradient-to-r from-[#00F5D4] to-[#38BDF8] hover:shadow-[0_0_30px_rgba(0,245,212,0.6)] transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
              </button>
              <button
                onClick={() => scroll("#contact")}
                className="px-6 py-3 rounded-lg font-semibold text-white border border-[#00F5D4]/40 bg-white/5 backdrop-blur-md hover:bg-[#00F5D4]/10 hover:border-[#00F5D4] hover:shadow-[0_0_25px_rgba(0,245,212,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex gap-3"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:aakash@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#00F5D4] hover:bg-[#00F5D4]/10 hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-white/80 group-hover:text-[#00F5D4]" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <CodeEditor />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <ChevronDown
          className="w-5 h-5 text-[#00F5D4]/60 cursor-pointer"
          onClick={() => scroll("#about")}
        />
      </motion.div>

      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
    </section>
  );
};

export default HeroSection;
