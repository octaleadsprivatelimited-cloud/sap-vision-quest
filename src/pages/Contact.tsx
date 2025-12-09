import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
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
    icon: Mail,
    title: "Email",
    description: "Send us an email for inquiries and support",
    contact: "info@sangronyx.com",
    action: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Contact Form",
    description: "Fill out our contact form below",
    contact: "Get in touch",
    action: "Fill Form",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "We're here to help with your IT and SAP needs",
    contact: "Expert assistance",
    action: "Get Support",
  },
];

const offices = [
  {
    city: "Email",
    country: "Contact",
    address: "info@sangronyx.com",
    type: "Primary Contact",
  },
  {
    city: "Phone",
    country: "Contact",
    address: "+91-XXXXXXXXXX",
    type: "Phone Support",
  },
  {
    city: "Location",
    country: "India",
    address: "Global services available",
    type: "Service Location",
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
      <PageHero 
        title="Get a Free SAP Consultation"
        description="Our SAP experts will help you choose the right software, modules and implementation approach for your business."
      />

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
                Fill out the form below or email us at info@sangronyx.com. We'll get back to you within 24 hours.
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
                      <SelectItem value="sap-implementation">SAP S/4HANA Implementation</SelectItem>
                      <SelectItem value="sap-migration">SAP ECC to S/4HANA Migration</SelectItem>
                      <SelectItem value="sap-licensing">SAP Licensing & Software</SelectItem>
                      <SelectItem value="sap-modules">SAP Module Implementations</SelectItem>
                      <SelectItem value="sap-development">SAP Custom Development</SelectItem>
                      <SelectItem value="sap-training">SAP Corporate Training</SelectItem>
                      <SelectItem value="sap-support">SAP Support & Maintenance</SelectItem>
                      <SelectItem value="sap-integration">SAP Integration Services</SelectItem>
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
                  By submitting this form, you agree to our Privacy Policy and consent to receive communications from Sangronyx.
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
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div
                      key={office.city}
                      className="bg-card rounded-xl p-4 border border-border"
                    >
                      <div className="flex items-start gap-3">
                        {index === 0 ? (
                          <Mail className="w-5 h-5 text-primary mt-1" />
                        ) : index === 1 ? (
                          <Phone className="w-5 h-5 text-primary mt-1" />
                        ) : (
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                        )}
                        <div>
                          <p className="font-medium text-foreground">
                            {office.city}
                          </p>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                          {office.country && (
                            <p className="text-sm text-muted-foreground">{office.country}</p>
                          )}
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
                <h3 className="text-xl font-semibold mb-2">SAP Solutions</h3>
                <p className="text-primary-foreground/90 mb-4">
                  Complete SAP solutions including implementation, migration, training, support, and custom development. Let our SAP experts help transform your business.
                </p>
                <Button variant="hero" size="sm">
                  Explore SAP Services
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
