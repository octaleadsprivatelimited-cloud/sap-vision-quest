import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
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
  },
  {
    icon: ShoppingCart,
    title: "Retail & FMCG",
    description: "SAP solutions for retail and FMCG to deliver seamless experiences and optimize inventory.",
    color: "bg-sprinklr-green",
    slug: "retail",
  },
  {
    icon: Heart,
    title: "Pharma",
    description: "SAP solutions for pharmaceutical companies to ensure compliance and streamline operations.",
    color: "bg-sprinklr-purple",
    slug: "pharma",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "SAP solutions for logistics to build resilient supply chains with end-to-end visibility.",
    color: "bg-accent",
    slug: "logistics",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "SAP solutions for educational institutions to transform operations and student experiences.",
    color: "bg-sprinklr-green",
    slug: "education",
  },
  {
    icon: Banknote,
    title: "Finance",
    description: "SAP solutions for finance to modernize operations with real-time insights and compliance.",
    color: "bg-sprinklr-purple",
    slug: "finance",
  },
  {
    icon: Building2,
    title: "Small & Mid Businesses",
    description: "Tailored SAP solutions for small and mid-sized businesses to drive growth and efficiency.",
    color: "bg-accent",
    slug: "small-business",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Industry-Focused SAP Solutions That Deliver Business Value"
        description="We design and deliver SAP solutions tailored to the unique processes and challenges of different industries."
        label=""
        breadcrumbs={[{ label: "Industries" }]}
        backgroundImage="/industries hero section background.png"
      />

      {/* Industries Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
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
                <div className="flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <industry.icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                  </div>
                  
                  {/* Title with colored underline */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {industry.title}
                    </h3>
                    <div className={`w-12 h-1 rounded-full ${industry.color}`}></div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 min-h-[80px]">
                    {industry.description}
                  </p>
                  
                  {/* Explore Link */}
                  <Link 
                    to={`/industries/${industry.slug}`} 
                    className="inline-flex items-center gap-2 text-foreground font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Explore {industry.title}</span>
                  </Link>
                </div>
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
