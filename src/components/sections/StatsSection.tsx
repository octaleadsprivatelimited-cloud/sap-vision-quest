import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Target, Clock, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { 
    value: 3, 
    suffix: "", 
    label: "Core Services",
    icon: Briefcase,
    gradient: "from-primary to-sap-blue",
    description: "Comprehensive SAP solutions"
  },
  { 
    value: 100, 
    suffix: "%", 
    label: "Client Focus",
    icon: Target,
    gradient: "from-sap-blue to-sap-purple",
    description: "Dedicated to your success"
  },
  { 
    value: 24, 
    suffix: "/7", 
    label: "Support Available",
    icon: Clock,
    gradient: "from-sap-purple to-accent",
    description: "Round-the-clock assistance"
  },
  { 
    value: 1, 
    suffix: "", 
    label: "Email Contact",
    icon: Mail,
    gradient: "from-accent to-primary",
    description: "info@sangronyx.com"
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return new Intl.NumberFormat().format(num);
    }
    return num.toString();
  };

  return (
    <span>
      {formatNumber(displayValue)}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/why-choose-us.avif" 
          alt="Why Choose Us Background" 
          className="w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block'
          }}
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge className="px-4 py-1.5 text-sm font-medium bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Why Choose Us
            </Badge>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
          >
            Our Commitment to{" "}
            <span className="bg-gradient-to-r from-primary via-sap-blue to-accent bg-clip-text text-transparent drop-shadow-lg">
              Excellence
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-base text-white max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Delivering exceptional SAP solutions with unwavering dedication to your success
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative h-full bg-card rounded-lg md:rounded-xl p-5 md:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Icon with enhanced UI/UX design */}
                <div className="flex justify-center mb-4 relative">
                  {/* Outer glow ring */}
                  <div className={`absolute inset-0 flex items-center justify-center`}>
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                  </div>
                  
                  {/* Icon container with layered design */}
                  <div className="relative z-10">
                    {/* Background circle with gradient */}
                    <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {/* Inner highlight */}
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                      
                      {/* Icon */}
                      <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Decorative corner accents */}
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Animated ring on hover */}
                    <div className={`absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 scale-0 group-hover:scale-125`} />
                  </div>
                </div>

                {/* Number */}
                <div className="text-center mb-2">
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mb-2">
                  <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <div className="text-center">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
