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
      className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg"
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => setIsHoveringNav(false)}
    >
      {/* Cursor-follow glass glow - Desktop only */}
      <AnimatePresence>
        {isHoveringNav && (
          <motion.div
            className="hidden md:block absolute pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.6,
              x: mousePosition.x - 100,
              y: mousePosition.y - 50,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              x: { duration: 0.5, ease: "easeOut" },
              y: { duration: 0.5, ease: "easeOut" },
            }}
            style={{
              width: 200,
              height: 100,
              background: "radial-gradient(ellipse at center, rgba(142, 207, 255, 0.15) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Tech Logo */}
          <a href="#home" className="relative z-10">
            <TechLogo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative px-4 py-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-white/90 transition-all duration-300 hover:text-white group"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                  }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Premium glass capsule - always visible */}
                  <motion.span
                    className="absolute inset-0 rounded-full border"
                    initial={false}
                    animate={{
                      backgroundColor: isActive 
                        ? "rgba(142, 207, 255, 0.12)" 
                        : "rgba(255, 255, 255, 0.06)",
                      borderColor: isActive 
                        ? "rgba(142, 207, 255, 0.35)" 
                        : "rgba(255, 255, 255, 0.12)",
                      boxShadow: isActive 
                        ? "0 0 25px rgba(142, 207, 255, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 15px rgba(0, 0, 0, 0.2)" 
                        : "inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 2px 10px rgba(0, 0, 0, 0.15)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                    }}
                  />
                  
                  {/* Enhanced hover glass effect */}
                  <motion.span 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-350 ease-out border"
                    style={{ 
                      background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(142, 207, 255, 0.1) 100%)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      borderColor: "rgba(255, 255, 255, 0.25)",
                      boxShadow: "0 0 30px rgba(142, 207, 255, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 8px 25px rgba(0, 0, 0, 0.25)",
                    }}
                  />

                  {/* Inner glow accent */}
                  <span 
                    className="absolute inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                    }}
                  />

                  {/* Text with premium styling */}
                  <span 
                    className="relative z-10 transition-all duration-300"
                    style={{
                      textShadow: isActive 
                        ? '0 0 20px rgba(142, 207, 255, 0.7), 0 0 40px rgba(142, 207, 255, 0.4)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {link.label}
                  </span>

                  {/* Active indicator dot with glow */}
                  {isActive && (
                    <motion.span
                      className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        backgroundColor: "rgb(103, 232, 249)",
                        boxShadow: "0 0 12px rgba(103, 232, 249, 0.9), 0 0 25px rgba(103, 232, 249, 0.5), 0 0 40px rgba(103, 232, 249, 0.3)",
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ transform: "translateX(-50%)" }}
                    />
                  )}
                </motion.a>
              );
            })}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full ml-2 text-white/80 hover:text-white hover:bg-white/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-white/80"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-1 overflow-hidden"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "text-white bg-white/10 border border-white/15" 
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                      style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.5)' }}
                    >
                      {link.label}
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
