import { motion } from "framer-motion";

const features = [
  {
    title: "Unified Platform",
    description: "Empower your enterprise teams with a unified SAP platform to deliver frictionless, omnichannel business experiences — while staying ",
    highlight: "on-brand every time, everywhere.",
    highlightColor: "text-foreground",
    image: "/sap-s4hana-implementation.webp",
  },
  {
    title: "AI-Native Foundation",
    description: "AI is seamlessly infused across the Sangronyx platform, enabling you to ",
    highlight: "scale effortlessly",
    highlightColor: "text-sprinklr-blue",
    afterHighlight: " while powering ",
    secondHighlight: "continuous innovation",
    secondHighlightColor: "text-sprinklr-purple",
    afterSecondHighlight: " for your enterprise teams.",
    image: "/sap-corporate-training.avif",
  },
  {
    title: "Enterprise-Grade Scale",
    description: "Equip your global teams with extensive customizability and seamless integration with your existing tech stack. Built for enterprises, our ",
    highlight: "Unified-SAP platform",
    highlightColor: "text-sprinklr-blue",
    afterHighlight: " scales effortlessly as your needs evolve.",
    image: "/sap-ecc-to-s4hana-migration.avif",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Get the Sangronyx Advantage
          </h2>
        </motion.div>

        {/* Features Grid - 3-column card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl border border-border/50 p-6 lg:p-8 flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              {/* Description with highlights */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-grow">
                {feature.description}
                <span className={feature.highlightColor}>{feature.highlight}</span>
                {feature.afterHighlight && feature.afterHighlight}
                {feature.secondHighlight && (
                  <span className={feature.secondHighlightColor}>{feature.secondHighlight}</span>
                )}
                {feature.afterSecondHighlight && feature.afterSecondHighlight}
              </p>
              
              {/* Image */}
              <div className="mt-auto">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-40 md:h-48 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
