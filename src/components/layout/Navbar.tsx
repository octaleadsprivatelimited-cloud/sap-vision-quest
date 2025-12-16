import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Products", href: "/products", hasDropdown: false },
  { label: "Solutions", href: "/solutions", hasDropdown: false },
  { label: "Industries", href: "/industries", hasDropdown: false },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Partners", href: "/partners", hasDropdown: false },
  { label: "Company", href: "/about", hasDropdown: false },
];

const resourcesMenuItems = [
  { label: "All Resources", href: "/resources" },
  { label: "Documentation", href: "/resources/documentation" },
  { label: "Video Tutorials", href: "/resources/video-tutorials" },
  { label: "Whitepapers", href: "/resources/whitepapers" },
  { label: "Downloads", href: "/resources/downloads" },
  { label: "FAQ", href: "/resources/faq" },
  { label: "Developer Resources", href: "/resources/developer-resources" },
  { label: "Training Materials", href: "/resources/training-materials" },
  { label: "Training Classes", href: "/resources/training-classes" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "#") return false;
    return location.pathname === href;
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className={cn(
        "transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Sangronyx Logo" 
                className="h-10 lg:h-12 w-auto transition-all"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <DropdownMenu key={item.label}>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={cn(
                            "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                            isActive(item.href)
                              ? "text-primary bg-primary/5"
                              : "text-gray-700 hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {item.label}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56 bg-background border border-border">
                        {resourcesMenuItems.map((menuItem) => (
                          <DropdownMenuItem
                            key={menuItem.label}
                            onClick={() => {
                              navigate(menuItem.href);
                            }}
                            className="cursor-pointer"
                          >
                            {menuItem.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-700 hover:text-primary"
              >
                <Globe className="w-5 h-5" />
              </Button>
              <Link to="/contact">
                <Button 
                  size="sm"
                  className="font-semibold bg-[#0096d6] text-white hover:bg-[#0077b3]"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700"
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
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.label} className="space-y-2">
                        <div className="px-4 py-2 text-sm font-semibold text-foreground">
                          {item.label}
                        </div>
                        {resourcesMenuItems.map((menuItem) => (
                          <Link
                            key={menuItem.label}
                            to={menuItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "block w-full px-6 py-2 text-left rounded-md transition-colors text-sm",
                              isActive(menuItem.href)
                                ? "text-accent bg-accent/5 font-medium"
                                : "text-muted-foreground hover:bg-accent/5"
                            )}
                          >
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block w-full px-4 py-3 text-left rounded-md transition-colors",
                        isActive(item.href)
                          ? "text-accent bg-accent/5 font-medium"
                          : "text-foreground hover:bg-accent/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-border space-y-2">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#0096d6] text-white hover:bg-[#0077b3]">
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
