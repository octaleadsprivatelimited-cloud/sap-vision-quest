import { motion } from "framer-motion";
import { Building2, Users, Trophy, Zap } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Certified SAP Experts",
    description: "Our team comprises certified SAP professionals with deep expertise across all SAP modules and technologies.",
  },
  {
    icon: Building2,
    title: "Enterprise-Grade Solutions",
    description: "We deliver scalable, enterprise-ready SAP implementations that grow with your business needs.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Every solution is tailored to your unique business requirements with dedicated project teams.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Accelerated implementation methodologies ensure faster time-to-value for your SAP investments.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Why Choose Sangronyx
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-primary">SAP Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We combine deep SAP expertise, structured delivery, and a business-first mindset to help organizations implement, migrate, and support SAP systems with confidence.
            </p>
          </motion.div>

          {/* Right Content - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
