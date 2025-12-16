import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const partnerBenefits = [
  {
    icon: Handshake,
    title: "Partnership Opportunities",
    description: "Join our partner network and grow your business with Sangronyx.",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Work together to deliver exceptional solutions to clients.",
    color: "bg-sprinklr-green",
  },
  {
    icon: Award,
    title: "Certified Partners",
    description: "Become a certified partner and gain access to exclusive resources.",
    color: "bg-sprinklr-purple",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your business with our comprehensive partner program.",
    color: "bg-accent",
  },
  {
    icon: Shield,
    title: "Support & Training",
    description: "Receive ongoing support and training to help you succeed.",
    color: "bg-sprinklr-green",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Partners"
        description="Join our partner network and grow your business with Sangronyx."
      />

      {/* Partner Benefits */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build a successful partnership with Sangronyx and unlock new opportunities for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-5`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Become a Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in partnering with Sangronyx? Contact us to learn more about our partner program and how we can work together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 h-auto text-base font-semibold group">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
