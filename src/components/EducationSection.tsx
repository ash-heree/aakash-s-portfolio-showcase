import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
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
      style={{ background: "linear-gradient(180deg, #0B1120 0%, #050816 100%)" }}
    >
      {/* animated dot grid */}
      <div className="absolute inset-0 opacity-[0.18]"
           style={{
             backgroundImage: "radial-gradient(circle, rgba(0,245,212,0.6) 1px, transparent 1px)",
             backgroundSize: "28px 28px",
             maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
           }} />

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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
