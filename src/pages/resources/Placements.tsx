import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, Users, Building2, CheckCircle, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const placementStats = [
  { value: "95%", label: "Placement Rate", icon: TrendingUp },
  { value: "200+", label: "Hiring Partners", icon: Building2 },
  { value: "500+", label: "Candidates Placed", icon: Users },
  { value: "₹8 LPA", label: "Average Package", icon: Briefcase },
];

const placementProcess = [
  {
    step: "01",
    title: "Training Completion",
    description: "Complete your chosen SAP training program with hands-on practice.",
  },
  {
    step: "02",
    title: "Resume Building",
    description: "Get expert guidance on creating an impactful professional resume.",
  },
  {
    step: "03",
    title: "Mock Interviews",
    description: "Practice with industry-standard interview questions and scenarios.",
  },
  {
    step: "04",
    title: "Job Placement",
    description: "Get connected with our hiring partners for suitable opportunities.",
  },
];

const hiringPartners = [
  "TCS", "Infosys", "Wipro", "Accenture", "Deloitte", "IBM", "Capgemini", "HCL", "Tech Mahindra", "Cognizant"
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "SAP FICO Consultant",
    company: "Infosys",
    testimonial: "The training was excellent and the placement support helped me land my dream job at Infosys.",
  },
  {
    name: "Priya Patel",
    role: "SAP MM Consultant",
    company: "TCS",
    testimonial: "Great learning experience with real-time projects. Got placed within 2 weeks of completion.",
  },
  {
    name: "Amit Kumar",
    role: "SAP ABAP Developer",
    company: "Accenture",
    testimonial: "The mock interviews prepared me well. Now working as an SAP ABAP Developer at Accenture.",
  },
];

const Placements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Placement Assistance"
        description="Your gateway to a successful SAP career with 100% placement support"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Placements" },
        ]}
      />

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Placement Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A structured approach to help you land your dream SAP job
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-background p-6 rounded-xl border border-border"
              >
                <div className="text-5xl font-bold text-primary/20 absolute top-4 right-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Hiring Partners
            </h2>
            <p className="text-muted-foreground text-lg">
              We have tie-ups with leading IT companies for direct placements
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {hiringPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-muted rounded-full text-foreground font-medium"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from our alumni who have successfully launched their SAP careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Launch Your SAP Career?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join our training program and get 100% placement assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/resources/training">
              <Button size="lg" variant="outline" className="font-semibold bg-transparent text-white border-white hover:bg-white hover:text-primary">
                View Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
