import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { FileKey, Lock, ScrollText, Lightbulb } from "lucide-react";

const Patents = () => {
  const features = [
    { icon: FileKey, title: "Patents", description: "Patented technologies and innovations protecting our unique solutions." },
    { icon: Lock, title: "Licenses", description: "Software licenses and partnerships with leading technology providers." },
    { icon: ScrollText, title: "Proprietary Technology", description: "Exclusive technologies developed in-house for competitive advantage." },
    { icon: Lightbulb, title: "Innovation Portfolio", description: "Growing portfolio of intellectual property from ongoing R&D efforts." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Patents, Licenses, and Proprietary Technology"
        description="Discover our protected technologies and innovation portfolio."
        label="TECHNOLOGICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Patents" }]}
        ctaText="Learn More"
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

export default Patents;