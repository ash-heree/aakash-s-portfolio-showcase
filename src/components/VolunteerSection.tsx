import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Image as ImageIcon, FolderTree } from "lucide-react";

const activities = [
  {
    icon: ImageIcon,
    title: "Poster Design & Editing",
    description:
      "Created and edited promotional materials for college events, enhancing visual communication and event marketing.",
    tag: "design",
  },
  {
    icon: Heart,
    title: "External Program Volunteering",
    description:
      "Actively participated in various external programs and community initiatives, contributing time and skills.",
    tag: "community",
  },
  {
    icon: FolderTree,
    title: "Record-Keeping System Lead",
    description:
      "Developed and implemented a comprehensive record-keeping system that organized 200+ club documents, improving efficiency by 50%.",
    tag: "systems",
  },
];

const WaveBackground = () => {
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
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const lines = 5;
      for (let l = 0; l < lines; l++) {
        ctx.beginPath();
        const amp = 30 + l * 8;
        const freq = 0.005 + l * 0.001;
        const yOff = canvas.height * (0.3 + l * 0.12);
        for (let x = 0; x <= canvas.width; x += 6) {
          const y = yOff + Math.sin(x * freq + t + l) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        grad.addColorStop(0, "rgba(0,245,212,0)");
        grad.addColorStop(0.5, `rgba(0,245,212,${0.18 - l * 0.025})`);
        grad.addColorStop(1, "rgba(56,189,248,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      t += 0.012;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const VolunteerSection = () => {
  return (
    <section
      id="volunteer"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at bottom left, rgba(0,245,212,0.08) 0%, transparent 55%), radial-gradient(ellipse at top right, rgba(56,189,248,0.08) 0%, transparent 55%), linear-gradient(180deg, #050816 0%, #0B1120 100%)",
      }}
    >
      <WaveBackground />
      {/* dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,245,212,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <span className="text-[#00F5D4]">#</span> volunteer_activities
            <span className="inline-block w-3 h-7 sm:h-9 bg-[#00F5D4] ml-2 align-middle animate-[blink_1s_steps(2)_infinite]" />
          </h2>
          <p className="mt-3 text-white/60 font-mono text-sm">
            <span className="text-[#00FF88]">$</span> ls ~/campus/contributions
          </p>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-[#00F5D4] to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative"
              >
                {/* glow border */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00F5D4]/0 via-[#00F5D4]/0 to-[#38BDF8]/0 group-hover:from-[#00F5D4]/40 group-hover:to-[#38BDF8]/40 transition-all duration-500 blur-sm" />
                <div
                  className="relative h-full rounded-2xl p-6 border border-[#00F5D4]/15 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[#00F5D4]/50 group-hover:shadow-[0_0_40px_rgba(0,245,212,0.25)]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#00F5D4]/30 bg-[#00F5D4]/10 text-[#00F5D4] shadow-[0_0_20px_rgba(0,245,212,0.2)] group-hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] transition-shadow"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#38BDF8]/80 px-2 py-1 rounded border border-[#38BDF8]/20 bg-[#38BDF8]/5">
                      {a.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 font-mono">
                    {a.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {a.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5 font-mono text-[11px] text-white/40">
                    <span className="text-[#00FF88]">●</span> contribution_logged
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
    </section>
  );
};

export default VolunteerSection;
