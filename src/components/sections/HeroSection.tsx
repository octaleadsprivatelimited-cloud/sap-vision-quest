import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f5f5] pt-20">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left py-12 lg:py-0"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.15] mb-6 text-gray-900">
              The definitive platform for{" "}
              <span className="text-gray-900">complete SAP</span>{" "}
              solutions
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img 
              src="/hero-background-image.jpeg" 
              alt="SAP Solutions Professional" 
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Floating notification cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute top-1/3 right-4 bg-white rounded-lg shadow-lg p-3 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium text-gray-900 text-xs">Emily Kay</p>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-1/2 right-8 bg-white rounded-lg shadow-lg p-3 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium text-gray-900 text-xs">James Andrew</p>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
              </div>
            </motion.div>
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
