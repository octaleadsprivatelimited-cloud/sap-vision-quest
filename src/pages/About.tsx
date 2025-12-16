import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for excellence in every project we deliver." },
  { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork and collaboration." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace innovation to solve complex business challenges." },
  { icon: Shield, title: "Integrity", description: "We operate with honesty, transparency, and ethical standards." },
];

const milestones = [
  { year: "SAP S/4HANA", event: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup." },
  { year: "ECC Migration", event: "Seamless migration from ECC to S/4HANA with readiness check and training." },
  { year: "SAP Training", event: "Functional and technical SAP training for all major modules." },
  { year: "SAP AMS", event: "Ongoing SAP support with SLA-backed incident management." },
  { year: "SAP Development", event: "Custom ABAP, Fiori, and integration development services." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Who We Are"
        description="Sangronyx is a leading provider of IT services and SAP solutions, helping businesses transform and grow."
      />

      {/* Mission */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Sangronyx, we are committed to delivering exceptional IT services and SAP solutions that drive business transformation. Our team of experts combines deep technical knowledge with industry experience to help organizations achieve their digital goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that create lasting value.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/why-choose-us.avif" 
                  alt="About Sangronyx" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl p-6 shadow-xl">
                <div className="text-center text-primary-foreground">
                  <div className="text-3xl md:text-4xl font-bold">10+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border text-center hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Timeline */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our SAP Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete SAP solutions for business transformation
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div className="bg-card rounded-xl p-6 border border-border flex-1 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  <div className="text-xl font-bold text-accent mb-2">{milestone.year}</div>
                  <div className="text-muted-foreground">{milestone.event}</div>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our SAP solutions can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-base font-semibold group">
                Contact Us Today
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

export default About;
