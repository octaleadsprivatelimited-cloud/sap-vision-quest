import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Monitor, Server, Cpu, Wrench } from "lucide-react";

const Equipment = () => {
  const equipment = [
    { icon: Monitor, title: "Computing Equipment", description: "High-performance workstations and laptops for development and consulting teams." },
    { icon: Server, title: "Server Infrastructure", description: "Enterprise-grade servers supporting critical business applications and services." },
    { icon: Cpu, title: "Hardware Resources", description: "Advanced hardware components ensuring optimal system performance." },
    { icon: Wrench, title: "Specialized Tools", description: "Industry-specific tools and equipment for testing and deployment." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Machinery, Equipment, Tools"
        description="Discover the equipment and tools powering our technical capabilities."
        label="PHYSICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Equipment" }]}
        ctaText="Our Solutions"
        ctaHref="/solutions"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
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

export default Equipment;