import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Settings, BarChart3, Truck, ShieldCheck, Cog, Package, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const sapSolutions = [
  { icon: Settings, title: "Production Planning (PP)", desc: "Optimize production schedules, manage work orders, and streamline shop floor operations with real-time visibility." },
  { icon: Package, title: "Materials Management (MM)", desc: "Efficient procurement, inventory control, and warehouse management to reduce costs and improve supply chain." },
  { icon: ShieldCheck, title: "Quality Management (QM)", desc: "Ensure product quality with integrated quality planning, inspection, and control processes." },
  { icon: Cog, title: "Plant Maintenance (PM)", desc: "Minimize downtime with preventive and predictive maintenance strategies for equipment and assets." },
  { icon: BarChart3, title: "Manufacturing Analytics", desc: "Real-time insights into production KPIs, OEE, and operational efficiency with SAP Analytics Cloud." },
  { icon: Truck, title: "Supply Chain Management", desc: "End-to-end visibility and control over your supply chain from raw materials to finished goods." },
  { icon: Users, title: "Workforce Management", desc: "Optimize labor allocation, track productivity, and manage shifts efficiently." },
  { icon: Zap, title: "Industry 4.0 Integration", desc: "Connect IoT devices, enable smart manufacturing, and leverage digital twin technologies." },
];

const benefits = [
  "Reduce production lead times by up to 40%",
  "Improve inventory accuracy to 99%+",
  "Decrease unplanned downtime by 30%",
  "Enhance quality control and compliance",
  "Real-time visibility across operations",
  "Seamless integration with shop floor systems",
];

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP for Manufacturing"
        description="Transform your manufacturing operations with intelligent SAP solutions that optimize production, enhance quality, and drive operational excellence."
        label="INDUSTRY SOLUTIONS"
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Manufacturing" }
        ]}
        backgroundImage="/manufacturing hero section background.jpg"
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
                <Factory className="w-10 h-10 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Manufacturing Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Smart Manufacturing with <span className="text-accent">SAP Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                In today's competitive manufacturing landscape, operational efficiency and agility are critical. SAP provides comprehensive solutions that digitize your entire manufacturing value chain—from planning and production to quality and maintenance.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our SAP manufacturing solutions enable you to embrace Industry 4.0, integrate IoT devices, and leverage real-time analytics to make data-driven decisions that improve productivity and reduce costs.
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
              SAP Modules for <span className="text-accent">Manufacturing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SAP solutions designed specifically for manufacturing operations
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
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let our SAP experts help you build a smarter, more efficient manufacturing operation.
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

export default Manufacturing;
