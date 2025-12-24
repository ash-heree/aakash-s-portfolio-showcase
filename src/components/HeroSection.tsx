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
      {/* Deep dark premium tech backdrop */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Base gradient - deep dark with tech colors */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #020408 0%, #050a14 15%, #0a1628 35%, #061220 55%, #041018 75%, #020408 100%)",
          }}
        />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(6, 78, 117, 0.25) 0%, transparent 60%)",
              "radial-gradient(ellipse 80% 60% at 80% 70%, rgba(6, 78, 117, 0.25) 0%, transparent 60%)",
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(103, 232, 249, 0.15) 0%, transparent 60%)",
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(6, 78, 117, 0.25) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary animated gradient */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse 60% 80% at 20% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse 60% 80% at 60% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Abstract grid with depth */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(103, 232, 249, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(103, 232, 249, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          }}
        />

        {/* Perspective grid floor with subtle animation */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[65%] opacity-[0.06]"
          style={{
            x: springX,
            y: springY,
            background: `
              linear-gradient(180deg, transparent 0%, rgba(103, 232, 249, 0.08) 100%)
            `,
            backgroundImage: `
              linear-gradient(90deg, rgba(103, 232, 249, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(103, 232, 249, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "100px 50px",
            transform: "perspective(600px) rotateX(65deg)",
            transformOrigin: "center bottom",
          }}
        />

        {/* Animated neon light streaks */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div 
            className="absolute top-1/4 -left-32 w-[600px] h-[3px] rotate-[18deg]"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.5), rgba(103, 232, 249, 0.8), rgba(103, 232, 249, 0.5), transparent)",
              filter: "blur(1px)",
              boxShadow: "0 0 40px rgba(103, 232, 249, 0.5), 0 0 80px rgba(103, 232, 249, 0.3)",
            }}
          />
          <motion.div 
            className="absolute top-1/3 -right-20 w-[450px] h-[2px] -rotate-[12deg]"
            animate={{ x: [50, -50, 50] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.4), transparent)",
              filter: "blur(1px)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-[350px] h-[2px] rotate-[28deg]"
            animate={{ x: [-30, 30, -30] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.35), rgba(59, 130, 246, 0.5), rgba(59, 130, 246, 0.35), transparent)",
              filter: "blur(0.5px)",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)",
            }}
          />
        </motion.div>

        {/* Floating particles with glow */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 
                  ? `rgba(103, 232, 249, ${Math.random() * 0.5 + 0.2})` 
                  : i % 3 === 1
                  ? `rgba(139, 92, 246, ${Math.random() * 0.4 + 0.15})`
                  : `rgba(59, 130, 246, ${Math.random() * 0.4 + 0.15})`,
                boxShadow: i % 3 === 0 
                  ? `0 0 ${Math.random() * 10 + 5}px rgba(103, 232, 249, 0.4)` 
                  : i % 3 === 1
                  ? `0 0 ${Math.random() * 10 + 5}px rgba(139, 92, 246, 0.3)`
                  : `0 0 ${Math.random() * 10 + 5}px rgba(59, 130, 246, 0.3)`,
              }}
              animate={{
                y: [0, -40 - Math.random() * 30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
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
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(2, 4, 8, 0.5) 60%, rgba(2, 4, 8, 0.9) 100%)",
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