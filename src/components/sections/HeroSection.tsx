import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-sap-background.jpg')" }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 lg:py-0 max-w-4xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.15] mb-6 text-white">
              The definitive platform for{" "}
              <span className="text-cyan-400">complete SAP</span>{" "}
              solutions
            </h1>

            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Unify your business processes and empower teams by implementing world-class SAP solutions. 
              Elevate every operation with expert guidance to deliver extraordinary experiences that build lasting success.
            </p>

            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-[#0096d6] hover:bg-[#0077b3] text-white text-base px-8 py-6 h-auto font-semibold rounded-md"
              >
                Contact us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Colorful gradient wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0e68c" />
              <stop offset="25%" stopColor="#90EE90" />
              <stop offset="50%" stopColor="#40E0D0" />
              <stop offset="75%" stopColor="#00CED1" />
              <stop offset="100%" stopColor="#0096d6" />
            </linearGradient>
          </defs>
          <path 
            d="M0,60 Q360,120 720,60 T1440,60 L1440,120 L0,120 Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
};
