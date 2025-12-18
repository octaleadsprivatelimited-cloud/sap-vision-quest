import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Workflow, BookOpen, Cog, Lightbulb } from "lucide-react";

const Processes = () => {
  const features = [
    { icon: Workflow, title: "Business Processes", description: "Refined business processes ensuring efficient and consistent service delivery." },
    { icon: BookOpen, title: "Know-how", description: "Accumulated knowledge and expertise from years of industry experience." },
    { icon: Cog, title: "Methodologies", description: "Proven methodologies for project management and implementation." },
    { icon: Lightbulb, title: "Best Practices", description: "Industry best practices integrated into all our operations." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Business Processes and Know-how"
        description="Discover our refined processes and accumulated expertise."
        label="INTELLECTUAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Processes" }]}
        ctaText="Our Approach"
        ctaHref="/what-we-do"
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

export default Processes;