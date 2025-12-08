import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award, Leaf, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer Success",
    description: "We are committed to making every customer successful. Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously innovate to help our customers stay ahead of change.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of collaboration and partnership.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to running sustainable operations and helping our customers do the same.",
  },
];

const milestones = [
  { year: "1972", event: "SAP founded in Mannheim, Germany" },
  { year: "1979", event: "SAP R/2 mainframe software released" },
  { year: "1992", event: "SAP R/3 client-server architecture launched" },
  { year: "2004", event: "SAP NetWeaver platform introduced" },
  { year: "2015", event: "SAP S/4HANA next-gen ERP released" },
  { year: "2020", event: "Rise with SAP transformation program launched" },
  { year: "2024", event: "SAP Business AI embedded across portfolio" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About SAP
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              For over 50 years, we've been helping the world run better and improving people's lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Purpose
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We help the world run better and improve people's lives. Our technology transforms businesses, 
                creates economic opportunity, and helps solve the world's biggest challenges.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With more than 400,000 customers in over 180 countries, SAP is at the center of today's 
                business and technology revolution. Our solutions touch 87% of total global commerce.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">180+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">105K+</div>
                  <div className="text-sm text-muted-foreground">Employees</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl gradient-hero p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-8xl font-bold mb-4">SAP</div>
                  <div className="text-xl">Since 1972</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full bg-sap-light-purple mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              50+ years of innovation and transformation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-xl p-6 border border-border inline-block">
                      <div className="text-2xl font-bold text-primary mb-1">{milestone.year}</div>
                      <div className="text-muted-foreground">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full gradient-hero hidden md:block z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Explore careers at SAP and help us shape the future of business technology.
            </p>
            <Button variant="hero" size="lg" className="group">
              View Careers
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
