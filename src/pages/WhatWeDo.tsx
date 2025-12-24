import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Settings, 
  TrendingUp, 
  Code, 
  GraduationCap, 
  Headphones, 
  RefreshCw,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "SAP Implementation",
    description: "End-to-end SAP implementation services tailored to your business needs, ensuring smooth deployment and adoption.",
    color: "bg-blue-500",
    link: "/services/sap-s4hana-implementation",
  },
  {
    icon: RefreshCw,
    title: "SAP Migration",
    description: "Seamless migration from legacy systems to SAP S/4HANA with minimal business disruption.",
    color: "bg-orange-500",
    link: "/services/sap-ecc-migration",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke SAP solutions designed to address your unique business challenges and requirements.",
    color: "bg-green-500",
    link: "/services/sap-custom-development",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Comprehensive training programs to empower your team with SAP expertise.",
    color: "bg-purple-500",
    link: "/services/sap-corporate-training",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "24/7 support services to ensure your SAP systems run smoothly and efficiently.",
    color: "bg-red-500",
    link: "/services/sap-support-maintenance",
  },
  {
    icon: TrendingUp,
    title: "Consulting Services",
    description: "Strategic consulting to help you maximize the value of your SAP investments.",
    color: "bg-teal-500",
    link: "/contact",
  },
];

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="What We Do"
        description="Comprehensive SAP solutions and services designed to drive digital transformation and business growth."
        label="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What We Do", href: "/what-we-do" },
        ]}
        ctaText="Get Started"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <service.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {service.title}
                </h3>
                <div className={`w-12 h-1 ${service.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {service.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;