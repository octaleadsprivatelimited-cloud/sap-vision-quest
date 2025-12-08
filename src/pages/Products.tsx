import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Brain, Shield, Zap, BarChart3, Users, Layers, CheckCircle } from "lucide-react";

const products = [
  {
    id: "erp",
    icon: Cloud,
    title: "SAP S/4HANA Cloud",
    subtitle: "Cloud ERP",
    description: "The intelligent ERP suite designed for in-memory computing. Transform your business with real-time analytics and AI-driven insights.",
    features: ["Real-time Analytics", "AI-Powered Automation", "Industry Best Practices", "Seamless Integration"],
    gradient: "from-primary to-sap-blue",
  },
  {
    id: "btp",
    icon: Layers,
    title: "SAP Business Technology Platform",
    subtitle: "Integration & Extension",
    description: "Unify your data, analytics, AI, and application development on one platform. Build, extend, and integrate like never before.",
    features: ["Low-Code Development", "Data Management", "AI & Machine Learning", "Integration Suite"],
    gradient: "from-sap-blue to-accent",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "SAP Analytics Cloud",
    subtitle: "Business Intelligence",
    description: "One solution for all your analytics needs. Planning, predictive, and business intelligence in the cloud.",
    features: ["Predictive Analytics", "Smart Discovery", "Augmented Analytics", "Collaborative Planning"],
    gradient: "from-accent to-primary",
  },
  {
    id: "hcm",
    icon: Users,
    title: "SAP SuccessFactors",
    subtitle: "Human Capital Management",
    description: "Complete cloud HR solutions to transform employee experiences and drive workforce success.",
    features: ["Core HR & Payroll", "Talent Management", "Employee Experience", "Workforce Analytics"],
    gradient: "from-primary to-accent",
  },
  {
    id: "cx",
    icon: Zap,
    title: "SAP Customer Experience",
    subtitle: "CRM & Commerce",
    description: "Deliver personalized customer experiences across marketing, commerce, sales, and service.",
    features: ["Commerce Cloud", "Marketing Cloud", "Sales Cloud", "Service Cloud"],
    gradient: "from-sap-blue to-primary",
  },
  {
    id: "security",
    icon: Shield,
    title: "SAP Security Solutions",
    subtitle: "Enterprise Security",
    description: "Protect your business with comprehensive security, identity management, and compliance solutions.",
    features: ["Identity Access", "Data Protection", "Threat Detection", "Compliance Management"],
    gradient: "from-accent to-sap-blue",
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
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Products That Power Your Business
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Discover our comprehensive suite of enterprise solutions designed to transform every aspect of your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg">
                View All Products
              </Button>
              <Button variant="hero-outline" size="lg">
                Compare Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center`}>
                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 w-full h-full flex items-center justify-center">
                      <product.icon className="w-24 h-24 text-primary-foreground/80" />
                    </div>
                  </div>
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
              Not sure which product is right for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our experts can help you find the perfect solution for your business needs.
            </p>
            <Button variant="cta" size="lg" className="group">
              Talk to an Expert
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
