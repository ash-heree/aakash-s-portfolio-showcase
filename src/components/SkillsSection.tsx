import { Card } from "@/components/ui/card";
import { Code2, FileImage, GitBranch, Laptop } from "lucide-react";

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
      skills: ["Git", "GitHub", "Version Control"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="text-accent mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
