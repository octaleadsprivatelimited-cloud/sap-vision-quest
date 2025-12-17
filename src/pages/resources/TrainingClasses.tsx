import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BookOpen, Code, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const functionalModules = [
  "SAP FI – Financial Accounting",
  "SAP CO – Controlling",
  "SAP MM – Materials Management",
  "SAP SD – Sales & Distribution",
  "SAP PP – Production Planning",
  "SAP QM – Quality Management",
  "SAP PM – Plant Maintenance",
  "SAP WM – Warehouse Management",
  "SAP EWM – Extended Warehouse Management",
  "SAP PS – Project System",
];

const technicalModules = [
  "SAP ABAP – Programming Language",
  "SAP ABAP on HANA",
  "SAP BASIS – System Administration",
  "SAP Security / GRC",
  "SAP PI / PO – Process Integration / Orchestration",
  "SAP CPI – Cloud Platform Integration",
];

const cloudModules = [
  "SAP Fiori & UI5",
  "SAP BTP – Business Technology Platform",
];

const TrainingClasses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP Training Classes"
        description="Join our comprehensive SAP training classes led by industry experts. Master functional, technical, and cloud modules."
        label="CERTIFICATION PROGRAMS"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Training Classes" }]}
      />

      {/* SAP Modules */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SAP Training Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer comprehensive training programs across all major SAP modules
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Functional Modules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Functional Modules</h3>
                </div>
                <ul className="space-y-3">
                  {functionalModules.map((module, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Technical Modules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Technical Modules</h3>
                </div>
                <ul className="space-y-3">
                  {technicalModules.map((module, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Cloud & New Technology */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-sprinklr-green/10 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-sprinklr-green" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">SAP Cloud & New Technology</h3>
                </div>
                <ul className="space-y-3">
                  {cloudModules.map((module, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-sprinklr-green mt-0.5 flex-shrink-0" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Custom Training for Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer customized corporate training programs tailored to your organization's specific needs. Contact us to discuss your training requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Request Custom Training
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources/training-materials">
                <Button variant="outline" size="lg">
                  View Training Materials
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

export default TrainingClasses;
