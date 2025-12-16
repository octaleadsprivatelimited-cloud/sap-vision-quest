import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Shield, Zap, Users, Headphones, Award } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Award,
    title: "Certified SAP Consultants",
    description: "Our team of certified SAP consultants brings extensive expertise and industry knowledge to every project.",
    color: "bg-accent",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Robust security protocols and compliance standards to protect your sensitive business data.",
    color: "bg-sprinklr-green",
  },
  {
    icon: BarChart3,
    title: "Cost-Effective Implementation",
    description: "Cost-effective SAP implementation and optimization to maximize your ROI and business value.",
    color: "bg-sprinklr-purple",
  },
  {
    icon: Headphones,
    title: "24/7 Support Availability",
    description: "Round-the-clock SAP support and maintenance to ensure your systems run smoothly.",
    color: "bg-accent",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Accelerated implementation timelines with proven methodologies to get you up and running faster.",
    color: "bg-sprinklr-green",
  },
  {
    icon: Users,
    title: "Expert Training & Support",
    description: "Comprehensive training programs and ongoing support to empower your team.",
    color: "bg-sprinklr-purple",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-accent">Sangronyx</span>{" "}
            for SAP?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            End-to-end SAP software, implementation, training and support services designed to transform your business.
          </p>
        </motion.div>

        {/* Features Grid - Clean Sprinklr style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                {/* Icon */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 md:mb-6`}>
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
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
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 h-auto text-base font-semibold group">
              Get Free SAP Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
