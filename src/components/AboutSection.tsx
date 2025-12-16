import { Card } from "@/components/ui/card";
import { GraduationCap, Languages, Users } from "lucide-react";
import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-tech-bg.jpg";

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
    <section 
      id="about" 
      className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-divider" />

            <p className="text-lg text-white text-center mb-12 leading-relaxed">
              I'm an aspiring IT professional with a strong foundation in computer applications 
              and a growing expertise in modern technologies. My journey from BCA to pursuing MCA 
              has equipped me with diverse technical skills and a problem-solving mindset.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="p-6 h-full">
                  <div className="text-accent mb-4 icon-hover">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
