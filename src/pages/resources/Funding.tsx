import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Banknote, CreditCard, RefreshCw, Shield } from "lucide-react";

const Funding = () => {
  const features = [
    { icon: Banknote, title: "Loan Facilities", description: "Access to credit facilities supporting growth and operational needs." },
    { icon: CreditCard, title: "Working Capital", description: "Adequate working capital ensuring smooth day-to-day operations." },
    { icon: RefreshCw, title: "Cash Flow Management", description: "Efficient cash flow management maintaining financial health." },
    { icon: Shield, title: "Financial Security", description: "Strong financial backing providing stability and confidence." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Loans, Funding, and Cash Flow"
        description="Understanding our financial resources and funding mechanisms."
        label="FINANCIAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Funding" }]}
        ctaText="Contact Us"
        ctaHref="/contact"
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

export default Funding;