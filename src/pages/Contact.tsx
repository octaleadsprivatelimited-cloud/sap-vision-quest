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
import { Mail, Phone, Headphones, ExternalLink } from "lucide-react";

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
    name: "",
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
          name: formData.name,
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
          name: "",
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

      {/* Contact Form - Dell-style, compact on mobile */}
      <section className="py-6 sm:py-14 md:py-20 lg:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 lg:gap-16">
            {/* Form - Dell-style: white card, clean inputs, blue button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1"
            >
              <h2 className="text-xl sm:text-3xl font-bold text-neutral-900 mb-1 sm:mb-2">Contact Us</h2>
              <p className="text-neutral-600 text-xs sm:text-base mb-3 sm:mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/maqwrdrv"
                method="POST"
                className="bg-white rounded-lg border border-neutral-200 shadow-sm p-4 sm:p-8 space-y-3 sm:space-y-5"
              >
                <div className="space-y-1 sm:space-y-1.5">
                  <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-neutral-800">
                    Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-9 sm:h-11 bg-white border-neutral-300 text-sm sm:text-base focus-visible:ring-[#007DB8] focus-visible:ring-2 py-2"
                  />
                </div>
                
                <div className="space-y-1 sm:space-y-1.5">
                  <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-neutral-800">
                    Business Email <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-9 sm:h-11 bg-white border-neutral-300 text-sm sm:text-base focus-visible:ring-[#007DB8] focus-visible:ring-2 py-2"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                  <div className="space-y-1 sm:space-y-1.5">
                    <Label htmlFor="company" className="text-xs sm:text-sm font-medium text-neutral-800">
                      Company <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="h-9 sm:h-11 bg-white border-neutral-300 text-sm sm:text-base focus-visible:ring-[#007DB8] focus-visible:ring-2 py-2"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-1.5">
                    <Label htmlFor="jobTitle" className="text-xs sm:text-sm font-medium text-neutral-800">
                      Job Title
                    </Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="h-9 sm:h-11 bg-white border-neutral-300 text-sm sm:text-base focus-visible:ring-[#007DB8] focus-visible:ring-2 py-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                  <div className="space-y-1 sm:space-y-1.5">
                    <Label htmlFor="country" className="text-xs sm:text-sm font-medium text-neutral-800">
                      Country <span className="text-red-600">*</span>
                    </Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger className="h-9 sm:h-11 bg-white border-neutral-300 text-sm sm:text-base focus:ring-[#007DB8] focus:ring-2 py-2">
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
                  <div className="space-y-1 sm:space-y-1.5">
                    <Label htmlFor="interest" className="text-xs sm:text-sm font-medium text-neutral-800">
                      Area of Interest
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger className="h-9 sm:h-11 bg-white border-neutral-300 text-sm sm:text-base focus:ring-[#007DB8] focus:ring-2 py-2">
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
                
                <div className="space-y-1 sm:space-y-1.5">
                  <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-neutral-800">
                    Message <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={3}
                    placeholder="Tell us about your project or requirements..."
                    className="bg-white border-neutral-300 resize-none min-h-[80px] sm:min-h-[100px] text-sm sm:text-base focus-visible:ring-[#007DB8] focus-visible:ring-2 py-2"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-10 sm:h-12 bg-[#007DB8] hover:bg-[#006BB3] text-white font-medium text-sm sm:text-base rounded"
                >
                  Submit
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info - Dell-style: Corporate Address & links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 order-2"
            >
              {/* Our Office - Dell "Corporate Address" style */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-4 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2 sm:mb-4">Where to find us</h3>
                <p className="text-sm sm:text-base font-semibold text-neutral-900 mb-1 sm:mb-2">Corporate Address</p>
                <p className="text-neutral-700 text-xs sm:text-base leading-relaxed mb-1">Sangronyx Technologies</p>
                <address className="not-italic text-neutral-600 text-xs sm:text-base leading-relaxed space-y-0.5 mb-2 sm:mb-4">
                  <span className="block">7-1-619/A/37, 101, Revathi Apartments,</span>
                  <span className="block">Beside Maitrivanam outgate, opp Annapurna block gate no-2,</span>
                  <span className="block">Kumar Basti, Srinivas nagar, Ameerpet,</span>
                  <span className="block">Hyderabad, Telangana 500038</span>
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7-1-619%2FA%2F37%2C+Revathi+Apartments%2C+Ameerpet%2C+Hyderabad%2C+Telangana+500038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#007DB8] hover:underline text-xs sm:text-sm font-medium"
                >
                  Get directions
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
              
              {/* Support / Quick links - Dell-style */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-4 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2 sm:mb-4">Support</h3>
                <div className="space-y-2 sm:space-y-3">
                  <a href="mailto:info@sangronyx.com" className="flex items-center gap-1.5 sm:gap-2 text-[#007DB8] hover:underline text-xs sm:text-sm font-medium break-all">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    info@sangronyx.com
                  </a>
                  <a href="tel:+917032110762" className="flex items-center gap-1.5 sm:gap-2 text-[#007DB8] hover:underline text-xs sm:text-sm font-medium">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    +91 7032110762
                  </a>
                  <a href="mailto:support@sangronyx.com" className="flex items-center gap-1.5 sm:gap-2 text-[#007DB8] hover:underline text-xs sm:text-sm font-medium break-all">
                    <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    support@sangronyx.com
                  </a>
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
