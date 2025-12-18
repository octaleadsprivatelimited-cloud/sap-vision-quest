import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Laptop, Cloud, Database, Settings } from "lucide-react";

const Software = () => {
  const features = [
    { icon: Laptop, title: "Enterprise Software", description: "Licensed enterprise software including SAP, Microsoft, and other industry-leading platforms." },
    { icon: Cloud, title: "Cloud Platforms", description: "Cloud infrastructure on AWS, Azure, and Google Cloud for scalable solutions." },
    { icon: Database, title: "IT Systems", description: "Comprehensive IT systems supporting business operations and client services." },
    { icon: Settings, title: "Custom Applications", description: "Proprietary applications developed for specific business needs." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Software and IT Systems"
        description="Explore our technology stack powering enterprise solutions."
        label="TECHNOLOGICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Software" }]}
        ctaText="Our Solutions"
        ctaHref="/solutions"
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

export default Software;