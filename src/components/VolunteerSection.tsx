import { Card } from "@/components/ui/card";
import { Heart, Image, FolderTree } from "lucide-react";
import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-tech-bg.jpg";

const VolunteerSection = () => {
  const activities = [
    {
      icon: <Image className="h-6 w-6" />,
      title: "Poster Design & Editing",
      description:
        "Created and edited promotional materials for college events, enhancing visual communication and event marketing.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "External Program Volunteering",
      description:
        "Actively participated in various external programs and community initiatives, contributing time and skills.",
    },
    {
      icon: <FolderTree className="h-6 w-6" />,
      title: "Record-Keeping System Lead",
      description:
        "Developed and implemented a comprehensive record-keeping system that organized 200+ club documents, improving efficiency by 50%.",
    },
  ];

  return (
    <section 
      id="volunteer" 
      className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-title">Volunteer & Campus Activities</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4 icon-hover">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {activity.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {activity.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
