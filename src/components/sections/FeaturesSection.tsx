import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Layers, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "SAP Business AI",
    description: "AI that understands your business context and delivers intelligent insights across all processes.",
    gradient: "from-primary to-sap-blue",
  },
  {
    icon: Layers,
    title: "Unified Data Platform",
    description: "Connect all your data sources into a single source of truth for better decision-making.",
    gradient: "from-sap-blue to-accent",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Make data-driven decisions with live dashboards and predictive insights.",
    gradient: "from-accent to-primary",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Act with confidence now—lead with vision tomorrow
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-lg text-muted-foreground mb-6">
                SAP Business Suite unites your AI, data, apps, and platform to help you adapt, innovate, and move forward with clarity.
              </p>
              <Button variant="default" size="lg" className="group">
                Explore SAP Business Suite
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover">
                {/* Gradient line at top */}
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
