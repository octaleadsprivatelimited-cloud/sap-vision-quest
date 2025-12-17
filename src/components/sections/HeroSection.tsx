import { motion } from "framer-motion";
import { CheckSquare, Sparkles, Share2, FileEdit, LayoutGrid } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] py-12">
          {/* Centered Animated Decorative Elements */}
          <div className="relative w-full max-w-4xl h-[500px] lg:h-[600px]">
            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
              {/* Horizontal line */}
              <motion.line 
                x1="100" y1="300" x2="700" y2="300" 
                stroke="white" strokeWidth="2" strokeDasharray="8 8" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              {/* Vertical line */}
              <motion.line 
                x1="550" y1="80" x2="550" y2="520" 
                stroke="white" strokeWidth="2" strokeDasharray="8 8" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              {/* Diagonal line 1 */}
              <motion.line 
                x1="250" y1="380" x2="400" y2="480" 
                stroke="white" strokeWidth="2" strokeDasharray="8 8" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              {/* Diagonal line 2 */}
              <motion.line 
                x1="400" y1="200" x2="550" y2="300" 
                stroke="white" strokeWidth="2" strokeDasharray="8 8" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              {/* Animated dots at intersections */}
              <motion.circle 
                cx="550" cy="300" r="5" fill="white"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
              <motion.circle 
                cx="700" cy="300" r="4" fill="white"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
              />
            </svg>

            {/* Top right - Checkmark icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-8 right-12 lg:right-24"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-5 shadow-xl"
              >
                <CheckSquare className="w-10 h-10 text-[#7c3aed]" />
              </motion.div>
            </motion.div>

            {/* Layout Grid icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-16 left-16 lg:left-32"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-white rounded-2xl p-5 shadow-xl"
              >
                <LayoutGrid className="w-10 h-10 text-[#7c3aed]" />
              </motion.div>
            </motion.div>

            {/* Center - Sparkles icon (main feature) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 35px 60px -15px rgba(0, 0, 0, 0.35)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#1e3a5f] rounded-3xl p-8 shadow-2xl"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-16 h-16 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - FileEdit icon */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/3 right-4 lg:right-12"
            >
              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white rounded-2xl p-5 shadow-xl"
              >
                <FileEdit className="w-10 h-10 text-[#7c3aed]" />
              </motion.div>
            </motion.div>

            {/* Chart/Graph element */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-20 left-8 lg:left-24"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="bg-white rounded-2xl p-5 shadow-xl"
              >
                <div className="w-36 h-24 relative">
                  {/* Bar chart */}
                  <div className="flex items-end justify-between h-full gap-1.5 p-2">
                    {[40, 60, 35, 80, 55, 70, 45].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                        className="w-2 bg-[#7c3aed]/30 rounded"
                      />
                    ))}
                  </div>
                  {/* Animated line chart overlay */}
                  <svg className="absolute bottom-4 left-4 w-32 h-16" viewBox="0 0 100 50">
                    <motion.polyline
                      points="0,40 20,30 40,35 60,20 80,25 100,10"
                      fill="none"
                      stroke="#0096d6"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    {[
                      { cx: 0, cy: 40 },
                      { cx: 20, cy: 30 },
                      { cx: 40, cy: 35 },
                      { cx: 60, cy: 20 },
                      { cx: 80, cy: 25 },
                      { cx: 100, cy: 10 }
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.cx}
                        cy={point.cy}
                        r="4"
                        fill="#0096d6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.8 + i * 0.15 }}
                      />
                    ))}
                  </svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Share icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-16 right-16 lg:right-32"
            >
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="bg-white rounded-2xl p-5 shadow-xl"
              >
                <Share2 className="w-10 h-10 text-[#7c3aed]" />
              </motion.div>
            </motion.div>

            {/* Animated diamond connectors */}
            <motion.div 
              animate={{ rotate: 45, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/3 left-1/3 w-4 h-4 bg-[#7c3aed]" 
            />
            <motion.div 
              animate={{ rotate: 45, scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white/60" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
