import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, ShieldCheck, FlaskConical, FileCheck, Package, BarChart3, Truck, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const sapSolutions = [
  { icon: ShieldCheck, title: "GxP Compliance", desc: "Ensure FDA, EMA, and global regulatory compliance with validated SAP processes." },
  { icon: FlaskConical, title: "R&D Management", desc: "Accelerate drug development with integrated research and development workflows." },
  { icon: FileCheck, title: "Batch Management", desc: "Complete batch traceability from raw materials to finished products." },
  { icon: Package, title: "Serialization & Track", desc: "End-to-end serialization for drug traceability and anti-counterfeiting." },
  { icon: ClipboardList, title: "Quality Management", desc: "Comprehensive quality control and assurance throughout the product lifecycle." },
  { icon: Truck, title: "Cold Chain Management", desc: "Temperature-controlled logistics for sensitive pharmaceutical products." },
  { icon: BarChart3, title: "Pharmacovigilance", desc: "Adverse event reporting and safety monitoring with SAP." },
  { icon: Heart, title: "Clinical Trial Management", desc: "Manage clinical trials, patient data, and regulatory submissions efficiently." },
];

const benefits = [
  "Ensure 100% regulatory compliance",
  "Accelerate time-to-market for new drugs",
  "Complete product traceability",
  "Reduce quality incidents by 40%",
  "Streamline clinical trial processes",
  "Enhanced supply chain visibility",
];

const Pharma = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP for Pharmaceutical"
        description="Ensure compliance, accelerate innovation, and optimize operations with SAP solutions built for the pharmaceutical industry."
        label="INDUSTRY SOLUTIONS"
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Pharma" }
        ]}
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-10 h-10 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pharmaceutical Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pharma Excellence with <span className="text-accent">SAP Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The pharmaceutical industry faces unique challenges—stringent regulations, complex supply chains, and the need for rapid innovation. SAP provides validated, compliant solutions that address these challenges while driving operational efficiency.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our SAP pharma solutions help you maintain GxP compliance, manage clinical trials, ensure product quality, and achieve end-to-end traceability across your operations.
              </p>
              <div className="space-y-3">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-background/80 rounded-lg p-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAP Solutions Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SAP Modules for <span className="text-accent">Pharmaceutical</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Validated SAP solutions designed specifically for pharmaceutical compliance and operations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sapSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
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
              Ready to Transform Your Pharma Operations?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let our SAP experts help you achieve compliance and operational excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Industries
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pharma;
