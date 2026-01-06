import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TechLogo from "./TechLogo";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

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

    const handleScrollEffect = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollEffect);
    handleScroll();
    handleScrollEffect();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEffect);
    };
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
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Desktop Navigation - Glassmorphism */}
      <motion.div
        className="hidden lg:flex items-center gap-1 px-6 py-3 rounded-2xl transition-all duration-500"
        style={{
          background: hasScrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: hasScrolled 
            ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)" 
            : "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 mr-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
          <TechLogo />
        </a>

        {/* Navigation items */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative px-4 py-2 group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <span 
                  className={`text-[13px] tracking-[0.03em] transition-all duration-300 ${
                    isActive 
                      ? 'text-white font-medium' 
                      : 'text-white/60 group-hover:text-white font-normal'
                  }`}
                  style={{ fontFamily: "'Sora', 'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </span>
                
                {/* Animated underline for active state */}
                <motion.span 
                  className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-accent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: isActive ? 1 : 0, 
                    opacity: isActive ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
                
                {/* Hover underline effect */}
                <motion.span 
                  className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-white/40"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Theme toggle */}
        <div className="flex-shrink-0 ml-6">
          <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-white/50 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex items-center justify-between p-4">
            <a href="#home" className="opacity-90">
              <TechLogo />
            </a>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-white/50 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.button>
              
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-white/50 hover:text-white transition-colors"
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
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
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
                transition={{ duration: 0.25, ease: "easeOut" }}
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
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.25 }}
                        className="block px-4 py-3 rounded-xl transition-all duration-200"
                        style={{
                          background: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
                        }}
                      >
                        <span 
                          className={`text-[14px] tracking-[0.03em] ${
                            isActive ? 'text-white font-medium' : 'text-white/60'
                          }`}
                          style={{ fontFamily: "'Sora', 'Space Grotesk', sans-serif" }}
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;