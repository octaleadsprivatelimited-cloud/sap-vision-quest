import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, CheckCircle, Settings, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Enterprise Resource Planning (ERP)",
  "Financial Accounting (FI)",
  "Controlling (CO)",
  "Materials Management (MM)",
  "Sales & Distribution (SD)",
  "Production Planning (PP)",
  "Human Capital Management (HCM)",
  "Quality Management (QM)",
  "Plant Maintenance (PM)",
  "Warehouse Management (WM)",
  "Project System (PS)",
  "Custom Development & Enhancements",
  "Integration Services",
  "System Administration & Support",
  "User Training & Documentation",
];

const SapEcc = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP ECC"
        description="Comprehensive SAP ERP Central Component solutions for enterprise resource planning and business process management."
        label="SAP PRODUCTS"
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "SAP ECC" }]}
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
                SAP ERP Central Component
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SAP ECC (ERP Central Component) is a comprehensive enterprise resource planning solution that integrates all core business functions into a single, unified system. It provides real-time visibility and control over your entire business operations.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our SAP ECC services include implementation, customization, integration, and ongoing support to help you maximize the value of your ERP investment.
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
                <Database className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">ERP Solutions</h3>
                <p className="text-sm text-muted-foreground">Complete enterprise resource planning</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Settings className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Customization</h3>
                <p className="text-sm text-muted-foreground">Tailored to your business needs</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Shield className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Users className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">24/7 expert support</p>
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
              Key Features & Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SAP ECC modules and capabilities to streamline your business operations
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
              Ready to Implement SAP ECC?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our SAP ECC experts to discuss your requirements and get a customized solution.
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

export default SapEcc;

