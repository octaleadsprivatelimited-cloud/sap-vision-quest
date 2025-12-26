import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Globe, ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Products", href: "/products", hasDropdown: false },
  { label: "Solutions", href: "/solutions", hasDropdown: false },
  { label: "Industries", href: "/industries", hasDropdown: false },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Workshop", href: "/resources/training", hasDropdown: false },
  { label: "Careers", href: "/careers", hasDropdown: false },
  { label: "Partners", href: "/partners", hasDropdown: false },
  { label: "Who We Are", href: "/who-we-are", hasDropdown: false },
  { label: "What We Do", href: "/what-we-do", hasDropdown: false },
];

const resourceCategories = [
  {
    id: "human",
    label: "Human Resources",
    items: [
      { label: "Employees and Management Team", href: "/resources/employees" },
      { label: "Skills, Expertise, and Experience", href: "/resources/skills" },
      { label: "Leadership and Organizational Structure", href: "/resources/leadership" },
    ],
  },
  {
    id: "physical",
    label: "Physical Resources",
    items: [
      { label: "Office Buildings, Factories, Warehouses", href: "/resources/facilities" },
      { label: "Machinery, Equipment, Tools", href: "/resources/equipment" },
      { label: "Vehicles and Other Infrastructure", href: "/resources/infrastructure" },
    ],
  },
  {
    id: "financial",
    label: "Financial Resources",
    items: [
      { label: "Capital and Investments", href: "/resources/capital" },
      { label: "Revenue and Profits", href: "/resources/revenue" },
      { label: "Loans, Funding, and Cash Flow", href: "/resources/funding" },
    ],
  },
  {
    id: "technological",
    label: "Technological Resources",
    items: [
      { label: "Software and IT Systems", href: "/resources/software" },
      { label: "Patents, Licenses, and Proprietary Technology", href: "/resources/patents" },
      { label: "Research and Development Capabilities", href: "/resources/research" },
    ],
  },
  {
    id: "intellectual",
    label: "Intellectual Resources",
    items: [
      { label: "Brand Name and Reputation", href: "/resources/brand" },
      { label: "Trademarks and Copyrights", href: "/resources/trademarks" },
      { label: "Business Processes and Know-how", href: "/resources/processes" },
    ],
  },
  {
    id: "operational",
    label: "Operational Resources",
    items: [
      { label: "Supply Chain and Vendor Network", href: "/resources/supply-chain" },
      { label: "Distribution Channels", href: "/resources/distribution" },
      { label: "Quality Control Systems", href: "/resources/quality-control" },
    ],
  },
  {
    id: "training",
    label: "Training & Placements",
    items: [
      { label: "Training Programs", href: "/resources/training" },
      { label: "Placement Assistance", href: "/resources/placements" },
    ],
  },
];

const spotlightItems = [
  {
    title: "SAP S/4HANA Migration Guide",
    subtitle: "Complete migration roadmap for enterprises",
    cta: "Read guide",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    title: "Enterprise Training Programs",
    subtitle: "Upskill your team with expert-led courses",
    cta: "Explore courses",
    image: "/sap-corporate-training.avif",
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("human");
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
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

  const currentCategory = resourceCategories.find((cat) => cat.id === activeCategory);

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
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <button
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive(item.href) || isResourcesOpen
                            ? "text-[#0096d6] bg-[#0096d6]/10"
                            : isHomePage && !isScrolled
                              ? "text-white hover:text-white/80"
                              : "text-gray-700 hover:text-[#0096d6] hover:bg-[#0096d6]/5"
                        )}
                      >
                        {item.label}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isResourcesOpen && "rotate-180"
                        )} />
                      </button>
                    </div>
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
                        : isHomePage && !isScrolled
                          ? "text-white hover:text-white/80"
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
                className={cn(
                  isHomePage && !isScrolled
                    ? "text-white hover:text-white/80"
                    : "text-gray-700 hover:text-primary"
                )}
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
              className={cn(
                "lg:hidden",
                isHomePage && !isScrolled ? "text-white" : "text-gray-700"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Resources Mega Menu */}
        <AnimatePresence>
          {isResourcesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full bg-white shadow-xl border-t border-gray-100 hidden lg:block"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-12 gap-0 py-8">
                  {/* Left Categories */}
                  <div className="col-span-2 border-r border-gray-100 pr-6">
                    <nav className="space-y-1">
                      {resourceCategories.map((category) => (
                        <button
                          key={category.id}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium transition-all rounded-r-md",
                            activeCategory === category.id
                              ? "text-gray-900 bg-gray-50 border-l-4 border-[#0096d6]"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
                          )}
                        >
                          {category.label}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Middle Links */}
                  <div className="col-span-4 px-8">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      {currentCategory?.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setIsResourcesOpen(false)}
                          className="text-sm text-gray-700 hover:text-[#0096d6] transition-colors py-2"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Spotlight */}
                  <div className="col-span-6 pl-8 border-l border-gray-100">
                    <div className="bg-[#e6f7fc] rounded-lg p-6">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0096d6] border border-[#0096d6] rounded-full mb-4">
                        SPOTLIGHT
                      </span>
                      <div className="grid grid-cols-2 gap-6">
                        {spotlightItems.map((item, index) => (
                          <div key={index} className="group">
                            <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-gray-200">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                              {item.subtitle}
                            </p>
                            <Link
                              to="/resources"
                              onClick={() => setIsResourcesOpen(false)}
                              className="inline-flex items-center gap-1 text-sm font-medium text-[#0096d6] hover:gap-2 transition-all"
                            >
                              <ArrowRight className="w-4 h-4" />
                              {item.cta}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-white z-[100] overflow-y-auto"
              style={{ height: '100vh', top: 0 }}
            >
              {/* Mobile Menu Header with Logo */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img 
                    src="/logo.png" 
                    alt="Sangronyx Logo" 
                    className="h-10 w-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                          className={cn(
                            "flex items-center justify-between w-full px-4 py-3 text-left rounded-md transition-colors",
                            mobileResourcesOpen
                              ? "text-[#0096d6] bg-[#0096d6]/5 font-medium"
                              : "text-gray-900 hover:bg-gray-50"
                          )}
                        >
                          {item.label}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            mobileResourcesOpen && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {mobileResourcesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {resourceCategories.map((category) => (
                                <div key={category.id}>
                                  <button
                                    onClick={() => setMobileExpandedCategory(
                                      mobileExpandedCategory === category.id ? null : category.id
                                    )}
                                    className={cn(
                                      "flex items-center justify-between w-full px-4 py-2 text-left text-sm rounded-md transition-colors",
                                      mobileExpandedCategory === category.id
                                        ? "text-[#0096d6] bg-[#0096d6]/5 font-medium"
                                        : "text-gray-700 hover:bg-gray-50"
                                    )}
                                  >
                                    {category.label}
                                    <ChevronRight className={cn(
                                      "w-4 h-4 transition-transform",
                                      mobileExpandedCategory === category.id && "rotate-90"
                                    )} />
                                  </button>
                                  <AnimatePresence>
                                    {mobileExpandedCategory === category.id && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="pl-4 space-y-1"
                                      >
                                        {category.items.map((menuItem) => (
                                          <Link
                                            key={menuItem.label}
                                            to={menuItem.href}
                                            onClick={() => {
                                              setIsMobileMenuOpen(false);
                                              setMobileResourcesOpen(false);
                                              setMobileExpandedCategory(null);
                                            }}
                                            className={cn(
                                              "block w-full px-4 py-2 text-left rounded-md transition-colors text-sm",
                                              isActive(menuItem.href)
                                                ? "text-[#0096d6] bg-[#0096d6]/5 font-medium"
                                                : "text-gray-600 hover:bg-gray-50"
                                            )}
                                          >
                                            {menuItem.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                          ? "text-[#0096d6] bg-[#0096d6]/5 font-medium"
                          : "text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {/* Contact Info Box */}
                <div className="mt-6 p-4 bg-gradient-to-br from-[#0096d6]/10 to-[#0096d6]/5 rounded-xl border border-[#0096d6]/20">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Get in Touch</h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+919876543210" 
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#0096d6] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#0096d6]/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#0096d6]" />
                      </div>
                      <span>+91 98765 43210</span>
                    </a>
                    <a 
                      href="mailto:info@sangronyx.com" 
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#0096d6] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#0096d6]/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#0096d6]" />
                      </div>
                      <span>info@sangronyx.com</span>
                    </a>
                    <a 
                      href="https://maps.google.com/?q=Sangronyx+Technologies" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-xs text-gray-600 hover:text-[#0096d6] transition-colors"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#0096d6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#0096d6]" />
                      </div>
                      <span className="leading-relaxed">Sangronyx Technologies, Business Park, Hyderabad, India · <span className="text-[#0096d6] font-medium">Maps</span></span>
                    </a>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#25D366] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      </div>
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
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