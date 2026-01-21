import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

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
      {/* Premium glassmorphism navbar - NON-STICKY */}
      <div
        className="w-full px-6 py-5 border-b border-white/10"
        style={{
          background: "rgba(10, 15, 30, 0.35)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Branded logo with cyan-blue glow */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="text-xl font-semibold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #67e8f9 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 20px rgba(103, 232, 249, 0.4)",
                filter: "drop-shadow(0 0 8px rgba(103, 232, 249, 0.3))",
              }}
            >
              Aakash
            </a>

            {/* Navigation Links - premium styling */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium text-blue-100/80 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-blue-100/60 hover:text-cyan-400 transition-colors duration-300"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              {/* Branded logo */}
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-lg font-semibold tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #67e8f9 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 8px rgba(103, 232, 249, 0.3))",
                }}
              >
                Aakash
              </a>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-blue-100/60 hover:text-cyan-400 transition-colors duration-300"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-blue-100/70 hover:text-cyan-400 transition-colors duration-300"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            {isMenuOpen && (
              <div className="mt-4 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block px-2 py-3 text-sm text-blue-100/80 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;