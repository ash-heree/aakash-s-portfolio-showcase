import { Card } from "@/components/ui/card";
import { Laptop, BarChart3, Brain, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import experienceBackground from "@/assets/experience-tech-bg.jpg";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: <Brain className="h-6 w-6" />,
      role: "Machine Learning Internship",
      organization: "Vcodez Company (Online)",
      location: "",
      description:
        "Completed hands-on training in machine learning concepts including data preprocessing, model building, and evaluation using Python and scikit-learn.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      role: "ICT Virtual Internship – Data Science",
      organization: "ICT Academy",
      location: "Online / Virtual • Completed",
      description:
        "Completed a virtual internship program focused on Data Science and Information Technology, gaining practical skills in data analysis, digital tools, and IT fundamentals.",
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      role: "Program Participant",
      organization: "Jal Shakthi Abhiyan - Water Budget",
      location: "Tiruvallur Collector Office",
      description:
        "Collaborated with Government Engineers on water resource management and data collection for regional water budget planning.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      role: "Computer Applications Trainer",
      organization: "Dasar Matriculation School",
      location: "Teaching Position",
      description:
        "Delivered computer applications training to 11th standard students, covering essential software skills and programming fundamentals.",
    },
  ];

  return (
    <section 
      id="experience" 
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, hsl(220 20% 10%) 0%, hsl(215 30% 14%) 40%, hsl(210 25% 11%) 70%, hsl(220 20% 8%) 100%)',
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(210 30% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 30% 60%) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-title">Experience</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent icon-hover">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-white/90 font-medium mb-2">
                        {exp.organization}{exp.location ? ` • ${exp.location}` : ''}
                      </p>
                      <p className="text-white/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
