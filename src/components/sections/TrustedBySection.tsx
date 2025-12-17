import { motion } from "framer-motion";

const logos = [
  { name: "WebMD", logo: null },
  { name: "Acer", logo: null },
  { name: "Infosys", logo: "/logos/infosys.png" },
  { name: "Prada", logo: null },
  { name: "Superdry", logo: null },
  { name: "LATAM", logo: null },
  { name: "LG", logo: null },
  { name: "Ford", logo: null },
  { name: "Puma", logo: "/logos/puma.png" },
  { name: "Diageo", logo: null },
];

export const TrustedBySection = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex"
        >
          <div className="flex animate-scroll gap-8 md:gap-12 lg:gap-16">
            {duplicatedLogos.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 px-4 md:px-6 py-2 flex items-center justify-center"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="h-8 md:h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="text-base md:text-lg lg:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex animate-scroll gap-8 md:gap-12 lg:gap-16">
            {duplicatedLogos.map((item, index) => (
              <div
                key={`${item.name}-duplicate-${index}`}
                className="flex-shrink-0 px-4 md:px-6 py-2 flex items-center justify-center"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="h-8 md:h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="text-base md:text-lg lg:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
