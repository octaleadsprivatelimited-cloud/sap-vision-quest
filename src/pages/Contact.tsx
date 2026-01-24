import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Headphones, Globe } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "info@sangronyx.com",
    action: "Send Email",
    link: "mailto:info@sangronyx.com",
    color: "#F6921E", // Orange
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    contact: "+91 7032110762",
    action: "Call Now",
    link: "tel:+917032110762",
    color: "#39B54A", // Green
  },
  {
    icon: Headphones,
    title: "Support",
    description: "24/7 technical support",
    contact: "support@sangronyx.com",
    action: "Get Support",
    link: "mailto:support@sangronyx.com",
    color: "#8843F8", // Purple
  },
];

const Contact = () => {
  const seo = useSEO();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    country: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/maqwrdrv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Contact Form Submission - Sangronyx",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          jobTitle: formData.jobTitle,
          country: formData.country,
          interest: formData.interest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          jobTitle: "",
          country: "",
          interest: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="Contact Us"
        description="Get in touch with our team to discuss how we can help transform your business."
        label="GET IN TOUCH"
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage="/hero-background-image.jpeg"
      />

      {/* Contact Methods - Enhanced UI Design */}
      <section className="py-6 sm:py-8 md:py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Mobile: 2×1 layout - Enhanced design */}
          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {contactMethods
              .filter((m) => m.title === "Email Us" || m.title === "Support")
              .map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link || "#"}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                  className="group relative rounded-2xl p-4 text-center overflow-hidden flex flex-col items-center justify-center min-h-[95px] shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: method.color }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon container with enhanced styling */}
                  <div className="relative z-10 w-10 h-10 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <method.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 w-full">
                    <h3 className="text-xs font-bold text-white mb-1 leading-tight drop-shadow-sm">{method.title}</h3>
                    <p className="text-white/95 font-medium text-[10px] break-all leading-tight line-clamp-2 drop-shadow-sm">{method.contact}</p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-bl-full opacity-50" />
                </motion.a>
              ))}
            {(() => {
              const callUs = contactMethods.find((m) => m.title === "Call Us");
              return (
                <motion.a
                  href={callUs?.link || "#"}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="group relative col-span-2 rounded-2xl p-4 overflow-hidden flex flex-row items-center gap-4 min-h-[75px] shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: callUs?.color }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-start flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white mb-0.5 drop-shadow-sm">Call Us</h3>
                    <p className="text-white/95 font-medium text-xs drop-shadow-sm">{callUs?.contact}</p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full opacity-50" />
                </motion.a>
              );
            })()}
          </div>

          {/* Desktop: Enhanced 3-column layout */}
          <div className="hidden sm:grid grid-cols-3 gap-4 md:gap-5">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link || "#"}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                className="group relative rounded-2xl md:rounded-3xl p-5 md:p-6 text-center overflow-hidden flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ backgroundColor: method.color }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon container with enhanced design */}
                <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <method.icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 w-full">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-md">{method.title}</h3>
                  <p className="text-xs md:text-sm text-white/90 mb-3 hidden md:block leading-relaxed">{method.description}</p>
                  <div className="mb-4">
                    <p className="text-white font-semibold text-sm md:text-base break-all drop-shadow-sm">{method.contact}</p>
                  </div>
                  
                  {/* Enhanced action button */}
                  <span className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-xl bg-white/25 backdrop-blur-sm text-white hover:bg-white/35 transition-all duration-300 group-hover:shadow-lg">
                    {method.action}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full opacity-50" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-tr-full opacity-30" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Form - first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Get in Touch</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                Fill out the form below or email us at info@sangronyx.com. We'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} action="https://formspree.io/f/maqwrdrv" method="POST" className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm sm:text-base">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="bg-background h-10 sm:h-11 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="bg-background h-10 sm:h-11 text-base"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background h-10 sm:h-11 text-base"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm sm:text-base">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="bg-background h-10 sm:h-11 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-sm sm:text-base">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="bg-background h-10 sm:h-11 text-base"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm sm:text-base">Country *</Label>
                    <Select 
                      value={formData.country} 
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger className="bg-background h-10 sm:h-11 text-base">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-sm sm:text-base">Area of Interest</Label>
                    <Select 
                      value={formData.interest} 
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger className="bg-background h-10 sm:h-11 text-base">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rollout">ROLL-OUT</SelectItem>
                        <SelectItem value="hypercare">HyperCare Support</SelectItem>
                        <SelectItem value="support">AMS</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="Tell us about your project or requirements..."
                    className="bg-background resize-none min-h-[100px] sm:min-h-[120px] text-base"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 sm:py-6 h-auto text-base font-semibold min-h-[48px]">
                  Submit
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info - compact on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 order-2"
            >
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                  Our Office
                </h3>
                <div className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>Sangronyx Technologies</p>
                  <p>7-1-619/A/37, 101, Revathi Apartments,</p>
                  <p>Beside Maitrivanam outgate, opp Annapurna block gate no-2,</p>
                  <p>Kumar Basti, Srinivas nagar, Ameerpet, Hyd, Telangana-500038</p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                  Global Presence
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                  We serve clients globally with offices and partners across multiple regions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UNITED STATES", "UNITED KINGDOM", "EUROPE", "Asia-Pacific"].map((region) => (
                    <span 
                      key={region} 
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
