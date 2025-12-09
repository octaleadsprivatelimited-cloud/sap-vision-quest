import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, FileText, Video, Download, HelpCircle, Code, GraduationCap } from "lucide-react";

const resources = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides and documentation for our services and solutions.",
    link: "#",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video tutorials to help you get started with our services.",
    link: "#",
  },
  {
    icon: FileText,
    title: "Whitepapers",
    description: "In-depth whitepapers on IT best practices and SAP implementation strategies.",
    link: "#",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Download resources, templates, and tools to support your projects.",
    link: "#",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Frequently asked questions about our services and how we can help you.",
    link: "#",
  },
  {
    icon: Code,
    title: "Developer Resources",
    description: "Resources for developers including APIs, SDKs, and integration guides.",
    link: "#",
  },
  {
    icon: GraduationCap,
    title: "Training Materials",
    description: "Training materials and resources for SAP modules and IT services.",
    link: "#",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Resources"
        description="Access helpful resources, documentation, and materials to support your business journey."
      />

      {/* Resources Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-sap-light-purple flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <resource.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Can't find what you're looking for? Contact our team for personalized assistance.
            </p>
            <Button variant="hero" size="lg" className="group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;

