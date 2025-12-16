import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary pt-20">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-background.jpg" 
          alt="SAP Solutions Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sprinklr-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
          {/* Small tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 transition-colors rounded-full px-4 py-2 text-primary-foreground/80 text-sm">
              <span className="w-2 h-2 rounded-full bg-sprinklr-green animate-pulse" />
              Demo
            </Link>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 text-primary-foreground max-w-5xl"
          >
            The definitive platform for{" "}
            <span className="text-gradient bg-gradient-to-r from-accent via-sprinklr-purple to-accent bg-clip-text text-transparent">
              complete SAP
            </span>{" "}
            solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-3xl leading-relaxed"
          >
            Unify your business processes and empower teams by implementing world-class SAP solutions. 
            Elevate every operation with expert guidance to deliver extraordinary experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 h-auto font-semibold group"
              >
                Contact us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
