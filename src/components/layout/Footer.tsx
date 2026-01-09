import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Products: [
    { label: "SAP S/4HANA", href: "/products" },
    { label: "SAP ECC", href: "/products" },
    { label: "SAP Fiori", href: "/products" },
    { label: "SAP BTP", href: "/products" },
  ],
  Solutions: {
    main: [
      { label: "Implementation", href: "/solutions" },
      { label: "Migration", href: "/solutions" },
      { label: "Custom Development", href: "/solutions" },
    ],
    Services: [
      { label: "Support", href: "/services" },
      { label: "Consulting", href: "/services" },
      { label: "Rollout", href: "/services" },
      { label: "Hypercare support", href: "/services" },
    ],
  },
  Company: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Our Story", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Sitemap", href: "/sitemap.xml", external: true },
  ],
  Resources: [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Video Tutorials", href: "/resources/video-tutorials" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "Downloads", href: "/resources/downloads" },
    { label: "FAQ", href: "/resources/faq" },
    { label: "Workshop", href: "/resources/training-classes" },
  ],
};

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@SangronyxTechnologies", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/sangronyxtech?igsh=aXVnbDVmOG9nejJj", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/1C8oFpvEpG/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/sangronyx/", label: "LinkedIn" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Legal", href: "/legal" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
];

export const Footer = () => {
  return (
    <footer 
      className="relative text-white font-['Inter',sans-serif]"
      style={{
        backgroundImage: 'url(/footer-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-[#0a1628]/40"></div>

      <div className="container mx-auto px-4 lg:px-8 py-10 md:py-14 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5 mb-10">
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
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* Services Column with subheaders */}
          <div>
            <h4 className="text-[13px] font-semibold mb-3 text-white tracking-wide">Services</h4>
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
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  )}
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
              <li>
                <Link to="/resources/faq" className="text-white/50 text-[12px] hover:text-white transition-colors leading-relaxed">
                  FAQ
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
                  <Link 
                    to={link.href} 
                    className="text-white/40 hover:text-white/70 transition-colors px-2"
                  >
                    {link.label}
                  </Link>
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