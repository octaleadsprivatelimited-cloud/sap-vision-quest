import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/95 to-primary/90 z-0" />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - 40% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Ready to transform your business?
            </motion.h2>
            
            {/* Descriptive Text */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
            >
              Connect with Sangronyx to discover how our SAP services can help you achieve your business goals and drive digital transformation.
            </motion.p>

            {/* Two CTA Buttons Side by Side */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 h-auto text-base font-semibold rounded-lg transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - 60% - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Modern Card with Glassmorphism */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              {/* Decorative Gradient Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/30 to-sprinklr-blue/20 rounded-bl-full blur-2xl" />
              
              <div className="relative space-y-4">
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-sprinklr-blue shadow-lg mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Get Free SAP Consultation
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Expert guidance for your business transformation journey. Let's discuss your needs and create a tailored solution.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-white/60 font-medium">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-white/60 font-medium">Client Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Free</div>
                    <div className="text-xs text-white/60 font-medium">Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
