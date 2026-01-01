import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Headphones, Globe } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "info@sangronyx.com",
    action: "Send Email",
    link: "mailto:info@sangronyx.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    contact: "+91-7981999562",
    contact2: "+91-7675070977",
    action: "Call Now",
    link: "tel:+917981999562",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "24/7 technical support",
    contact: "support@sangronyx.com",
    action: "Get Support",
    link: "mailto:support@sangronyx.com",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "Closed" },
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
      
      <PageHero 
        title="Contact Us"
        description="Get in touch with our team to discuss how we can help transform your business."
        label="GET IN TOUCH"
        breadcrumbs={[{ label: "Contact" }]}
        ctaText="Send us a message"
        backgroundImage="/hero-background-image.jpeg"
        ctaHref="#contact-form"
      />

      {/* Contact Methods */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border text-center hover:shadow-lg hover:border-accent/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                  <method.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <div className="mb-4">
                  <p className="text-accent font-medium">{method.contact}</p>
                  {method.contact2 && (
                    <p className="text-accent font-medium mt-1">{method.contact2}</p>
                  )}
                </div>
                <a href={method.link || "#"}>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below or email us at info@sangronyx.com. We'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select 
                      value={formData.country} 
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger className="bg-background">
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
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select 
                      value={formData.interest} 
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger className="bg-background">
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="Tell us about your project or requirements..."
                    className="bg-background resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 h-auto">
                  Submit
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  Our Office
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Sangronyx Technologies</p>
                  <p>7-1-619/A/37,</p>
                  <p>101, Revathi Apartments,</p>
                  <p>Beside Maitrivanam outgate, opp Annapurna block gate no-2,</p>
                  <p>Kumar Basti, Srinivas nagar, Ameerpet,</p>
                  <p>Hyd, Telangana-500038</p>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium text-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-accent" />
                  Global Presence
                </h3>
                <p className="text-muted-foreground mb-4">
                  We serve clients globally with offices and partners across multiple regions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["North America", "Europe", "Asia Pacific", "India"].map((region) => (
                    <span 
                      key={region} 
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
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
