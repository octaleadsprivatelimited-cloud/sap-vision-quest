import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Settings, 
  TrendingUp, 
  Code, 
  GraduationCap, 
  Headphones, 
  RefreshCw,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "SAP Implementation",
    description: "End-to-end SAP implementation services tailored to your business needs, ensuring smooth deployment and adoption.",
    features: ["Project Planning", "System Configuration", "Data Migration", "Go-Live Support"],
  },
  {
    icon: RefreshCw,
    title: "SAP Migration",
    description: "Seamless migration from legacy systems to SAP S/4HANA with minimal business disruption.",
    features: ["Assessment & Planning", "Data Transformation", "Testing & Validation", "Cutover Management"],
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke SAP solutions designed to address your unique business challenges and requirements.",
    features: ["ABAP Development", "Fiori Apps", "Integration Solutions", "Enhancement Packages"],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Comprehensive training programs to empower your team with SAP expertise.",
    features: ["User Training", "Admin Training", "Certification Prep", "Custom Workshops"],
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "24/7 support services to ensure your SAP systems run smoothly and efficiently.",
    features: ["Incident Management", "Performance Tuning", "Security Updates", "Health Checks"],
  },
  {
    icon: TrendingUp,
    title: "Consulting Services",
    description: "Strategic consulting to help you maximize the value of your SAP investments.",
    features: ["Business Analysis", "Process Optimization", "Roadmap Planning", "ROI Assessment"],
  },
];

const industries = [
  "Manufacturing",
  "Retail & Consumer Goods",
  "Healthcare",
  "Financial Services",
  "Energy & Utilities",
  "Public Sector",
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

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#0096d6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive SAP Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From implementation to optimization, we provide end-to-end SAP services that help businesses thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-[#0096d6]/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0096d6]/10 to-[#00b3e6]/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-[#0096d6]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-[#0096d6]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#0096d6] text-sm font-semibold uppercase tracking-wider mb-4 block">
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our expertise spans across diverse industries, delivering tailored SAP solutions 
                that address sector-specific challenges and opportunities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {industries.map((industry) => (
                  <div 
                    key={industry} 
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-[#0096d6] rounded-full" />
                    <span className="text-gray-700 text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>

              <Link to="/industries">
                <Button className="bg-[#0096d6] hover:bg-[#0077b3] text-white">
                  Explore Industries
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/why-choose-sangronyx-for-sap.avif" 
                  alt="Industries We Serve" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2d4a]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Let's discuss how our SAP expertise can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#0096d6] hover:bg-[#00b3e6] text-white">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/solutions">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Our Solutions
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

export default WhatWeDo;
