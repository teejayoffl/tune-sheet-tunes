import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { href: "/what-we-do", label: "What We Do" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/locations", label: "Locations" },
    { href: "/blog", label: "Insights" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors relative ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-muted-foreground hover:text-primary transition-colors ${
                    isActive(link.href) ? "text-primary" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;