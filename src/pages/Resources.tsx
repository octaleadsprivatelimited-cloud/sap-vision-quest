import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PageBackground } from "@/components/ui/page-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, FileText, Video, Download, HelpCircle, Code, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides and documentation for our services and solutions.",
    link: "/resources/documentation",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video tutorials to help you get started with our services.",
    link: "/resources/video-tutorials",
  },
  {
    icon: FileText,
    title: "Whitepapers",
    description: "In-depth whitepapers on IT best practices and SAP implementation strategies.",
    link: "/resources/whitepapers",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Download resources, templates, and tools to support your projects.",
    link: "/resources/downloads",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Frequently asked questions about our services and how we can help you.",
    link: "/resources/faq",
  },
  {
    icon: Code,
    title: "Developer Resources",
    description: "Resources for developers including APIs, SDKs, and integration guides.",
    link: "/resources/developer-resources",
  },
  {
    icon: GraduationCap,
    title: "Training Materials",
    description: "Training materials and resources for SAP modules and IT services.",
    link: "/resources/training-materials",
  },
  {
    icon: Users,
    title: "Training Classes",
    description: "Join our comprehensive SAP training classes led by industry experts. Online, in-person, or hybrid formats.",
    link: "/resources/training-classes",
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
      <PageBackground>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {resources.map((resource, index) => (
                <Link key={resource.title} to={resource.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <resource.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      </PageBackground>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-hero relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Need More Help?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 max-w-xl mx-auto px-4">
              Can't find what you're looking for? Contact our team for personalized assistance.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
