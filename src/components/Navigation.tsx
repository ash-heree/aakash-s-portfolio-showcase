import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import TechLogo from "./TechLogo";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const commandBarRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const navLinks = [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#achievements", label: "Achievements" },
      { href: "#contact", label: "Contact" },
    ];
    
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (commandBarRef.current) {
        const rect = commandBarRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const getActiveIndex = () => navLinks.findIndex(link => link.href.replace("#", "") === activeSection);

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Desktop Command Bar */}
      <motion.div
        ref={commandBarRef}
        className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl relative"
        style={{ scale: navScale }}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => setIsHoveringNav(false)}
        // Subtle floating animation
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Ultra-premium glassmorphism backdrop with gradient tint */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 40, 60, 0.75) 0%, rgba(0, 60, 80, 0.65) 30%, rgba(0, 80, 100, 0.55) 60%, rgba(0, 50, 70, 0.7) 100%)",
            backdropFilter: `blur(50px) saturate(200%)`,
            WebkitBackdropFilter: `blur(50px) saturate(200%)`,
            boxShadow: "0 20px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(103, 232, 249, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 -1px 1px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(103, 232, 249, 0.2)",
          }}
        />
        
        {/* Animated gradient border */}
        <motion.div 
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(0, 220, 220, 0.3) 0%, transparent 30%, transparent 70%, rgba(0, 180, 255, 0.2) 100%)",
              "linear-gradient(90deg, rgba(0, 180, 255, 0.2) 0%, transparent 30%, transparent 70%, rgba(0, 220, 220, 0.3) 100%)",
              "linear-gradient(90deg, rgba(0, 220, 220, 0.3) 0%, transparent 30%, transparent 70%, rgba(0, 180, 255, 0.2) 100%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            padding: "1px",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
          }}
        />
        
        {/* Bottom glow line */}
        <div 
          className="absolute bottom-0 left-6 right-6 h-px pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), rgba(0, 200, 255, 0.4), transparent)",
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
          }}
        />

        {/* Cursor-follow ambient glow */}
        <AnimatePresence>
          {isHoveringNav && (
            <motion.div
              className="absolute pointer-events-none z-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: mousePosition.x - 100,
                y: mousePosition.y - 40,
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                x: { duration: 0.1, ease: "easeOut" },
                y: { duration: 0.1, ease: "easeOut" },
              }}
              style={{
                width: 200,
                height: 80,
                background: "radial-gradient(ellipse at center, rgba(0, 255, 255, 0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Logo */}
        <motion.a 
          href="#home" 
          className="relative z-10 flex-shrink-0 mr-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <TechLogo />
        </motion.a>

        {/* Navigation items */}
        <div className="relative flex items-center gap-1">
          {/* Glowing glass active indicator */}
          <motion.div
            className="absolute h-9 rounded-xl pointer-events-none"
            initial={false}
            animate={{
              x: `calc(${getActiveIndex() * 100}% + ${getActiveIndex() * 4}px)`,
              width: 80,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
            style={{
              background: "linear-gradient(135deg, rgba(0, 255, 255, 0.25) 0%, rgba(0, 180, 255, 0.2) 100%)",
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)",
              border: "1px solid rgba(0, 255, 255, 0.4)",
            }}
          />
          
          {/* Animated neon underline */}
          <motion.div
            className="absolute bottom-0.5 h-[2px] rounded-full pointer-events-none"
            initial={false}
            animate={{
              x: `calc(${getActiveIndex() * 100}% + ${getActiveIndex() * 4}px + 12px)`,
              width: 56,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 1), transparent)",
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.5), 0 0 45px rgba(0, 255, 255, 0.3)",
            }}
          />

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            const isHovered = hoveredItem === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                onMouseEnter={() => setHoveredItem(link.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-4 py-2.5 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Hover glow */}
                <motion.span 
                  className="absolute inset-0 rounded-xl transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered && !isActive ? 1 : 0 }}
                  style={{ 
                    background: "radial-gradient(ellipse at center, rgba(0, 255, 255, 0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Text with glow on hover */}
                <span 
                  className={`relative z-10 text-[13px] font-medium tracking-[0.06em] transition-all duration-300 ${
                    isActive ? 'text-cyan-300' : 'text-white/50 group-hover:text-cyan-200'
                  }`}
                  style={{
                    fontFamily: "'Sora', 'Space Grotesk', sans-serif",
                    textShadow: isActive 
                      ? '0 0 30px rgba(0, 255, 255, 0.9), 0 0 60px rgba(0, 255, 255, 0.5)' 
                      : isHovered 
                        ? '0 0 20px rgba(0, 255, 255, 0.6)' 
                        : 'none',
                  }}
                >
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Theme toggle */}
        <div className="relative z-10 flex-shrink-0 ml-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-white/40 hover:text-cyan-300 transition-all duration-300 relative group"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "rgba(0, 255, 255, 0.05)",
              border: "1px solid rgba(0, 255, 255, 0.15)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%)",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
              }}
            />
            {isDark ? <Sun className="h-4 w-4 relative z-10" /> : <Moon className="h-4 w-4 relative z-10" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            background: "linear-gradient(135deg, rgba(0, 40, 60, 0.9) 0%, rgba(0, 60, 80, 0.85) 100%)",
            backdropFilter: "blur(50px) saturate(200%)",
            WebkitBackdropFilter: "blur(50px) saturate(200%)",
            border: "1px solid rgba(0, 255, 255, 0.2)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 255, 255, 0.1)",
          }}
        >
          {/* Bottom glow line */}
          <div 
            className="absolute bottom-0 left-4 right-4 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent)",
            }}
          />

          <div className="flex items-center justify-between p-4 relative z-10">
            <a href="#home">
              <TechLogo />
            </a>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-white/50 hover:text-cyan-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "rgba(0, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 255, 255, 0.1)",
                }}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.button>
              
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl text-white/50 hover:text-cyan-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "rgba(0, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 255, 255, 0.1)",
                }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="relative block px-4 py-3 rounded-xl transition-all duration-300"
                        style={{
                          background: isActive 
                            ? "linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 180, 255, 0.15) 100%)"
                            : "transparent",
                          border: isActive ? "1px solid rgba(0, 255, 255, 0.3)" : "1px solid transparent",
                          boxShadow: isActive ? "0 0 25px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)" : "none",
                        }}
                      >
                        <span 
                          className={`text-[14px] font-medium tracking-[0.04em] ${
                            isActive ? 'text-cyan-300' : 'text-white/50'
                          }`}
                          style={{
                            fontFamily: "'Sora', 'Space Grotesk', sans-serif",
                            textShadow: isActive ? '0 0 25px rgba(0, 255, 255, 0.7)' : 'none',
                          }}
                        >
                          {link.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
