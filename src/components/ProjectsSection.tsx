import { Hand, ShoppingCart, BarChart3, CloudSun, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import projectsBackground from "@/assets/projects-tech-bg.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      icon: <Hand className="h-6 w-6" />,
      title: "AI Virtual Mouse",
      description:
        "Developed an innovative computer interaction system using Python and hand-sign recognition technology, enabling touchless mouse control through gesture detection.",
      technologies: ["Python", "Computer Vision", "OpenCV", "Hand Tracking"],
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce Website for Games",
      description:
        "Built a full-featured e-commerce platform during ICT Virtual Internship, leveraging data science techniques for user recommendations and inventory management.",
      technologies: ["Data Science", "Web Development", "E-commerce", "Analytics"],
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
                      background: "linear-gradient(135deg, rgba(0, 40, 80, 0.35) 0%, rgba(10, 30, 60, 0.4) 50%, rgba(0, 50, 90, 0.3) 100%)",
                      border: "1px solid rgba(0, 200, 255, 0.12)",
                      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-accent transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, rgba(0, 200, 255, 0.2) 0%, rgba(0, 150, 255, 0.15) 100%)",
                          border: "1px solid rgba(0, 200, 255, 0.25)",
                          boxShadow: "0 4px 16px rgba(0, 200, 255, 0.15)",
                        }}
                      >
                        {project.icon}
                      </div>
                      <h3 
                        className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300"
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

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-1.5 rounded-full text-white/80 transition-all duration-300 hover:text-white"
                          style={{
                            background: "linear-gradient(135deg, rgba(0, 180, 255, 0.15) 0%, rgba(0, 120, 200, 0.1) 100%)",
                            border: "1px solid rgba(0, 200, 255, 0.2)",
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
                          background: "linear-gradient(135deg, rgba(0, 180, 255, 0.2) 0%, rgba(0, 140, 220, 0.15) 100%)",
                          border: "1px solid rgba(0, 200, 255, 0.25)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: "0 4px 16px rgba(0, 200, 255, 0.25)",
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