import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.03, 
              y: -3,
              textShadow: "0 0 20px hsl(var(--primary) / 0.5)",
              transition: { duration: 0.25, ease: "easeInOut" }
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent cursor-default md:cursor-pointer"
          >
            Aakash S
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              textShadow: "0 0 15px hsl(var(--accent) / 0.4)",
              transition: { duration: 0.25, ease: "easeInOut" }
            }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-2xl md:text-3xl font-semibold text-white mb-8 cursor-default md:cursor-pointer"
          >
            Entry-Level IT Professional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about technology, programming, and problem-solving. 
            Driven to create innovative solutions and continuously expand my technical expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button
              variant="default"
              size="lg"
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="shadow-glow btn-premium"
            >
              Get In Touch
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-premium"
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6 text-white/80" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
