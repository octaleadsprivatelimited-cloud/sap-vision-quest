import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getWebsiteContent } from "@/data/pageContentData";

const Resources = () => {
  const seo = useSEO();
  const { resources, pageTexts } = getWebsiteContent();
  const textContent = pageTexts?.resources || {
    heroTitle: "Resources",
    heroDescription: "Access helpful resources, documentation, and materials to support your business journey.",
    heroLabel: "RESOURCE CENTER",
    ctaButtonText: "Explore Resources",
    sectionTitle: "Everything You Need. One Resource Hub.",
    ctaTitle: "Need More Help?",
    ctaDescription: "Can't find what you're looking for? Contact our team for personalized assistance."
  };
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel || "RESOURCE CENTER"}
        breadcrumbs={[{ label: "Resources" }]}
        ctaText={textContent.ctaButtonText || "Explore Resources"}
        backgroundImage="/hero-background.jpg"
        ctaHref="#resources"
      />

      {/* Resources Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" id="resources">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              {textContent.sectionTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {resources.map((resource, index) => {
              const Icon = (LucideIcons as any)[resource.iconName] || LucideIcons.Book;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group"
                >
                  <div className="flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <Icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title with colored underline */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {resource.title}
                      </h3>
                      <div className={`w-12 h-1 rounded-full ${resource.color}`}></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 min-h-[60px]">
                      {resource.description}
                    </p>
                    
                    {/* Explore Link */}
                    <Link 
                      to={resource.link} 
                      className="inline-flex items-center gap-2 text-foreground font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Explore {resource.title}</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {textContent.ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              {textContent.ctaDescription}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-base font-semibold group">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
