import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PageBackground, SectionBackground } from "@/components/ui/page-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react";

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
      
      {/* Hero */}
      <PageHero 
        title="Who We Are"
        description="Sangronyx is a leading provider of IT services and SAP solutions, helping businesses transform and grow."
      />

      {/* Mission */}
      <PageBackground>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  At Sangronyx, we are committed to delivering exceptional IT services and SAP solutions that drive business transformation. Our team of experts combines deep technical knowledge with industry experience to help organizations achieve their digital goals.
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that create lasting value.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/why-choose-us.avif" 
                    alt="About Sangronyx" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 gradient-hero rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center text-primary-foreground">
                    <div className="text-2xl md:text-3xl font-bold">10+</div>
                    <div className="text-xs md:text-sm">Years</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageBackground>

      {/* Values */}
      <SectionBackground variant="secondary">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Our Values
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-4 md:p-6 border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Services Timeline */}
      <PageBackground>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Our SAP Services
              </h2>
              <p className="text-base md:text-lg text-muted-foreground px-4">
                Complete SAP solutions for business transformation
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
              
              {/* Mobile vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden" />
              
              <div className="space-y-6 md:space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-start md:items-center gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Mobile dot */}
                    <div className="w-3 h-3 rounded-full gradient-hero flex-shrink-0 mt-6 md:hidden z-10" />
                    
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-4 md:p-6 border border-border inline-block w-full md:w-auto hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                        <div className="text-lg md:text-2xl font-bold text-primary mb-1">{milestone.year}</div>
                        <div className="text-sm md:text-base text-muted-foreground">{milestone.event}</div>
                      </div>
                    </div>
                    
                    {/* Desktop dot */}
                    <div className="w-4 h-4 rounded-full gradient-hero hidden md:block z-10 flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageBackground>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-hero relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 max-w-xl mx-auto px-4">
              Let's discuss how our SAP solutions can help you achieve your business goals.
            </p>
            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
