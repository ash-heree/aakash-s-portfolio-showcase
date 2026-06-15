import { Hand, ShoppingCart, BarChart3, CloudSun, ExternalLink, Github, Brain, Car, ChevronDown, ChevronUp, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import projectsBackground from "@/assets/projects-tech-bg.jpg";

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce Website for Games",
      description:
        "Built a full-featured e-commerce platform during ICT Virtual Internship, leveraging data science techniques for user recommendations and inventory management.",
      technologies: ["Data Science", "Web Development", "E-commerce", "Analytics"],
    },
    {
      icon: <Hand className="h-6 w-6" />,
      title: "AI Virtual Mouse",
      description:
        "Developed an innovative computer interaction system using Python and hand-sign recognition technology, enabling touchless mouse control through gesture detection.",
      technologies: ["Python", "Computer Vision", "OpenCV", "Hand Tracking"],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Mini Data Analyst (Survey & Insights)",
      description:
        "Created a comprehensive food survey project titled 'Yummy Opinions', collecting and analyzing consumer preferences using data visualization.",
      technologies: ["Google Forms", "Google Colab", "Pandas", "Matplotlib"],
    },
    {
      icon: <CloudSun className="h-6 w-6" />,
      title: "Weather Suit – Smart Weather UI",
      description:
        "A modern weather application UI designed to display real-time weather data with a clean, premium user experience. Built with focus on simplicity and usability.",
      technologies: ["Python", "Streamlit", "VS Code", "OpenWeather API"],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Hybrid Neuro-Symbolic Sudoku Solver",
      description:
        "Built a neuro-symbolic AI system that solves Sudoku puzzles by combining neural-guided heuristics with symbolic, rule-based constraint propagation. Demonstrates logical reasoning, constraint satisfaction, and the synergy between data-driven learning and formal inference.",
      technologies: ["Neuro-Symbolic AI", "Logical Reasoning", "Constraint Satisfaction", "Python", "Sudoku Solver"],
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Smart Mobility Rental Platform",
      description:
        "A fully offline desktop-based rental application designed for small businesses, operating smoothly on older PCs without internet. Automates customer records, vehicle tracking, booking, billing, and return management using a lightweight local database.",
      technologies: ["Offline Application", "Desktop Software", "Database Project", "Lightweight Architecture"],
      techStack: ["Python / VB.NET", "SQLite / MS Access", "ADO.NET / SQLite3", "Desktop Forms UI"],
      modules: [
        "Customer Management Module",
        "Vehicle Management Module",
        "Booking & Rental Processing Module",
        "Payment & Billing Generation Module",
        "Return & Vehicle Condition Update Module",
        "Data Storage & Database Management Module",
      ],
      features: [
        "Fully Offline System",
        "Runs on Low-Spec Computers",
        "Automatic Billing & Late Fee Calculation",
        "Real-Time Vehicle Status Updates",
        "Secure Data Storage & Logging",
      ],
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${projectsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider" />
          </motion.div>

          {/* Card Grid Layout - Similar to Skills */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card 
                    className="p-6 sm:p-8 h-full flex flex-col group cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, rgba(45, 20, 60, 0.45) 0%, rgba(30, 15, 45, 0.5) 50%, rgba(50, 25, 70, 0.4) 100%)",
                      border: "1px solid rgba(255, 170, 80, 0.15)",
                      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.25), 0 0 40px rgba(255, 150, 50, 0.05)",
                    }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, rgba(255, 170, 80, 0.2) 0%, rgba(255, 140, 50, 0.15) 100%)",
                          border: "1px solid rgba(255, 170, 80, 0.3)",
                          boxShadow: "0 4px 16px rgba(255, 150, 50, 0.15)",
                          color: "#ffaa50",
                        }}
                      >
                        {project.icon}
                      </div>
                      <h3 
                        className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300"
                        style={{ fontFamily: "'Outfit', 'Sora', sans-serif" }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-white/75 leading-relaxed mb-5 flex-grow text-sm sm:text-base"
                      style={{ fontFamily: "'Inter', 'Sora', sans-serif" }}
                    >
                      {project.description}
                    </p>

                    {/* Expandable Modules & Features (for projects that have them) */}
                    {'modules' in project && project.modules && (
                      <div className="mb-4">
                        <motion.button
                          onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                          className="flex items-center gap-2 text-xs font-medium text-amber-400/80 hover:text-amber-400 transition-colors duration-300 mb-2"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {expandedProject === index ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                          {expandedProject === index ? "Hide Details" : "View Modules & Features"}
                        </motion.button>
                        <AnimatePresence>
                          {expandedProject === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-3 pt-2 pb-3 pl-1">
                                <div>
                                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Modules</p>
                                  <ul className="space-y-1">
                                    {project.modules.map((mod, i) => (
                                      <li key={i} className="text-xs text-white/70 flex items-start gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        <span className="text-amber-400/60 mt-0.5">▸</span> {mod}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                {'features' in project && project.features && (
                                  <div>
                                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Key Features</p>
                                    <ul className="space-y-1">
                                      {project.features.map((feat, i) => (
                                        <li key={i} className="text-xs text-white/70 flex items-start gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                          <span className="text-amber-400/60 mt-0.5">✦</span> {feat}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {'techStack' in project && project.techStack && (
                                  <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.techStack.map((t, i) => (
                                      <span key={i} className="text-[10px] px-2 py-1 rounded-md text-white/60" style={{
                                        background: "rgba(255, 255, 255, 0.05)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        fontFamily: "'Outfit', sans-serif",
                                      }}>
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-1.5 rounded-full text-white/80 transition-all duration-300 hover:text-white"
                          style={{
                            background: "linear-gradient(135deg, rgba(255, 170, 80, 0.12) 0%, rgba(200, 100, 50, 0.08) 100%)",
                            border: "1px solid rgba(255, 170, 80, 0.2)",
                            fontFamily: "'Outfit', sans-serif",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto pt-2">
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/90 transition-all duration-300"
                        style={{
                          background: "linear-gradient(135deg, rgba(255, 170, 80, 0.2) 0%, rgba(200, 120, 50, 0.15) 100%)",
                          border: "1px solid rgba(255, 170, 80, 0.3)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: "0 4px 16px rgba(255, 150, 50, 0.25)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white transition-all duration-300"
                        style={{
                          background: "rgba(255, 255, 255, 0.06)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          background: "rgba(255, 255, 255, 0.1)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;