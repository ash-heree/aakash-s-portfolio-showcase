import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 30);
      mouseY.set((clientY - innerHeight / 2) / 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Ultra Premium Cinematic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Deep cinematic base - teal/navy/cyan palette */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000a12 0%, #001520 20%, #002030 40%, #001828 60%, #001018 80%, #000810 100%)",
          }}
        />
        
        {/* Animated aurora sweep - primary */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse 150% 100% at -20% 0%, rgba(0, 200, 200, 0.4) 0%, transparent 60%)",
                "radial-gradient(ellipse 150% 100% at 50% -20%, rgba(0, 180, 220, 0.35) 0%, transparent 60%)",
                "radial-gradient(ellipse 150% 100% at 120% 0%, rgba(0, 150, 200, 0.3) 0%, transparent 60%)",
                "radial-gradient(ellipse 150% 100% at -20% 0%, rgba(0, 200, 200, 0.4) 0%, transparent 60%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Secondary aurora - bottom */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse 100% 80% at 100% 100%, rgba(0, 100, 150, 0.3) 0%, transparent 50%)",
                "radial-gradient(ellipse 100% 80% at 0% 100%, rgba(0, 150, 180, 0.25) 0%, transparent 50%)",
                "radial-gradient(ellipse 100% 80% at 100% 100%, rgba(0, 100, 150, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Animated light beams */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main cyan beam */}
          <motion.div 
            className="absolute -top-40 -left-60 w-[1000px] h-[4px] rotate-[25deg]"
            animate={{ 
              x: [-300, 600, -300],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.4) 20%, rgba(0, 255, 255, 0.9) 50%, rgba(0, 255, 255, 0.4) 80%, transparent 100%)",
              filter: "blur(2px)",
              boxShadow: "0 0 80px rgba(0, 255, 255, 0.6), 0 0 150px rgba(0, 255, 255, 0.3)",
            }}
          />
          
          {/* Secondary teal beam */}
          <motion.div 
            className="absolute top-1/3 -right-40 w-[800px] h-[3px] -rotate-[20deg]"
            animate={{ 
              x: [200, -400, 200],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 200, 220, 0.5) 30%, rgba(0, 220, 255, 0.8) 50%, rgba(0, 200, 220, 0.5) 70%, transparent 100%)",
              filter: "blur(1.5px)",
              boxShadow: "0 0 60px rgba(0, 220, 255, 0.5)",
            }}
          />
          
          {/* Accent beam */}
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-[600px] h-[2px] rotate-[40deg]"
            animate={{ 
              x: [-100, 200, -100],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0, 180, 200, 0.6), rgba(0, 200, 220, 0.7), rgba(0, 180, 200, 0.6), transparent)",
              filter: "blur(1px)",
              boxShadow: "0 0 40px rgba(0, 200, 220, 0.4)",
            }}
          />
        </motion.div>

        {/* Floating particles with glow */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(60)].map((_, i) => {
            const size = Math.random() * 4 + 1;
            const colors = [
              { bg: "rgba(0, 255, 255, 0.8)", shadow: "rgba(0, 255, 255, 0.6)" },
              { bg: "rgba(0, 220, 255, 0.7)", shadow: "rgba(0, 220, 255, 0.5)" },
              { bg: "rgba(0, 200, 230, 0.6)", shadow: "rgba(0, 200, 230, 0.4)" },
              { bg: "rgba(100, 220, 255, 0.6)", shadow: "rgba(100, 220, 255, 0.4)" },
            ];
            const color = colors[i % 4];
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: color.bg,
                  boxShadow: `0 0 ${size * 6}px ${color.shadow}, 0 0 ${size * 12}px ${color.shadow}`,
                }}
                animate={{
                  y: [0, -80 - Math.random() * 60, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 6 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Depth vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(0, 8, 16, 0.5) 60%, rgba(0, 5, 10, 0.9) 100%)",
          }}
        />
      </motion.div>

      {/* Cursor-follow glow effect */}
      {!isMobile && (
        <motion.div
          className="absolute pointer-events-none z-5"
          style={{
            x: springX,
            y: springY,
            width: 400,
            height: 400,
            left: "calc(50% - 200px)",
            top: "calc(50% - 200px)",
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      )}

      {/* Animated decorative rings */}
      <motion.div
        className="absolute top-1/4 right-[10%] pointer-events-none hidden lg:block"
        style={{ x: springX, y: springY }}
        animate={{ rotate: [0, 360] }}
        transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" } }}
      >
        <div className="relative w-48 h-48">
          <div 
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              border: "1px solid rgba(0, 255, 255, 0.5)",
              boxShadow: "0 0 60px rgba(0, 255, 255, 0.2), inset 0 0 40px rgba(0, 255, 255, 0.1)",
            }}
          />
          <div 
            className="absolute inset-4 rounded-full opacity-15"
            style={{ border: "1px dashed rgba(0, 200, 255, 0.4)" }}
          />
          <div 
            className="absolute inset-8 rounded-full opacity-20"
            style={{ border: "1px solid rgba(0, 180, 255, 0.3)" }}
          />
          <motion.div 
            className="absolute inset-12 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-[8%] pointer-events-none hidden lg:block"
        style={{ x: springX, y: springY }}
        animate={{ rotate: [360, 0] }}
        transition={{ rotate: { duration: 80, repeat: Infinity, ease: "linear" } }}
      >
        <div className="relative w-32 h-32">
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.5), transparent)",
              borderRadius: "50%",
              filter: "blur(4px)",
            }}
          />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with gradient + shimmer animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-7xl md:text-9xl font-light mb-8 cursor-default select-none tracking-tight relative"
            style={{
              fontFamily: "'Sora', 'Space Grotesk', sans-serif",
            }}
          >
            <motion.span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00ffff 30%, #00d4ff 50%, #00a8ff 70%, #ffffff 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 60px rgba(0, 255, 255, 0.5))",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Aakash S
            </motion.span>
          </motion.h1>

          {/* Subtitle with fade-in */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl md:text-2xl font-light text-white/60 mb-10 tracking-[0.2em] cursor-default select-none uppercase"
            style={{
              fontFamily: "'Sora', 'Space Grotesk', sans-serif",
            }}
          >
            Entry-Level IT Professional
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
            style={{
              fontFamily: "'Sora', 'Space Grotesk', sans-serif",
            }}
          >
            Passionate about technology, programming, and problem-solving. 
            Driven to create innovative solutions and continuously expand my technical expertise.
          </motion.p>

          {/* Glass CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-10 py-4 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glass background */}
              <div 
                className="absolute inset-0 transition-all duration-400"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 180, 255, 0.15) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 255, 255, 0.4)",
                  boxShadow: "0 0 40px rgba(0, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              />
              
              {/* Hover glow */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 255, 255, 0.4) 0%, rgba(0, 180, 255, 0.3) 100%)",
                  boxShadow: "0 0 80px rgba(0, 255, 255, 0.5), 0 0 120px rgba(0, 255, 255, 0.3)",
                }}
              />
              
              <span 
                className="relative z-10 text-sm font-medium tracking-[0.15em] text-cyan-200 group-hover:text-white transition-colors duration-300 uppercase"
                style={{
                  fontFamily: "'Sora', 'Space Grotesk', sans-serif",
                  textShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
                }}
              >
                Get In Touch
              </span>
            </motion.button>

            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-10 py-4 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glass background */}
              <div 
                className="absolute inset-0 transition-all duration-400"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              />
              
              {/* Hover glow */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.2)",
                }}
              />
              
              <span 
                className="relative z-10 text-sm font-medium tracking-[0.15em] text-white/60 group-hover:text-white/90 transition-colors duration-300 uppercase"
                style={{
                  fontFamily: "'Sora', 'Space Grotesk', sans-serif",
                }}
              >
                View Projects
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glowing line */}
          <motion.div 
            className="w-px h-12 mb-3"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(0, 255, 255, 0.8), rgba(0, 255, 255, 0.3))",
              boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Glowing chevron */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <ChevronDown 
              className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" 
              style={{
                filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))",
              }}
            />
          </motion.div>
          
          {/* Scroll text */}
          <motion.span 
            className="text-[10px] tracking-[0.3em] text-white/30 mt-2 uppercase"
            style={{ fontFamily: "'Sora', sans-serif" }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            Scroll
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
