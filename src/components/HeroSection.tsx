import { ArrowDown, ChevronDown } from "lucide-react";
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
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* NEW Premium Cinematic Tech Backdrop - Complete Override */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Ultra deep cinematic base - darker with teal/navy undertones */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000810 0%, #001020 25%, #002035 50%, #001525 75%, #000510 100%)",
          }}
        />
        
        {/* Primary aurora effect - teal and cyan sweep */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse 120% 80% at 0% 0%, rgba(0, 180, 180, 0.35) 0%, transparent 50%)",
                "radial-gradient(ellipse 120% 80% at 100% 100%, rgba(0, 180, 180, 0.35) 0%, transparent 50%)",
                "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(0, 220, 220, 0.25) 0%, transparent 50%)",
                "radial-gradient(ellipse 120% 80% at 0% 0%, rgba(0, 180, 180, 0.35) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Secondary warm accent - orange/gold highlights */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse 60% 60% at 90% 30%, rgba(255, 150, 50, 0.15) 0%, transparent 40%)",
                "radial-gradient(ellipse 60% 60% at 10% 70%, rgba(255, 180, 80, 0.12) 0%, transparent 40%)",
                "radial-gradient(ellipse 60% 60% at 70% 80%, rgba(255, 120, 30, 0.1) 0%, transparent 40%)",
                "radial-gradient(ellipse 60% 60% at 90% 30%, rgba(255, 150, 50, 0.15) 0%, transparent 40%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Animated diagonal light beams - very visible */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main cyan beam */}
          <motion.div 
            className="absolute -top-20 -left-40 w-[800px] h-[6px] rotate-[25deg]"
            animate={{ 
              x: [-200, 400, -200],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.3) 20%, rgba(0, 255, 255, 0.8) 50%, rgba(0, 255, 255, 0.3) 80%, transparent 100%)",
              filter: "blur(2px)",
              boxShadow: "0 0 60px rgba(0, 255, 255, 0.6), 0 0 120px rgba(0, 255, 255, 0.4), 0 0 180px rgba(0, 255, 255, 0.2)",
            }}
          />
          
          {/* Secondary teal beam */}
          <motion.div 
            className="absolute top-1/3 -right-32 w-[600px] h-[4px] -rotate-[15deg]"
            animate={{ 
              x: [100, -300, 100],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 200, 200, 0.4) 30%, rgba(0, 220, 220, 0.7) 50%, rgba(0, 200, 200, 0.4) 70%, transparent 100%)",
              filter: "blur(1.5px)",
              boxShadow: "0 0 50px rgba(0, 200, 200, 0.5), 0 0 100px rgba(0, 200, 200, 0.3)",
            }}
          />
          
          {/* Accent orange beam */}
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-[500px] h-[3px] rotate-[35deg]"
            animate={{ 
              x: [-50, 150, -50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255, 150, 50, 0.3) 30%, rgba(255, 180, 80, 0.5) 50%, rgba(255, 150, 50, 0.3) 70%, transparent 100%)",
              filter: "blur(1px)",
              boxShadow: "0 0 40px rgba(255, 150, 50, 0.4)",
            }}
          />
          
          {/* Additional accent beams */}
          <motion.div 
            className="absolute top-2/3 -left-20 w-[400px] h-[2px] rotate-[45deg]"
            animate={{ 
              x: [0, 200, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0, 255, 200, 0.5), rgba(0, 255, 200, 0.7), rgba(0, 255, 200, 0.5), transparent)",
              filter: "blur(1px)",
              boxShadow: "0 0 30px rgba(0, 255, 200, 0.5)",
            }}
          />
        </motion.div>

        {/* Floating glowing orbs - more visible */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(45)].map((_, i) => {
            const size = Math.random() * 6 + 2;
            const colors = [
              { bg: "rgba(0, 255, 255, 0.7)", shadow: "rgba(0, 255, 255, 0.5)" },
              { bg: "rgba(0, 220, 180, 0.6)", shadow: "rgba(0, 220, 180, 0.4)" },
              { bg: "rgba(255, 180, 80, 0.5)", shadow: "rgba(255, 180, 80, 0.3)" },
              { bg: "rgba(0, 200, 255, 0.6)", shadow: "rgba(0, 200, 255, 0.4)" },
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
                  boxShadow: `0 0 ${size * 4}px ${color.shadow}, 0 0 ${size * 8}px ${color.shadow}`,
                }}
                animate={{
                  y: [0, -60 - Math.random() * 40, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Hexagonal tech grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpath d='M30 0L60 15v22L30 52L0 37V15z' fill='none' stroke='%2300ffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 52px",
          }}
        />

        {/* Depth overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(0, 8, 16, 0.4) 50%, rgba(0, 5, 10, 0.8) 100%)",
          }}
        />

        {/* Top edge glow */}
        <div 
          className="absolute top-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(180deg, rgba(0, 200, 200, 0.08) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Animated tech symbol - larger and more prominent */}
      <motion.div
        className="absolute top-1/4 right-[12%] pointer-events-none hidden lg:block"
        style={{ x: springX, y: springY }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div 
          className="w-40 h-40 rounded-full opacity-25"
          style={{
            border: "1px solid rgba(103, 232, 249, 0.4)",
            boxShadow: "0 0 50px rgba(103, 232, 249, 0.15), inset 0 0 40px rgba(103, 232, 249, 0.08)",
          }}
        >
          <div 
            className="absolute inset-4 rounded-full"
            style={{
              border: "1px dashed rgba(103, 232, 249, 0.25)",
            }}
          />
          <div 
            className="absolute inset-8 rounded-full"
            style={{
              border: "1px solid rgba(139, 92, 246, 0.25)",
            }}
          />
          <div 
            className="absolute inset-12 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(103, 232, 249, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      </motion.div>

      {/* Second animated symbol */}
      <motion.div
        className="absolute bottom-1/3 left-[8%] pointer-events-none hidden lg:block"
        style={{ x: springX, y: springY }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          rotate: {
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="relative w-24 h-24">
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(103, 232, 249, 0.4), transparent)",
              borderRadius: "50%",
              filter: "blur(3px)",
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
          {/* Name with premium neon glow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-8xl font-extralight mb-6 cursor-default select-none tracking-tight"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
              background: "linear-gradient(135deg, #ffffff 0%, #67e8f9 40%, #60a5fa 70%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 100px rgba(103, 232, 249, 0.6)",
              filter: "drop-shadow(0 0 40px rgba(103, 232, 249, 0.4))",
            }}
          >
            Aakash S
          </motion.h1>

          {/* Subtitle - elegant and calm */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl md:text-2xl font-extralight text-white/65 mb-8 tracking-wide cursor-default select-none"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Entry-Level IT Professional
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base md:text-lg text-white/45 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            }}
          >
            Passionate about technology, programming, and problem-solving. 
            Driven to create innovative solutions and continuously expand my technical expertise.
          </motion.p>

          {/* Premium glass CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex gap-5 justify-center flex-wrap"
          >
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-9 py-4 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Button glass background */}
              <div 
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(103, 232, 249, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(103, 232, 249, 0.35)",
                  boxShadow: "0 0 40px rgba(103, 232, 249, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
              />
              
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(103, 232, 249, 0.35) 0%, rgba(59, 130, 246, 0.25) 100%)",
                  boxShadow: "0 0 60px rgba(103, 232, 249, 0.4), 0 0 100px rgba(103, 232, 249, 0.2)",
                }}
              />
              
              {/* Press depth */}
              <div 
                className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-100"
                style={{
                  background: "linear-gradient(135deg, rgba(103, 232, 249, 0.4) 0%, rgba(59, 130, 246, 0.3) 100%)",
                }}
              />
              
              <span 
                className="relative z-10 text-sm font-medium tracking-[0.1em] text-cyan-300 group-hover:text-white transition-colors duration-300"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                  textShadow: "0 0 20px rgba(103, 232, 249, 0.5)",
                }}
              >
                Get In Touch
              </span>
            </motion.button>

            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-9 py-4 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Button glass background */}
              <div 
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              />
              
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              />
              
              <span 
                className="relative z-10 text-sm font-medium tracking-[0.1em] text-white/60 group-hover:text-white/90 transition-colors duration-300"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                }}
              >
                View Projects
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium scroll indicator with glow animation */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        style={{ opacity }}
      >
        {/* Text label */}
        <motion.span
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[11px] font-light tracking-[0.25em] text-white/40 uppercase"
          style={{
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
          }}
        >
          Scroll
        </motion.span>
        
        {/* Glowing line animation */}
        <div className="relative h-12 w-px">
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(103, 232, 249, 0.3), transparent)",
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-4"
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(180deg, rgba(103, 232, 249, 0.9), transparent)",
              boxShadow: "0 0 10px rgba(103, 232, 249, 0.6), 0 0 20px rgba(103, 232, 249, 0.3)",
            }}
          />
        </div>
        
        {/* Glowing arrow */}
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            filter: "drop-shadow(0 0 8px rgba(103, 232, 249, 0.6))",
          }}
        >
          <ChevronDown className="h-5 w-5 text-cyan-400/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;