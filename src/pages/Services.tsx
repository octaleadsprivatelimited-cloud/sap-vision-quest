import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Settings, Code, Wrench, Link2, Users, Star, Headphones, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const sapOfferings = [
  {
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    description: "Complete implementation services for SAP S/4HANA with cloud, on-premises, or hybrid deployment options.",
    features: ["Cloud / On-prem / Hybrid setup", "Business process mapping", "Module configuration", "UAT & go-live support"],
    color: "bg-accent",
    image: "/sap-s4hana-implementation.webp",
    href: "/services/sap-s4hana-implementation",
  },
  {
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA with minimal downtime and comprehensive data integrity.",
    features: ["Readiness check & assessment", "Database migration", "Custom code adaptation", "End-user training"],
    color: "bg-sprinklr-green",
    image: "/SAP ECC TO S4 HANA MIGRANATION.png",
    href: "/services/sap-ecc-migration",
  },
  {
    icon: Settings,
    title: "SAP Licensing & Software",
    description: "Comprehensive SAP licensing solutions optimized for your business needs and budget.",
    features: ["SAP S/4HANA subscription", "Module-based licensing", "Cost optimisation guidance"],
    color: "bg-sprinklr-purple",
    image: "/SAP LISENCING & SOFTWARE.jpg",
    href: "/services/sap-licensing",
  },
  {
    icon: Settings,
    title: "SAP Module Implementations",
    description: "Expert implementation of all major SAP functional and technical modules.",
    features: ["Functional: PP, MM, SD, FI, CO, QM, PM", "Technical: ABAP, BASIS, HANA, Fiori"],
    color: "bg-accent",
    image: "/SAP MODULE IMPLEMENTATION.png",
    href: "/services/sap-module-implementations",
  },
  {
    icon: Code,
    title: "SAP Custom Development",
    description: "Tailored SAP development and enhancements to meet your unique business requirements.",
    features: ["ABAP reports & enhancements", "SmartForms / Adobe Forms", "Fiori UI apps"],
    color: "bg-sprinklr-green",
    image: "/SAP CUSTOM DEVELOPMENT.jpg",
    href: "/services/sap-custom-development",
  },
  {
    icon: Wrench,
    title: "SAP Support & Maintenance",
    description: "24/7 ongoing SAP support and maintenance for uninterrupted business operations.",
    features: ["Functional & technical support", "Performance tuning", "Monthly health checks"],
    color: "bg-accent",
    image: "/services hero background.jpg",
    href: "/services/sap-support-maintenance",
  },
  {
    icon: Link2,
    title: "SAP Integration Services",
    description: "Seamless SAP integration with your existing enterprise systems and applications.",
    features: ["SAP ↔ ERP integration", "API / Middleware integrations", "Third-party app connections"],
    color: "bg-sprinklr-green",
    image: "/SAP INTEGRATION SERVICES.png",
    href: "/services/sap-integration-services",
  },
];

const Services = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP Solutions Designed for Real Business Outcomes"
        description="We deliver industry-aligned and process-driven SAP solutions that help enterprises improve efficiency, visibility, and control."
        label="SAP SERVICES"
        breadcrumbs={[{ label: "Services" }]}
        ctaText=""
        backgroundImage="/services-background.webp"
      />

      {/* Stats Banner */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "45+", label: "SAP Projects" },
              { value: "10+", label: "Years of experience" },
              { value: "30+", label: "SAP Consultants" },
              { value: "98%", label: "Client satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Offerings Grid - Sprinklr Style */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0096d6]/5 via-white to-[#0077b3]/5 z-0" />
        
        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute -top-20 -right-20 md:top-10 md:right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#0096d6]/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -bottom-20 -left-20 md:bottom-10 md:left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#0077b3]/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#0096d6]/5 rounded-full blur-3xl"
          />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0096d6 1px, transparent 1px),
              linear-gradient(to bottom, #0096d6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive <span className="text-accent">SAP Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From implementation to support, we provide complete SAP services to drive your digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sapOfferings.map((offering, index) => {
              // Match Sprinklr pattern: yellow for bottom-left cards in each 2x2 block (indices 2, 6, 10...)
              const isYellowBorder = index % 4 === 2;
              const borderColor = isYellowBorder ? "border-l-[#FFD700]" : "border-l-[#00CED1]";
              
              return (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group"
                >
                  <Link to={offering.href}>
                    <div className={`h-full bg-card rounded-lg border border-border/50 ${borderColor} border-l-4 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300 cursor-pointer overflow-hidden`}>
                      {/* Image */}
                      {offering.image && (
                        <div className="mb-5 -mx-6 -mt-6 md:-mx-8 md:-mt-8 rounded-t-lg overflow-hidden">
                          <img 
                            src={offering.image} 
                            alt={offering.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      {/* Large Icon */}
                      <div className="mb-5">
                        <offering.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {offering.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {offering.description}
                      </p>
                      
                      {/* Learn More */}
                      <div className="mt-4 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 z-0" />
        
        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#0096d6]/5 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#0077b3]/5 rounded-full blur-3xl"
          />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0096d6 1px, transparent 1px),
              linear-gradient(to bottom, #0096d6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold text-[#0096d6] uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted <span className="text-[#0096d6]">SAP Partner</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 10 years of SAP expertise, we deliver end-to-end solutions that transform businesses and drive growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "Expert Consultants", desc: "30+ certified SAP professionals" },
                  { icon: Star, title: "Proven Track Record", desc: "45+ successful implementations" },
                  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance" },
                  { icon: CheckCircle2, title: "Quality Assured", desc: "98% client satisfaction rate" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-xl p-5 border border-gray-100 hover:border-[#0096d6]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0096d6] to-[#0077b3] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="/why-choose-sangronyx-for-sap.avif" 
                  alt="Why Choose Sangronyx"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#0096d6] to-[#0077b3] rounded-2xl p-6 shadow-2xl border-4 border-white"
              >
                <div className="text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-white/90 font-medium">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
