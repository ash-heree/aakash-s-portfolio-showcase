import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    "Cyber Security Workshop - Stella Maris College",
    "ICT Virtual Internship in Data Science",
    "Naan Mudhalvan Microsoft 360 Course",
    "Infosys Springboard Courses",
    "Mobile App Development Workshop",
    "International Workshop on Data Science - SACAS & Brainovision",
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Certifications & Workshops
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <Award className="h-8 w-8 text-accent mb-4" />
                <p className="text-card-foreground font-medium leading-relaxed">
                  {cert}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
