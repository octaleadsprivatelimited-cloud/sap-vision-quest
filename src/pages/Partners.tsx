import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PageBackground, SectionBackground } from "@/components/ui/page-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

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
      <PageBackground>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Build a successful partnership with Sangronyx and unlock new opportunities for growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageBackground>

      {/* CTA */}
      <SectionBackground variant="secondary">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Become a Partner
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
                Interested in partnering with Sangronyx? Contact us to learn more about our partner program and how we can work together.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group w-full sm:w-auto">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Partners;
