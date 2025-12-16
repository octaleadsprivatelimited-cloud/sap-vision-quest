import { motion } from "framer-motion";

const logos = [
  "WebMD",
  "Acer",
  "Infosys",
  "Prada",
  "Superdry",
  "LATAM",
  "LG",
  "Ford",
  "Puma",
  "Diageo",
];

export const TrustedBySection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo row - Sprinklr style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="px-4 py-2"
            >
              <span className="text-lg md:text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">
                {logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
