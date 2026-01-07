import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="relative w-full z-50">
      {/* Premium Glassmorphism container with cyan-blue gradient tint */}
      <div
        className="w-full px-6 py-5"
        style={{
          background: "linear-gradient(135deg, rgba(0, 30, 60, 0.75) 0%, rgba(10, 20, 40, 0.8) 50%, rgba(0, 40, 80, 0.7) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(100, 200, 255, 0.15)",
          boxShadow: "0 8px 40px rgba(0, 150, 200, 0.12), 0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo with premium gradient */}
            <motion.a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="text-2xl font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #00f0ff 0%, #00b4ff 40%, #0080ff 70%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Orbitron', 'Space Grotesk', sans-serif",
                letterSpacing: "0.05em",
                textShadow: "0 0 30px rgba(0, 200, 255, 0.3)",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Aakash
            </motion.a>

            {/* Navigation Links */}
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group relative py-2 text-sm font-medium tracking-wider text-white/65 transition-all duration-300 hover:text-white"
                    style={{ 
                      fontFamily: "'Outfit', 'Sora', sans-serif",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {link.label}
                    {/* Animated underline - smooth left to right with cyan gradient */}
                    <span
                      className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100"
                      style={{
                        background: "linear-gradient(90deg, #00e5ff 0%, #00b0ff 50%, #00f0ff 100%)",
                        boxShadow: "0 0 8px rgba(0, 229, 255, 0.6)",
                      }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-white/50 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(0, 200, 255, 0.08)",
                border: "1px solid rgba(0, 200, 255, 0.15)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-xl font-bold tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #00f0ff 0%, #00b4ff 40%, #0080ff 70%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Orbitron', 'Space Grotesk', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                Aakash
              </a>

              <div className="flex items-center gap-2">
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl text-white/50 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "rgba(0, 200, 255, 0.08)",
                    border: "1px solid rgba(0, 200, 255, 0.15)",
                  }}
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.button>

                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-xl text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "rgba(0, 200, 255, 0.08)",
                    border: "1px solid rgba(0, 200, 255, 0.15)",
                  }}
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
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-4"
                >
                  <div 
                    className="space-y-1 p-2 rounded-xl"
                    style={{
                      background: "rgba(0, 30, 60, 0.5)",
                      border: "1px solid rgba(0, 200, 255, 0.1)",
                    }}
                  >
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.3 }}
                        className="block px-4 py-3 rounded-lg text-white/65 hover:text-white hover:bg-white/5 transition-all duration-200"
                        style={{ fontFamily: "'Outfit', 'Sora', sans-serif" }}
                      >
                        <span className="text-sm tracking-wider">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;