import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CheckCircle, Palette, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Responsive Design",
  "Mobile-First Approach",
  "Role-Based Apps",
  "Custom Fiori Apps Development",
  "Fiori Launchpad Configuration",
  "UI5 Application Development",
  "Fiori Elements",
  "Analytical & Transactional Apps",
  "Integration with SAP Backend",
  "User Experience Design",
  "Fiori Theme Customization",
  "App Deployment & Management",
  "Performance Optimization",
  "Security & Authorization",
  "User Training & Adoption",
];

const SapFiori = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP Fiori"
        description="Modern, intuitive user experience platform for SAP applications with responsive design and mobile-first approach."
        label="SAP PRODUCTS"
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "SAP Fiori" }]}
        backgroundImage="/hero-sap-background.jpg"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                SAP Fiori User Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SAP Fiori is SAP's user experience (UX) design system that provides a consistent, intuitive, and responsive user interface across all SAP applications. It transforms the way users interact with SAP systems through modern, role-based applications.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our SAP Fiori services include custom app development, launchpad configuration, UI5 development, and user experience optimization to enhance productivity and user satisfaction.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card rounded-xl p-6 border border-border">
                <Smartphone className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Mobile Apps</h3>
                <p className="text-sm text-muted-foreground">Native mobile applications</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Palette className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">UI Design</h3>
                <p className="text-sm text-muted-foreground">Modern, intuitive interfaces</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Globe className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Web Apps</h3>
                <p className="text-sm text-muted-foreground">Responsive web applications</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Zap className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimized for speed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SAP Fiori solutions to enhance user experience and productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border"
              >
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our SAP Fiori experts to discuss your requirements and get a customized solution.
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

export default SapFiori;

