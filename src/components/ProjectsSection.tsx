import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hand, ShoppingCart, BarChart3 } from "lucide-react";
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
  ];

  return (
    <section 
      id="projects" 
      className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <div className="text-accent mb-4 icon-hover">{project.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/85 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-white/90 bg-white/10 border-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
