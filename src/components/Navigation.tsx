import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="absolute top-0 left-0 right-0 w-full z-50"
      style={{
        background: "rgba(10, 15, 30, 0.25)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="w-full px-6 py-5">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation - Left-aligned links, Right-aligned logo */}
          <div className="hidden md:flex items-center justify-between">
            {/* Navigation Links - LEFT ALIGNED */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium text-white/75 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Tech Logo - RIGHT ALIGNED */}
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{
                background: "rgba(103, 232, 249, 0.1)",
                border: "1px solid rgba(103, 232, 249, 0.3)",
              }}
            >
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white/70 hover:text-cyan-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {/* Tech Logo - Mobile */}
              <div 
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{
                  background: "rgba(103, 232, 249, 0.1)",
                  border: "1px solid rgba(103, 232, 249, 0.3)",
                }}
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
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
                    className="block px-2 py-3 text-sm text-white/80 hover:text-cyan-400 transition-colors duration-300"
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