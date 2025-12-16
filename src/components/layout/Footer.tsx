import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Products: [
    { label: "SAP S/4HANA", href: "/products" },
    { label: "SAP ECC", href: "/products" },
    { label: "SAP Fiori", href: "/products" },
    { label: "SAP HANA", href: "/products" },
    { label: "SAP BTP", href: "/products" },
  ],
  Solutions: {
    main: [
      { label: "Implementation", href: "/solutions" },
      { label: "Migration", href: "/solutions" },
      { label: "Custom Development", href: "/solutions" },
    ],
    Services: [
      { label: "Training", href: "/solutions" },
      { label: "Support", href: "/solutions" },
      { label: "Consulting", href: "/solutions" },
    ],
  },
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Careers", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Video Tutorials", href: "/resources/video-tutorials" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "Downloads", href: "/resources/downloads" },
    { label: "FAQ", href: "/resources/faq" },
    { label: "Training", href: "/resources/training-classes" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Legal", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Terms", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#0a1628] text-white">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 -translate-y-full overflow-hidden">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96L1440 96L1440 32C1440 32 1280 0 720 0C160 0 0 32 0 32L0 96Z"
            fill="#0a1628"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-12">
          {/* Contact CTA Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-4">How can we help you?</h4>
            <Link to="/contact">
              <Button className="bg-[#00a3c4] hover:bg-[#00b8db] text-white rounded-full px-6 mb-6">
                Contact Us
              </Button>
            </Link>
            
            {/* Divider */}
            <div className="border-t border-white/20 my-6 w-32"></div>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.Products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column with subheaders */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-2.5 mb-5">
              {footerLinks.Solutions.main.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            
            <h5 className="font-semibold mb-3 text-[#00a3c4] text-sm uppercase tracking-wide">Services</h5>
            <ul className="space-y-2.5">
              {footerLinks.Solutions.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.Resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/contact" className="text-white/60 text-sm hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@sangronyx.com" className="text-white/60 text-sm hover:text-white transition-colors">
                  Email Support
                </a>
              </li>
              <li>
                <Link to="/resources/developer-resources" className="text-white/60 text-sm hover:text-white transition-colors">
                  Developer Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link to="/">
                <img 
                  src="/logo.png" 
                  alt="Sangronyx Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/50 text-sm">
                © 2025 Sangronyx. All rights reserved.{" "}
                <a 
                  href="https://octaleads.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  Developed by Octaleads Pvt Ltd.
                </a>
              </p>
            </div>
            
            {/* Legal links with separators */}
            <div className="flex items-center gap-0 text-sm">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center">
                  <a 
                    href={link.href} 
                    className="text-white/50 hover:text-white/80 transition-colors px-3"
                  >
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
