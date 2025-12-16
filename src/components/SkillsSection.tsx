import { Card } from "@/components/ui/card";
import { Code2, FileImage, GitBranch, Laptop } from "lucide-react";
import skillsBackground from "@/assets/skills-tech-bg.jpg";

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
        backgroundImage: `url(${skillsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-accent mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-white flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
