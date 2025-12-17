import { Link } from "react-router-dom";
import { Linkedin, Youtube, Facebook, Instagram } from "lucide-react";
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
    { label: "Careers", href: "/careers" },
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
    <footer className="relative bg-[#0a1628] text-white font-['Inter',sans-serif]">
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

      <div className="container mx-auto px-4 lg:px-8 py-10 md:py-14">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-5 mb-10">
          {/* Contact CTA Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white text-[13px] font-medium mb-3 tracking-wide">How can we help you?</h4>
            <Link to="/contact">
              <Button className="bg-[#0099cc] hover:bg-[#00b3e6] text-white text-[13px] font-medium rounded-full px-5 py-2 h-auto mb-5">
                Contact Us
              </Button>
            </Link>
            
            {/* Divider */}
            <div className="border-t border-white/20 my-5 w-28"></div>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-[14px] h-[14px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-[13px] font-semibold mb-3 text-white tracking-wide">Products</h4>
            <ul className="space-y-2">
              {footerLinks.Products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column with subheaders */}
          <div>
            <h4 className="text-[13px] font-semibold mb-3 text-white tracking-wide">Solutions</h4>
            <ul className="space-y-2 mb-4">
              {footerLinks.Solutions.main.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h5 className="text-[11px] font-semibold mb-2 text-[#00b3e6] uppercase tracking-wider">Services</h5>
            <ul className="space-y-2">
              {footerLinks.Solutions.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[13px] font-semibold mb-3 text-white tracking-wide">Company</h4>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[13px] font-semibold mb-3 text-white tracking-wide">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-[13px] font-semibold mb-3 text-white tracking-wide">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@sangronyx.com" className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed">
                  Email Support
                </a>
              </li>
              <li>
                <Link to="/resources/developer-resources" className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed">
                  Developer Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Logo and copyright */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Link to="/">
                <img 
                  src="/logo.png" 
                  alt="Sangronyx Logo" 
                  className="h-6 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/40 text-[11px]">
                © 2025 Sangronyx. All rights reserved.{" "}
                <a 
                  href="https://octaleads.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors"
                >
                  Developed by Octaleads Pvt Ltd.
                </a>
              </p>
            </div>
            
            {/* Legal links with separators */}
            <div className="flex items-center gap-0 text-[11px]">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center">
                  <a 
                    href={link.href} 
                    className="text-white/40 hover:text-white/70 transition-colors px-2"
                  >
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/25">|</span>
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