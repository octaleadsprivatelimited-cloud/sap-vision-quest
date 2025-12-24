import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Crown, Network, Building, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Leadership = () => {
  const features = [
    { icon: Crown, title: "Executive Leadership", description: "Visionary leaders guiding strategic direction and company growth.", color: "bg-blue-500", link: "/about" },
    { icon: Network, title: "Organizational Structure", description: "Well-defined hierarchy ensuring efficient communication and decision-making.", color: "bg-orange-500", link: "/about" },
    { icon: Building, title: "Department Heads", description: "Experienced managers leading specialized departments and teams.", color: "bg-green-500", link: "/about" },
    { icon: TrendingUp, title: "Strategic Planning", description: "Leadership focused on long-term growth and market positioning.", color: "bg-purple-500", link: "/about" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Leadership and Organizational Structure"
        description="Learn about our leadership team and the organizational framework driving our success."
        label="HUMAN RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Leadership" }]}
        ctaText="About Us"
        ctaHref="/about"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <feature.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                <div className={`w-12 h-1 ${feature.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {feature.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;