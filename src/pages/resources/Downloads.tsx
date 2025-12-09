import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, FileText, Image, Code, Package, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const downloadCategories = [
  {
    title: "Templates",
    icon: FileText,
    items: [
      { name: "Project Planning Template", type: "DOCX", size: "2.5 MB", downloads: "1.2K" },
      { name: "SAP Training Schedule Template", type: "XLSX", size: "1.8 MB", downloads: "890" },
      { name: "IT Infrastructure Checklist", type: "PDF", size: "3.2 MB", downloads: "2.1K" },
      { name: "Software Requirements Document", type: "DOCX", size: "2.1 MB", downloads: "1.5K" },
    ],
  },
  {
    title: "Tools & Utilities",
    icon: Package,
    items: [
      { name: "System Configuration Tool", type: "EXE", size: "15.3 MB", downloads: "3.5K" },
      { name: "SAP Module Assessment Tool", type: "ZIP", size: "8.7 MB", downloads: "2.8K" },
      { name: "Cloud Migration Assistant", type: "EXE", size: "12.4 MB", downloads: "2.2K" },
    ],
  },
  {
    title: "Resources",
    icon: Image,
    items: [
      { name: "Company Brand Assets", type: "ZIP", size: "25.6 MB", downloads: "1.8K" },
      { name: "Presentation Templates", type: "PPTX", size: "18.9 MB", downloads: "2.3K" },
      { name: "Icon Library", type: "ZIP", size: "12.1 MB", downloads: "1.9K" },
    ],
  },
  {
    title: "Code Samples",
    icon: Code,
    items: [
      { name: "API Integration Examples", type: "ZIP", size: "5.4 MB", downloads: "1.6K" },
      { name: "Mobile App Templates", type: "ZIP", size: "9.8 MB", downloads: "1.4K" },
      { name: "Web Development Snippets", type: "ZIP", size: "3.2 MB", downloads: "1.7K" },
    ],
  },
];

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = downloadCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Downloads"
        description="Download resources, templates, and tools to support your projects."
      />

      {/* Search Bar */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search downloads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-sap-light-purple flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                      className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{item.type}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                            <span>•</span>
                            <span>{item.downloads} downloads</span>
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
              Need Something Specific?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Contact us and we'll help you get the resources you need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Contact Us
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

export default Downloads;

