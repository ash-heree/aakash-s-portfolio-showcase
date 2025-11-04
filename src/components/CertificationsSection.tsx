import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: "Cyber Security Workshop",
      institution: "Stella Maris College",
      description: "Comprehensive workshop covering cybersecurity fundamentals, threat detection, network security protocols, and best practices for protecting digital assets and information systems.",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "ICT Virtual Internship in Data Science",
      institution: "ICT Academy",
      description: "Intensive virtual internship program focused on data science methodologies, statistical analysis, machine learning algorithms, and practical implementation using industry-standard tools.",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "Naan Mudhalvan Microsoft 360 Course",
      institution: "Naan Mudhalvan Initiative",
      description: "Comprehensive Microsoft 365 training covering cloud computing, collaboration tools, productivity applications, and modern workplace solutions for enhanced digital efficiency.",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "Infosys Springboard Course",
      institution: "Infosys",
      description: "Professional development program covering software engineering principles, emerging technologies, problem-solving methodologies, and industry best practices in IT and technology.",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "International Workshop on Data Science",
      institution: "SACAS & Brainvision",
      description: "International workshop exploring advanced data science techniques, big data analytics, visualization methods, and real-world applications in business intelligence and decision-making.",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border cursor-pointer group"
                onClick={() => setSelectedCert(index)}
              >
                <Award className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-card-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {cert.institution}
                </p>
                <p className="text-xs text-muted-foreground mt-3 opacity-70">
                  Click to view details
                </p>
              </Card>
            ))}
          </div>

          {/* Certification Modal */}
          <Dialog open={selectedCert !== null} onOpenChange={() => setSelectedCert(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selectedCert !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {certifications[selectedCert].title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {certifications[selectedCert].institution}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    {/* Certificate Image */}
                    <div className="w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                      <img 
                        src={certifications[selectedCert].image} 
                        alt={certifications[selectedCert].title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        About this Certification
                      </h4>
                      <p className="text-base leading-relaxed text-card-foreground">
                        {certifications[selectedCert].description}
                      </p>
                    </div>

                    {/* View Full Certificate Button */}
                    <Button 
                      className="w-full"
                      onClick={() => window.open(certifications[selectedCert].image, '_blank')}
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

export default CertificationsSection;
