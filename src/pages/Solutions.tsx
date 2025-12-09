import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Settings, Code, GraduationCap, Wrench, Link2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const sapOfferings = [
  {
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    description: "Complete implementation services for SAP S/4HANA",
    features: [
      "Cloud / On-prem / Hybrid setup",
      "Business process mapping",
      "Module configuration",
      "UAT & go-live support",
      "Real-time reporting setup",
      "Post-go-live AMC",
    ],
  },
  {
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA",
    features: [
      "Readiness check",
      "Database migration",
      "Custom code adaptation",
      "Master data cleansing",
      "End-user training",
    ],
  },
  {
    icon: Settings,
    title: "SAP Licensing & Software",
    description: "Comprehensive SAP licensing solutions",
    features: [
      "SAP S/4HANA subscription",
      "Module-based licensing",
      "Cost optimisation guidance",
      "Implementation-ready setup",
    ],
  },
  {
    icon: Settings,
    title: "SAP Module Implementations",
    description: "Complete module implementation services",
    features: [
      "Functional Modules: PP, MM, SD, FI, CO, QM, PM, WM, HR, EWM, APO",
      "Technical Modules: ABAP, BASIS, HANA, Fiori, CPI, PI/PO",
    ],
  },
  {
    icon: Code,
    title: "SAP Custom Development",
    description: "Custom SAP development and enhancements",
    features: [
      "ABAP reports & enhancements",
      "SmartForms / Adobe Forms",
      "Fiori UI apps",
      "Custom workflows",
      "Z-programs & dashboards",
    ],
  },
  {
    icon: GraduationCap,
    title: "SAP Corporate Training",
    description: "Comprehensive SAP training programs",
    features: [
      "Functional + Technical training",
      "Online / Offline / Corporate batches",
      "Hands-on project experience",
      "Certification assistance",
    ],
  },
  {
    icon: Wrench,
    title: "SAP Support & Maintenance (AMC)",
    description: "Ongoing SAP support and maintenance",
    features: [
      "Functional & technical support",
      "Performance tuning",
      "Bug fixes & enhancements",
      "Backup & recovery",
      "Monitoring & monthly health checks",
    ],
  },
  {
    icon: Link2,
    title: "SAP Integration Services",
    description: "Seamless SAP integration solutions",
    features: [
      "SAP ↔ ERP",
      "SAP ↔ CRM / HRMS",
      "SAP ↔ Web portals",
      "SAP ↔ Third-party apps",
      "API / Middleware integrations",
    ],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Our SAP Offerings"
        description="Complete SAP solutions for your business transformation"
      />

      {/* SAP Offerings Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sapOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-sap-light-purple flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <offering.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {offering.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {offering.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
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
