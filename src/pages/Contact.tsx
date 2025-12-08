import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Building2, Users, Headphones } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    title: "Sales",
    description: "Talk to our sales team about enterprise solutions",
    contact: "+1 (800) 872-1727",
    action: "Call Sales",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Get help with your existing SAP products",
    contact: "support.sap.com",
    action: "Open Support",
  },
  {
    icon: MessageSquare,
    title: "Chat",
    description: "Chat with us in real-time",
    contact: "Available 24/7",
    action: "Start Chat",
  },
];

const offices = [
  {
    city: "Walldorf",
    country: "Germany",
    address: "Dietmar-Hopp-Allee 16",
    type: "Global Headquarters",
  },
  {
    city: "New York",
    country: "United States",
    address: "10 Hudson Yards",
    type: "Americas Headquarters",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "30 Pasir Panjang Road",
    type: "Asia Pacific Headquarters",
  },
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
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              We're here to help. Reach out to our team and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-card-hover transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-sap-light-purple mx-auto mb-4 flex items-center justify-center">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="text-primary font-medium mb-4">{method.contact}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {method.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
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
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest *</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="erp">Cloud ERP</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                      <SelectItem value="hcm">Human Capital Management</SelectItem>
                      <SelectItem value="cx">Customer Experience</SelectItem>
                      <SelectItem value="scm">Supply Chain</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business needs..."
                  />
                </div>
                
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Submit Request
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our Privacy Policy and consent to receive communications from SAP.
                </p>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Global Offices</h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-card rounded-xl p-4 border border-border"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">
                            {office.city}, {office.country}
                          </p>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                          <p className="text-xs text-primary mt-1">{office.type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (Local Time)</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="text-primary">24/7 Support available for Premium customers</p>
                </div>
              </div>

              <div className="gradient-hero rounded-xl p-6 text-primary-foreground">
                <Building2 className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
                <p className="text-primary-foreground/90 mb-4">
                  For large enterprise inquiries, our dedicated team is ready to help you find the perfect solution.
                </p>
                <Button variant="hero" size="sm">
                  Contact Enterprise Sales
                </Button>
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
