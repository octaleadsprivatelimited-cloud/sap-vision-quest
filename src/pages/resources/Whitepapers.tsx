import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Download, Calendar, User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const whitepapers = [
  {
    title: "IT Infrastructure Best Practices for Modern Businesses",
    description: "A comprehensive guide to setting up and maintaining robust IT infrastructure for growing businesses.",
    category: "IT Support",
    date: "2024-01-15",
    author: "Sangronyx Team",
    downloadLink: "#",
  },
  {
    title: "SAP Implementation Strategy: A Complete Guide",
    description: "Learn how to successfully implement SAP solutions in your organization with proven strategies.",
    category: "SAP Training",
    date: "2024-02-20",
    author: "Sangronyx Team",
    downloadLink: "#",
  },
  {
    title: "Cloud Services Migration: Step-by-Step Approach",
    description: "Essential insights for migrating your business operations to the cloud safely and efficiently.",
    category: "IT Support",
    date: "2024-03-10",
    author: "Sangronyx Team",
    downloadLink: "#",
  },
  {
    title: "Custom Software Development: ROI and Best Practices",
    description: "Understand the return on investment and best practices for custom software development projects.",
    category: "Software Solutions",
    date: "2024-04-05",
    author: "Sangronyx Team",
    downloadLink: "#",
  },
  {
    title: "SAP Module Training: Corporate Training Programs",
    description: "A detailed overview of effective SAP training programs for corporate teams.",
    category: "SAP Training",
    date: "2024-05-12",
    author: "Sangronyx Team",
    downloadLink: "#",
  },
  {
    title: "Mobile App Development: Trends and Strategies",
    description: "Explore the latest trends and strategies in mobile application development.",
    category: "Software Solutions",
    date: "2024-06-18",
    author: "Sangronyx Team",
    downloadLink: "#",
  },
];

const Whitepapers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Whitepapers"
        description="In-depth whitepapers on IT best practices and SAP implementation strategies."
        label="INSIGHTS & RESEARCH"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Whitepapers" }]}
      />

      {/* Whitepapers List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-sap-light-purple flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {paper.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {paper.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {paper.author}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
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
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to receive new whitepapers and insights directly to your inbox.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="cta" size="lg" className="group">
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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

export default Whitepapers;

