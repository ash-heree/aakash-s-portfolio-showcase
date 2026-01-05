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
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentY = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const springX = useSpring(mouseX, { stiffness: 20, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 20, damping: 25 });

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 25);
      mouseY.set((clientY - innerHeight / 2) / 25);
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
      {/* Cinematic Background - ONLY section with effects */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Deep cinematic base */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000508 0%, #000a14 25%, #001018 50%, #000c12 75%, #000508 100%)",
          }}
        />
        
        {/* Animated aurora - subtle */}
        <motion.div 
          className="absolute inset-0"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse 120% 80% at -10% 0%, rgba(0, 180, 200, 0.25) 0%, transparent 50%)",
                "radial-gradient(ellipse 120% 80% at 50% -10%, rgba(0, 150, 180, 0.2) 0%, transparent 50%)",
                "radial-gradient(ellipse 120% 80% at 110% 0%, rgba(0, 120, 160, 0.2) 0%, transparent 50%)",
                "radial-gradient(ellipse 120% 80% at -10% 0%, rgba(0, 180, 200, 0.25) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Light beams - reduced */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="absolute -top-20 -left-40 w-[800px] h-[2px] rotate-[20deg]"
            animate={{ x: [-200, 400, -200], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 200, 220, 0.4) 30%, rgba(0, 220, 240, 0.6) 50%, rgba(0, 200, 220, 0.4) 70%, transparent 100%)",
              filter: "blur(1px)",
            }}
          />
          
          <motion.div 
            className="absolute top-1/3 -right-20 w-[600px] h-[1.5px] -rotate-[15deg]"
            animate={{ x: [100, -200, 100], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0, 180, 200, 0.5), transparent)",
              filter: "blur(1px)",
            }}
          />
        </motion.div>

        {/* Floating particles - reduced quantity */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: "rgba(0, 200, 220, 0.6)",
                  boxShadow: `0 0 ${size * 4}px rgba(0, 200, 220, 0.4)`,
                }}
                animate={{
                  y: [0, -60 - Math.random() * 40, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Depth vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, rgba(0, 5, 10, 0.6) 70%, rgba(0, 3, 8, 0.95) 100%)",
          }}
        />
      </motion.div>

      {/* Cursor-follow glow - ONLY in hero */}
      {!isMobile && (
        <motion.div
          className="absolute pointer-events-none z-5"
          style={{
            x: springX,
            y: springY,
            width: 300,
            height: 300,
            left: "calc(50% - 150px)",
            top: "calc(50% - 150px)",
            background: "radial-gradient(circle, rgba(0, 200, 220, 0.06) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
      )}

      {/* Main content with parallax */}
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Name - Large typography, gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-8xl md:text-[10rem] font-extralight mb-6 cursor-default select-none tracking-[-0.02em] leading-[0.9]"
            style={{ fontFamily: "'Sora', 'Space Grotesk', sans-serif" }}
          >
            <motion.span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #b0e0e6 40%, #7dd3dc 60%, #ffffff 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              Aakash S
            </motion.span>
          </motion.h1>

          {/* Subtitle - fade-in */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl font-light text-white/50 mb-8 tracking-[0.25em] cursor-default select-none uppercase"
            style={{ fontFamily: "'Sora', 'Space Grotesk', sans-serif" }}
          >
            Entry-Level IT Professional
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base md:text-lg text-white/35 max-w-xl mx-auto mb-14 leading-relaxed font-light"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Passionate about technology, programming, and problem-solving. 
            Driven to create innovative solutions and continuously expand my technical expertise.
          </motion.p>

          {/* Restrained glass buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex gap-5 justify-center flex-wrap"
          >
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-8 py-3.5 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: "rgba(0, 180, 200, 0.12)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 200, 220, 0.25)",
                }}
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0, 200, 220, 0.08)" }}
              />
              <span 
                className="relative z-10 text-sm font-normal tracking-[0.1em] text-white/80 group-hover:text-white transition-colors duration-300 uppercase"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Get In Touch
              </span>
            </motion.button>

            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="relative px-8 py-3.5 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(255, 255, 255, 0.04)" }}
              />
              <span 
                className="relative z-10 text-sm font-normal tracking-[0.1em] text-white/50 group-hover:text-white/80 transition-colors duration-300 uppercase"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                View Projects
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span 
            className="text-[10px] tracking-[0.2em] text-white/25 uppercase"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;