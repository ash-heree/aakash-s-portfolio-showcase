import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative py-32 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with Orbitron futuristic font and cyan neon glow */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 cursor-default select-none"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <motion.span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00e5ff 25%, #00b4ff 50%, #00f0ff 75%, #ffffff 100%)",
                backgroundSize: "250% 250%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(0, 229, 255, 0.4)) drop-shadow(0 0 60px rgba(0, 180, 255, 0.2))",
                letterSpacing: "0.08em",
                textShadow: "0 0 40px rgba(0, 229, 255, 0.3)",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              Aakash S
            </motion.span>
          </motion.h1>

          {/* Subtitle with Space Grotesk - medium weight, reduced opacity */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl md:text-2xl mb-10"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Entry-Level IT Professional
          </motion.h2>

          {/* Glassmorphic Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card 
              className="p-6 sm:p-8 max-w-2xl mx-auto mb-12"
              style={{
                background: "linear-gradient(135deg, rgba(0, 40, 80, 0.4) 0%, rgba(0, 60, 100, 0.3) 100%)",
                border: "1px solid rgba(0, 200, 255, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 150, 200, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              <p 
                className="text-base sm:text-lg"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "rgba(255, 255, 255, 0.75)",
                  letterSpacing: "0.01em",
                }}
              >
                Passionate about technology, programming, and problem-solving. 
                Driven to create innovative solutions and continuously expand my technical expertise.
              </p>
            </Card>
          </motion.div>

          {/* Premium Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex gap-4 sm:gap-5 justify-center flex-wrap"
          >
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 sm:px-9 py-3.5 rounded-xl font-semibold text-white transition-all duration-300"
              style={{
                fontFamily: "'Outfit', 'Sora', sans-serif",
                background: "linear-gradient(135deg, rgba(0, 180, 255, 0.25) 0%, rgba(0, 220, 255, 0.15) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0, 200, 255, 0.35)",
                boxShadow: "0 4px 24px rgba(0, 200, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                letterSpacing: "0.04em",
              }}
              whileHover={{ 
                scale: 1.04, 
                y: -3,
                boxShadow: "0 8px 32px rgba(0, 200, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>

            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 sm:px-9 py-3.5 rounded-xl font-medium text-white/85 hover:text-white transition-all duration-300"
              style={{
                fontFamily: "'Outfit', 'Sora', sans-serif",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                letterSpacing: "0.04em",
              }}
              whileHover={{ 
                scale: 1.04, 
                y: -3,
                background: "rgba(255, 255, 255, 0.12)",
                boxShadow: "0 8px 28px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span 
            className="text-xs tracking-[0.2em] text-white/45 uppercase group-hover:text-white/70 transition-colors duration-300"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 text-white/45 group-hover:text-white/70 transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;