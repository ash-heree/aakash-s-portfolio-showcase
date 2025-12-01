import { Card } from "@/components/ui/card";
import { Heart, Image, FolderTree } from "lucide-react";

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
    <section id="volunteer" className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Volunteer & Campus Activities
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="p-6"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {activity.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {activity.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
