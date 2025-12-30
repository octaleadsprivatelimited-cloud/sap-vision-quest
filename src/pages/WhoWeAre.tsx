import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
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
  return (
    <div className="min-h-screen bg-background">
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
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0096d6] via-[#0077b3] to-[#005a8a] z-0" />
        
        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute -top-20 -right-20 md:top-10 md:right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -bottom-20 -left-20 md:bottom-10 md:left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-white/5 rounded-full blur-3xl"
          />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
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
            className="text-center mb-8"
          >
            <span className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Expertise
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our diverse team of experts brings together deep industry knowledge and technical excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-white/80 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-white/90 text-sm leading-relaxed">{member.description}</p>
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
