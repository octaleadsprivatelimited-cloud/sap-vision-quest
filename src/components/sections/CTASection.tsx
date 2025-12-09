import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Free SAP Consultation",
  "Expert Guidance",
  "Customized Solutions",
];

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-sap-blue/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary via-sap-blue to-accent p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6"
                >
                  <Badge className="px-4 py-1.5 text-sm font-medium bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 mr-2" />
                    Get Started Today
                  </Badge>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                    transform
                  </span>{" "}
                  your business?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed"
                >
                  Connect with Sangronyx to discover how our SAP services can help you achieve your business goals. Get expert guidance and customized solutions.
                </motion.p>

                {/* Benefits List */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="space-y-3 mb-8"
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/95 font-medium group-hover:text-white transition-colors">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base text-white/80"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    <span>info@sangronyx.com</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span>+91-XXXXXXXXXX</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Main CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">Get Free SAP Consultation</h3>
                      <p className="text-xs md:text-sm text-white/70">Expert guidance for your business</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link to="/contact">
                      <Button variant="default" size="lg" className="w-full group text-base md:text-lg py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-primary hover:bg-white/90">
                        <Mail className="w-5 h-5" />
                        Contact Us Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/solutions">
                      <Button variant="outline" size="lg" className="w-full group bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                        Explore Our Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="grid grid-cols-3 gap-3 md:gap-4"
                >
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 border border-white/10">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-white/70">Support</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 border border-white/10">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-white/70">Client Focus</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 border border-white/10">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">Free</div>
                    <div className="text-xs text-white/70">Consultation</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
