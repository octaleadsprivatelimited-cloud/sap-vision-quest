import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Award, Star, Heart, Globe } from "lucide-react";

const Brand = () => {
  const features = [
    { icon: Award, title: "Brand Recognition", description: "Strong brand presence recognized in the SAP and IT consulting industry." },
    { icon: Star, title: "Reputation", description: "Excellent reputation built on years of successful project delivery." },
    { icon: Heart, title: "Client Trust", description: "High client trust and loyalty driving repeat business and referrals." },
    { icon: Globe, title: "Market Position", description: "Strong market position as a trusted IT services partner." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Brand Name and Reputation"
        description="Learn about our brand identity and market reputation."
        label="INTELLECTUAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Brand" }]}
        ctaText="About Us"
        ctaHref="/about"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brand;