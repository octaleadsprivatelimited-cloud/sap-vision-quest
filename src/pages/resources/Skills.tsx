import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Brain, Code, Database, Settings } from "lucide-react";

const Skills = () => {
  const skills = [
    { icon: Brain, title: "Technical Expertise", description: "Deep knowledge in SAP modules, cloud technologies, and enterprise solutions." },
    { icon: Code, title: "Development Skills", description: "Proficiency in ABAP, Fiori, UI5, and modern programming languages." },
    { icon: Database, title: "Data Management", description: "Expert capabilities in database administration and data analytics." },
    { icon: Settings, title: "System Integration", description: "Experience integrating complex enterprise systems and workflows." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Skills, Expertise, and Experience"
        description="Discover the comprehensive skill sets and expertise that power our solutions."
        label="HUMAN RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Skills" }]}
        ctaText="Work With Us"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all"
              >
                <skill.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;