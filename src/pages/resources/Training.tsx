import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TrainingContactPopup } from "@/components/TrainingContactPopup";

const trainingPrograms = [
  {
    icon: BookOpen,
    title: "SAP Functional Training",
    description: "Comprehensive training on SAP modules including MM, SD, FICO, HR, and more.",
    color: "bg-blue-500",
    link: "/resources/training-classes",
  },
  {
    icon: GraduationCap,
    title: "SAP Technical Training",
    description: "In-depth technical training on ABAP, Basis, HANA, and integration technologies.",
    color: "bg-orange-500",
    link: "/resources/training-classes",
  },
  {
    icon: Award,
    title: "SAP Certification Prep",
    description: "Structured programs to prepare candidates for official SAP certifications.",
    color: "bg-green-500",
    link: "/resources/training-classes",
  },
  {
    icon: Users,
    title: "Corporate Batches",
    description: "Customized training programs designed for enterprise teams and organizations.",
    color: "bg-purple-500",
    link: "/contact",
  },
];

const Training = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TrainingContactPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
      
      <PageHero
        title="Training Programs"
        description="Build your SAP career with industry-leading training programs"
        label="TRAINING & PLACEMENTS"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Training" },
        ]}
        ctaText="Enroll Now"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <program.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {program.title}
                </h3>
                <div className={`w-12 h-1 ${program.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                <Link 
                  to={program.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {program.title.split(' ')[1]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your SAP Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Enroll in our training programs and take the first step towards a successful SAP career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/resources/placements">
              <Button size="lg" variant="outline" className="font-semibold bg-transparent text-white border-white hover:bg-white hover:text-primary">
                View Placements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;