import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, ShoppingCart, Building2, Heart, Truck, Leaf, Banknote, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "SAP solutions for manufacturing to optimize production, quality, and supply chain operations.",
    color: "bg-accent",
  },
  {
    icon: ShoppingCart,
    title: "Retail & FMCG",
    description: "SAP solutions for retail and FMCG to deliver seamless experiences and optimize inventory.",
    color: "bg-sprinklr-green",
  },
  {
    icon: Heart,
    title: "Pharma",
    description: "SAP solutions for pharmaceutical companies to ensure compliance and streamline operations.",
    color: "bg-sprinklr-purple",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "SAP solutions for logistics to build resilient supply chains with end-to-end visibility.",
    color: "bg-accent",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "SAP solutions for educational institutions to transform operations and student experiences.",
    color: "bg-sprinklr-green",
  },
  {
    icon: Banknote,
    title: "Finance",
    description: "SAP solutions for finance to modernize operations with real-time insights and compliance.",
    color: "bg-sprinklr-purple",
  },
  {
    icon: Building2,
    title: "Small & Mid Businesses",
    description: "Tailored SAP solutions for small and mid-sized businesses to drive growth and efficiency.",
    color: "bg-accent",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Industries We Serve"
        description="SAP solutions tailored for your industry's unique challenges and opportunities."
      />

      {/* Industries Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Link to="/solutions">
                  <div className="group h-full bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
              Ready to transform your industry?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our SAP solutions can drive innovation and efficiency in your industry.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-base font-semibold group">
                Get Started
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

export default Industries;
