import { Card } from "@/components/ui/card";
import educationBackground from "@/assets/education-tech-bg.jpg";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "University of Madras (IDE)",
      period: "2024 - 2026",
      status: "Pursuing",
      percentage: "In Progress",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "S.A. College of Arts & Science",
      period: "2021 - 2024",
      status: "Completed",
      percentage: "68%",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Excel Matriculation School",
      period: "2020 - 2021",
      status: "Completed",
      percentage: "70%",
    },
    {
      degree: "Secondary Education",
      institution: "Little Holy Angel's School",
      period: "2017 - 2018",
      status: "Completed",
      percentage: "53%",
    },
  ];

  return (
    <section 
      id="education" 
      className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${educationBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Education Timeline
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-12 rounded-full" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30 hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-white hidden md:block shadow-glow" />

                  <Card className="md:ml-16 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-sm font-medium text-white/80">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-white/80 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex gap-4 items-center">
                      <span className="text-sm text-white/80">
                        {edu.status}
                      </span>
                      <span className="text-sm font-medium text-white">
                        {edu.percentage}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
