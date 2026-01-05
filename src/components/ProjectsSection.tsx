import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hand, ShoppingCart, BarChart3, CloudSun } from "lucide-react";
import { motion } from "framer-motion";
import projectsBackground from "@/assets/projects-tech-bg.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      icon: <Hand className="h-8 w-8" />,
      title: "AI Virtual Mouse",
      description:
        "Developed an innovative computer interaction system using Python and hand-sign recognition technology, enabling touchless mouse control through gesture detection.",
      technologies: ["Python", "Computer Vision", "OpenCV", "Hand Tracking"],
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Website for Games",
      description:
        "Built a full-featured e-commerce platform during ICT Virtual Internship, leveraging data science techniques for user recommendations and inventory management.",
      technologies: ["Data Science", "Web Development", "E-commerce", "Analytics"],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Mini Data Analyst (Survey & Insights)",
      description:
        "Created a comprehensive food survey project titled 'Yummy Opinions', collecting and analyzing consumer preferences using data visualization and statistical analysis techniques.",
      technologies: ["Google Forms", "Google Colab", "Pandas", "Matplotlib"],
    },
    {
      icon: <CloudSun className="h-8 w-8" />,
      title: "Weather Suit – Smart Weather UI",
      description:
        "A modern and interactive weather application UI designed to display real-time weather data with a clean, premium user experience. Built using Streamlit and Python, focusing on simplicity, clarity, and usability.",
      technologies: ["Python", "Streamlit", "VS Code", "OpenWeather API"],
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative py-32 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${projectsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="relative p-8 h-full flex flex-col rounded-2xl overflow-hidden group cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 40, 60, 0.6) 0%, rgba(0, 60, 80, 0.5) 50%, rgba(0, 50, 70, 0.6) 100%)",
                    backdropFilter: "blur(30px)",
                    border: "1px solid rgba(0, 255, 255, 0.15)",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Animated gradient border */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, transparent 50%, rgba(0, 180, 255, 0.2) 100%)",
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: "0 0 60px rgba(0, 255, 255, 0.2), 0 0 100px rgba(0, 255, 255, 0.1)",
                    }}
                  />
                  
                  {/* Icon with glow */}
                  <div 
                    className="text-cyan-400 mb-5 transition-all duration-300 group-hover:text-cyan-300"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.4))",
                    }}
                  >
                    {project.icon}
                  </div>
                  
                  <h3 
                    className="text-2xl font-semibold mb-4 text-white group-hover:text-cyan-100 transition-colors duration-300"
                    style={{ fontFamily: "'Sora', 'Space Grotesk', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    className="text-white/70 mb-8 leading-relaxed flex-grow text-[15px]"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300"
                        style={{
                          background: "rgba(0, 255, 255, 0.1)",
                          border: "1px solid rgba(0, 255, 255, 0.25)",
                          color: "rgba(0, 255, 255, 0.9)",
                          fontFamily: "'Sora', sans-serif",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
