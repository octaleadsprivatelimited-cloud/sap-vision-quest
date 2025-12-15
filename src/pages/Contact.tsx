import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PageBackground, SectionBackground } from "@/components/ui/page-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Globe } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "info@sangronyx.com",
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    contact: "+1 (555) 123-4567",
    action: "Call Now",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "24/7 technical support",
    contact: "support@sangronyx.com",
    action: "Get Support",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Contact Us"
        description="Get in touch with our team to discuss how we can help transform your business."
      />

      {/* Contact Methods */}
      <PageBackground>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-5 md:p-6 border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <method.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">{method.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{method.description}</p>
                  <p className="text-sm md:text-base text-primary font-medium mb-3 md:mb-4">{method.contact}</p>
                  <Button variant="outline" size="sm" className="w-full text-sm">
                    {method.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageBackground>

      {/* Contact Form */}
      <SectionBackground variant="secondary">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                  Fill out the form below or email us at info@sangronyx.com. We'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="text-sm md:text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-sm md:text-base"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                        className="text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle" className="text-sm">Job Title</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="text-sm md:text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm">Country *</Label>
                      <Select 
                        value={formData.country} 
                        onValueChange={(value) => setFormData({ ...formData, country: value })}
                      >
                        <SelectTrigger className="text-sm md:text-base">
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
                      <Label htmlFor="interest" className="text-sm">Area of Interest</Label>
                      <Select 
                        value={formData.interest} 
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      >
                        <SelectTrigger className="text-sm md:text-base">
                          <SelectValue placeholder="Select interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="implementation">SAP Implementation</SelectItem>
                          <SelectItem value="migration">SAP Migration</SelectItem>
                          <SelectItem value="training">SAP Training</SelectItem>
                          <SelectItem value="support">SAP Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      placeholder="Tell us about your project or requirements..."
                      className="text-sm md:text-base resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                {/* Office Info */}
                <div className="bg-card rounded-xl p-5 md:p-6 border border-border">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Office
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
                    <p>Sangronyx Technologies</p>
                    <p>123 Business Park, Suite 456</p>
                    <p>Tech City, State 12345</p>
                    <p>United States</p>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div className="bg-card rounded-xl p-5 md:p-6 border border-border">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    {officeHours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm md:text-base">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Global Presence */}
                <div className="bg-card rounded-xl p-5 md:p-6 border border-border">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Global Presence
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                    We serve clients globally with offices and partners across multiple regions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["North America", "Europe", "Asia Pacific", "India"].map((region) => (
                      <span 
                        key={region} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium"
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
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Contact;
