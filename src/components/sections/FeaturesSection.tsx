import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, BarChart3, Headphones, Database } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Award,
    title: "SAP Expertise",
    description: "Leverage our certified SAP consultants with extensive industry knowledge to build great solutions, drive efficiency, and deliver extraordinary business outcomes.",
    link: "/solutions",
    linkText: "Explore Expertise",
    underlineColor: "bg-sprinklr-blue",
  },
  {
    icon: BarChart3,
    title: "S4 HANA IMPLEMENTATION",
    description: "SAP S/4HANA implementation enables organizations to modernize their ERP landscape with real-time data processing, simplified architecture, and intelligent business insights. At Sangronyx Technologies, we deliver end-to-end S/4HANA implementations aligned with your business goals and industry best practices.",
    link: "/services/sap-s4hana-implementation",
    linkText: "Explore Implementation",
    underlineColor: "bg-sprinklr-green",
  },
  {
    icon: Shield,
    title: "AMS Projects",
    description: "Reliable L1/L2/L3 support, system monitoring, issue resolution, enhancements, change request, service request, custom reports and continuous improvements.",
    link: "/services/sap-support-maintenance",
    linkText: "Explore AMS",
    underlineColor: "bg-sprinklr-purple",
  },
  {
    icon: Headphones,
    title: "HYPERCARE SUPPORT",
    description: "SAP Hypercare Support is a critical post-implementation phase where we provide intensive, dedicated support immediately after system go-live. At Sangronyx Technologies, our hypercare services ensure business continuity, user confidence, and system stability during this crucial transition period.",
    link: "/services/sap-support-maintenance",
    linkText: "Explore Hypercare",
    underlineColor: "bg-accent",
  },
  {
    icon: Database,
    title: "S4 HANA MIGRATION PROJECTS",
    description: "SAP S/4HANA migration enables organizations to move from legacy SAP ECC systems to a modern, real-time digital core. At Sangronyx Technologies, we deliver secure, structured, and business-focused S/4HANA migration services with minimal disruption and maximum value.",
    link: "/services/sap-ecc-migration",
    linkText: "Explore Migration",
    underlineColor: "bg-sprinklr-blue",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Delivering SAP Excellence Across the Enterprise.
          </h2>
        </motion.div>

        {/* Features Grid - Responsive grid for 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              {/* Icon */}
              <div className="mb-5">
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground" strokeWidth={1.5} />
              </div>
              
              {/* Title with underline */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              
              {/* Colored underline */}
              <div className={`w-10 h-1 ${feature.underlineColor} mb-5`}></div>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Explore link */}
              <Link 
                to={feature.link}
                className="inline-flex items-center text-foreground font-semibold text-sm md:text-base hover:text-accent transition-colors group/link"
              >
                <ArrowRight className="w-4 h-4 mr-2 text-sprinklr-green group-hover/link:translate-x-1 transition-transform" />
                {feature.linkText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
