import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  "SAP Solutions": [
    { label: "SAP S/4HANA Implementation", href: "/solutions" },
    { label: "SAP ECC to S/4HANA Migration", href: "/solutions" },
    { label: "SAP Licensing & Software", href: "/solutions" },
    { label: "SAP Module Implementations", href: "/solutions" },
    { label: "SAP Custom Development", href: "/solutions" },
    { label: "SAP Corporate Training", href: "/solutions" },
    { label: "SAP Support & Maintenance", href: "/solutions" },
    { label: "SAP Integration Services", href: "/solutions" },
  ],
  Company: [
    { label: "Who We Are", href: "/about" },
    { label: "Our Services", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Video Tutorials", href: "/resources/video-tutorials" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "Downloads", href: "/resources/downloads" },
    { label: "FAQ", href: "/resources/faq" },
    { label: "Developer Resources", href: "/resources/developer-resources" },
    { label: "Training Materials", href: "/resources/training-materials" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Email: info@sangronyx.com", href: "mailto:info@sangronyx.com" },
    { label: "Phone: +91-XXXXXXXXXX", href: "tel:+91-XXXXXXXXXX" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="relative text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/footer-background.jpg" 
          alt="Footer Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="inline-block">
              <div className="w-16 h-10 gradient-hero rounded flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold">SX</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Sangronyx - Modern IT and SAP service company providing end-to-end digital solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Sangronyx. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                Cookies
              </a>
              <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
