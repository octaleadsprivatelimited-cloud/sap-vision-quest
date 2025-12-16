import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
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
    color: "bg-accent",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video tutorials to help you get started with our services.",
    link: "/resources/video-tutorials",
    color: "bg-sprinklr-green",
  },
  {
    icon: FileText,
    title: "Whitepapers",
    description: "In-depth whitepapers on IT best practices and SAP implementation strategies.",
    link: "/resources/whitepapers",
    color: "bg-sprinklr-purple",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Download resources, templates, and tools to support your projects.",
    link: "/resources/downloads",
    color: "bg-accent",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Frequently asked questions about our services and how we can help you.",
    link: "/resources/faq",
    color: "bg-sprinklr-green",
  },
  {
    icon: Code,
    title: "Developer Resources",
    description: "Resources for developers including APIs, SDKs, and integration guides.",
    link: "/resources/developer-resources",
    color: "bg-sprinklr-purple",
  },
  {
    icon: GraduationCap,
    title: "Training Materials",
    description: "Training materials and resources for SAP modules and IT services.",
    link: "/resources/training-materials",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Training Classes",
    description: "Join our comprehensive SAP training classes led by industry experts.",
    link: "/resources/training-classes",
    color: "bg-sprinklr-green",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Resources"
        description="Access helpful resources, documentation, and materials to support your business journey."
      />

      {/* Resources Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Link to={resource.link}>
                  <div className="group h-full bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our team for personalized assistance.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-base font-semibold group">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
