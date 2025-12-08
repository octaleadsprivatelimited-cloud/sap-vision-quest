import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Products", href: "/products", hasDropdown: false },
  { label: "Solutions", href: "/solutions", hasDropdown: false },
  { label: "Industries", href: "/solutions", hasDropdown: false },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Partners", href: "#", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: false },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "#") return false;
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent bar */}
      <div className="h-1 gradient-hero" />
      
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-8 gradient-hero rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SAP</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Link to="/contact">
                <Button variant="cta" size="sm">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block w-full px-4 py-3 text-left rounded-md transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/5 font-medium"
                        : "text-foreground hover:bg-primary/5"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="cta" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
