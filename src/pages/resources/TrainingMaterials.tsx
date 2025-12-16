import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Book, Video, FileText, Download, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const trainingMaterials = [
  {
    category: "SAP FICO",
    icon: Book,
    materials: [
      { name: "SAP FICO Fundamentals Guide", type: "PDF", size: "5.2 MB", downloads: "2.1K" },
      { name: "Financial Accounting Overview", type: "PDF", size: "4.8 MB", downloads: "1.8K" },
      { name: "Controlling Module Training", type: "PDF", size: "6.1 MB", downloads: "1.9K" },
      { name: "FICO Video Series", type: "Video", size: "250 MB", downloads: "3.2K" },
    ],
  },
  {
    category: "SAP MM",
    icon: Book,
    materials: [
      { name: "Materials Management Basics", type: "PDF", size: "4.5 MB", downloads: "1.7K" },
      { name: "Procurement Process Guide", type: "PDF", size: "5.3 MB", downloads: "1.6K" },
      { name: "Inventory Management Training", type: "PDF", size: "4.9 MB", downloads: "1.5K" },
      { name: "MM Module Video Tutorials", type: "Video", size: "280 MB", downloads: "2.8K" },
    ],
  },
  {
    category: "SAP SD",
    icon: Book,
    materials: [
      { name: "Sales & Distribution Overview", type: "PDF", size: "5.7 MB", downloads: "2.0K" },
      { name: "Sales Order Processing", type: "PDF", size: "5.1 MB", downloads: "1.9K" },
      { name: "Pricing & Conditions", type: "PDF", size: "4.6 MB", downloads: "1.8K" },
      { name: "SD Module Training Videos", type: "Video", size: "320 MB", downloads: "3.1K" },
    ],
  },
  {
    category: "SAP HCM",
    icon: Book,
    materials: [
      { name: "Human Capital Management Guide", type: "PDF", size: "5.4 MB", downloads: "1.9K" },
      { name: "Payroll Processing Training", type: "PDF", size: "4.8 MB", downloads: "1.7K" },
      { name: "Time Management Module", type: "PDF", size: "5.0 MB", downloads: "1.6K" },
      { name: "HCM Training Video Collection", type: "Video", size: "290 MB", downloads: "2.5K" },
    ],
  },
  {
    category: "IT Support",
    icon: GraduationCap,
    materials: [
      { name: "Infrastructure Setup Guide", type: "PDF", size: "6.2 MB", downloads: "2.3K" },
      { name: "Cloud Services Training", type: "PDF", size: "5.8 MB", downloads: "2.1K" },
      { name: "System Administration Basics", type: "PDF", size: "5.5 MB", downloads: "1.9K" },
      { name: "IT Support Video Series", type: "Video", size: "350 MB", downloads: "2.9K" },
    ],
  },
];

const TrainingMaterials = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMaterials = trainingMaterials.map(category => ({
    ...category,
    materials: category.materials.filter(material => 
      material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.category.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.materials.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Training Materials"
        description="Training materials and resources for SAP modules and IT services."
        label="LEARNING RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Training Materials" }]}
      />

      {/* Search Bar */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search training materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Materials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {filteredMaterials.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-sap-light-purple flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.materials.map((material, materialIndex) => (
                    <motion.div
                      key={material.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (materialIndex * 0.05) }}
                      className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {material.type === "Video" ? (
                              <Video className="w-5 h-5 text-primary" />
                            ) : (
                              <FileText className="w-5 h-5 text-primary" />
                            )}
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {material.name}
                            </h3>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{material.type}</span>
                            <span>•</span>
                            <span>{material.size}</span>
                            <span>•</span>
                            <span>{material.downloads} downloads</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Need More Training Resources?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to learn about our comprehensive training programs and customized training materials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Contact Training Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg">
                  Back to Resources
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

export default TrainingMaterials;

