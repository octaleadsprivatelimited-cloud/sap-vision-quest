import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Users, Award, Briefcase, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Employees = () => {
  const features = [
    { icon: Users, title: "Dedicated Teams", description: "Our employees are organized into specialized teams focused on delivering excellence in every project.", color: "bg-blue-500", link: "/careers" },
    { icon: Award, title: "Expert Professionals", description: "Highly qualified professionals with extensive experience in SAP and IT consulting.", color: "bg-orange-500", link: "/careers" },
    { icon: Briefcase, title: "Management Excellence", description: "Strong management team driving strategic initiatives and operational efficiency.", color: "bg-green-500", link: "/careers" },
    { icon: Target, title: "Goal-Oriented", description: "Every team member is aligned with organizational goals and client success.", color: "bg-purple-500", link: "/careers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Employees and Management Team"
        description="Meet our dedicated workforce and experienced management team driving innovation and success."
        label="HUMAN RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Employees" }]}
        ctaText="Join Our Team"
        ctaHref="/careers"
        backgroundImage="/hero-background-image.jpeg"
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

export default Employees;