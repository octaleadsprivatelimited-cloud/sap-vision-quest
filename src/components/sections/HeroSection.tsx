import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
          {/* Enterprise-level Heading */}
          <div className="text-center max-w-6xl">
            {/* Accent label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                SAP Solutions Partner
              </span>
            </motion.div>

            {/* Main Heading with word-by-word animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {["Empowering", "Businesses"].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="inline-block mr-4 text-white"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden md:block" />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"
              >
                with SAP Solutions
              </motion.span>
            </h1>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="h-1 w-32 md:w-48 mx-auto mt-8 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full origin-center"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Transform your business operations with cutting-edge SAP implementations, 
              migrations, and intelligent enterprise solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
