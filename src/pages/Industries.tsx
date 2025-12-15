import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PageBackground } from "@/components/ui/page-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, ShoppingCart, Building2, Heart, Truck, Leaf, Banknote, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

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
      <PageBackground>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {industries.map((industry, index) => (
                <Link key={industry.title} to="/solutions">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <industry.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                      {industry.description}
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
              Ready to transform your industry?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 max-w-xl mx-auto px-4">
              Contact us to discuss how our SAP solutions can drive innovation and efficiency in your industry.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Get Started
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

export default Industries;
