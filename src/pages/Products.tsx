import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "sap-implementation",
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    subtitle: "Complete Implementation",
    description: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup. Business process mapping, module configuration, UAT & go-live support, and post-go-live AMC.",
    features: ["Implementation Strategy & Planning", "Business Process & Blueprinting", "Fit–Gap Analysis", "Functional Implementation", "Technical & System Configuration", "SAP BTP Integration", "Data Migration & Management", "Custom Development & Enhancements", "Analytics & Reporting", "Testing & Quality Assurance", "Security & Authorizations", "Training & Change Management", "Go-Live & Hypercare", "Post Go-Live Support (AMC)", "SAP Analytics Cloud Integration"],
    color: "bg-accent",
    image: "/sap-s4hana-implementation.webp",
  },
  {
    id: "sap-migration",
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    subtitle: "Seamless Migration",
    description: "Seamless migration from ECC to S/4HANA with readiness check, database migration, custom code adaptation, master data cleansing, and end-user training.",
    features: ["Readiness Check", "Database Migration", "Custom Code Adaptation", "Master Data Cleansing", "End-user Training"],
    color: "bg-sprinklr-green",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    id: "sap-training",
    icon: Users,
    title: "SAP Corporate Training",
    subtitle: "Comprehensive Training",
    description: "Functional and technical SAP training for all major modules. Online, offline, and corporate batches with hands-on project experience and certification assistance.",
    features: ["Functional + Technical", "Online / Offline / Corporate", "Hands-on Experience", "Certification Assistance"],
    color: "bg-sprinklr-purple",
    image: "/sap-corporate-training.avif",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Our SAP Services"
        description="Complete SAP solutions for implementation, migration, training, support, and custom development."
        label="SAP SERVICES"
        breadcrumbs={[{ label: "Products" }]}
      />

      {/* Products Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-accent font-semibold mb-3 text-sm uppercase tracking-wide">{product.subtitle}</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className={`w-5 h-5 rounded-full ${product.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/solutions">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our SAP experts to discuss your requirements and get a personalized solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-base font-semibold group">
                Contact SAP Experts
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

export default Products;
