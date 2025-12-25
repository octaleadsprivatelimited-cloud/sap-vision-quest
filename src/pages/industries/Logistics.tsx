import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, MapPin, BarChart3, Clock, Warehouse, Ship, Route } from "lucide-react";
import { Link } from "react-router-dom";

const sapSolutions = [
  { icon: Warehouse, title: "Warehouse Management", desc: "Optimize warehouse operations with real-time inventory visibility and automated processes." },
  { icon: Route, title: "Transportation Management", desc: "Plan, execute, and optimize freight movements across all modes of transport." },
  { icon: MapPin, title: "Track & Trace", desc: "Real-time visibility into shipment location and status throughout the supply chain." },
  { icon: Package, title: "Extended Warehouse", desc: "SAP EWM for complex warehouse scenarios with advanced picking and packing strategies." },
  { icon: Ship, title: "Global Trade Management", desc: "Streamline customs, compliance, and international trade documentation." },
  { icon: Clock, title: "Yard Management", desc: "Optimize yard operations, dock scheduling, and trailer movements." },
  { icon: BarChart3, title: "Supply Chain Analytics", desc: "AI-powered insights for demand sensing, inventory optimization, and risk management." },
  { icon: Truck, title: "Fleet Management", desc: "Manage vehicles, drivers, and routes for optimal fleet utilization." },
];

const benefits = [
  "Reduce logistics costs by up to 20%",
  "Improve on-time delivery rates to 98%+",
  "Real-time supply chain visibility",
  "Optimize warehouse space utilization",
  "Reduce transportation lead times",
  "Enhanced customer satisfaction",
];

const Logistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP for Logistics & Supply Chain"
        description="Build resilient, agile supply chains with SAP solutions that provide end-to-end visibility and operational excellence."
        label="INDUSTRY SOLUTIONS"
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Logistics & Supply Chain" }
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
                <Truck className="w-10 h-10 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Logistics & Supply Chain</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Supply Chain Excellence with <span className="text-accent">SAP Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                In today's globalized economy, supply chain agility and visibility are critical competitive advantages. SAP provides comprehensive logistics solutions that connect every link in your supply chain—from suppliers to customers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our SAP logistics solutions enable you to optimize transportation, streamline warehouse operations, and gain real-time visibility across your entire supply network.
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
              SAP Modules for <span className="text-accent">Logistics</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SAP solutions designed specifically for logistics and supply chain operations
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
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let our SAP experts help you build a resilient, efficient supply chain.
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

export default Logistics;
