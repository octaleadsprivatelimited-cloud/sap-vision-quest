import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Users, Zap, LineChart, Shield, Link2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const solutions = [
  {
    icon: Cloud,
    title: "SAP S/4HANA Implementation",
    description: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup. Business process mapping, module configuration, and go-live support.",
    link: "/solutions",
    gradient: "from-primary to-sap-blue",
    color: "text-primary",
    image: "/sap-s4hana-implementation.webp",
  },
  {
    icon: Database,
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA with readiness check, database migration, custom code adaptation, and end-user training.",
    link: "/solutions",
    gradient: "from-sap-blue to-sap-purple",
    color: "text-sap-blue",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
  {
    icon: Users,
    title: "SAP Corporate Training",
    description: "Functional and technical SAP training for all major modules. Online, offline, and corporate batches with certification assistance.",
    link: "/solutions",
    gradient: "from-sap-purple to-accent",
    color: "text-sap-purple",
    image: "/sap-corporate-training.avif",
  },
  {
    icon: Shield,
    title: "SAP Support & Maintenance",
    description: "24/7 SAP support and maintenance (AMC) with functional & technical support, performance tuning, and monthly health checks.",
    link: "/solutions",
    gradient: "from-accent to-primary",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "SAP Custom Development",
    description: "ABAP reports, SmartForms, Fiori UI apps, custom workflows, Z-programs, and dashboards tailored to your business needs.",
    link: "/solutions",
    gradient: "from-primary to-accent",
    color: "text-primary",
  },
  {
    icon: Link2,
    title: "SAP Integration Services",
    description: "SAP integration with ERP, CRM, HRMS, web portals, third-party apps, and API/middleware integrations.",
    link: "/solutions",
    gradient: "from-sap-blue to-primary",
    color: "text-sap-blue",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const SolutionsSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-sap-blue/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Comprehensive Solutions
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-sap-blue to-accent bg-clip-text text-transparent">
              SAP Offerings
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Complete SAP solutions for implementation, migration, training, support, and custom development.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card with enhanced design */}
              <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer">
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`} />
                
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl md:rounded-t-2xl bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Image or Icon container with enhanced design */}
                <div className="relative mb-4 md:mb-5 lg:mb-6">
                  {solution.image ? (
                    // Image display for solutions with images
                    <div className="relative w-full h-32 md:h-40 lg:h-48 rounded-lg md:rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      {/* Icon overlay */}
                      <div className={`absolute bottom-2 right-2 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                        <solution.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                      </div>
                    </div>
                  ) : (
                    // Icon display for solutions without images
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                      <div className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <solution.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                      </div>
                      {/* Decorative dots */}
                      <div className="flex gap-1 md:gap-1.5">
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${solution.gradient} opacity-60`} />
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${solution.gradient} opacity-40`} />
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${solution.gradient} opacity-20`} />
                      </div>
                    </>
                  )}
                </div>
                
                {/* Content */}
                <h3 className="text-sm md:text-base lg:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-4 md:mb-5 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Learn more link */}
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm md:text-base">Learn more</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 h-0.5 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <Button variant="default" size="lg" className="group text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
            Explore All Solutions
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
