import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  label?: string;
  breadcrumbs?: { label: string; href?: string }[];
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  compact?: boolean;
}

export const PageHero = ({ 
  title, 
  description, 
  label,
  breadcrumbs = [],
  ctaText,
  ctaHref = "/contact",
  backgroundImage,
  compact = false
}: PageHeroProps) => {
  return (
    <section className={cn(
      "relative bg-white overflow-hidden",
      compact 
        ? "pt-16 pb-8 md:pt-20 md:pb-10" 
        : "pt-20 pb-12 md:pt-28 md:pb-16"
    )}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      
      {/* Subtle background gradient blurs - only show if no background image */}
      {!backgroundImage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0096d6]/5 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#f5a623]/5 to-transparent rounded-full blur-[100px]" />
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm border",
              backgroundImage 
                ? "bg-white/10 backdrop-blur-sm border-white/20" 
                : "bg-white border-gray-100"
            )}>
              <Link to="/" className={cn(
                "flex items-center transition-colors",
                backgroundImage 
                  ? "text-white hover:text-white/80" 
                  : "text-gray-600 hover:text-[#0096d6]"
              )}>
                <Home className="w-4 h-4" />
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className={cn(
                    "w-4 h-4",
                    backgroundImage ? "text-white/60" : "text-gray-400"
                  )} />
                  {crumb.href ? (
                    <Link 
                      to={crumb.href}
                      className={cn(
                        "text-sm transition-colors",
                        backgroundImage 
                          ? "text-white hover:text-white/80" 
                          : "text-gray-600 hover:text-[#0096d6]"
                      )}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={cn(
                      "text-sm font-medium",
                      backgroundImage ? "text-white" : "text-gray-900"
                    )}>{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          {label && (
            <span className={`inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${backgroundImage ? 'text-white' : 'text-gray-500'}`}>
              {label}
            </span>
          )}

          {/* Title */}
          <h1 className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 leading-tight ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 ${backgroundImage ? 'text-white/90' : 'text-gray-600'}`}>
              {description}
            </p>
          )}

          {/* CTA Button */}
          {ctaText && (
            <Link to={ctaHref}>
              <Button 
                size="lg"
                className="bg-[#0096d6] hover:bg-[#0077b3] text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {ctaText}
              </Button>
            </Link>
          )}
        </motion.div>
      </div>

      {/* Bottom gradient wave - only show if no background image */}
      {!backgroundImage && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pageWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0096d6" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#00c9a7" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#ffd700" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="url(#pageWaveGradient)"
            />
            <path
              d="M0,80 C240,40 480,100 720,60 C960,20 1200,80 1440,40 L1440,120 L0,120 Z"
              fill="url(#pageWaveGradient)"
              opacity="0.5"
            />
          </svg>
        </div>
      )}
    </section>
  );
};
