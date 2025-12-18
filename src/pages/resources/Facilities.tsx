import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Building2, Factory, Warehouse, MapPin } from "lucide-react";

const Facilities = () => {
  const facilities = [
    { icon: Building2, title: "Office Buildings", description: "Modern office spaces equipped with state-of-the-art facilities for productive work environments." },
    { icon: Factory, title: "Development Centers", description: "Dedicated development centers for software engineering and solution delivery." },
    { icon: Warehouse, title: "Data Centers", description: "Secure data centers ensuring reliable hosting and infrastructure services." },
    { icon: MapPin, title: "Global Presence", description: "Strategic locations across multiple regions for better client accessibility." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Office Buildings, Factories, Warehouses"
        description="Explore our physical infrastructure supporting our operations and service delivery."
        label="PHYSICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Facilities" }]}
        ctaText="Visit Us"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all"
              >
                <facility.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;