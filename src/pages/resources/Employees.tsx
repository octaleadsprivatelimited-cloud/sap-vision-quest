import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Users, Award, Briefcase, Target } from "lucide-react";

const Employees = () => {
  const features = [
    { icon: Users, title: "Dedicated Teams", description: "Our employees are organized into specialized teams focused on delivering excellence in every project." },
    { icon: Award, title: "Expert Professionals", description: "Highly qualified professionals with extensive experience in SAP and IT consulting." },
    { icon: Briefcase, title: "Management Excellence", description: "Strong management team driving strategic initiatives and operational efficiency." },
    { icon: Target, title: "Goal-Oriented", description: "Every team member is aligned with organizational goals and client success." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Employees and Management Team"
        description="Meet our dedicated workforce and experienced management team driving innovation and success."
        label="HUMAN RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Employees" }]}
        ctaText="Join Our Team"
        ctaHref="/careers"
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

export default Employees;