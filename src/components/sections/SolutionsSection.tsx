import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Users, Shield, Zap, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    description: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup. Business process mapping, module configuration, and go-live support.",
    link: "/solutions",
    color: "bg-accent",
    image: "/sap-s4hana-implementation.webp",
  },
  {
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA with readiness check, database migration, custom code adaptation, and end-user training.",
    link: "/solutions",
    color: "bg-sprinklr-green",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    icon: Users,
    title: "SAP Corporate Training",
    description: "Functional and technical SAP training for all major modules. Online, offline, and corporate batches with certification assistance.",
    link: "/solutions",
    color: "bg-sprinklr-purple",
    image: "/sap-corporate-training.avif",
  },
  {
    icon: Shield,
    title: "SAP Support & Maintenance",
    description: "24/7 SAP support and maintenance (AMC) with functional & technical support, performance tuning, and monthly health checks.",
    link: "/solutions",
    color: "bg-accent",
  },
  {
    icon: Zap,
    title: "SAP Custom Development",
    description: "ABAP reports, SmartForms, Fiori UI apps, custom workflows, Z-programs, and dashboards tailored to your business needs.",
    link: "/solutions",
    color: "bg-sprinklr-green",
  },
  {
    icon: Link2,
    title: "SAP Integration Services",
    description: "SAP integration with ERP, CRM, HRMS, web portals, third-party apps, and API/middleware integrations.",
    link: "/solutions",
    color: "bg-sprinklr-purple",
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Four AI-native product suites.{" "}
            <span className="text-accent">One platform.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete SAP solutions for implementation, migration, training, support, and custom development.
          </p>
        </motion.div>

        {/* Solutions Grid - Sprinklr style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                to={solution.link} 
                className="block h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                {solution.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-lg ${solution.color} flex items-center justify-center`}>
                      <solution.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  {!solution.image && (
                    <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mb-5`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link to="/solutions">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 h-auto text-base font-semibold group">
              Explore All Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
