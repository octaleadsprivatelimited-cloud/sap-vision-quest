import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Truck, Globe, Wifi, Shield } from "lucide-react";

const Infrastructure = () => {
  const infrastructure = [
    { icon: Truck, title: "Vehicle Fleet", description: "Dedicated vehicles for on-site support and equipment transportation." },
    { icon: Globe, title: "Network Infrastructure", description: "Robust network connectivity enabling seamless global operations." },
    { icon: Wifi, title: "Communication Systems", description: "Advanced communication infrastructure for remote and hybrid work." },
    { icon: Shield, title: "Security Infrastructure", description: "Physical and digital security systems protecting our assets." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Vehicles and Other Infrastructure"
        description="Learn about the infrastructure supporting our operational excellence."
        label="PHYSICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Infrastructure" }]}
        ctaText="Contact Us"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Infrastructure;