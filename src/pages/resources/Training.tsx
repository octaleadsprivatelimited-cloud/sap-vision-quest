import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Users, BookOpen, Award, ArrowRight, CheckCircle2, 
  Clock, Target, Briefcase, Monitor, MessageSquare, FileCheck, Laptop,
  HelpCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { TrainingContactPopup } from "@/components/TrainingContactPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import trainingClassroomImg from "@/assets/training-classroom.jpg";
import trainingSuccessImg from "@/assets/training-success.jpg";
import trainingCurriculumImg from "@/assets/training-curriculum.jpg";

const workshopPrograms = [
  {
    icon: BookOpen,
    title: "SAP Functional Workshop",
    description: "Comprehensive workshop on SAP modules including MM, SD, FICO, HR, and more.",
    color: "bg-blue-500",
    link: "/resources/training-classes",
  },
  {
    icon: GraduationCap,
    title: "SAP Technical Workshop",
    description: "In-depth technical workshop on ABAP, Basis, HANA, and integration technologies.",
    color: "bg-orange-500",
    link: "/resources/training-classes",
  },
  {
    icon: Award,
    title: "SAP Certification Prep",
    description: "Structured programs to prepare candidates for official SAP certifications.",
    color: "bg-green-500",
    link: "/resources/training-classes",
  },
  {
    icon: Users,
    title: "Corporate Batches",
    description: "Customized workshop programs designed for enterprise teams and organizations.",
    color: "bg-purple-500",
    link: "/contact",
  },
];

const whyChooseUs = [
  { icon: Monitor, title: "Live Interactive Sessions", description: "Real-time instructor-led workshop with hands-on practice on live SAP systems" },
  { icon: Briefcase, title: "Industry-Expert Instructors", description: "Learn from certified SAP consultants with 10+ years of real-world experience" },
  { icon: Target, title: "Placement Assistance", description: "Dedicated placement support with resume building, mock interviews, and job referrals" },
  { icon: Clock, title: "Flexible Timings", description: "Weekend and weekday batches to accommodate working professionals and students" },
  { icon: FileCheck, title: "Real Project Experience", description: "Work on live projects and case studies from actual SAP implementations" },
  { icon: MessageSquare, title: "Ongoing Support", description: "Access to learning materials and doubt-clearing sessions even after course completion" },
];

const workshopProcess = [
  { step: "01", title: "Consultation", description: "Free career counseling to identify the right SAP module based on your background" },
  { step: "02", title: "Enrollment", description: "Choose your preferred batch timing and complete the registration process" },
  { step: "03", title: "Workshop", description: "Attend live sessions, complete assignments, and practice on SAP systems" },
  { step: "04", title: "Certification", description: "Prepare for and clear official SAP certification exams with our guidance" },
  { step: "05", title: "Placement", description: "Get placed in top companies with our dedicated placement assistance team" },
];

const curriculumHighlights = [
  "SAP S/4HANA Overview & Navigation",
  "Module-specific Configuration & Customization",
  "Integration Points Between SAP Modules",
  "Real-time Reporting & Analytics",
  "Business Process Workflows",
  "Data Migration & Management",
  "Troubleshooting & Support Scenarios",
  "SAP Fiori & User Experience",
];

const faqs = [
  {
    question: "What are the prerequisites for joining SAP workshop?",
    answer: "No prior SAP experience is required for functional modules. A basic understanding of business processes is helpful. For technical workshop (ABAP, Basis), knowledge of programming concepts or database management is beneficial but not mandatory. We assess each candidate and provide foundational support as needed."
  },
  {
    question: "How long does the SAP workshop program take?",
    answer: "The duration varies by module. Functional modules like MM, SD, and FICO typically take 6-8 weeks. Technical modules like ABAP take 8-10 weeks. We also offer fast-track programs for candidates with prior experience. Corporate batches can be customized based on organizational requirements."
  },
  {
    question: "Do you provide hands-on practice on real SAP systems?",
    answer: "Yes, absolutely! We provide access to live SAP S/4HANA systems for hands-on practice. Each participant gets individual login credentials to practice configurations, transactions, and scenarios covered during workshop sessions."
  },
  {
    question: "What is the SAP certification process?",
    answer: "After completing the workshop, we guide you through the SAP certification process. This includes registration on SAP's certification portal, exam preparation with mock tests, and scheduling the exam at authorized Pearson VUE centers. Our instructors share tips and focus areas based on their certification experience."
  },
  {
    question: "How does your placement assistance work?",
    answer: "Our placement assistance includes resume preparation tailored for SAP roles, LinkedIn profile optimization, mock interviews with industry experts, and direct referrals to our network of 100+ hiring partners. We also share relevant job openings and help with interview scheduling until you get placed."
  },
  {
    question: "Can I attend workshop while working full-time?",
    answer: "Yes! We offer flexible batch timings including weekday evenings and weekend batches specifically designed for working professionals. All sessions are recorded, so you can catch up if you miss a class. We also provide additional doubt-clearing sessions as needed."
  },
  {
    question: "What is the fee structure and payment options?",
    answer: "Our fee structure varies by module and workshop mode (online/classroom). We offer flexible payment options including EMI facilities. Contact our counselors for detailed pricing. We also have special discounts for early enrollments, referrals, and group registrations."
  },
  {
    question: "Do you offer corporate workshop for companies?",
    answer: "Yes, we specialize in corporate SAP workshop. We customize curriculum based on your organization's SAP landscape and business processes. Workshop can be conducted on-site at your premises or online. We also offer train-the-trainer programs and post-workshop support."
  },
  {
    question: "What support do I get after completing the workshop?",
    answer: "We provide lifetime access to recorded sessions and learning materials. Our alumni community offers networking opportunities and knowledge sharing. You can attend doubt-clearing sessions even after course completion. We also provide support during your initial months on the job."
  },
  {
    question: "Which SAP module should I choose for my career?",
    answer: "The right module depends on your background and career goals. If you have a commerce/finance background, FICO is ideal. For supply chain, consider MM or SD. Technical roles suit candidates with programming interest (ABAP) or IT infrastructure experience (Basis). Our career counselors can help you decide based on your profile."
  },
];

const Training = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
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
        title="Workshop Programs"
        description="Build your SAP career with industry-leading workshop programs"
        label="WORKSHOP & PLACEMENTS"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Workshop" },
        ]}
        ctaText="Enroll Now"
        ctaHref="/contact"
        backgroundImage="/sap-training-background.jpg"
      />

      {/* Workshop Programs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Workshop Programs</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Choose from a wide range of SAP workshop programs designed to launch your career. Our expert-led courses combine theoretical knowledge with hands-on practice on live SAP systems.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={trainingClassroomImg} 
                alt="SAP Workshop Classroom" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <program.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {program.title}
                </h3>
                <div className={`w-12 h-1 ${program.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                <Link 
                  to={program.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {program.title.split(' ')[1]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-accent">Our Workshop?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go beyond traditional learning to ensure your success in the SAP ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src={trainingSuccessImg} 
                alt="SAP Career Success Journey" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Journey to <span className="text-accent">SAP Success</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                A structured approach to transform you from a beginner to a certified SAP professional
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workshopProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">{item.step}</span>
                </div>
                {index < workshopProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
                )}
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Laptop className="w-10 h-10 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Curriculum</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You Will <span className="text-accent">Learn</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our comprehensive curriculum is designed by industry experts and aligned with SAP certification requirements. 
                Each module covers theoretical concepts, practical exercises, and real-world scenarios to ensure job readiness.
              </p>
              <Link to="/resources/training-classes">
                <Button size="lg" className="gap-2">
                  View All Courses <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <img 
                src={trainingCurriculumImg} 
                alt="SAP Workshop Curriculum" 
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto mb-6"
              />
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Key Topics Covered</h3>
                <div className="grid gap-4">
                  {curriculumHighlights.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our SAP workshop programs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:border-accent/50"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link to="/contact">
              <Button variant="outline" className="gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your SAP Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Enroll in our workshop programs and take the first step towards a successful SAP career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/resources/placements">
              <Button size="lg" variant="outline" className="font-semibold bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10">
                View Placements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton 
        phoneNumber="919876543210" 
        message="Hello! I'm interested in your SAP workshop programs. Please share more details."
      />
      <Footer />
    </div>
  );
};

export default Training;