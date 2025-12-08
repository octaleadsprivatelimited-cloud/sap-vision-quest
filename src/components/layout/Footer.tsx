import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  Products: ["Cloud ERP", "Business Technology Platform", "Supply Chain", "Human Resources", "Customer Experience"],
  Company: ["About SAP", "Investor Relations", "News", "Careers", "Sustainability"],
  Resources: ["Documentation", "Community", "Training", "Events", "Support"],
  Legal: ["Privacy", "Terms of Use", "Cookies", "Accessibility", "Legal Disclosure"],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-sap-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="w-16 h-10 gradient-hero rounded flex items-center justify-center mb-4">
              <span className="text-primary-foreground font-bold">SAP</span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              The world runs SAP. We help businesses run better with intelligent solutions.
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
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
              © 2024 SAP SE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                Cookie Preferences
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
