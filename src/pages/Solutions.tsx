import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, ShoppingCart, Building2, Heart, Plane, Truck, Leaf, Banknote, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production, quality, and supply chain operations with intelligent manufacturing solutions.",
    stats: "85% faster time-to-market",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Deliver seamless omnichannel experiences and optimize inventory across all touchpoints.",
    stats: "40% increase in customer retention",
  },
  {
    icon: Building2,
    title: "Professional Services",
    description: "Streamline project delivery, resource management, and client engagement.",
    stats: "30% improved project margins",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Transform patient care with connected health solutions and data-driven insights.",
    stats: "50% reduction in administrative costs",
  },
  {
    icon: Plane,
    title: "Travel & Transportation",
    description: "Enhance traveler experiences and optimize operations across your network.",
    stats: "25% operational efficiency gains",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Build resilient supply chains with end-to-end visibility and intelligent planning.",
    stats: "35% improved delivery performance",
  },
  {
    icon: Leaf,
    title: "Utilities & Energy",
    description: "Drive sustainability and efficiency in energy production and distribution.",
    stats: "20% reduction in carbon footprint",
  },
  {
    icon: Banknote,
    title: "Banking & Finance",
    description: "Modernize financial operations with real-time insights and regulatory compliance.",
    stats: "60% faster financial close",
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "Transform student experiences and institutional operations with modern solutions.",
    stats: "45% improved student outcomes",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industry Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Purpose-built solutions designed for your industry's unique challenges and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

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
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {industry.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Processes */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              End-to-End Business Processes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your entire value chain with integrated solutions that connect every process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Lead to Cash", desc: "Streamline your entire sales cycle" },
              { title: "Source to Pay", desc: "Optimize procurement and payments" },
              { title: "Design to Operate", desc: "Accelerate product lifecycle" },
              { title: "Recruit to Retire", desc: "Transform the employee journey" },
            ].map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </motion.div>
            ))}
          </div>
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

export default Solutions;
