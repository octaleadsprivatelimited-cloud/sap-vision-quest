import { Link } from "react-router-dom";
import { Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useData } from "@/context/DataContext";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerLinks: {
  Products: FooterLink[];
  Solutions: {
    main: FooterLink[];
    Services: FooterLink[];
  };
  Company: FooterLink[];
  Resources: FooterLink[];
} = {
  Products: [
    { label: "SAP S/4HANA Private Cloud", href: "/services/sap-s4hana-implementation" },
    { label: "SAP ECC Business Suite", href: "/products/sap-ecc" },
    { label: "SAP Business Technology Platform", href: "/products/sap-btp" },
    { label: "SAP Fiori & UX Platform", href: "/products/sap-fiori" },
    { label: "SAP Analytics Cloud", href: "/services/sap-support-maintenance" },
    { label: "SAP SuccessFactors", href: "/services/sap-corporate-training" },
    { label: "SAP Ariba", href: "/services/sap-integration-services" },
  ],
  Solutions: {
    main: [
      { label: "Implementation", href: "/services/sap-s4hana-implementation" },
      { label: "Migration", href: "/services/sap-ecc-migration" },
      { label: "Custom Development", href: "/services/sap-abap-development" },
    ],
    Services: [
      { label: "Support", href: "/services/sap-support-maintenance" },
      { label: "Consulting", href: "/services" },
      { label: "Rollout", href: "/services/sap-rollout-services" },
      { label: "Hypercare Support", href: "/services/sap-support-maintenance" },
    ],
  },
  Company: [
    { label: "Who We Are", href: "/who-we-are" },
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
  ],
};

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@SangronyxTechnologies", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/sangronyx/", label: "LinkedIn" },
];

const legalLinks = [
  { label: "Privacy Statement", href: "/privacy" },
  { label: "Legal & Regulatory", href: "/legal" },
  { label: "Cookie Consent", href: "/cookies" },
  { label: "Terms of Sale", href: "/terms" },
];

export const Footer = () => {
  const { content } = useData();
  const customPages = content?.customPages || [];

  const companyLinks = [
    ...footerLinks.Company,
    ...customPages.map((page) => ({
      label: page.title,
      href: `/p/${page.slug}`,
    })),
  ];
  return (
    <footer className="relative bg-[#f5f5f5] text-[#1d1d1d] font-sans antialiased border-t border-[#d2d2d2] text-xs">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Directory */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.Products.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.Solutions.main.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.Solutions.Services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.Resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">How can we help?</h4>
            <div className="space-y-4">
              <Link to="/contact">
                <Button className="w-full bg-[#0076d6] hover:bg-[#005ba3] text-white font-bold rounded-none px-4 py-2.5 h-auto text-xs uppercase tracking-wider">
                  Contact Us
                </Button>
              </Link>
              
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 border border-[#d2d2d2] flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <social.icon className="w-4 h-4 text-[#555555] hover:text-[#0076d6]" />
                  </a>
                ))}
              </div>

              <div>
                <Link to="/admin" className="text-[#777777] hover:text-[#0076d6] hover:underline font-semibold block text-[11px]">
                  System Administrator Panel
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="border-t border-[#d2d2d2] pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] text-[#666666]">
            {/* Left copyright info */}
            <div className="flex flex-wrap items-center gap-1 md:gap-2 justify-center lg:justify-start">
              <span className="font-bold text-[#1d1d1d] uppercase tracking-wider mr-2 text-[12px]">Sangronyx</span>
              <span>© 2026 Sangronyx Technologies. All rights reserved.</span>
              <span className="hidden md:inline text-[#d2d2d2]">|</span>
              <a 
                href="https://octaleads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#0076d6] hover:underline"
              >
                Developed by Octaleads Pvt Ltd
              </a>
            </div>
            
            {/* Right legal links */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-3">
                  <Link to={link.href} className="hover:text-[#0076d6] hover:underline">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-[#d2d2d2]">|</span>
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