import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Handshake, Users, Award, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const partnerBenefits = [
  {
    icon: Handshake,
    title: "Partnership Opportunities",
    description: "Join our partner network and grow your business with Sangronyx.",
    color: "bg-blue-500",
    link: "/contact",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Work together to deliver exceptional solutions to clients.",
    color: "bg-orange-500",
    link: "/contact",
  },
  {
    icon: Award,
    title: "Certified Partners",
    description: "Become a certified partner and gain access to exclusive resources.",
    color: "bg-green-500",
    link: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your business with our comprehensive partner program.",
    color: "bg-purple-500",
    link: "/contact",
  },
  {
    icon: Shield,
    title: "Support & Training",
    description: "Receive ongoing support and training to help you succeed.",
    color: "bg-red-500",
    link: "/contact",
  },
];

const Partners = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="Partners"
        description="Join our partner network and grow your business with Sangronyx."
        label="PARTNER PROGRAM"
        breadcrumbs={[{ label: "Partners" }]}
        ctaText="Become a Partner"
        ctaHref="/contact"
        backgroundImage="/partners-hero-background.png"
      />

      {/* Partnership Opportunities Section */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0096d6]/5 via-white to-[#0077b3]/5 z-0" />
        
        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute -top-20 -right-20 md:top-10 md:right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#0096d6]/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -bottom-20 -left-20 md:bottom-10 md:left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#0077b3]/10 rounded-full blur-3xl"
          />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0096d6 1px, transparent 1px),
              linear-gradient(to bottom, #0096d6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#0096d6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Partnership Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Grow Your Business With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join our partner network and unlock new opportunities for growth and success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
            {partnerBenefits.slice(0, 4).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0096d6]/30 overflow-hidden"
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0096d6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon container with gradient background */}
                <div className={`relative z-10 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0096d6] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {benefit.description}
                  </p>
                  <Link 
                    to={benefit.link}
                    className="inline-flex items-center text-[#0096d6] font-semibold hover:gap-3 transition-all gap-2 group-hover:text-[#0077b3]"
                  >
                    Explore {benefit.title.split(' ')[0]}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0096d6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Support & Training Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#0096d6] to-[#0077b3] rounded-2xl p-8 lg:p-12 shadow-2xl overflow-hidden group">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Support & Training
                  </h3>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    Receive ongoing support and training to help you succeed. Access exclusive resources, training materials, and expert guidance.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-white text-[#0096d6] font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all gap-2 shadow-lg hover:shadow-xl"
                  >
                    Explore Support
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;