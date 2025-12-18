import { motion } from "framer-motion";

const logos = [
  { name: "Ford", logo: "/logos/ford.png", large: false },
  { name: "Gulf", logo: "/logos/gulf.png", large: false },
  { name: "Walmart", logo: "/logos/walmart.webp", large: true },
  { name: "Superdry", logo: "/logos/superdry.png", large: false },
  { name: "LG", logo: "/logos/lg.webp", large: false },
  { name: "L&T", logo: "/logos/lnt.png", large: false },
  { name: "Mercedes-Benz", logo: "/logos/mercedes.png", large: false },
  { name: "Samsung", logo: "/logos/samsung.webp", large: true },
  { name: "Shell", logo: "/logos/shell.svg", large: false },
];

export const TrustedBySection = () => {

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
          {logos.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 px-4 md:px-6 py-2 flex items-center justify-center"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className={`${item.large ? 'h-12 md:h-16 lg:h-20' : 'h-8 md:h-10 lg:h-12'} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`}
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
            {logos.map((item, index) => (
              <div
                key={`${item.name}-duplicate-${index}`}
                className="flex-shrink-0 px-4 md:px-6 py-2 flex items-center justify-center"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className={`${item.large ? 'h-12 md:h-16 lg:h-20' : 'h-8 md:h-10 lg:h-12'} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`}
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
