import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, BarChart3, Headphones } from "lucide-react";
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
    title: "SAP Implementation",
    description: "Orchestrate end-to-end SAP implementation across your enterprise systems, optimize processes, and boost operational ROI.",
    link: "/solutions",
    linkText: "Explore Implementation",
    underlineColor: "bg-sprinklr-green",
  },
  {
    icon: Shield,
    title: "SAP Security",
    description: "Protect your enterprise data across all SAP modules and systems to maximize security, build trust and ensure compliance.",
    link: "/solutions",
    linkText: "Explore Security",
    underlineColor: "bg-sprinklr-purple",
  },
  {
    icon: Headphones,
    title: "SAP Support",
    description: "Give your teams the 24/7 support they need to connect with context, resolve issues quickly, and deliver delightful experiences consistently.",
    link: "/solutions",
    linkText: "Explore Support",
    underlineColor: "bg-accent",
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
            Four SAP-native service suites. One Unified Enterprise platform.
          </h2>
        </motion.div>

        {/* Features Grid - Sprinklr 4-column style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
