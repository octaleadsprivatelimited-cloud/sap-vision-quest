import { motion } from "framer-motion";
import { Sparkles, LayoutGrid, Share2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center max-w-5xl leading-tight"
          >
            Driving Intelligent Enterprises with SAP
          </motion.h1>

          {/* Reduced Illustrations */}
          <div className="relative w-full max-w-3xl h-[200px] mt-12">
            {/* Left icon */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-1/2 left-0 -translate-y-1/2"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
              >
                <LayoutGrid className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>

            {/* Center icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-primary rounded-2xl p-6 shadow-2xl"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Right icon */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-1/2 right-0 -translate-y-1/2"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
              >
                <Share2 className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>

            {/* Connection line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200">
              <motion.line 
                x1="80" y1="100" x2="520" y2="100" 
                stroke="white" strokeWidth="2" strokeDasharray="8 8" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
