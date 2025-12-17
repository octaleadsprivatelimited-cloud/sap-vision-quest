import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PageBackground } from "@/components/ui/page-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users, Zap, Heart, GraduationCap, ArrowRight } from "lucide-react";

const jobOpenings = [
  {
    title: "SAP S/4HANA Consultant",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Consulting",
    description: "Lead SAP S/4HANA implementation projects and provide expert guidance to enterprise clients.",
  },
  {
    title: "SAP ABAP Developer",
    location: "Remote",
    type: "Full-time",
    department: "Development",
    description: "Design and develop custom SAP solutions using ABAP programming language.",
  },
  {
    title: "SAP Fiori/UI5 Developer",
    location: "Remote / On-site",
    type: "Full-time",
    department: "Development",
    description: "Create modern, responsive SAP Fiori applications and UI5 components.",
  },
  {
    title: "SAP Basis Administrator",
    location: "Remote",
    type: "Full-time",
    department: "Infrastructure",
    description: "Manage and maintain SAP system landscapes, ensuring optimal performance and security.",
  },
  {
    title: "Project Manager - SAP",
    location: "Hybrid",
    type: "Full-time",
    department: "Management",
    description: "Oversee SAP implementation projects from initiation to successful delivery.",
  },
  {
    title: "SAP Training Specialist",
    location: "Remote",
    type: "Contract",
    department: "Training",
    description: "Develop and deliver comprehensive SAP training programs for clients and internal teams.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "Work with cutting-edge SAP technologies and shape the future of enterprise solutions.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a team of passionate experts who support and learn from each other.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Access to SAP certifications, training programs, and professional development.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and comprehensive wellness programs.",
  },
];

const Careers = () => {
  return (
    <PageBackground>
      <Navbar />
      <PageHero
        title="Join Our Team"
        description="Build your career with Sangronyx and help transform businesses through innovative SAP solutions. We're looking for talented individuals who share our passion for excellence."
        label="CAREERS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
        ctaText="View Open Positions"
        ctaHref="#openings"
      />

      {/* Why Work With Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0099cc] text-sm font-semibold tracking-wider uppercase mb-3 block">
              Why Join Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work at Sangronyx?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job – we offer a career path filled with growth opportunities, meaningful work, and a supportive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#0099cc]/30"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0099cc]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#0099cc]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0099cc] text-sm font-semibold tracking-wider uppercase mb-3 block">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the role that matches your skills and career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#0099cc]/30 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-[#0099cc] bg-[#0099cc]/10 px-2 py-1 rounded-full">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-3">{job.title}</h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#0099cc] transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2942]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-white/70 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll reach out when a matching opportunity arises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#0099cc] hover:bg-[#00b3e6] text-white rounded-full px-8 py-3 h-auto text-base font-medium">
                  Contact Us
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-3 h-auto text-base font-medium">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageBackground>
  );
};

export default Careers;
