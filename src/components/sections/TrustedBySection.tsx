import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const companies = [
  "Microsoft",
  "Apple",
  "Google",
  "Amazon",
  "Meta",
  "Netflix",
  "Tesla",
  "IBM",
];

export const TrustedBySection = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sap-blue/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Building2 className="w-3.5 h-3.5 mr-2" />
              Trusted Partners
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Trusted by the{" "}
            <span className="bg-gradient-to-r from-primary via-sap-blue to-accent bg-clip-text text-transparent">
              world's leading
            </span>{" "}
            enterprises
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto"
          >
            Join thousands of companies that trust Sangronyx for their SAP solutions
          </motion.p>
        </motion.div>
        
        {/* Companies Scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative overflow-hidden"
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex gap-6 md:gap-8 lg:gap-12 animate-scroll">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${company}-${index}`}
                className="group relative flex-shrink-0"
              >
                <div className="relative bg-card/60 backdrop-blur-sm rounded-xl md:rounded-2xl px-8 md:px-12 lg:px-16 py-6 md:py-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center min-w-[200px] md:min-w-[250px]">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-sap-blue/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" />
                  
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl md:rounded-t-2xl bg-gradient-to-r from-primary via-sap-blue to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Company name */}
                  <div className="relative z-10 text-center">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-foreground/60 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                      {company}
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary via-sap-blue to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${company}-${index}`}
                className="group relative flex-shrink-0"
              >
                <div className="relative bg-card/60 backdrop-blur-sm rounded-xl md:rounded-2xl px-8 md:px-12 lg:px-16 py-6 md:py-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center min-w-[200px] md:min-w-[250px]">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-sap-blue/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" />
                  
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl md:rounded-t-2xl bg-gradient-to-r from-primary via-sap-blue to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Company name */}
                  <div className="relative z-10 text-center">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-foreground/60 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                      {company}
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary via-sap-blue to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
