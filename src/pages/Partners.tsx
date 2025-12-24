import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Handshake, Users, Award, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const partnerBenefits = [
  {
    icon: Handshake,
    title: "Partnership Opportunities",
    description: "Join our partner network and grow your business with Sangronyx.",
    color: "bg-blue-500",
    link: "/contact",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Work together to deliver exceptional solutions to clients.",
    color: "bg-orange-500",
    link: "/contact",
  },
  {
    icon: Award,
    title: "Certified Partners",
    description: "Become a certified partner and gain access to exclusive resources.",
    color: "bg-green-500",
    link: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your business with our comprehensive partner program.",
    color: "bg-purple-500",
    link: "/contact",
  },
  {
    icon: Shield,
    title: "Support & Training",
    description: "Receive ongoing support and training to help you succeed.",
    color: "bg-red-500",
    link: "/contact",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Partners"
        description="Join our partner network and grow your business with Sangronyx."
        label="PARTNER PROGRAM"
        breadcrumbs={[{ label: "Partners" }]}
        ctaText="Become a Partner"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.slice(0, 4).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <benefit.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <div className={`w-12 h-1 ${benefit.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>
                <Link 
                  to={benefit.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {benefit.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Fifth item centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="group lg:col-start-2"
            >
              <div className="mb-6">
                <Shield className="w-16 h-16 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Support & Training
              </h3>
              <div className="w-12 h-1 bg-red-500 mb-4"></div>
              <p className="text-muted-foreground mb-6 leading-relaxed">Receive ongoing support and training to help you succeed.</p>
              <Link 
                to="/contact"
                className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
              >
                Explore Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;