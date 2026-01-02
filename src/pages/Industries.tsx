import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { ArrowRight, Factory, ShoppingCart, Building2, Heart, Truck, Leaf, Banknote, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "SAP solutions for manufacturing to optimize production, quality, and supply chain operations.",
    color: "bg-accent",
    slug: "manufacturing",
    image: "/manufacturing hero section background.jpg",
  },
  {
    icon: ShoppingCart,
    title: "Retail & FMCG",
    description: "SAP solutions for retail and FMCG to deliver seamless experiences and optimize inventory.",
    color: "bg-sprinklr-green",
    slug: "retail",
    image: "/Retail and FMCG hero section background.jpg",
  },
  {
    icon: Heart,
    title: "Pharma",
    description: "SAP solutions for pharmaceutical companies to ensure compliance and streamline operations.",
    color: "bg-sprinklr-purple",
    slug: "pharma",
    image: "/PHARMA hero section background.jpg",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "SAP solutions for logistics to build resilient supply chains with end-to-end visibility.",
    color: "bg-accent",
    slug: "logistics",
    image: "/logistics and supply chain hero section background.jpg",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "SAP solutions for educational institutions to transform operations and student experiences.",
    color: "bg-sprinklr-green",
    slug: "education",
    image: "/EDUCATION hero section background.jpg",
  },
  {
    icon: Banknote,
    title: "Finance",
    description: "SAP solutions for finance to modernize operations with real-time insights and compliance.",
    color: "bg-sprinklr-purple",
    slug: "finance",
    image: "/FINANCE hero section background.jpg",
  },
  {
    icon: Building2,
    title: "Small & Mid Businesses",
    description: "Tailored SAP solutions for small and mid-sized businesses to drive growth and efficiency.",
    color: "bg-accent",
    slug: "small-business",
    image: "/SMALL & MID BUSINESS.jpg",
  },
];

const Industries = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="Industry-Focused SAP Solutions That Deliver Business Value"
        description="We design and deliver SAP solutions tailored to the unique processes and challenges of different industries."
        label=""
        breadcrumbs={[{ label: "Industries" }]}
        backgroundImage="/industries hero section background.png"
      />

      {/* Industries Grid */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0096d6]/5 via-white to-[#0077b3]/5 z-0" />
        
        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute -top-20 -right-20 md:top-10 md:right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#0096d6]/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -bottom-20 -left-20 md:bottom-10 md:left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#0077b3]/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#0096d6]/5 rounded-full blur-3xl"
          />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0096d6 1px, transparent 1px),
              linear-gradient(to bottom, #0096d6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-[#0096d6] uppercase tracking-wider mb-4">
              Industries We Serve
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              Seven Industry Verticals. One Unified SAP Platform.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
              >
                <Link to={`/industries/${industry.slug}`} className="block h-full">
                  <div className="h-full bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      {/* Icon overlay */}
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <industry.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Title with colored underline */}
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {industry.title}
                        </h3>
                        <div className={`w-12 h-1 rounded-full ${industry.color}`}></div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[60px]">
                        {industry.description}
                      </p>
                      
                      {/* Explore Link */}
                      <div className="inline-flex items-center gap-2 text-foreground font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                        <span>Explore {industry.title}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
