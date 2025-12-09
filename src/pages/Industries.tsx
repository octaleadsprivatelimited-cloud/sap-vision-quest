import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, ShoppingCart, Building2, Heart, Plane, Truck, Leaf, Banknote, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "SAP solutions for manufacturing to optimize production, quality, and supply chain operations.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & FMCG",
    description: "SAP solutions for retail and FMCG to deliver seamless experiences and optimize inventory.",
  },
  {
    icon: Heart,
    title: "Pharma",
    description: "SAP solutions for pharmaceutical companies to ensure compliance and streamline operations.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "SAP solutions for logistics to build resilient supply chains with end-to-end visibility.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "SAP solutions for educational institutions to transform operations and student experiences.",
  },
  {
    icon: Banknote,
    title: "Finance",
    description: "SAP solutions for finance to modernize operations with real-time insights and compliance.",
  },
  {
    icon: Building2,
    title: "Small & Mid Businesses",
    description: "Tailored SAP solutions for small and mid-sized businesses to drive growth and efficiency.",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Industries We Serve"
        description="SAP solutions tailored for your industry's unique challenges and opportunities."
      />

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-sap-light-purple flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {industry.description}
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
              Ready to transform your industry?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Connect with our industry experts to discover tailored solutions for your business.
            </p>
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;

