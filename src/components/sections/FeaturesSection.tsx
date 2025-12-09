import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Layers, TrendingUp, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Certified SAP Consultants",
    description: "Our team of certified SAP consultants brings extensive expertise and industry knowledge to every project.",
    gradient: "from-primary to-sap-blue",
    color: "text-primary",
    bgGradient: "from-primary/10 to-sap-blue/10",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Robust security protocols and compliance standards to protect your sensitive business data and operations.",
    gradient: "from-sap-blue to-sap-purple",
    color: "text-sap-blue",
    bgGradient: "from-sap-blue/10 to-sap-purple/10",
  },
  {
    icon: Layers,
    title: "Cost-Effective Implementation",
    description: "We provide cost-effective SAP implementation and optimization to maximize your ROI and business value.",
    gradient: "from-sap-purple to-accent",
    color: "text-sap-purple",
    bgGradient: "from-sap-purple/10 to-accent/10",
  },
  {
    icon: TrendingUp,
    title: "24/7 Support Availability",
    description: "Round-the-clock SAP support and maintenance to ensure your systems run smoothly and efficiently.",
    gradient: "from-accent to-primary",
    color: "text-accent",
    bgGradient: "from-accent/10 to-primary/10",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Accelerated implementation timelines with proven methodologies to get your SAP system up and running faster.",
    gradient: "from-primary to-accent",
    color: "text-primary",
    bgGradient: "from-primary/10 to-accent/10",
  },
  {
    icon: Users,
    title: "Expert Training & Support",
    description: "Comprehensive training programs and ongoing support to empower your team and ensure long-term success.",
    gradient: "from-sap-blue to-primary",
    color: "text-sap-blue",
    bgGradient: "from-sap-blue/10 to-primary/10",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-primary/10 via-sap-blue/10 to-accent/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-sap-blue/15 to-accent/20" />
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(252 85% 60%) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(252 85% 60%) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-sap-blue/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "3s" }} />
        
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-primary/10 rounded-lg animate-float"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-shimmer" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge className="mb-6 px-4 py-1.5 text-sm font-medium bg-primary/10 backdrop-blur-sm text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                Trusted SAP Partner
              </Badge>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary via-sap-blue to-accent bg-clip-text text-transparent">
                Sangronyx
              </span>{" "}
              for SAP?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Sangronyx provides end-to-end SAP software, implementation, training and support services designed to transform your business with automation, integration and powerful enterprise capabilities.
            </motion.p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              {/* Card with enhanced design */}
              <div className="relative h-full bg-card/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`} />
                
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl md:rounded-t-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon container with enhanced design */}
                <div className="relative mb-3 md:mb-4 lg:mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  <div className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-2 md:mb-3 lg:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  {/* Decorative dots */}
                  <div className="flex gap-1 md:gap-1.5">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60`} />
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-40`} />
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-20`} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-sm md:text-base lg:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-xs md:text-sm lg:text-[15px]">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button variant="default" size="lg" className="group text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
              Get Free SAP Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
