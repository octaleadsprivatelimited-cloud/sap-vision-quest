import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Building2, Factory, Warehouse, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Facilities = () => {
  const facilities = [
    { icon: Building2, title: "Office Buildings", description: "Modern office spaces equipped with state-of-the-art facilities for productive work environments.", color: "bg-blue-500", link: "/contact" },
    { icon: Factory, title: "Development Centers", description: "Dedicated development centers for software engineering and solution delivery.", color: "bg-orange-500", link: "/contact" },
    { icon: Warehouse, title: "Data Centers", description: "Secure data centers ensuring reliable hosting and infrastructure services.", color: "bg-green-500", link: "/contact" },
    { icon: MapPin, title: "Global Presence", description: "Strategic locations across multiple regions for better client accessibility.", color: "bg-purple-500", link: "/contact" },
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
        backgroundImage="/hero-background.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <facility.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {facility.title}
                </h3>
                <div className={`w-12 h-1 ${facility.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{facility.description}</p>
                <Link 
                  to={facility.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {facility.title.split(' ')[0]}
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

export default Facilities;