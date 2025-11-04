import { Card } from "@/components/ui/card";
import { GraduationCap, Languages, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Journey",
      description: "From BCA at S.A. College to pursuing MCA at University of Madras (IDE)",
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Languages",
      description: "English, Tamil, French",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Work Style",
      description: "Quick learner, team player, and collaborative problem solver",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            I'm an aspiring IT professional with a strong foundation in computer applications 
            and a growing expertise in modern technologies. My journey from BCA to pursuing MCA 
            has equipped me with diverse technical skills and a problem-solving mindset.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
