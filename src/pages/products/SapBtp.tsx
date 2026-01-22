import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, CheckCircle, Code, Database, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Application Development",
  "Integration Services",
  "Data & Analytics",
  "AI & Machine Learning",
  "Security & Identity Management",
  "API Management",
  "Mobile Services",
  "Workflow Management",
  "Extension Development",
  "Cloud Integration",
  "Event-Driven Architecture",
  "Multi-Cloud Deployment",
  "DevOps & CI/CD",
  "Monitoring & Observability",
  "Compliance & Governance",
];

const SapBtp = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP BTP"
        description="SAP Business Technology Platform - A unified platform for application development, integration, and analytics in the cloud."
        label="SAP PRODUCTS"
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "SAP BTP" }]}
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
                SAP Business Technology Platform
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SAP BTP is a unified platform that combines application development, data and analytics, integration, and AI capabilities in one cloud environment. It enables businesses to build, extend, and integrate SAP and non-SAP applications seamlessly.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our SAP BTP services include platform setup, application development, integration services, and cloud-native solutions to help you leverage the full potential of SAP's technology platform.
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
                <Cloud className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Cloud Platform</h3>
                <p className="text-sm text-muted-foreground">Scalable cloud infrastructure</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Code className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">Build custom applications</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Database className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">Data & analytics services</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Lock className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">Enterprise security</p>
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
              Key Features & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SAP BTP capabilities to build, extend, and integrate applications
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
              Ready to Leverage SAP BTP?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our SAP BTP experts to discuss your requirements and get a customized solution.
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

export default SapBtp;

