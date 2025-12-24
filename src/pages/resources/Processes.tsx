import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Workflow, BookOpen, Cog, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Processes = () => {
  const features = [
    { icon: Workflow, title: "Business Processes", description: "Refined business processes ensuring efficient and consistent service delivery.", color: "bg-blue-500", link: "/what-we-do" },
    { icon: BookOpen, title: "Know-how", description: "Accumulated knowledge and expertise from years of industry experience.", color: "bg-orange-500", link: "/what-we-do" },
    { icon: Cog, title: "Methodologies", description: "Proven methodologies for project management and implementation.", color: "bg-green-500", link: "/what-we-do" },
    { icon: Lightbulb, title: "Best Practices", description: "Industry best practices integrated into all our operations.", color: "bg-purple-500", link: "/what-we-do" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Business Processes and Know-how"
        description="Discover our refined processes and accumulated expertise."
        label="INTELLECTUAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Processes" }]}
        ctaText="Our Approach"
        ctaHref="/what-we-do"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <feature.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                <div className={`w-12 h-1 ${feature.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {feature.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
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

export default Processes;