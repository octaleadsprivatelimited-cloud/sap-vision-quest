import { motion } from "framer-motion";
import { Users, Cpu, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Unified Platform",
    description: "Empower your enterprise teams with a unified SAP platform to deliver frictionless, omnichannel business experiences — while staying efficient every time, everywhere.",
    illustration: (
      <div className="mt-6 p-4 bg-gradient-to-br from-sprinklr-blue/5 to-sprinklr-green/5 rounded-xl">
        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-3">Global Teams</div>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-sprinklr-purple border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-2">Channels</div>
        <div className="flex flex-wrap gap-2">
          {['SAP', 'ERP', 'CRM', 'HR', 'FI'].map((channel) => (
            <div key={channel} className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
              {channel.charAt(0)}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Cpu,
    title: "AI-Native Foundation",
    description: "AI is seamlessly infused across our SAP platform, enabling you to scale effortlessly while powering continuous innovation for your enterprise teams.",
    illustration: (
      <div className="mt-6 p-4 bg-gradient-to-br from-sprinklr-green/5 to-accent/5 rounded-xl">
        <div className="bg-secondary rounded-lg p-3 mb-3 text-sm text-muted-foreground">
          Need help with SAP implementation urgently!
        </div>
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="bg-sprinklr-green/10 text-sprinklr-green text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
            <Cpu className="w-3 h-3" /> SAP AI
          </div>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center bg-secondary/50 rounded px-2 py-1">
            <span className="text-accent font-medium">Intent:</span>
            <span className="text-muted-foreground">Support</span>
          </div>
          <div className="flex justify-between items-center bg-secondary/50 rounded px-2 py-1">
            <span className="text-sprinklr-purple font-medium">Priority:</span>
            <span className="text-muted-foreground">High</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: "Enterprise-Grade Scale",
    description: "Equip your global teams with extensive customizability and seamless integration with your existing tech stack. Built for enterprises, our platform scales effortlessly as your needs evolve.",
    illustration: (
      <div className="mt-6 p-4 bg-gradient-to-br from-accent/5 to-sprinklr-blue/5 rounded-xl">
        <div className="flex gap-2 mb-3">
          {[TrendingUp, Cpu, Users].map((Icon, i) => (
            <div key={i} className="w-8 h-8 rounded-lg bg-sprinklr-green/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-sprinklr-green" />
            </div>
          ))}
        </div>
        <div className="bg-secondary rounded-lg p-3">
          <div className="text-xs text-muted-foreground mb-2">Analytics</div>
          <div className="text-xl font-bold text-foreground mb-2">62.1K</div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Conversions</span>
              <span className="text-sprinklr-green font-medium">12.50%</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Efficiency</span>
              <span className="text-sprinklr-green font-medium">40%</span>
            </div>
          </div>
        </div>
      </div>
    ),
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
            Get the Sangronyx Advantage
          </h2>
        </motion.div>

        {/* Features Grid - Sprinklr 3-card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Illustration */}
                {feature.illustration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
