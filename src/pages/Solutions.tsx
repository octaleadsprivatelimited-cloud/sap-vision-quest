import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Settings, Code, GraduationCap, Wrench, Link2, Users, Star, Headphones, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const sapOfferings = [
  {
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    description: "Complete implementation services for SAP S/4HANA with cloud, on-premises, or hybrid deployment options.",
    features: ["Cloud / On-prem / Hybrid setup", "Business process mapping", "Module configuration", "UAT & go-live support"],
    color: "bg-accent",
    image: "/sap-s4hana-implementation.webp",
  },
  {
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA with minimal downtime and comprehensive data integrity.",
    features: ["Readiness check & assessment", "Database migration", "Custom code adaptation", "End-user training"],
    color: "bg-sprinklr-green",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    icon: Settings,
    title: "SAP Licensing & Software",
    description: "Comprehensive SAP licensing solutions optimized for your business needs and budget.",
    features: ["SAP S/4HANA subscription", "Module-based licensing", "Cost optimisation guidance"],
    color: "bg-sprinklr-purple",
  },
  {
    icon: Settings,
    title: "SAP Module Implementations",
    description: "Expert implementation of all major SAP functional and technical modules.",
    features: ["Functional: PP, MM, SD, FI, CO, QM, PM", "Technical: ABAP, BASIS, HANA, Fiori"],
    color: "bg-accent",
  },
  {
    icon: Code,
    title: "SAP Custom Development",
    description: "Tailored SAP development and enhancements to meet your unique business requirements.",
    features: ["ABAP reports & enhancements", "SmartForms / Adobe Forms", "Fiori UI apps"],
    color: "bg-sprinklr-green",
  },
  {
    icon: GraduationCap,
    title: "SAP Corporate Training",
    description: "Comprehensive SAP training programs for teams of all skill levels.",
    features: ["Functional + Technical training", "Online / Offline / Corporate batches", "Certification assistance"],
    color: "bg-sprinklr-purple",
    image: "/sap-corporate-training.avif",
  },
  {
    icon: Wrench,
    title: "SAP Support & Maintenance",
    description: "24/7 ongoing SAP support and maintenance for uninterrupted business operations.",
    features: ["Functional & technical support", "Performance tuning", "Monthly health checks"],
    color: "bg-accent",
  },
  {
    icon: Link2,
    title: "SAP Integration Services",
    description: "Seamless SAP integration with your existing enterprise systems and applications.",
    features: ["SAP ↔ ERP integration", "API / Middleware integrations", "Third-party app connections"],
    color: "bg-sprinklr-green",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Our SAP Offerings"
        description="Complete SAP solutions for your business transformation"
        label="SAP SOLUTIONS"
        breadcrumbs={[{ label: "Solutions" }]}
      />

      {/* Stats Banner */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "SAP Projects" },
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "SAP Consultants" },
              { value: "98%", label: "Client Satisfaction" },
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
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
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

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                  <div className={`h-full bg-card rounded-lg border border-border/50 ${borderColor} border-l-4 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300`}>
                    {/* Large Icon */}
                    <div className="mb-5">
                      <offering.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                      {offering.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted <span className="text-accent">SAP Partner</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of SAP expertise, we deliver end-to-end solutions that transform businesses and drive growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "Expert Consultants", desc: "200+ certified SAP professionals" },
                  { icon: Star, title: "Proven Track Record", desc: "500+ successful implementations" },
                  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance" },
                  { icon: CheckCircle2, title: "Quality Assured", desc: "98% client satisfaction rate" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/why-choose-sangronyx-for-sap.avif" 
                  alt="Why Choose Sangronyx"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-xl border border-border">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </motion.div>
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
              Get a Free SAP Consultation
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Our SAP experts will help you choose the right solution for your business.
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

export default Solutions;
