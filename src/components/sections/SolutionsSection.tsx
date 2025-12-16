import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Users, Shield, Zap, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    description: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup. Business process mapping, module configuration, and go-live support.",
  },
  {
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA with readiness check, database migration, custom code adaptation, and end-user training.",
  },
  {
    icon: Users,
    title: "SAP Corporate Training",
    description: "Functional and technical SAP training for all major modules. Online, offline, and corporate batches with certification assistance.",
  },
  {
    icon: Shield,
    title: "SAP Support & Maintenance",
    description: "24/7 SAP support and maintenance (AMC) with functional & technical support, performance tuning, and monthly health checks.",
  },
  {
    icon: Zap,
    title: "SAP Custom Development",
    description: "ABAP reports, SmartForms, Fiori UI apps, custom workflows, Z-programs, and dashboards tailored to your business needs.",
  },
  {
    icon: Link2,
    title: "SAP Integration Services",
    description: "SAP integration with ERP, CRM, HRMS, web portals, third-party apps, and API/middleware integrations.",
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary/20">
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
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            // Match Sprinklr pattern: yellow for bottom-left cards in each 2x2 block (indices 2, 6, 10...)
            const isYellowBorder = index % 4 === 2;
            const borderColor = isYellowBorder ? "border-l-[#FFD700]" : "border-l-[#00CED1]";
            
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className={`h-full bg-card rounded-lg border border-border/50 ${borderColor} border-l-4 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300`}>
                  {/* Large Icon */}
                  <div className="mb-5">
                    <solution.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground" strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
