import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Users, Target, Award, Heart, Globe, Lightbulb } from "lucide-react";

const teamValues = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering enterprise solutions that transform businesses and drive sustainable growth.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Our clients' success is our success. We build lasting partnerships based on trust and mutual respect.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new technologies and methodologies to stay ahead of industry trends.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project, ensuring quality deliverables every time.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our expertise spans across industries and geographies, serving clients worldwide.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe in the power of teamwork and foster an environment of open communication.",
  },
];

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
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Are", href: "/who-we-are" },
        ]}
        ctaText="Join Our Team"
        ctaHref="/careers"
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
                Founded with a vision to bridge the gap between complex enterprise technology and business success, 
                Sangronyx has grown into a trusted SAP partner serving organizations across the globe.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey began with a simple belief: that every business, regardless of size, deserves access 
                to world-class enterprise solutions. Today, we continue to uphold that vision, helping companies 
                navigate their digital transformation journey with confidence.
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

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#0096d6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0096d6]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#0096d6]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#0096d6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powered by Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0096d6] to-[#00b3e6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#0096d6] text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
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
