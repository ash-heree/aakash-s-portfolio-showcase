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
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, rgba(10, 15, 35, 0.88) 0%, rgba(25, 12, 50, 0.85) 50%, rgba(10, 15, 30, 0.9) 100%)',
      }} />

      {/* Radial glow - top left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.15]" style={{
        background: 'radial-gradient(circle, rgba(80, 180, 255, 0.4) 0%, transparent 70%)',
      }} />

      {/* Radial glow - bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.1]" style={{
        background: 'radial-gradient(circle, rgba(140, 80, 255, 0.5) 0%, transparent 70%)',
      }} />

      {/* Dotted grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
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
                <Card className="p-6 h-full" style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(100, 180, 255, 0.15)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 30px rgba(80, 160, 255, 0.06)',
                      backdropFilter: 'blur(16px)',
                    }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 icon-hover" style={{
                    background: 'linear-gradient(135deg, rgba(80, 180, 255, 0.2), rgba(140, 80, 255, 0.15))',
                    border: '1px solid rgba(100, 180, 255, 0.25)',
                    color: '#60b8ff',
                  }}>
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
