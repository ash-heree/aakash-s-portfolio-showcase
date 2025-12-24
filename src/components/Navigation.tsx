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
  const navPadding = useTransform(scrollY, [0, 100], [20, 8]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [32, 40]);

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

  // Calculate active indicator position
  const getActiveIndex = () => navLinks.findIndex(link => link.href.replace("#", "") === activeSection);

  return (
    <motion.nav
      ref={navRef}
      className="relative w-full z-50 flex justify-center"
      style={{ paddingTop: 24, paddingBottom: 24 }}
    >
      {/* Desktop Command Bar */}
      <motion.div
        ref={commandBarRef}
        className="hidden lg:flex items-center justify-between w-full px-10"
        style={{ scale: navScale }}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => setIsHoveringNav(false)}
      >
        {/* Premium glassmorphism backdrop with stronger opacity */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(10, 15, 30, 0.7) 0%, rgba(15, 20, 40, 0.6) 100%)",
            backdropFilter: `blur(40px) saturate(150%)`,
            WebkitBackdropFilter: `blur(40px) saturate(150%)`,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(103, 232, 249, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        />
        
        {/* Bottom border glow line */}
        <div 
          className="absolute bottom-0 left-4 right-4 h-px pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), rgba(139, 92, 246, 0.2), transparent)",
          }}
        />

        {/* Cursor-follow ambient glow */}
        <AnimatePresence>
          {isHoveringNav && (
            <motion.div
              className="absolute pointer-events-none z-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.8,
                x: mousePosition.x - 120,
                y: mousePosition.y - 60,
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.4 },
                x: { duration: 0.15, ease: "easeOut" },
                y: { duration: 0.15, ease: "easeOut" },
              }}
              style={{
                width: 240,
                height: 120,
                background: "radial-gradient(ellipse at center, rgba(103, 232, 249, 0.12) 0%, transparent 70%)",
                filter: "blur(25px)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Logo - positioned at left edge */}
        <motion.a 
          href="#home" 
          className="relative z-10 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <TechLogo />
        </motion.a>

        {/* Navigation items container - centered with better spacing */}
        <div className="relative flex items-center gap-1 px-3 py-3 mx-auto">
          {/* Liquid glass active indicator with neon glow */}
          <motion.div
            className="absolute h-9 rounded-xl pointer-events-none"
            initial={false}
            animate={{
              x: `calc(${getActiveIndex() * 100}% + ${getActiveIndex() * 4}px)`,
              width: commandBarRef.current 
                ? commandBarRef.current.querySelectorAll('a')[getActiveIndex()]?.offsetWidth || 85 
                : 85,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            style={{
              background: "linear-gradient(135deg, rgba(103, 232, 249, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%)",
              boxShadow: "0 0 25px rgba(103, 232, 249, 0.35), 0 0 50px rgba(103, 232, 249, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(103, 232, 249, 0.35)",
            }}
          />
          
          {/* Glowing underline for active item */}
          <motion.div
            className="absolute bottom-1 h-0.5 rounded-full pointer-events-none"
            initial={false}
            animate={{
              x: `calc(${getActiveIndex() * 100}% + ${getActiveIndex() * 4}px + 16px)`,
              width: (commandBarRef.current 
                ? commandBarRef.current.querySelectorAll('a')[getActiveIndex()]?.offsetWidth || 85 
                : 85) - 32,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.9), transparent)",
              boxShadow: "0 0 12px rgba(103, 232, 249, 0.8), 0 0 24px rgba(103, 232, 249, 0.4)",
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
                className="relative px-5 py-2.5 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Hover glow effect */}
                <motion.span 
                  className="absolute inset-0 rounded-xl transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered && !isActive ? 0.8 : 0 }}
                  style={{ 
                    background: "radial-gradient(ellipse at center, rgba(103, 232, 249, 0.1) 0%, transparent 70%)",
                  }}
                />

                {/* Text */}
                <span 
                  className={`relative z-10 text-[13px] font-medium tracking-[0.05em] transition-all duration-300 ${
                    isActive ? 'text-cyan-300' : 'text-white/55 group-hover:text-white/90'
                  }`}
                  style={{
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                    textShadow: isActive 
                      ? '0 0 25px rgba(103, 232, 249, 0.8), 0 0 50px rgba(103, 232, 249, 0.4)' 
                      : 'none',
                  }}
                >
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Theme toggle - positioned at right edge */}
        <div className="relative z-10 flex-shrink-0">
          <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-white/45 hover:text-white/80 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full px-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(10, 15, 30, 0.9) 0%, rgba(15, 20, 40, 0.85) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(103, 232, 249, 0.15)",
            boxShadow: "0 8px 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(103, 232, 249, 0.08)",
          }}
        >
          {/* Bottom glow line */}
          <div 
            className="absolute bottom-0 left-4 right-4 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), transparent)",
            }}
          />

          <div className="flex items-center justify-between p-5 relative z-10">
            <a href="#home">
              <TechLogo />
            </a>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-white/50 hover:text-white/70"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.button>
              
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl text-white/50 hover:text-white/70"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
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
                <div className="px-5 pb-5 space-y-1">
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
                        className="relative block px-4 py-3.5 rounded-xl transition-all duration-300"
                        style={{
                          background: isActive 
                            ? "linear-gradient(135deg, rgba(103, 232, 249, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)"
                            : "transparent",
                          border: isActive ? "1px solid rgba(103, 232, 249, 0.25)" : "1px solid transparent",
                          boxShadow: isActive ? "0 0 20px rgba(103, 232, 249, 0.15)" : "none",
                        }}
                      >
                        <span 
                          className={`text-[14px] font-medium tracking-[0.04em] ${
                            isActive ? 'text-cyan-300' : 'text-white/55'
                          }`}
                          style={{
                            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                            textShadow: isActive ? '0 0 20px rgba(103, 232, 249, 0.6)' : 'none',
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