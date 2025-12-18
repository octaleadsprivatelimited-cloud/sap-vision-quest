import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { LineChart, Wallet, Target, Award } from "lucide-react";

const Revenue = () => {
  const features = [
    { icon: LineChart, title: "Revenue Growth", description: "Consistent revenue growth driven by quality services and client satisfaction." },
    { icon: Wallet, title: "Profit Margins", description: "Healthy profit margins enabling reinvestment and continuous improvement." },
    { icon: Target, title: "Revenue Streams", description: "Diversified revenue streams across consulting, implementation, and support services." },
    { icon: Award, title: "Financial Performance", description: "Strong financial performance reflecting operational excellence." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Revenue and Profits"
        description="Explore our financial performance and sustainable business model."
        label="FINANCIAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Revenue" }]}
        ctaText="Our Services"
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

export default Revenue;