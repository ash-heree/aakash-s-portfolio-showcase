import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import TechLogo from "./TechLogo";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const commandBarRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const navPadding = useTransform(scrollY, [0, 100], [20, 8]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [24, 32]);

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
      style={{ paddingTop: 20, paddingBottom: 20 }}
    >
      {/* Desktop Command Bar */}
      <motion.div
        ref={commandBarRef}
        className="hidden lg:flex items-center relative mx-4"
        style={{ scale: navScale }}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => setIsHoveringNav(false)}
      >
        {/* Subtle ambient backdrop - no visible container */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: `blur(${navBlur}px) saturate(150%)`,
            WebkitBackdropFilter: `blur(24px) saturate(150%)`,
          }}
        />

        {/* Cursor-follow ambient glow */}
        <AnimatePresence>
          {isHoveringNav && (
            <motion.div
              className="absolute pointer-events-none z-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.6,
                x: mousePosition.x - 100,
                y: mousePosition.y - 50,
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.4 },
                x: { duration: 0.2, ease: "easeOut" },
                y: { duration: 0.2, ease: "easeOut" },
              }}
              style={{
                width: 200,
                height: 100,
                background: "radial-gradient(ellipse at center, rgba(103, 232, 249, 0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Logo */}
        <a href="#home" className="relative z-10 pl-5 pr-4">
          <TechLogo />
        </a>

        {/* Separator */}
        <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Navigation items container */}
        <div className="relative flex items-center px-2 py-2.5">
          {/* Liquid glass active indicator */}
          <motion.div
            className="absolute h-8 rounded-xl pointer-events-none"
            initial={false}
            animate={{
              x: `calc(${getActiveIndex() * 100}% + ${getActiveIndex() * 4}px)`,
              width: commandBarRef.current 
                ? commandBarRef.current.querySelectorAll('a')[getActiveIndex()]?.offsetWidth || 80 
                : 80,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
            style={{
              background: "linear-gradient(135deg, rgba(103, 232, 249, 0.15) 0%, rgba(59, 130, 246, 0.12) 100%)",
              boxShadow: "0 0 20px rgba(103, 232, 249, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(103, 232, 249, 0.25)",
            }}
          />

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative px-4 py-2 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Hover glow */}
                <motion.span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: "radial-gradient(ellipse at center, rgba(103, 232, 249, 0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Text */}
                <span 
                  className={`relative z-10 text-[13px] font-light tracking-[0.04em] transition-all duration-300 ${
                    isActive ? 'text-cyan-300' : 'text-white/50 group-hover:text-white/80'
                  }`}
                  style={{
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                    textShadow: isActive 
                      ? '0 0 20px rgba(103, 232, 249, 0.6)' 
                      : 'none',
                  }}
                >
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Separator */}
        <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Theme toggle */}
        <div className="relative z-10 px-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-white/40 hover:text-white/70 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
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
            background: "linear-gradient(135deg, rgba(8, 12, 28, 0.85) 0%, rgba(15, 20, 40, 0.75) 100%)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(103, 232, 249, 0.1)",
            boxShadow: "0 0 40px rgba(103, 232, 249, 0.05), 0 20px 40px -20px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="flex items-center justify-between p-4 relative z-10">
            <a href="#home">
              <TechLogo />
            </a>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-white/50 hover:text-white/70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.button>
              
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-white/50 hover:text-white/70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                            ? "linear-gradient(135deg, rgba(103, 232, 249, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%)"
                            : "transparent",
                          border: isActive ? "1px solid rgba(103, 232, 249, 0.2)" : "1px solid transparent",
                        }}
                      >
                        <span 
                          className={`text-[13px] font-light tracking-[0.04em] ${
                            isActive ? 'text-cyan-300' : 'text-white/50'
                          }`}
                          style={{
                            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
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
