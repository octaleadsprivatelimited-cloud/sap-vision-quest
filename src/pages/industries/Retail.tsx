import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Package, BarChart3, Users, Store, CreditCard, Truck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import industryRetailImg from "@/assets/industry-retail.jpg";

const sapSolutions = [
  { icon: Store, title: "SAP Retail (IS-Retail)", desc: "End-to-end retail management including merchandise planning, pricing, and store operations." },
  { icon: Package, title: "Inventory Management", desc: "Real-time inventory visibility across all channels with automated replenishment." },
  { icon: Users, title: "Customer Experience", desc: "Unified customer profiles and personalized experiences across touchpoints." },
  { icon: CreditCard, title: "Point of Sale (POS)", desc: "Integrated POS solutions with seamless backend connectivity." },
  { icon: BarChart3, title: "Demand Forecasting", desc: "AI-powered demand planning to optimize stock levels and reduce waste." },
  { icon: Truck, title: "Supply Chain Visibility", desc: "End-to-end supply chain transparency from supplier to shelf." },
  { icon: TrendingUp, title: "Retail Analytics", desc: "Real-time insights into sales, customer behavior, and market trends." },
  { icon: ShoppingCart, title: "Omnichannel Commerce", desc: "Seamless shopping experience across online, mobile, and in-store channels." },
];

const benefits = [
  "Increase sales with personalized experiences",
  "Reduce stockouts by up to 50%",
  "Optimize inventory turnover rates",
  "Unified view of customer journey",
  "Real-time pricing and promotions",
  "Seamless omnichannel operations",
];

const Retail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP for Retail & FMCG"
        description="Deliver exceptional customer experiences and optimize operations with SAP solutions designed for retail and consumer goods."
        label="INDUSTRY SOLUTIONS"
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Retail & FMCG" }
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
                <ShoppingCart className="w-10 h-10 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Retail & FMCG Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Retail Excellence with <span className="text-accent">SAP Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The retail landscape is evolving rapidly with changing consumer expectations and digital disruption. SAP provides comprehensive solutions that help retailers deliver seamless omnichannel experiences while optimizing operations.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From inventory management to customer engagement, our SAP retail solutions enable you to stay ahead of market trends and build lasting customer relationships.
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
              <img 
                src={industryRetailImg} 
                alt="SAP Retail Solutions" 
                className="rounded-2xl shadow-xl w-full mb-6"
              />
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
              SAP Modules for <span className="text-accent">Retail & FMCG</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SAP solutions designed specifically for retail and consumer goods
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
              Ready to Transform Your Retail Operations?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let our SAP experts help you build a customer-centric retail experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
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

export default Retail;
