import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Play, Clock, User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const tutorialCategories = [
  {
    title: "Getting Started",
    videos: [
      { title: "Introduction to Sangronyx Services", duration: "5:23", views: "1.2K", thumbnail: "🎥" },
      { title: "Setting Up Your Account", duration: "8:15", views: "890", thumbnail: "🎥" },
      { title: "Navigating the Platform", duration: "6:42", views: "1.5K", thumbnail: "🎥" },
    ],
  },
  {
    title: "IT Support Services",
    videos: [
      { title: "Infrastructure Setup Basics", duration: "12:30", views: "2.1K", thumbnail: "🎥" },
      { title: "Cloud Services Configuration", duration: "15:45", views: "1.8K", thumbnail: "🎥" },
      { title: "System Maintenance Best Practices", duration: "10:20", views: "1.3K", thumbnail: "🎥" },
    ],
  },
  {
    title: "SAP Training",
    videos: [
      { title: "SAP FICO Module Overview", duration: "20:15", views: "3.5K", thumbnail: "🎥" },
      { title: "SAP MM Module Training", duration: "18:30", views: "2.8K", thumbnail: "🎥" },
      { title: "SAP SD Module Fundamentals", duration: "22:10", views: "3.2K", thumbnail: "🎥" },
      { title: "SAP HCM Module Guide", duration: "19:45", views: "2.5K", thumbnail: "🎥" },
    ],
  },
  {
    title: "Software Development",
    videos: [
      { title: "Custom Software Development Process", duration: "14:25", views: "1.9K", thumbnail: "🎥" },
      { title: "Mobile App Development Tutorial", duration: "16:50", views: "2.3K", thumbnail: "🎥" },
      { title: "Web Application Development", duration: "13:15", views: "2.0K", thumbnail: "🎥" },
    ],
  },
];

const VideoTutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Video Tutorials"
        description="Step-by-step video tutorials to help you get started with our services."
      />

      {/* Video Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {tutorialCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.videos.map((video, videoIndex) => (
                    <motion.div
                      key={video.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (videoIndex * 0.05) }}
                      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-sap-blue/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary ml-1" />
                        </div>
                        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {video.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {video.duration}
                          </div>
                        </div>
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
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the tutorial you're looking for? Contact our team for personalized assistance.
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

export default VideoTutorials;

