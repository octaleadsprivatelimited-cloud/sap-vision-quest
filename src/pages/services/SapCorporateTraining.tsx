import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Monitor, Building, Award, BookOpen, BarChart3, Headphones, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Monitor, title: "Training Delivery Models", desc: "Online, offline, and blended learning options" },
  { icon: BookOpen, title: "Functional SAP Training", desc: "FI, CO, MM, SD, PP, QM, PM, WM, EWM, PS modules" },
  { icon: GraduationCap, title: "Technical SAP Training", desc: "ABAP, BASIS, Security/GRC, PI/PO, CPI" },
  { icon: Building, title: "S/4HANA-Focused Programs", desc: "Migration-ready training for S/4HANA" },
  { icon: Users, title: "Hands-On & Practical Learning", desc: "Real-world scenarios and sandbox access" },
  { icon: Building, title: "Corporate Enablement Programs", desc: "Customized training for your teams" },
  { icon: Award, title: "Certification & Career Support", desc: "SAP certification preparation assistance" },
  { icon: BarChart3, title: "Evaluation & Reporting", desc: "Progress tracking and assessments" },
  { icon: Factory, title: "Industry-Specific Training", desc: "Training tailored to your industry" },
  { icon: Headphones, title: "Post-Training Support", desc: "Ongoing support after training completion" },
];

const deliveryModes = [
  { title: "Online Training", desc: "Live virtual instructor-led sessions", icon: Monitor },
  { title: "Classroom Training", desc: "In-person training at your location or ours", icon: Building },
  { title: "Corporate Batches", desc: "Dedicated batches for your organization", icon: Users },
];

const SapCorporateTraining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="SAP Corporate Training"
        description="Comprehensive SAP training programs for teams of all skill levels. Empower your workforce with expert-led training."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "SAP Corporate Training" }
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Invest in Your <span className="text-accent">Team's Growth</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A well-trained team is the foundation of successful SAP operations. Our corporate training programs are designed to equip your employees with the skills they need to maximize your SAP investment.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From end-users to technical teams, we offer training programs that cater to all roles and experience levels within your organization.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/sap-corporate-training.avif" 
                alt="SAP Corporate Training"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Modes */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Training <span className="text-accent">Delivery Modes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible training options to suit your organization's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {deliveryModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border/50 text-center"
              >
                <mode.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{mode.title}</h3>
                <p className="text-sm text-muted-foreground">{mode.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Training <span className="text-accent">Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors"
              >
                <service.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
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
              Ready to Train Your Team?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your training requirements and get a customized program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Request Training <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Solutions
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

export default SapCorporateTraining;
