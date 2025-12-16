import { Card } from "@/components/ui/card";
import { Code2, FileImage, GitBranch, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-tech-bg.jpg";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Programming",
      skills: ["Python", "C", "C++", "HTML"],
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Office & Productivity",
      skills: ["Microsoft Office", "Document Management", "Data Analysis"],
    },
    {
      icon: <FileImage className="h-8 w-8" />,
      title: "Creative Tools",
      skills: ["Video Editing", "Photo Editing", "Canva"],
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Google Colab", "Version Control"],
    },
  ];

  return (
    <section 
      id="skills" 
      className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBackground})`,
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
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="p-6 h-full">
                  <div className="text-accent mb-4 icon-hover">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="text-white/90 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/80" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
