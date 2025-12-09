import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Users, Award, TrendingUp, Shield } from "lucide-react";

const partnerBenefits = [
  {
    icon: Handshake,
    title: "Partnership Opportunities",
    description: "Join our partner network and grow your business with Sangronyx.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Work together to deliver exceptional solutions to clients.",
  },
  {
    icon: Award,
    title: "Certified Partners",
    description: "Become a certified partner and gain access to exclusive resources.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your business with our comprehensive partner program.",
  },
  {
    icon: Shield,
    title: "Support & Training",
    description: "Receive ongoing support and training to help you succeed.",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Partners"
        description="Join our partner network and grow your business with Sangronyx."
      />

      {/* Partner Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build a successful partnership with Sangronyx and unlock new opportunities for growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-sap-light-purple flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Become a Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in partnering with Sangronyx? Contact us to learn more about our partner program and how we can work together.
            </p>
            <Button variant="cta" size="lg" className="group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;

