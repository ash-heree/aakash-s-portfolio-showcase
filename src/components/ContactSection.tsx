import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import contactBackground from "@/assets/contact-tech-bg.jpg";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "aakashsrinivasan092@gmail.com",
      href: "mailto:aakashsrinivasan092@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "8838008020",
      href: "tel:8838008020",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Thirumullaivoyal, Chennai",
      href: null,
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/aakash-s-3710572b0",
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-12 rounded-full" />

          <p className="text-lg text-white text-center mb-12 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just 
            connecting with fellow tech enthusiasts. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() =>
                window.open("https://www.linkedin.com/in/aakash-s-3710572b0", "_blank")
              }
              className="shadow-glow"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
