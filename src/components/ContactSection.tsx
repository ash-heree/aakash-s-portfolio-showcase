import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
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
      className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${contactBackground})`,
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
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider" />

            <p className="text-lg text-white/90 text-center mb-12 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just 
              connecting with fellow tech enthusiasts. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 icon-hover">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white font-medium hover:text-accent transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button
              variant="glass"
              size="lg"
              onClick={() =>
                window.open("https://www.linkedin.com/in/aakash-s-3710572b0", "_blank")
              }
              className="btn-premium"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
