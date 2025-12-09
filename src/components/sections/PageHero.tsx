import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
}

export const PageHero = ({ title, description }: PageHeroProps) => {
  return (
    <section className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
      {/* Image Background - No overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-background-image.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>

      {/* Text content aligned to left */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white drop-shadow-md">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

