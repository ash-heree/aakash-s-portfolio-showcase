import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const reduced = useReducedMotion();

  // Four genuinely different, GPU-friendly cinematic entrances (transform + opacity + filter only).
  const entrances = [
    { // MCA — long slide in from the left with a 3D Y-rotation
      initial: { opacity: 0, x: -340, rotateY: -38, transformPerspective: 900 },
      animate: { opacity: 1, x: 0, rotateY: 0, transformPerspective: 900 },
    },
    { // BCA — slide in from the right with a perspective tilt and a slightly springier curve
      initial: { opacity: 0, x: 300, rotateY: 30, transformPerspective: 800 },
      animate: { opacity: 1, x: 0, rotateY: 0, transformPerspective: 800 },
    },
    { // Higher Secondary — cinematic rise from far below with blur-to-sharp focus
      initial: { opacity: 0, y: 150, filter: "blur(14px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    { // Secondary — 3D flip + zoom combo, rotating naturally into place
      initial: { opacity: 0, scale: 0.7, rotateY: -50, rotate: -6, transformPerspective: 1000 },
      animate: { opacity: 1, scale: 1, rotateY: 0, rotate: 0, transformPerspective: 1000 },
    },
  ];
  // Per-card duration + easing so each entrance has its own motion curve.
  const transitions = [
    { duration: 1.05, ease: [0.22, 1, 0.36, 1] as const },   // MCA — smooth expo landing
    { duration: 1.15, ease: [0.34, 1.12, 0.64, 1] as const }, // BCA — gentle settle with micro-overshoot
    { duration: 1.0, ease: [0.23, 1, 0.32, 1] as const },     // Higher Sec — cinematic rise
    { duration: 1.1, ease: [0.18, 0.94, 0.26, 1] as const },  // Secondary — natural flip-rotate finish
  ];

  const education = [
    { degree: "Master of Computer Applications (MCA)", institution: "University of Madras (IDE)", period: "2024 - 2026", status: "Pursuing", percentage: "In Progress" },
    { degree: "Bachelor of Computer Applications (BCA)", institution: "S.A. College of Arts & Science", period: "2021 - 2024", status: "Completed", percentage: "68%" },
    { degree: "Higher Secondary Education", institution: "Excel Matriculation School", period: "2020 - 2021", status: "Completed", percentage: "70%" },
    { degree: "Secondary Education", institution: "Little Holy Angel's School", period: "2017 - 2018", status: "Completed", percentage: "53%" },
  ];

  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top left, rgba(167,139,250,0.10) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(56,189,248,0.08) 0%, transparent 55%), linear-gradient(180deg, #0B1120 0%, #0A0B24 100%)" }}
    >
      {/* paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{
             backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 40px)",
           }} />
      {/* animated dot grid */}
      <div className="absolute inset-0 opacity-[0.18]"
           style={{
             backgroundImage: "radial-gradient(circle, rgba(167,139,250,0.5) 1px, transparent 1px)",
             backgroundSize: "28px 28px",
             maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
           }} />
      {/* subtle floating book icons */}
      <div className="absolute top-[15%] right-[10%] text-[80px] opacity-[0.04] select-none">📚</div>
      <div className="absolute bottom-[18%] left-[8%] text-[80px] opacity-[0.04] select-none">🎓</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[#00F5D4] mb-3 tracking-widest">// EDUCATION.TIMELINE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={reduced ? false : entrances[i].initial}
                whileInView={entrances[i].animate}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  ...transitions[i],
                  delay: reduced ? 0 : 0.2 * i, // 200ms sequential stagger
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(56,189,248,0.05) 0%, rgba(11,17,32,0.7) 100%)",
                  border: "1px solid rgba(0,245,212,0.18)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-[#00F5D4] flex-shrink-0"
                    style={{ background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.3)" }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <GraduationCap className="h-5 w-5" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white leading-snug group-hover:text-[#00F5D4] transition-colors">{edu.degree}</h3>
                    <p className="text-xs font-mono text-[#38BDF8] mt-1">{edu.period}</p>
                  </div>
                </div>
                <p className="text-sm text-white/80 mb-3">{edu.institution}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-white/60">{edu.status}</span>
                  <span className="font-mono font-semibold text-[#00FF88]">{edu.percentage}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
