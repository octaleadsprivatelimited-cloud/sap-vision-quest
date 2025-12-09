import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Brain, Shield, Zap, BarChart3, Users, Layers, CheckCircle } from "lucide-react";

const products = [
  {
    id: "sap-implementation",
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    subtitle: "Complete Implementation",
    description: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup. Business process mapping, module configuration, UAT & go-live support, and post-go-live AMC.",
    features: ["Cloud / On-prem / Hybrid", "Business Process Mapping", "Module Configuration", "UAT & Go-live Support", "Real-time Reporting", "Post-go-live AMC"],
    gradient: "from-primary to-sap-blue",
    image: "/sap-s4hana-implementation.webp",
  },
  {
    id: "sap-migration",
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    subtitle: "Seamless Migration",
    description: "Seamless migration from ECC to S/4HANA with readiness check, database migration, custom code adaptation, master data cleansing, and end-user training.",
    features: ["Readiness Check", "Database Migration", "Custom Code Adaptation", "Master Data Cleansing", "End-user Training"],
    gradient: "from-sap-blue to-accent",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    id: "sap-training",
    icon: Users,
    title: "SAP Corporate Training",
    subtitle: "Comprehensive Training",
    description: "Functional and technical SAP training for all major modules. Online, offline, and corporate batches with hands-on project experience and certification assistance.",
    features: ["Functional + Technical", "Online / Offline / Corporate", "Hands-on Experience", "Certification Assistance"],
    gradient: "from-accent to-primary",
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}>
                    <product.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-primary font-semibold mb-2">{product.subtitle}</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {product.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {product.image ? (
                    <div className="aspect-video rounded-2xl overflow-hidden relative group">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      {/* Icon badge */}
                      <div className={`absolute bottom-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                        <product.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                  ) : (
                    <div className={`aspect-video rounded-2xl bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center`}>
                      <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 w-full h-full flex items-center justify-center">
                        <product.icon className="w-24 h-24 text-primary-foreground/80" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get a Free SAP Consultation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our SAP experts will help you choose the right software, modules and implementation approach for your business. Contact us at info@sangronyx.com or +91-XXXXXXXXXX.
            </p>
            <Button variant="cta" size="lg" className="group">
              Contact SAP Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
