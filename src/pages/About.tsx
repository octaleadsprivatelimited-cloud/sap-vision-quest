import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award, Leaf, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Certified SAP Consultants",
    description: "Our team of certified SAP consultants brings extensive expertise and industry knowledge.",
  },
  {
    icon: Lightbulb,
    title: "Cost-Effective Solutions",
    description: "We provide cost-effective SAP implementation and optimization to maximize your ROI.",
  },
  {
    icon: Users,
    title: "Industry Experience",
    description: "Deep industry-specific experience across manufacturing, retail, pharma, and more.",
  },
  {
    icon: Heart,
    title: "24/7 Support",
    description: "Round-the-clock support availability to ensure your SAP systems run smoothly.",
  },
];

const milestones = [
  { year: "SAP S/4HANA", event: "Complete SAP S/4HANA implementation and migration services" },
  { year: "SAP Training", event: "Corporate SAP training for all major modules with certification assistance" },
  { year: "SAP Support", event: "24/7 SAP support and maintenance (AMC) services" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Who We Are"
        description="Sangronyx is a modern IT and SAP service company providing end-to-end digital solutions."
      />

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
                Why Choose Sangronyx for SAP?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sangronyx provides end-to-end SAP software, implementation, training and support services 
                designed to transform your business with automation, integration and powerful enterprise capabilities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Certified SAP consultants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Cost-effective implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Industry-specific experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">24/7 support availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Custom development & integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Corporate SAP training included</span>
                </li>
              </ul>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">IT & SAP</div>
                  <div className="text-sm text-muted-foreground">Services</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">Expert</div>
                  <div className="text-sm text-muted-foreground">Team</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">Quality</div>
                  <div className="text-sm text-muted-foreground">Solutions</div>
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
                  <div className="text-6xl font-bold mb-4">Sangronyx</div>
                  <div className="text-xl">Modern IT & SAP Services</div>
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
              Our SAP Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete SAP solutions for business transformation
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Contact us today to learn how Sangronyx can help your business succeed with our IT and SAP services.
            </p>
            <Button variant="hero" size="lg" className="group">
              Contact Us
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
