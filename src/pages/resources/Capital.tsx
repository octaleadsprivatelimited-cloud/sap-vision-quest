import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { DollarSign, PiggyBank, TrendingUp, BarChart3 } from "lucide-react";

const Capital = () => {
  const features = [
    { icon: DollarSign, title: "Capital Reserves", description: "Strong capital base ensuring financial stability and growth opportunities." },
    { icon: PiggyBank, title: "Investment Portfolio", description: "Diversified investments supporting long-term business sustainability." },
    { icon: TrendingUp, title: "Growth Capital", description: "Dedicated funds for expansion, innovation, and strategic initiatives." },
    { icon: BarChart3, title: "Asset Management", description: "Professional management of financial assets maximizing returns." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Capital and Investments"
        description="Understanding our financial foundation and investment strategies."
        label="FINANCIAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Capital" }]}
        ctaText="Partner With Us"
        ctaHref="/partners"
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

export default Capital;