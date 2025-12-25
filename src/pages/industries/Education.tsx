import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen, BarChart3, Calendar, CreditCard, Building, Award } from "lucide-react";
import { Link } from "react-router-dom";
import industryEducationImg from "@/assets/industry-education.jpg";

const sapSolutions = [
  { icon: Users, title: "Student Lifecycle Management", desc: "Manage the complete student journey from admission to alumni engagement." },
  { icon: BookOpen, title: "Academic Management", desc: "Course scheduling, curriculum management, and academic planning." },
  { icon: CreditCard, title: "Financial Management", desc: "Tuition, fees, grants, and financial aid management with SAP." },
  { icon: Building, title: "Campus Management", desc: "Facilities, resources, and infrastructure management." },
  { icon: Calendar, title: "Scheduling & Timetabling", desc: "Automated scheduling for classes, exams, and resources." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Student performance analytics, enrollment trends, and institutional insights." },
  { icon: Award, title: "Accreditation Support", desc: "Streamline compliance and accreditation documentation." },
  { icon: GraduationCap, title: "E-Learning Integration", desc: "Integrate learning management systems and digital learning platforms." },
];

const benefits = [
  "Improve student engagement and retention",
  "Streamline administrative processes by 50%",
  "Data-driven decision making",
  "Enhanced student experience",
  "Efficient resource allocation",
  "Simplified compliance and reporting",
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP for Education"
        description="Transform educational institutions with SAP solutions that enhance student experiences and streamline administrative operations."
        label="INDUSTRY SOLUTIONS"
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Education" }
        ]}
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-10 h-10 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Education Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Education Excellence with <span className="text-accent">SAP Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Educational institutions face increasing pressure to deliver exceptional student experiences while managing costs and complexity. SAP provides integrated solutions that connect students, faculty, and administrators.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our SAP education solutions help you manage the complete student lifecycle, optimize resources, and gain insights that drive institutional success.
              </p>
              <div className="space-y-3">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={industryEducationImg} 
                alt="SAP Education Solutions" 
                className="rounded-2xl shadow-xl w-full mb-6"
              />
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-background/80 rounded-lg p-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAP Solutions Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SAP Modules for <span className="text-accent">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SAP solutions designed specifically for educational institutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sapSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let our SAP experts help you create a connected, data-driven educational experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  View All Industries
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
