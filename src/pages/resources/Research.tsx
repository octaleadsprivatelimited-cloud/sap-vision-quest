import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, Rocket, Sparkles } from "lucide-react";

const Research = () => {
  const features = [
    { icon: FlaskConical, title: "R&D Labs", description: "Dedicated research and development laboratories exploring emerging technologies." },
    { icon: Microscope, title: "Innovation Research", description: "Continuous research into AI, machine learning, and automation." },
    { icon: Rocket, title: "Development Capabilities", description: "Strong development capabilities turning research into practical solutions." },
    { icon: Sparkles, title: "Emerging Technologies", description: "Focus on cutting-edge technologies shaping the future of enterprise IT." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Research and Development Capabilities"
        description="Explore our R&D initiatives driving innovation and technological advancement."
        label="TECHNOLOGICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Research" }]}
        ctaText="Our Innovations"
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

export default Research;