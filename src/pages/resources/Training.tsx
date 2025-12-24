import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Award, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TrainingContactPopup } from "@/components/TrainingContactPopup";

const trainingPrograms = [
  {
    icon: BookOpen,
    title: "SAP Functional Training",
    description: "Comprehensive training on SAP modules including MM, SD, FICO, HR, and more.",
  },
  {
    icon: Target,
    title: "SAP Technical Training",
    description: "In-depth technical training on ABAP, Basis, HANA, and integration technologies.",
  },
  {
    icon: Award,
    title: "SAP Certification Prep",
    description: "Structured programs to prepare candidates for official SAP certifications.",
  },
  {
    icon: Users,
    title: "Corporate Batches",
    description: "Customized training programs designed for enterprise teams and organizations.",
  },
];

const benefits = [
  "Industry-experienced trainers with 10+ years expertise",
  "Hands-on practice with real SAP systems",
  "Flexible learning schedules - weekday and weekend batches",
  "100% placement assistance for eligible candidates",
  "Access to learning materials and resources",
  "Mock interviews and resume building support",
];

const Training = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show popup when page loads
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
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Training" },
        ]}
      />

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Expert-Led Training
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Transform Your Career with SAP Expertise
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our comprehensive training programs are designed to equip you with the skills 
                and knowledge needed to excel in the SAP ecosystem. Whether you're a beginner 
                or looking to advance your career, we have the right program for you.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/sap-corporate-training.avif"
                alt="SAP Training Programs"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Trained Professionals</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Training Programs
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from our range of specialized training programs designed for different skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <program.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm">{program.description}</p>
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
    </div>
  );
};

export default Training;
