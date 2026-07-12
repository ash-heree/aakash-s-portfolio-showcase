import { Hand, ShoppingCart, BarChart3, CloudSun, ExternalLink, Github, Brain, Car, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  completed?: boolean;
};

const TiltCard = ({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({ ry: (x - 0.5) * 8, rx: (0.5 - y) * 8, mx: x * 100, my: y * 100 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`relative group transition-transform duration-300 ease-out ${className}`}
      style={{ transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, ...style }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: `radial-gradient(400px circle at ${tilt.mx}% ${tilt.my}%, rgba(0,245,212,0.15), transparent 60%)` }} />
      {children}
    </div>
  );
};

const ProjectsSection = () => {
  const featured: Project = {
    icon: <Shield className="h-7 w-7" />,
    title: "Machine Learning Based Transaction Risk Analysis",
    description:
      "Built an intelligent fraud detection platform using Machine Learning, Python, Flask, SQL and Data Analytics. The system predicts transaction risk levels in real time using behavioral analysis and classification models, while providing an interactive dashboard for monitoring suspicious activities.",
    technologies: ["Python", "Flask", "SQL", "Scikit-Learn", "Pandas", "Predictive Analytics"],
    featured: true,
    completed: true,
  };

  const others: Project[] = [
    { icon: <Hand className="h-5 w-5" />, title: "AI Virtual Mouse", description: "A computer-vision based virtual mouse using OpenCV, MediaPipe and Python. Users control cursor movement and click operations through hand gestures — no physical mouse required.", technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"], featured: true },
    { icon: <Brain className="h-5 w-5" />, title: "Neuro-Symbolic Sudoku Solver", description: "A hybrid AI solver combining neural heuristics with symbolic constraint propagation to efficiently crack Sudoku puzzles while demonstrating explainable AI concepts.", technologies: ["Neuro-Symbolic AI", "Python", "Constraint Satisfaction"], featured: true },
    { icon: <ShoppingCart className="h-5 w-5" />, title: "E-Commerce Website for Games", description: "A responsive e-commerce platform for digital game sales with secure authentication, product management, shopping cart and an intuitive user experience.", technologies: ["Web Dev", "Auth", "Analytics"] },
    { icon: <BarChart3 className="h-5 w-5" />, title: "Mini Data Analyst", description: "Analyzed consumer food-preference datasets using Python, Pandas and Matplotlib. Performed data cleaning, visualization and statistical analysis to derive business insights.", technologies: ["Pandas", "Matplotlib", "Colab"] },
    { icon: <CloudSun className="h-5 w-5" />, title: "Weather Suit", description: "A premium weather dashboard built with Streamlit and the OpenWeather API — real-time forecasting, animated UI components and location-based analytics.", technologies: ["Python", "Streamlit", "API"] },
    { icon: <Car className="h-5 w-5" />, title: "Smart Mobility Rental Platform", description: "A desktop rental management app for small businesses featuring customer management, vehicle tracking, booking automation and a SQLite database.", technologies: ["VB.NET", "SQLite", "Desktop"] },
  ];


  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, rgba(56,189,248,0.08) 0%, transparent 60%), linear-gradient(180deg, #0B1120 0%, #0A0F2E 50%, #050816 100%)" }}
    >
      {/* blueprint grid */}
      <div className="absolute inset-0 opacity-[0.14]"
           style={{
             backgroundImage: "linear-gradient(rgba(56,189,248,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.6) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
             maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
           }} />
      {/* fine blueprint sub-grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)",
             backgroundSize: "12px 12px",
           }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
           style={{ background: "radial-gradient(circle, #38BDF8, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
           style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
      {/* floating geometric shapes */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-16 h-16 border border-[#38BDF8]/25 rounded-lg"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[6%] w-10 h-10 border border-[#00F5D4]/30"
        style={{ borderRadius: "30%" }}
        animate={{ rotate: [0, -360], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[#00F5D4] mb-3 tracking-widest">// PROJECTS.BENTO</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mx-auto" />
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {/* Featured card spans full width on lg */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-3 lg:row-span-1"
            >
              <TiltCard>
                <div
                  className="relative rounded-2xl p-8 sm:p-10 backdrop-blur-xl overflow-hidden h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,245,212,0.08) 0%, rgba(56,189,248,0.05) 50%, rgba(0,255,136,0.05) 100%)",
                    border: "1px solid rgba(0,245,212,0.35)",
                    boxShadow: "0 0 60px rgba(0,245,212,0.2), inset 0 0 30px rgba(0,245,212,0.05)",
                  }}
                >
                  {/* animated border pulse */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                       style={{ boxShadow: "0 0 0 1px rgba(0,245,212,0.4)", animation: "pulse 3s ease-in-out infinite" }} />

                  <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#00F5D4]"
                           style={{ background: "rgba(0,245,212,0.12)", border: "1px solid rgba(0,245,212,0.4)", boxShadow: "0 0 25px rgba(0,245,212,0.3)" }}>
                        {featured.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{featured.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full font-mono font-medium text-[#00F5D4] border border-[#00F5D4]/40 bg-[#00F5D4]/10">
                        <Sparkles className="h-3 w-3" /> FEATURED
                      </span>
                      <span className="flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full font-mono font-medium text-[#00FF88] border border-[#00FF88]/40 bg-[#00FF88]/10 shadow-[0_0_15px_rgba(0,255,136,0.25)]">
                        <CheckCircle2 className="h-3 w-3" /> COMPLETED
                      </span>
                    </div>
                  </div>

                  <p className="text-white/75 leading-relaxed mb-6 max-w-4xl">{featured.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.technologies.map((t) => (
                      <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-md text-[#38BDF8]"
                            style={{ background: "rgba(11,17,32,0.7)", border: "1px solid rgba(56,189,248,0.25)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#050816] bg-gradient-to-r from-[#00F5D4] to-[#38BDF8] hover:shadow-[0_0_25px_rgba(0,245,212,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                      <ExternalLink className="h-4 w-4" /> View Project
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-white/15 bg-white/5 hover:border-[#00F5D4]/60 hover:bg-[#00F5D4]/10 transition-all duration-300">
                      <Github className="h-4 w-4" /> GitHub
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {others.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TiltCard>
                  <div
                    className="relative rounded-2xl p-6 h-full flex flex-col backdrop-blur-xl transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(11,17,32,0.7) 0%, rgba(5,8,22,0.7) 100%)",
                      border: "1px solid rgba(56,189,248,0.15)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      minHeight: "260px",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#38BDF8]"
                             style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)" }}>
                          {p.icon}
                        </div>
                        <h3 className="text-base font-semibold text-white leading-tight">{p.title}</h3>
                      </div>
                      {p.featured && (
                        <span className="flex-shrink-0 flex items-center gap-1 text-[10px] px-2 py-1 rounded-full font-mono font-medium text-[#00F5D4] border border-[#00F5D4]/40 bg-[#00F5D4]/10 shadow-[0_0_12px_rgba(0,245,212,0.3)]">
                          <Sparkles className="h-2.5 w-2.5" /> FEATURED
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed mb-4 flex-grow">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-1 rounded text-[#00F5D4]/80"
                              style={{ background: "rgba(0,245,212,0.06)", border: "1px solid rgba(0,245,212,0.15)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white/90 border border-[#00F5D4]/30 bg-[#00F5D4]/5 hover:bg-[#00F5D4]/15 transition-all">
                        <ExternalLink className="h-3.5 w-3.5" /> View
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white/70 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                        <Github className="h-3.5 w-3.5" /> Code
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
