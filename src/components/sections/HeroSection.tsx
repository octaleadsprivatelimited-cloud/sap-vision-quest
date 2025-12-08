import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BarChart3, CheckCircle2, Share2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] gradient-hero overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(90vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-primary-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">SAP Business AI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Go beyond
              <br />
              bolted-on AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg"
            >
              Discover AI that's woven into every SAP process—so your whole business can grow, adapt, and scale together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="group">
                Explore SAP Business AI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main illustration container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Connecting lines - SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <motion.path
                    d="M100 100 L200 180 L320 120"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M200 180 L280 260 L350 300"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M200 180 L100 280"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
                  />
                </svg>

                {/* Floating icons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-12 left-12 w-16 h-16 bg-sap-navy rounded-xl flex items-center justify-center shadow-xl animate-float"
                >
                  <BarChart3 className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-8 right-16 w-14 h-14 bg-primary-foreground rounded-xl flex items-center justify-center shadow-xl animate-float animation-delay-150"
                >
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-sap-navy rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-soft"
                >
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-20 right-8 w-14 h-14 bg-primary-foreground rounded-full flex items-center justify-center shadow-xl animate-float animation-delay-300"
                >
                  <Share2 className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Chart card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute bottom-16 left-8 bg-primary-foreground/10 backdrop-blur-md rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1.6 + i * 0.1, duration: 0.4 }}
                        className="w-3 bg-primary-foreground/60 rounded-t"
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="h-1 flex-1 bg-primary-foreground/30 rounded" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 100V50C240 83 480 100 720 100C960 100 1200 83 1440 50V100H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
