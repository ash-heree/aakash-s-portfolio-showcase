import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      {/* Deep dark tech backdrop */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Base gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #050810 0%, #0a0f1f 25%, #0d1225 50%, #080c18 75%, #050810 100%)",
          }}
        />

        {/* Abstract grid with depth */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(103, 232, 249, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(103, 232, 249, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          }}
        />

        {/* Perspective grid floor */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[60%] opacity-[0.08]"
          style={{
            x: springX,
            y: springY,
            background: `
              linear-gradient(180deg, transparent 0%, rgba(103, 232, 249, 0.05) 100%)
            `,
            backgroundImage: `
              linear-gradient(90deg, rgba(103, 232, 249, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(103, 232, 249, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 40px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center bottom",
          }}
        />

        {/* Soft neon light streaks */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="absolute top-1/4 -left-20 w-[500px] h-[2px] rotate-[20deg]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.4), transparent)",
              filter: "blur(1px)",
              boxShadow: "0 0 30px rgba(103, 232, 249, 0.3)",
            }}
          />
          <div 
            className="absolute top-1/3 -right-20 w-[400px] h-[1px] -rotate-[15deg]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
              filter: "blur(1px)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-[300px] h-[1px] rotate-[35deg]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
              filter: "blur(0.5px)",
            }}
          />
        </motion.div>

        {/* Ambient floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(103, 232, 249, ${Math.random() * 0.3 + 0.1})`,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Gradient vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(5, 8, 16, 0.6) 70%, rgba(5, 8, 16, 0.95) 100%)",
          }}
        />
      </motion.div>

      {/* Animated tech symbol */}
      <motion.div
        className="absolute top-1/4 right-[15%] pointer-events-none hidden lg:block"
        style={{ x: springX, y: springY }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div 
          className="w-32 h-32 rounded-full opacity-20"
          style={{
            border: "1px solid rgba(103, 232, 249, 0.3)",
            boxShadow: "0 0 40px rgba(103, 232, 249, 0.1), inset 0 0 30px rgba(103, 232, 249, 0.05)",
          }}
        >
          <div 
            className="absolute inset-4 rounded-full"
            style={{
              border: "1px dashed rgba(103, 232, 249, 0.2)",
            }}
          />
          <div 
            className="absolute inset-8 rounded-full"
            style={{
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          />
        </div>
      </motion.div>

      {/* Second animated symbol */}
      <motion.div
        className="absolute bottom-1/3 left-[10%] pointer-events-none hidden lg:block"
        style={{ x: springX, y: springY }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          rotate: {
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="relative w-20 h-20">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(103, 232, 249, 0.3), transparent)",
              borderRadius: "50%",
              filter: "blur(2px)",
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
              background: "linear-gradient(135deg, #ffffff 0%, #67e8f9 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 80px rgba(103, 232, 249, 0.5)",
              filter: "drop-shadow(0 0 30px rgba(103, 232, 249, 0.3))",
            }}
          >
            Aakash S
          </motion.h1>

          {/* Subtitle - elegant and calm */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl md:text-2xl font-extralight text-white/60 mb-8 tracking-wide cursor-default select-none"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Entry-Level IT Professional
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            }}
          >
            Passionate about technology, programming, and problem-solving. 
            Driven to create innovative solutions and continuously expand my technical expertise.
          </motion.p>

          {/* Glass CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex gap-5 justify-center flex-wrap"
          >
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-8 py-3.5 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Button glass background */}
              <div 
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(103, 232, 249, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(103, 232, 249, 0.25)",
                  boxShadow: "0 0 30px rgba(103, 232, 249, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              />
              
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(103, 232, 249, 0.25) 0%, rgba(59, 130, 246, 0.2) 100%)",
                  boxShadow: "0 0 50px rgba(103, 232, 249, 0.3)",
                }}
              />
              
              {/* Press depth */}
              <div 
                className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-100"
                style={{
                  background: "linear-gradient(135deg, rgba(103, 232, 249, 0.3) 0%, rgba(59, 130, 246, 0.25) 100%)",
                }}
              />
              
              <span 
                className="relative z-10 text-sm font-light tracking-[0.08em] text-cyan-300"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                }}
              >
                Get In Touch
              </span>
            </motion.button>

            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-8 py-3.5 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Button glass background */}
              <div 
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />
              
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              />
              
              <span 
                className="relative z-10 text-sm font-light tracking-[0.08em] text-white/60 group-hover:text-white/80 transition-colors"
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

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="p-2 rounded-full"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <ArrowDown className="h-4 w-4 text-white/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
