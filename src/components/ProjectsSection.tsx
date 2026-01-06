import { Hand, ShoppingCart, BarChart3, CloudSun } from "lucide-react";
import { motion } from "framer-motion";

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
        "Created a comprehensive food survey project titled 'Yummy Opinions', collecting and analyzing consumer preferences using data visualization and statistical analysis techniques.",
      technologies: ["Google Forms", "Google Colab", "Pandas", "Matplotlib"],
    },
    {
      icon: <CloudSun className="h-6 w-6" />,
      title: "Weather Suit – Smart Weather UI",
      description:
        "A modern and interactive weather application UI designed to display real-time weather data with a clean, premium user experience. Built using Streamlit and Python, focusing on simplicity, clarity, and usability.",
      technologies: ["Python", "Streamlit", "VS Code", "OpenWeather API"],
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060a10 0%, #080c14 50%, #060a10 100%)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-20"
          >
            <h2 
              className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-[-0.02em]"
              style={{ fontFamily: "'Sora', 'Space Grotesk', sans-serif" }}
            >
              Featured Projects
            </h2>
            <div className="w-12 h-px bg-white/20" />
          </motion.div>

          <div className="space-y-1">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="group py-10 px-6 -mx-6 rounded-lg cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    background: "transparent",
                    boxShadow: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.015)";
                    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="text-white/30 group-hover:text-white/50 transition-colors duration-300 mt-1">
                      {project.icon}
                    </div>
                    
                    <div className="flex-1">
                      {/* Title */}
                      <h3 
                        className="text-2xl md:text-3xl font-light text-white/90 mb-4 group-hover:text-white transition-colors duration-300 tracking-[-0.01em]"
                        style={{ fontFamily: "'Sora', 'Space Grotesk', sans-serif" }}
                      >
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p 
                        className="text-white/40 mb-6 leading-relaxed max-w-2xl text-[15px] font-light"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {project.description}
                      </p>
                      
                      {/* Tech stack - muted small text */}
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs text-white/25 font-normal tracking-wide"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="h-px bg-white/5" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;