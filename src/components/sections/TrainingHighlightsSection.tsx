import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, BookOpen, Users, Award, Briefcase, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const trainingFeatures = [
  {
    icon: GraduationCap,
    title: "SAP Certification Programs",
    description: "Industry-recognized certifications across all major SAP modules including S/4HANA, FICO, MM, SD, and more.",
    link: "/resources/training",
  },
  {
    icon: Monitor,
    title: "Live Project Training",
    description: "Hands-on experience with real-world SAP projects, guided by industry experts with practical scenarios.",
    link: "/resources/training-classes",
  },
  {
    icon: Users,
    title: "Corporate Batch Training",
    description: "Customized training programs for enterprise teams with flexible scheduling and dedicated trainers.",
    link: "/services/sap-corporate-training",
  },
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
    description: "Dedicated placement cell with strong industry connections to help launch your SAP career.",
    link: "/resources/placements",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Updated course content aligned with latest SAP technologies and industry requirements.",
    link: "/resources/training-materials",
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Learn from certified SAP consultants with 10+ years of implementation experience.",
    link: "/resources/training",
  },
];

export const TrainingHighlightsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/sap-training-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/90 z-0" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            SAP Training & Development
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Launch Your <span className="text-accent">SAP Career</span> with Expert Training
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Comprehensive SAP training programs designed for freshers and professionals. 
            Get certified, gain practical experience, and accelerate your career in the SAP ecosystem.
          </p>
        </motion.div>

        {/* Training Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {trainingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {feature.description}
              </p>
              
              <Link 
                to={feature.link}
                className="inline-flex items-center text-accent font-semibold text-sm hover:text-accent/80 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/resources/training">
              <Button size="lg" className="px-8 py-6 h-auto text-base font-semibold group">
                <GraduationCap className="w-5 h-5 mr-2" />
                Explore Training Programs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 py-6 h-auto text-base font-semibold">
                Request Training Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
