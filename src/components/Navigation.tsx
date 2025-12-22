import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import TechLogo from "./TechLogo";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
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

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => setIsHoveringNav(false)}
    >
      {/* Premium glassmorphism navbar background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(8, 12, 28, 0.85) 0%, rgba(10, 15, 35, 0.75) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(142, 207, 255, 0.15)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(103, 232, 249, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      />
      
      {/* Animated bottom glow line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(103, 232, 249, 0.4) 20%, rgba(142, 207, 255, 0.6) 50%, rgba(103, 232, 249, 0.4) 80%, transparent 100%)",
        }}
      />

      {/* Cursor-follow glass glow - Desktop only */}
      <AnimatePresence>
        {isHoveringNav && (
          <motion.div
            className="hidden md:block absolute pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.8,
              x: mousePosition.x - 120,
              y: mousePosition.y - 40,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              x: { duration: 0.4, ease: "easeOut" },
              y: { duration: 0.4, ease: "easeOut" },
            }}
            style={{
              width: 240,
              height: 80,
              background: "radial-gradient(ellipse at center, rgba(103, 232, 249, 0.2) 0%, rgba(142, 207, 255, 0.1) 30%, transparent 70%)",
              filter: "blur(25px)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Tech Logo */}
          <a href="#home" className="relative z-10">
            <TechLogo />
          </a>

          {/* Desktop Navigation - Centered capsule container */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div 
              className="flex items-center gap-1 px-2 py-1.5 rounded-full"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 group cursor-pointer"
                    style={{ 
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                    }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {/* Active state - Gradient filled capsule */}
                    <motion.span
                      className="absolute inset-0 rounded-full overflow-hidden"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <span 
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(103, 232, 249, 0.25) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(139, 92, 246, 0.15) 100%)",
                          boxShadow: "0 0 30px rgba(103, 232, 249, 0.4), 0 0 60px rgba(103, 232, 249, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.1)",
                          border: "1px solid rgba(103, 232, 249, 0.5)",
                        }}
                      />
                      {/* Inner shine */}
                      <span 
                        className="absolute inset-x-0 top-0 h-1/2"
                        style={{
                          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)",
                          borderRadius: "9999px 9999px 0 0",
                        }}
                      />
                    </motion.span>

                    {/* Default state - Glass capsule */}
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      initial={false}
                      animate={{
                        opacity: isActive ? 0 : 1,
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.06), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.15)",
                      }}
                    />
                    
                    {/* Hover state - Enhanced glow capsule */}
                    <motion.span 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden"
                      style={{ 
                        background: "linear-gradient(135deg, rgba(103, 232, 249, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(139, 92, 246, 0.08) 100%)",
                        border: "1px solid rgba(103, 232, 249, 0.3)",
                        boxShadow: "0 0 25px rgba(103, 232, 249, 0.25), 0 0 50px rgba(103, 232, 249, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      {/* Hover inner shine */}
                      <span 
                        className="absolute inset-x-0 top-0 h-1/2"
                        style={{
                          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
                        }}
                      />
                    </motion.span>

                    {/* Text */}
                    <span 
                      className={`relative z-10 transition-all duration-300 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}
                      style={{
                        textShadow: isActive 
                          ? '0 0 25px rgba(103, 232, 249, 0.8), 0 0 50px rgba(103, 232, 249, 0.4)' 
                          : '0 1px 3px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {link.label}
                    </span>

                    {/* Active indicator dot */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          className="absolute -bottom-0.5 left-1/2 w-1 h-1 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          style={{ 
                            transform: "translateX(-50%)",
                            backgroundColor: "rgb(103, 232, 249)",
                            boxShadow: "0 0 8px rgba(103, 232, 249, 1), 0 0 16px rgba(103, 232, 249, 0.6), 0 0 24px rgba(103, 232, 249, 0.3)",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Theme toggle - Desktop */}
          <div className="hidden lg:flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-white/70 hover:text-white transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-white/70 hover:text-white"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full text-white/70 hover:text-white"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
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
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu - Premium glassmorphism dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden pb-4"
            >
              <div 
                className="rounded-2xl p-3 space-y-1"
                style={{
                  background: "linear-gradient(180deg, rgba(8, 12, 28, 0.95) 0%, rgba(10, 15, 35, 0.9) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(142, 207, 255, 0.15)",
                  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(103, 232, 249, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
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
                      className="relative block px-4 py-3.5 rounded-xl overflow-hidden transition-all duration-300 group"
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                      }}
                    >
                      {/* Background */}
                      <span 
                        className="absolute inset-0 transition-all duration-300"
                        style={{
                          background: isActive 
                            ? "linear-gradient(135deg, rgba(103, 232, 249, 0.2) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(139, 92, 246, 0.1) 100%)"
                            : "rgba(255, 255, 255, 0.03)",
                          border: isActive ? "1px solid rgba(103, 232, 249, 0.4)" : "1px solid rgba(255, 255, 255, 0.05)",
                          borderRadius: "0.75rem",
                          boxShadow: isActive 
                            ? "0 0 20px rgba(103, 232, 249, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
                            : "none",
                        }}
                      />
                      
                      {/* Text */}
                      <span 
                        className={`relative z-10 text-[12px] font-semibold tracking-[0.1em] uppercase ${isActive ? 'text-white' : 'text-white/70'}`}
                        style={{
                          textShadow: isActive ? '0 0 20px rgba(103, 232, 249, 0.6)' : 'none',
                        }}
                      >
                        {link.label}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.span
                          className="absolute right-4 top-1/2 w-2 h-2 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          style={{
                            transform: "translateY(-50%)",
                            backgroundColor: "rgb(103, 232, 249)",
                            boxShadow: "0 0 10px rgba(103, 232, 249, 0.8), 0 0 20px rgba(103, 232, 249, 0.4)",
                          }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;