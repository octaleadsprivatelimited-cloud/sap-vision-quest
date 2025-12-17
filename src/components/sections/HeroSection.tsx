import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckSquare, Sparkles, Share2, FileEdit, LayoutGrid, MessageSquare } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] py-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-left mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Go beyond bolted-on{" "}
              <span className="block">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Discover AI that's woven into every SAP process—so your whole business can grow, adapt, and scale together.
            </p>
            <Link to="/solutions">
              <Button 
                size="lg" 
                className="bg-[#0096d6] hover:bg-[#0077b3] text-white text-base px-8 py-6 h-auto font-semibold rounded-full"
              >
                Explore SAP Business AI
              </Button>
            </Link>
          </motion.div>

          {/* Right Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative h-[400px] lg:h-[500px] w-full"
          >
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
              {/* Horizontal line */}
              <line x1="100" y1="200" x2="450" y2="200" stroke="white" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" />
              {/* Vertical line */}
              <line x1="400" y1="50" x2="400" y2="400" stroke="white" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" />
              {/* Diagonal line */}
              <line x1="200" y1="280" x2="320" y2="350" stroke="white" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" />
              {/* Small dots at intersections */}
              <circle cx="400" cy="200" r="4" fill="white" opacity="0.6" />
              <circle cx="450" cy="200" r="3" fill="white" opacity="0.6" />
            </svg>

            {/* Top right - Checkmark icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-8 right-8 lg:right-16 bg-white rounded-2xl p-4 shadow-lg"
            >
              <CheckSquare className="w-8 h-8 text-[#7c3aed]" />
            </motion.div>

            {/* Layout Grid icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-20 left-1/4 bg-white rounded-2xl p-4 shadow-lg"
            >
              <LayoutGrid className="w-8 h-8 text-[#7c3aed]" />
            </motion.div>

            {/* Center - Sparkles icon (main feature) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-[#1e3a5f] rounded-2xl p-6 shadow-xl"
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>

            {/* Right side - FileEdit icon */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-1/2 right-4 lg:right-8 bg-white rounded-2xl p-4 shadow-lg"
            >
              <FileEdit className="w-8 h-8 text-[#7c3aed]" />
            </motion.div>

            {/* Chart/Graph element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-24 left-1/4 bg-white rounded-2xl p-4 shadow-lg"
            >
              <div className="w-32 h-20">
                <div className="flex items-end justify-between h-full gap-1 p-2">
                  <div className="w-1 bg-[#7c3aed] rounded" style={{ height: '40%' }} />
                  <div className="w-1 bg-[#7c3aed] rounded" style={{ height: '60%' }} />
                  <div className="w-1 bg-[#7c3aed] rounded" style={{ height: '30%' }} />
                  <div className="w-1 bg-[#7c3aed] rounded" style={{ height: '80%' }} />
                  <div className="w-1 bg-[#7c3aed] rounded" style={{ height: '50%' }} />
                  <div className="w-1 bg-[#7c3aed] rounded" style={{ height: '70%' }} />
                  <div className="w-1 bg-[#7c3aed] rounded" style={{ height: '45%' }} />
                </div>
                {/* Line chart overlay */}
                <svg className="absolute bottom-8 left-8 w-28 h-16" viewBox="0 0 100 50">
                  <polyline
                    points="0,40 20,30 40,35 60,20 80,25 100,10"
                    fill="none"
                    stroke="#0096d6"
                    strokeWidth="2"
                  />
                  <circle cx="0" cy="40" r="3" fill="#0096d6" />
                  <circle cx="20" cy="30" r="3" fill="#0096d6" />
                  <circle cx="40" cy="35" r="3" fill="#0096d6" />
                  <circle cx="60" cy="20" r="3" fill="#0096d6" />
                  <circle cx="80" cy="25" r="3" fill="#0096d6" />
                  <circle cx="100" cy="10" r="3" fill="#0096d6" />
                </svg>
              </div>
            </motion.div>

            {/* Share icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-8 right-1/4 bg-white rounded-2xl p-4 shadow-lg"
            >
              <Share2 className="w-8 h-8 text-[#7c3aed]" />
            </motion.div>

            {/* Small diamond connector */}
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#7c3aed] rotate-45" />
          </motion.div>
        </div>
      </div>

      {/* Contact us floating button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link to="/contact">
          <Button 
            className="bg-[#1e3a5f] hover:bg-[#152a45] text-white px-6 py-3 h-auto rounded-full flex items-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            Contact us
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};
