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
      {/* Ultra minimal glass blur - NON-STICKY */}
      <div
        className="w-full px-6 py-5"
        style={{
          background: "transparent",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Clean logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="text-xl font-semibold text-white tracking-wide"
            >
              Aakash
            </a>

            {/* Navigation Links - clean and minimal */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme toggle - minimal */}
            <button
              onClick={toggleTheme}
              className="p-2 text-white/60 hover:text-white transition-colors duration-200"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-lg font-semibold text-white tracking-wide"
              >
                Aakash
              </a>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-white/60 hover:text-white transition-colors duration-200"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-white/70 hover:text-white transition-colors duration-200"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Items - minimal */}
            {isMenuOpen && (
              <div className="mt-4 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block px-2 py-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
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