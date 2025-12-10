import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, MapPin, Monitor, BookOpen, CheckCircle, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type ClassFormat = "Online" | "In-Person" | "Hybrid";
type ClassLevel = "Beginner" | "Intermediate" | "Advanced";

interface TrainingClass {
  id: string;
  title: string;
  module: string;
  description: string;
  duration: string;
  level: ClassLevel;
  format: ClassFormat;
  instructor: string;
  schedule: string;
  location?: string;
  price: string;
  seatsAvailable: number;
  startDate: string;
  highlights: string[];
}

const trainingClasses: TrainingClass[] = [
  {
    id: "1",
    title: "SAP FICO Fundamentals",
    module: "SAP FICO",
    description: "Comprehensive training covering Financial Accounting and Controlling modules. Learn GL, AR, AP, Asset Accounting, and Cost Center Accounting.",
    duration: "40 hours",
    level: "Beginner",
    format: "Online",
    instructor: "John Smith",
    schedule: "Mon-Fri, 9:00 AM - 5:00 PM",
    price: "$1,299",
    seatsAvailable: 15,
    startDate: "2024-02-15",
    highlights: [
      "Hands-on practice with real SAP system",
      "Industry-recognized certificate",
      "Lifetime access to course materials",
      "Post-training support included"
    ],
  },
  {
    id: "2",
    title: "SAP MM Advanced Training",
    module: "SAP MM",
    description: "Advanced Materials Management training covering procurement processes, inventory management, and material requirements planning.",
    duration: "35 hours",
    level: "Advanced",
    format: "Hybrid",
    instructor: "Sarah Johnson",
    schedule: "Weekends, 10:00 AM - 4:00 PM",
    location: "New York, NY",
    price: "$1,499",
    seatsAvailable: 12,
    startDate: "2024-02-20",
    highlights: [
      "Live instructor-led sessions",
      "Case studies and real-world scenarios",
      "Interactive workshops",
      "1-on-1 mentoring sessions"
    ],
  },
  {
    id: "3",
    title: "SAP SD Complete Course",
    module: "SAP SD",
    description: "Master Sales & Distribution module from basics to advanced topics including pricing, billing, and customer master data.",
    duration: "45 hours",
    level: "Intermediate",
    format: "Online",
    instructor: "Michael Chen",
    schedule: "Evenings, 6:00 PM - 9:00 PM",
    price: "$1,399",
    seatsAvailable: 20,
    startDate: "2024-02-25",
    highlights: [
      "Flexible evening schedule",
      "Recorded sessions available",
      "Practical assignments",
      "Job placement assistance"
    ],
  },
  {
    id: "4",
    title: "SAP HCM Implementation",
    module: "SAP HCM",
    description: "Learn Human Capital Management implementation, payroll processing, time management, and organizational management.",
    duration: "38 hours",
    level: "Intermediate",
    format: "In-Person",
    instructor: "Emily Davis",
    schedule: "Mon-Wed-Fri, 2:00 PM - 6:00 PM",
    location: "Chicago, IL",
    price: "$1,599",
    seatsAvailable: 10,
    startDate: "2024-03-01",
    highlights: [
      "Small class size for personalized attention",
      "On-site training facility",
      "Networking opportunities",
      "Certification exam preparation"
    ],
  },
  {
    id: "5",
    title: "SAP FICO Advanced Controlling",
    module: "SAP FICO",
    description: "Advanced Controlling module training covering Product Costing, Profitability Analysis, and Internal Orders.",
    duration: "30 hours",
    level: "Advanced",
    format: "Online",
    instructor: "Robert Williams",
    schedule: "Saturdays, 9:00 AM - 3:00 PM",
    price: "$1,199",
    seatsAvailable: 18,
    startDate: "2024-03-05",
    highlights: [
      "Weekend-friendly schedule",
      "Advanced topics coverage",
      "Expert instructor with 15+ years experience",
      "Comprehensive study materials"
    ],
  },
  {
    id: "6",
    title: "SAP MM for Procurement Professionals",
    module: "SAP MM",
    description: "Specialized training for procurement professionals focusing on purchase requisitions, purchase orders, and vendor management.",
    duration: "25 hours",
    level: "Beginner",
    format: "Hybrid",
    instructor: "Lisa Anderson",
    schedule: "Tue-Thu, 7:00 PM - 9:00 PM",
    location: "Los Angeles, CA",
    price: "$999",
    seatsAvailable: 25,
    startDate: "2024-03-10",
    highlights: [
      "Evening classes for working professionals",
      "Industry-specific examples",
      "Practical procurement scenarios",
      "Certificate of completion"
    ],
  },
];

const TrainingClasses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");

  const modules = ["All", ...Array.from(new Set(trainingClasses.map(c => c.module)))];
  const levels: (ClassLevel | "All")[] = ["All", "Beginner", "Intermediate", "Advanced"];
  const formats: (ClassFormat | "All")[] = ["All", "Online", "In-Person", "Hybrid"];

  const filteredClasses = trainingClasses.filter(cls => {
    const matchesSearch = 
      cls.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesModule = selectedModule === "All" || cls.module === selectedModule;
    const matchesLevel = selectedLevel === "All" || cls.level === selectedLevel;
    const matchesFormat = selectedFormat === "All" || cls.format === selectedFormat;

    return matchesSearch && matchesModule && matchesLevel && matchesFormat;
  });

  const getLevelColor = (level: ClassLevel) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-600 border-red-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getFormatIcon = (format: ClassFormat) => {
    switch (format) {
      case "Online":
        return Monitor;
      case "In-Person":
        return MapPin;
      case "Hybrid":
        return Users;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="SAP Training Classes"
        description="Join our comprehensive SAP training classes led by industry experts. Choose from online, in-person, or hybrid formats."
      />

      {/* Search and Filters */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search training classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filters:</span>
              </div>
              
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
                className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                {modules.map(module => (
                  <option key={module} value={module}>{module}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                {formats.map(format => (
                  <option key={format} value={format}>{format}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Training Classes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredClasses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No training classes found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredClasses.map((trainingClass, index) => {
                  const FormatIcon = getFormatIcon(trainingClass.format);
                  return (
                    <motion.div
                      key={trainingClass.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                {trainingClass.module}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded border ${getLevelColor(trainingClass.level)}`}>
                                {trainingClass.level}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {trainingClass.title}
                            </h3>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{trainingClass.price}</div>
                            <div className="text-xs text-muted-foreground">per person</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {trainingClass.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{trainingClass.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Starts: {new Date(trainingClass.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <FormatIcon className="w-4 h-4" />
                          <span>{trainingClass.format}</span>
                          {trainingClass.location && <span className="ml-1">• {trainingClass.location}</span>}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{trainingClass.seatsAvailable} seats available</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Instructor:</span> {trainingClass.instructor}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Schedule:</span> {trainingClass.schedule}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                          {trainingClass.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t border-border">
                        <Button variant="cta" className="flex-1 group/btn">
                          Enroll Now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Custom Training for Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer customized corporate training programs tailored to your organization's specific needs. Contact us to discuss your training requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Request Custom Training
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources/training-materials">
                <Button variant="outline" size="lg">
                  View Training Materials
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

export default TrainingClasses;

