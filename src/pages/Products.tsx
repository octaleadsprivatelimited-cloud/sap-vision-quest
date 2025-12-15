import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PageBackground, SectionBackground } from "@/components/ui/page-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Brain, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "sap-implementation",
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    subtitle: "Complete Implementation",
    description: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup. Business process mapping, module configuration, UAT & go-live support, and post-go-live AMC.",
    features: ["Cloud / On-prem / Hybrid", "Business Process Mapping", "Module Configuration", "UAT & Go-live Support", "Real-time Reporting", "Post-go-live AMC"],
    gradient: "from-primary to-accent",
    image: "/sap-s4hana-implementation.webp",
  },
  {
    id: "sap-migration",
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    subtitle: "Seamless Migration",
    description: "Seamless migration from ECC to S/4HANA with readiness check, database migration, custom code adaptation, master data cleansing, and end-user training.",
    features: ["Readiness Check", "Database Migration", "Custom Code Adaptation", "Master Data Cleansing", "End-user Training"],
    gradient: "from-accent to-primary",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    id: "sap-training",
    icon: Users,
    title: "SAP Corporate Training",
    subtitle: "Comprehensive Training",
    description: "Functional and technical SAP training for all major modules. Online, offline, and corporate batches with hands-on project experience and certification assistance.",
    features: ["Functional + Technical", "Online / Offline / Corporate", "Hands-on Experience", "Certification Assistance"],
    gradient: "from-primary to-accent",
    image: "/sap-corporate-training.avif",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <PageHero 
        title="Our SAP Services"
        description="Complete SAP solutions for implementation, migration, training, support, and custom development."
      />

      {/* Products Grid */}
      <PageBackground>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12 md:space-y-16"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 md:mb-6`}>
                      <product.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                    </div>
                    <p className="text-primary font-semibold mb-2 text-sm md:text-base">{product.subtitle}</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                      {product.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                      {product.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm md:text-base text-foreground">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/solutions">
                      <Button variant="default" className="group w-full sm:w-auto">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} order-first lg:order-none`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
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
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 md:mb-6">
              <Brain className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 max-w-xl mx-auto px-4">
              Contact our SAP experts to discuss your requirements and get a personalized solution.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Contact SAP Experts
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

export default Products;
