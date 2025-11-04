import { Card } from "@/components/ui/card";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Achievement {
  title: string;
  institution: string;
  description: string;
  image: string;
}

const AchievementsSection = () => {
  const [selectedItem, setSelectedItem] = useState<{ type: string; index: number } | null>(null);

  const certifications: Achievement[] = [
    {
      title: "Naan Mudhalvan – Microsoft 360 Course",
      institution: "Naan Mudhalvan Initiative",
      description: "Government-supported Microsoft 365 certification program focused on Office 365 and cloud productivity tools.",
      image: "/placeholder.svg",
    },
    {
      title: "Intercollege Event",
      institution: "S.A. Engineering College",
      description: "Participated in technical competitions demonstrating innovation and teamwork.",
      image: "/placeholder.svg",
    },
    {
      title: "Symposium",
      institution: "Prathyusha Engineering College",
      description: "Presented academic insights and technical projects in a college-level symposium.",
      image: "/placeholder.svg",
    },
    {
      title: "Infosys Springboard Course",
      institution: "Infosys",
      description: "Completed foundational courses in Python, web design, and digital tools through Infosys Springboard.",
      image: "/placeholder.svg",
    },
  ];

  const workshops: Achievement[] = [
    {
      title: "Cyber Security Workshop",
      institution: "Stella Maris College",
      description: "Hands-on session on ethical hacking, online data safety, and cyber threat protection.",
      image: "/placeholder.svg",
    },
    {
      title: "International Workshop on Data Science",
      institution: "SACAS & Brainvision Solutions",
      description: "Focused on Python programming, machine learning basics, and data visualization.",
      image: "/placeholder.svg",
    },
    {
      title: "Mobile Application Development Workshop",
      institution: "Prathyusha Engineering College",
      description: "Learned fundamentals of Android app design and development through live demonstrations.",
      image: "/placeholder.svg",
    },
  ];

  const internships: Achievement[] = [
    {
      title: "ICT Virtual Internship – Data Science",
      institution: "ICT Academy",
      description: "Completed a virtual internship with ICT Academy focusing on Python, ML models, and data analysis.",
      image: "/placeholder.svg",
    },
    {
      title: "Machine Learning Internship",
      institution: "Vcodez Company (Online, Ongoing)",
      description: "Currently pursuing an online internship in ML model training, AI automation, and Python scripting.",
      image: "/placeholder.svg",
    },
  ];

  const getSelectedAchievement = () => {
    if (!selectedItem) return null;
    const { type, index } = selectedItem;
    if (type === "certification") return certifications[index];
    if (type === "workshop") return workshops[index];
    if (type === "internship") return internships[index];
    return null;
  };

  const selectedAchievement = getSelectedAchievement();

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-16 rounded-full" />

          {/* Certifications Subsection */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border cursor-pointer group"
                  onClick={() => setSelectedItem({ type: "certification", index })}
                >
                  <Award className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-card-foreground mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    {cert.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mt-3 opacity-70">
                    Click to view details
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Workshops Subsection */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Workshops
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border cursor-pointer group"
                  onClick={() => setSelectedItem({ type: "workshop", index })}
                >
                  <GraduationCap className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-card-foreground mb-2 leading-tight">
                    {workshop.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    {workshop.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mt-3 opacity-70">
                    Click to view details
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships Subsection */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Internships
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border cursor-pointer group"
                  onClick={() => setSelectedItem({ type: "internship", index })}
                >
                  <Briefcase className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-card-foreground mb-2 leading-tight">
                    {internship.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    {internship.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mt-3 opacity-70">
                    Click to view details
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Modal */}
          <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selectedAchievement && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {selectedAchievement.title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {selectedAchievement.institution}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    {/* Certificate Image */}
                    <div className="w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                      <img 
                        src={selectedAchievement.image} 
                        alt={selectedAchievement.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        About this Achievement
                      </h4>
                      <p className="text-base leading-relaxed text-card-foreground">
                        {selectedAchievement.description}
                      </p>
                    </div>

                    {/* View Full Certificate Button */}
                    <Button 
                      className="w-full"
                      onClick={() => window.open(selectedAchievement.image, '_blank')}
                    >
                      View Full Certificate
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
