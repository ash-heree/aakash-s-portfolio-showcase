import { Hand, ShoppingCart, BarChart3, CloudSun, ExternalLink, Github, Brain, Car, Shield, Sparkles, CheckCircle2, Calendar, UserCircle2, Target, Wrench, FileText, Rocket, Database, LineChart, Eye, Puzzle, Video, Code2, Monitor } from "lucide-react";
import { SiPython, SiFlask, SiPandas, SiHtml5, SiCss, SiJavascript, SiPhp, SiMysql, SiStreamlit, SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { createPortal } from "react-dom";

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  role: string;
  status?: "Completed" | "In Progress";
  featured?: boolean;
  completed?: boolean;
  caseStudy?: boolean;
  githubUrl?: string;
};

type IconComponent = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const techIconMap: Record<string, { Icon: IconComponent; color: string }> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  Flask: { Icon: SiFlask, color: "#FFFFFF" },
  SQL: { Icon: Database, color: "#38BDF8" },
  "Scikit-Learn": { Icon: Sparkles, color: "#FACC15" },
  Pandas: { Icon: SiPandas, color: "#E70488" },
  "Predictive Analytics": { Icon: LineChart, color: "#00F5D4" },
  OpenCV: { Icon: Eye, color: "#5C3EE8" },
  MediaPipe: { Icon: Video, color: "#00FF88" },
  "Computer Vision": { Icon: Eye, color: "#38BDF8" },
  "Neuro-Symbolic AI": { Icon: Brain, color: "#A855F7" },
  "Constraint Satisfaction": { Icon: Puzzle, color: "#F472B6" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  MySQL: { Icon: SiMysql, color: "#00758F" },
  Matplotlib: { Icon: BarChart3, color: "#1f77b4" },
  Colab: { Icon: Code2, color: "#F9AB00" },
  Streamlit: { Icon: SiStreamlit, color: "#FF4B4B" },
  "OpenWeather API": { Icon: CloudSun, color: "#38BDF8" },
  "VB.NET": { Icon: SiDotnet, color: "#512BD4" },
  SQLite: { Icon: Database, color: "#0F80CC" },
  Desktop: { Icon: Monitor, color: "#A855F7" },
  ".NET": { Icon: SiDotnet, color: "#512BD4" },
};

const useHoverCapable = () => {
  const [capable, setCapable] = useState(false);
  useEffect(() => {
    setCapable(window.matchMedia("(hover: hover)").matches);
  }, []);
  return capable;
};

const TechPopup = ({
  technologies,
  rect,
  onMouseEnter,
  onMouseLeave,
}: {
  technologies: string[];
  rect: DOMRect;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({ position: "fixed", top: 0, left: 0, visibility: "hidden", zIndex: 9999 });

  useLayoutEffect(() => {
    const el = popupRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let top = rect.top - h - 10;
    let left = rect.left + rect.width / 2 - w / 2;
    if (top < 8) top = rect.bottom + 10;
    if (left < 8) left = 8;
    else if (left + w > vw - 8) left = vw - w - 8;
    if (top + h > vh - 8) top = vh - h - 8;
    setStyle({ position: "fixed", top, left, visibility: "visible", zIndex: 9999 });
  }, [rect]);

  return createPortal(
    <motion.div
      ref={popupRef}
      style={style}
      initial={{ opacity: 0, scale: 0.92, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="rounded-2xl border border-[#00F5D4]/40 bg-[#0B1120]/95 backdrop-blur-2xl p-4 shadow-[0_0_35px_rgba(0,245,212,0.2)] min-w-[260px] max-w-[340px]"
    >
      <p className="text-[10px] font-mono uppercase tracking-widest text-[#00F5D4]/80 mb-3">// TECH.STACK</p>
      <ul className="space-y-2.5">
        {technologies.map((t) => {
          const mapped = techIconMap[t];
          const Icon = mapped?.Icon ?? Code2;
          return (
            <li key={t} className="flex items-center gap-3 text-sm text-white/90">
              <Icon className="h-5 w-5 flex-shrink-0" style={{ color: mapped?.color ?? "#00F5D4" }} />
              <span>{t}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>,
    document.body
  );
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
      className={`relative group transition-transform duration-300 ease-out h-full ${className}`}
      style={{ transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, ...style }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: `radial-gradient(400px circle at ${tilt.mx}% ${tilt.my}%, rgba(0,245,212,0.15), transparent 60%)` }} />
      {children}
    </div>
  );
};

const MetricTile = ({ icon, label, value, accent = false, pulse = false }: { icon: React.ReactNode; label: string; value: React.ReactNode; accent?: boolean; pulse?: boolean }) => (
  <div className="relative rounded-xl p-3 bg-white/[0.03] border border-white/10 hover:border-[#00F5D4]/30 hover:bg-white/[0.06] transition-all duration-300">
    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
      <span className={accent ? "text-[#00F5D4]" : "text-[#38BDF8]"}>{icon}</span>
      {label}
    </div>
    <div className="flex items-center gap-1.5 text-[13px] font-semibold text-white leading-tight">
      {pulse && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]" /></span>}
      {value}
    </div>
  </div>
);

const ProjectInfo = ({ p, compact = false, onStackEnter, onStackLeave }: { p: Project; compact?: boolean; onStackEnter?: (technologies: string[], rect: DOMRect) => void; onStackLeave?: () => void }) => {
  const stackRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative rounded-2xl p-3 sm:p-4 mb-4 backdrop-blur-xl overflow-hidden group/info transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,245,212,0.2)]"
      style={{
        background: "linear-gradient(135deg, rgba(0,245,212,0.04) 0%, rgba(124,58,237,0.05) 100%)",
        border: "1px solid rgba(0,245,212,0.18)",
        boxShadow: "0 0 15px rgba(0,245,212,0.08)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
      <p className="text-[9px] font-mono uppercase tracking-widest text-[#00F5D4] mb-2.5 opacity-70">// PROJECT.INFO</p>
      <div className={`grid grid-cols-2 gap-2 ${compact ? "" : "sm:gap-3"}`}>
        <MetricTile icon={<Calendar className="h-3 w-3" />} label="Duration" value={p.duration} />
        <MetricTile icon={<UserCircle2 className="h-3 w-3" />} label="Role" value={<span className="truncate">{p.role}</span>} />
        <MetricTile icon={<Target className="h-3 w-3" />} label="Status" value={p.status ?? "Completed"} accent pulse={(p.status ?? "Completed") === "Completed"} />
        <div
          ref={stackRef}
          onMouseEnter={() => {
            if (stackRef.current) onStackEnter?.(p.technologies, stackRef.current.getBoundingClientRect());
          }}
          onMouseLeave={() => onStackLeave?.()}
        >
          <MetricTile icon={<Wrench className="h-3 w-3" />} label="Stack" value={`${p.technologies.length} Technologies`} />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const hoverCapable = useHoverCapable();
  const [stackHover, setStackHover] = useState<{ technologies: string[]; rect: DOMRect } | null>(null);
  const popupHoverRef = useRef(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handleStackEnter = (technologies: string[], rect: DOMRect) => {
    clearLeaveTimer();
    if (hoverCapable) setStackHover({ technologies, rect });
  };

  const scheduleClose = () => {
    clearLeaveTimer();
    leaveTimerRef.current = setTimeout(() => {
      if (!popupHoverRef.current) setStackHover(null);
    }, 120);
  };

  const handleStackLeave = () => scheduleClose();
  const handlePopupEnter = () => {
    popupHoverRef.current = true;
    clearLeaveTimer();
  };
  const handlePopupLeave = () => {
    popupHoverRef.current = false;
    scheduleClose();
  };

  const featured: Project = {
    icon: <Shield className="h-7 w-7" />,
    title: "Machine Learning Based Transaction Risk Analysis",
    description:
      "Built an intelligent fraud detection platform using Machine Learning, Python, Flask, SQL and Data Analytics. The system predicts transaction risk levels in real time using behavioral analysis and classification models, while providing an interactive dashboard for monitoring suspicious activities.",
    technologies: ["Python", "Flask", "SQL", "Scikit-Learn", "Pandas", "Predictive Analytics"],
    duration: "3 Months",
    role: "Machine Learning Developer",
    status: "Completed",
    featured: true,
    completed: true,
    caseStudy: true,
    githubUrl: "https://github.com/ash-heree/Project-ML.git",
  };

  const others: Project[] = [
    { icon: <Hand className="h-5 w-5" />, title: "AI Virtual Mouse", description: "A computer-vision based virtual mouse using OpenCV, MediaPipe and Python. Users control cursor movement and click operations through hand gestures — no physical mouse required.", technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"], duration: "2 Months", role: "Computer Vision Developer", featured: true, githubUrl: "https://github.com/ash-heree/Virtual-Mouse.git" },
    { icon: <Brain className="h-5 w-5" />, title: "Neuro-Symbolic Sudoku Solver", description: "A hybrid AI solver combining neural heuristics with symbolic constraint propagation to efficiently crack Sudoku puzzles while demonstrating explainable AI concepts.", technologies: ["Neuro-Symbolic AI", "Python", "Constraint Satisfaction"], duration: "1 Month", role: "AI Developer", featured: true },
    { icon: <ShoppingCart className="h-5 w-5" />, title: "E-Commerce Website for Games", description: "A responsive e-commerce platform for digital game sales with secure authentication, product management, shopping cart and an intuitive user experience.", technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], duration: "3 Months", role: "Full Stack Developer" },
    { icon: <BarChart3 className="h-5 w-5" />, title: "Mini Data Analyst", description: "Analyzed consumer food-preference datasets using Python, Pandas and Matplotlib. Performed data cleaning, visualization and statistical analysis to derive business insights.", technologies: ["Python", "Pandas", "Matplotlib", "Colab"], duration: "1 Month", role: "Data Analyst" },
    { icon: <CloudSun className="h-5 w-5" />, title: "Weather Suit", description: "A premium weather dashboard built with Streamlit and the OpenWeather API — real-time forecasting, animated UI components and location-based analytics.", technologies: ["Python", "Streamlit", "OpenWeather API"], duration: "3 Weeks", role: "Python Developer" },
    { icon: <Car className="h-5 w-5" />, title: "Smart Mobility Rental Platform", description: "A desktop rental management app for small businesses featuring customer management, vehicle tracking, booking automation and a SQLite database.", technologies: ["VB.NET", "SQLite", "Desktop", ".NET"], duration: "2 Months", role: "Desktop Application Developer" },
    { icon: <SiMysql className="h-5 w-5" style={{ color: "#00758F" }} />, title: "Payroll Management System", description: "Developed a relational Payroll Management System using MySQL to manage employee information, departments, attendance, salaries, deductions, and monthly payslips. Designed normalized tables with PK/FK constraints, CHECK and ENUM validations, views for reports, stored functions and procedures for payroll logic, triggers to guard data integrity, transaction-safe salary updates, window-function salary rankings, and performance indexes.", technologies: ["MySQL", "SQL"], duration: "2 Months", role: "Database Developer", githubUrl: "https://github.com/ash-heree/Pay-Roll-Management-System" },
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
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)",
             backgroundSize: "12px 12px",
           }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
           style={{ background: "radial-gradient(circle, #38BDF8, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
           style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-3"
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
                      <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-md text-[#38BDF8] hover:text-white hover:shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all"
                            style={{ background: "rgba(11,17,32,0.7)", border: "1px solid rgba(56,189,248,0.25)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <ProjectInfo p={featured} onStackEnter={handleStackEnter} onStackLeave={handleStackLeave} />

                  <div className="h-px bg-gradient-to-r from-transparent via-[#00F5D4]/30 to-transparent mb-5" />

                  <div className="flex flex-wrap gap-3">
                    <button className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#050816] bg-gradient-to-r from-[#00F5D4] to-[#38BDF8] hover:shadow-[0_0_25px_rgba(0,245,212,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03]">
                      <Rocket className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" /> View Project
                    </button>
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-white/15 bg-white/5 hover:border-[#00F5D4]/60 hover:bg-[#00F5D4]/10 hover:shadow-[0_0_15px_rgba(0,245,212,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" /> GitHub
                    </a>
                    {featured.caseStudy && (
                      <button className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-[#7C3AED]/40 bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300 hover:-translate-y-0.5">
                        <FileText className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" /> Case Study
                      </button>
                    )}
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
                className="h-full"
              >
                <TiltCard>
                  <div
                    className="relative rounded-2xl p-6 h-full flex flex-col backdrop-blur-xl transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(11,17,32,0.7) 0%, rgba(5,8,22,0.7) 100%)",
                      border: "1px solid rgba(56,189,248,0.15)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      minHeight: "520px",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#38BDF8] flex-shrink-0"
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

                    <p className="text-sm text-white/70 leading-relaxed mb-4">{p.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-1 rounded text-[#00F5D4]/80 hover:text-[#00F5D4] hover:shadow-[0_0_10px_rgba(0,245,212,0.4)] transition-all"
                              style={{ background: "rgba(0,245,212,0.06)", border: "1px solid rgba(0,245,212,0.15)" }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <ProjectInfo p={p} compact onStackEnter={handleStackEnter} onStackLeave={handleStackLeave} />
                      <div className="h-px bg-gradient-to-r from-transparent via-[#00F5D4]/25 to-transparent mb-3" />
                      <div className="flex gap-2">
                        <button className="group/btn flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white/90 border border-[#00F5D4]/30 bg-[#00F5D4]/5 hover:bg-[#00F5D4]/15 hover:shadow-[0_0_12px_rgba(0,245,212,0.4)] hover:-translate-y-0.5 transition-all">
                          <Rocket className="h-3.5 w-3.5 group-hover/btn:rotate-12 transition-transform" /> View
                        </button>
                        {p.githubUrl ? (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white/70 border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
                          >
                            <Github className="h-3.5 w-3.5 group-hover/btn:rotate-12 transition-transform" /> Code
                          </a>
                        ) : (
                          <button className="group/btn flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white/70 border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                            <Github className="h-3.5 w-3.5 group-hover/btn:rotate-12 transition-transform" /> Code
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {stackHover && (
        <TechPopup
          technologies={stackHover.technologies}
          rect={stackHover.rect}
          onMouseEnter={handlePopupEnter}
          onMouseLeave={handlePopupLeave}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
