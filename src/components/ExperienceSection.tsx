import { Laptop, BarChart3, Brain, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: <Brain className="h-5 w-5" />,
      role: "Machine Learning Internship",
      organization: "Vcodez Company (Online)",
      description: "Hands-on training in machine learning, data preprocessing, model building, and evaluation using Python and scikit-learn.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      role: "ICT Virtual Internship – Data Science",
      organization: "ICT Academy • Completed",
      description: "Virtual internship focused on Data Science and IT, with practical skills in data analysis, digital tools, and IT fundamentals.",
    },
    {
      icon: <Laptop className="h-5 w-5" />,
      role: "Program Participant",
      organization: "Jal Shakthi Abhiyan • Tiruvallur Collector Office",
      description: "Collaborated with Government Engineers on water resource management and regional water budget data collection.",
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      role: "Computer Applications Trainer",
      organization: "Dasar Matriculation School",
      description: "Delivered computer applications training to 11th std students covering essential software and programming fundamentals.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050816 0%, #0B1120 100%)" }}
    >
      {/* gradient mesh */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #00F5D4, transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)" }}
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[#00F5D4] mb-3 tracking-widest">// INTERNSHIPS.LOG</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Internships & Training</h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mx-auto" />
          </motion.div>

          <div className="relative">
            {/* timeline line */}
            <motion.div
              className="absolute left-[22px] sm:left-6 top-0 w-[2px] origin-top"
              style={{ background: "linear-gradient(180deg, #00F5D4 0%, #38BDF8 50%, transparent 100%)" }}
              initial={{ scaleY: 0, height: "100%" }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* node */}
                  <motion.div
                    className="absolute left-0 top-4 w-[46px] h-[46px] rounded-xl flex items-center justify-center text-[#00F5D4] z-10"
                    style={{
                      background: "rgba(11,17,32,0.95)",
                      border: "1px solid rgba(0,245,212,0.5)",
                      boxShadow: "0 0 20px rgba(0,245,212,0.3)",
                    }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {exp.icon}
                  </motion.div>

                  <div
                    className="rounded-2xl p-6 backdrop-blur-xl group transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,245,212,0.05) 0%, rgba(11,17,32,0.6) 100%)",
                      border: "1px solid rgba(56,189,248,0.15)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00F5D4] transition-colors">{exp.role}</h3>
                    <p className="text-sm font-mono text-[#38BDF8] mb-3">{exp.organization}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
