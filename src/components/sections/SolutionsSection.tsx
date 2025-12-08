import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Users, Zap, LineChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Cloud,
    title: "Cloud ERP",
    description: "Transform operations with intelligent cloud solutions designed for enterprise scale.",
    link: "#",
  },
  {
    icon: Database,
    title: "Business Technology Platform",
    description: "Unify data, analytics, AI, and application development on one platform.",
    link: "#",
  },
  {
    icon: Users,
    title: "Human Capital Management",
    description: "Empower your workforce with next-generation HR experiences.",
    link: "#",
  },
  {
    icon: Zap,
    title: "Supply Chain Management",
    description: "Build resilient, sustainable supply chains that respond to change.",
    link: "#",
  },
  {
    icon: LineChart,
    title: "Customer Experience",
    description: "Deliver personalized experiences that drive loyalty and growth.",
    link: "#",
  },
  {
    icon: Shield,
    title: "Spend Management",
    description: "Control costs and optimize spend across your entire organization.",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const SolutionsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Support every team and strengthen every process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equip every team with the tools to adapt, scale, and deliver real results.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-sap-light-purple flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <solution.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {solution.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="lg" className="group">
            Explore All Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
