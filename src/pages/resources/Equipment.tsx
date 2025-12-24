import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Monitor, Server, Cpu, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Equipment = () => {
  const equipment = [
    { icon: Monitor, title: "Computing Equipment", description: "High-performance workstations and laptops for development and consulting teams.", color: "bg-blue-500", link: "/solutions" },
    { icon: Server, title: "Server Infrastructure", description: "Enterprise-grade servers supporting critical business applications and services.", color: "bg-orange-500", link: "/solutions" },
    { icon: Cpu, title: "Hardware Resources", description: "Advanced hardware components ensuring optimal system performance.", color: "bg-green-500", link: "/solutions" },
    { icon: Wrench, title: "Specialized Tools", description: "Industry-specific tools and equipment for testing and deployment.", color: "bg-purple-500", link: "/solutions" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <item.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <div className={`w-12 h-1 ${item.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                <Link 
                  to={item.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {item.title.split(' ')[0]}
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

export default Equipment;