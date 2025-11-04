import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      role: "Program Participant",
      organization: "Jal Shakthi Abhiyan - Water Budget",
      location: "Tiruvallur Collector Office",
      description:
        "Collaborated with Government Engineers on water resource management initiatives, contributing to data collection and analysis for regional water budget planning.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      role: "Computer Applications Trainer",
      organization: "Dasar Matriculation School",
      location: "Teaching Position",
      description:
        "Delivered comprehensive computer applications training to 11th standard students, covering essential software skills and programming fundamentals.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 bg-card border-border"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-2">
                      {exp.organization} • {exp.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
