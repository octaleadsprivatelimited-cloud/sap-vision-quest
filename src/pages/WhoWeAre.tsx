import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const leadershipTeam = [
  {
    name: "Leadership Excellence",
    role: "Strategic Vision",
    description: "Our leadership team brings decades of combined experience in enterprise software and SAP implementations.",
  },
  {
    name: "Technical Expertise",
    role: "Innovation Hub",
    description: "A dedicated team of certified SAP consultants and developers driving technical excellence.",
  },
  {
    name: "Client Success",
    role: "Partnership Focus",
    description: "Dedicated client success managers ensuring every engagement exceeds expectations.",
  },
];

const WhoWeAre = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero
        title="Who We Are"
        description="A team of passionate professionals dedicated to transforming enterprises through innovative SAP solutions and exceptional service."
        label="About Sangronyx"
        backgroundImage="/hero-slide-2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Are", href: "/who-we-are" },
        ]}
        ctaText=""
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#0096d6] text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building the Future of Enterprise Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sangronyx Technologies was founded with a clear vision to help businesses simplify complexity and unlock real value from their SAP investments.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What began as a focused initiative by SAP professionals with hands-on enterprise experience has grown into a trusted SAP services partner for organizations seeking reliable implementation, migration, and support services. We recognized a common challenge across businesses: powerful SAP systems were often underutilized due to lack of clarity, alignment, and ongoing support. Sangronyx was created to change that.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From SAP S/4HANA implementations and migrations to AMS and Hypercare support, we deliver solutions that are practical, scalable, and aligned with real business needs. Our approach combines deep SAP expertise, structured delivery, and a strong commitment to client success.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/why-choose-us.avif" 
                  alt="Sangronyx Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0096d6] text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#0096d6]/5 rounded-full blur-3xl"
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
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powered by Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our diverse team of experts brings together deep industry knowledge and technical excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0096d6]/30 overflow-hidden backdrop-blur-sm"
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0096d6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon container with gradient background */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#0096d6] to-[#0077b3] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0096d6] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#0096d6] text-sm font-semibold uppercase tracking-wide mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0096d6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
