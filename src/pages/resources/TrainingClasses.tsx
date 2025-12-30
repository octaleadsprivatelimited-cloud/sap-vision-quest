import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Cloud } from "lucide-react";
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
  const modules = [
    {
      icon: BookOpen,
      title: "Functional Modules",
      description: "Master SAP functional modules for business processes and operations.",
      color: "bg-blue-500",
      items: functionalModules,
    },
    {
      icon: Code,
      title: "Technical Modules",
      description: "Learn SAP technical development and system administration.",
      color: "bg-orange-500",
      items: technicalModules,
    },
    {
      icon: Cloud,
      title: "SAP Cloud & New Technology",
      description: "Explore modern SAP cloud platforms and emerging technologies.",
      color: "bg-green-500",
      items: cloudModules,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP Workshop Classes"
        description="Join our comprehensive SAP workshop classes led by industry experts."
        label="WORKSHOP & PLACEMENTS"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Workshop Classes" }]}
        ctaText="Enroll Now"
        ctaHref="/contact"
        backgroundImage="/sap-training-background.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <module.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {module.title}
                </h3>
                <div className={`w-12 h-1 ${module.color} mb-4`}></div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{module.description}</p>
                <ul className="space-y-2 mb-6">
                  {module.items.slice(0, 5).map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                  {module.items.length > 5 && (
                    <li className="text-sm text-muted-foreground">• +{module.items.length - 5} more modules</li>
                  )}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {module.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
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
              Need Custom Workshop for Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer customized corporate workshop programs tailored to your organization's specific needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 group">
                  Request Custom Workshop
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources/training-materials">
                <Button variant="outline" size="lg">
                  View Workshop Materials
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