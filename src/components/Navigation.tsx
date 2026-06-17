import { useState } from "react";
import { Menu, X } from "lucide-react";

// Developer-style name logo
const TechLogo = () => (
  <span className="font-mono text-lg sm:text-xl font-semibold tracking-tight select-none">
    <span className="text-[#00F5D4] drop-shadow-[0_0_8px_rgba(0,245,212,0.7)]">&lt;/</span>
    <span className="text-white">Aakash</span>
    <span className="text-[#00F5D4] drop-shadow-[0_0_8px_rgba(0,245,212,0.7)]">&gt;</span>
  </span>
);

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
          {/* Desktop Navigation - Logo LEFT, Menu RIGHT */}
          <div className="hidden md:flex items-center justify-between">
            {/* Tech Logo - LEFT */}
            <div className="flex items-center">
              <TechLogo />
            </div>

            {/* Navigation Links - RIGHT ALIGNED */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative text-sm font-medium text-white/75 hover:text-amber-400 transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(255,170,80,0.4)] group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 ease-out group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              {/* Tech Logo - Mobile LEFT */}
              <TechLogo />

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white/70 hover:text-cyan-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Menu Items */}
            {isMenuOpen && (
              <div className="mt-4 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block px-2 py-3 text-sm text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-1"
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