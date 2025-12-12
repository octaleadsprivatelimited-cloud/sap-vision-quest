import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Settings, Code, GraduationCap, Wrench, Link2, CheckCircle2, Sparkles, Star, Users, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const sapOfferings = [
  {
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    description: "Complete implementation services for SAP S/4HANA with cloud, on-premises, or hybrid deployment options.",
    features: [
      "Cloud / On-prem / Hybrid setup",
      "Business process mapping",
      "Module configuration",
      "UAT & go-live support",
      "Real-time reporting setup",
      "Post-go-live AMC",
    ],
    gradient: "from-primary to-sap-blue",
    image: "/sap-s4hana-implementation.webp",
    popular: true,
  },
  {
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA with minimal downtime and comprehensive data integrity.",
    features: [
      "Readiness check & assessment",
      "Database migration",
      "Custom code adaptation",
      "Master data cleansing",
      "End-user training",
    ],
    gradient: "from-sap-blue to-sap-purple",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    icon: Settings,
    title: "SAP Licensing & Software",
    description: "Comprehensive SAP licensing solutions optimized for your business needs and budget.",
    features: [
      "SAP S/4HANA subscription",
      "Module-based licensing",
      "Cost optimisation guidance",
      "Implementation-ready setup",
    ],
    gradient: "from-sap-purple to-accent",
  },
  {
    icon: Settings,
    title: "SAP Module Implementations",
    description: "Expert implementation of all major SAP functional and technical modules.",
    features: [
      "Functional: PP, MM, SD, FI, CO, QM, PM, WM, HR, EWM, APO",
      "Technical: ABAP, BASIS, HANA, Fiori, CPI, PI/PO",
    ],
    gradient: "from-accent to-primary",
  },
  {
    icon: Code,
    title: "SAP Custom Development",
    description: "Tailored SAP development and enhancements to meet your unique business requirements.",
    features: [
      "ABAP reports & enhancements",
      "SmartForms / Adobe Forms",
      "Fiori UI apps",
      "Custom workflows",
      "Z-programs & dashboards",
    ],
    gradient: "from-primary to-accent",
  },
  {
    icon: GraduationCap,
    title: "SAP Corporate Training",
    description: "Comprehensive SAP training programs for teams of all skill levels.",
    features: [
      "Functional + Technical training",
      "Online / Offline / Corporate batches",
      "Hands-on project experience",
      "Certification assistance",
    ],
    gradient: "from-sap-blue to-primary",
    image: "/sap-corporate-training.avif",
  },
  {
    icon: Wrench,
    title: "SAP Support & Maintenance (AMC)",
    description: "24/7 ongoing SAP support and maintenance for uninterrupted business operations.",
    features: [
      "Functional & technical support",
      "Performance tuning",
      "Bug fixes & enhancements",
      "Backup & recovery",
      "Monitoring & monthly health checks",
    ],
    gradient: "from-sap-purple to-sap-blue",
  },
  {
    icon: Link2,
    title: "SAP Integration Services",
    description: "Seamless SAP integration with your existing enterprise systems and applications.",
    features: [
      "SAP ↔ ERP integration",
      "SAP ↔ CRM / HRMS",
      "SAP ↔ Web portals",
      "SAP ↔ Third-party apps",
      "API / Middleware integrations",
    ],
    gradient: "from-accent to-sap-purple",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Our SAP Offerings"
        description="Complete SAP solutions for your business transformation"
      />

      {/* Stats Banner */}
      <section className="py-8 bg-gradient-to-r from-primary via-sap-blue to-sap-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                className="text-primary-foreground"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Offerings Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-sap-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              End-to-End SAP Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary via-sap-blue to-accent bg-clip-text text-transparent">
                SAP Solutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From implementation to support, we provide complete SAP services to drive your digital transformation journey.
            </p>
          </motion.div>

          {/* Offerings Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {sapOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  {/* Popular badge */}
                  {offering.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-gradient-to-r from-primary to-sap-blue text-primary-foreground border-0 shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${offering.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Image section (if available) */}
                  {offering.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={offering.image} 
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent`} />
                      <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <offering.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  )}

                  {/* Content section */}
                  <div className="p-6">
                    {/* Icon for cards without images */}
                    {!offering.image && (
                      <div className="mb-5">
                        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <offering.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                      {offering.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-6">
                      {offering.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 text-primary`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more link */}
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${offering.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-6">
                Why Sangronyx
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted{" "}
                <span className="bg-gradient-to-r from-primary to-sap-blue bg-clip-text text-transparent">
                  SAP Partner
                </span>
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
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
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
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/why-choose-sangronyx-for-sap.avif" 
                  alt="Why Choose Sangronyx for SAP"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Get a Free SAP Consultation
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Our SAP experts will help you choose the right software, modules and implementation approach for your business.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
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

export default Solutions;
