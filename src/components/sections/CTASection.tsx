import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Free SAP Consultation",
  "Expert Guidance",
  "Customized Solutions",
];

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/cta-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90 z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to{" "}
              <span className="text-accent">transform</span>{" "}
              your business?
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Connect with Sangronyx to discover how our SAP services can help you achieve your business goals.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-primary-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-primary-foreground/70">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10">
                <Mail className="w-5 h-5" />
                <span>info@sangronyx.com</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10">
                <Phone className="w-5 h-5" />
                <span>+91-XXXXXXXXXX</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Get Free SAP Consultation
              </h3>
              <p className="text-muted-foreground mb-6">
                Expert guidance for your business transformation journey
              </p>

              <div className="space-y-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 h-auto text-base font-semibold group">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="lg" className="w-full py-6 h-auto text-base font-medium group">
                    Explore Our Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground">Client Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">Free</div>
                  <div className="text-xs text-muted-foreground">Consultation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
