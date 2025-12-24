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

const TrainingMaterials = () => {
  const materials = [
    {
      icon: BookOpen,
      title: "Functional Materials",
      description: "Comprehensive learning resources for SAP functional modules.",
      color: "bg-blue-500",
      items: functionalModules,
    },
    {
      icon: Code,
      title: "Technical Materials",
      description: "Technical documentation and guides for SAP development.",
      color: "bg-orange-500",
      items: technicalModules,
    },
    {
      icon: Cloud,
      title: "Cloud & New Tech Materials",
      description: "Resources for SAP cloud platforms and modern technologies.",
      color: "bg-green-500",
      items: cloudModules,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Training Materials"
        description="Training materials and resources for SAP modules and IT services."
        label="TRAINING & PLACEMENTS"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Training Materials" }]}
        ctaText="Access Materials"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <material.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {material.title}
                </h3>
                <div className={`w-12 h-1 ${material.color} mb-4`}></div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{material.description}</p>
                <ul className="space-y-2 mb-6">
                  {material.items.slice(0, 5).map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                  {material.items.length > 5 && (
                    <li className="text-sm text-muted-foreground">• +{material.items.length - 5} more</li>
                  )}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Access {material.title.split(' ')[0]}
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
              Need More Training Resources?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to learn about our comprehensive training programs and customized materials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Contact Training Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg">
                  Back to Resources
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

export default TrainingMaterials;