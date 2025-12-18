import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Route, Send, MapPin, Truck } from "lucide-react";

const Distribution = () => {
  const features = [
    { icon: Route, title: "Distribution Channels", description: "Multiple channels for service delivery and solution distribution." },
    { icon: Send, title: "Service Delivery", description: "Efficient delivery mechanisms ensuring timely project completion." },
    { icon: MapPin, title: "Regional Coverage", description: "Comprehensive regional coverage for local support and services." },
    { icon: Truck, title: "Logistics", description: "Streamlined logistics for hardware and equipment deployment." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Distribution Channels"
        description="Understanding our service distribution and delivery networks."
        label="OPERATIONAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Distribution" }]}
        ctaText="Contact Us"
        ctaHref="/contact"
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

export default Distribution;