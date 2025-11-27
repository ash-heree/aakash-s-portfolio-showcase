import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hand, ShoppingCart, BarChart3 } from "lucide-react";
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
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${projectsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-primary mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
