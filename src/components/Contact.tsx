
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Clock, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent Successfully!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get your free quote today and join 100+ businesses that have transformed their online presence with us
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handle InputChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12"
                  />
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Service Needed *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">New Website</SelectItem>
                      <SelectItem value="ecommerce">eCommerce Store</SelectItem>
                      <SelectItem value="redesign">Website Redesign</SelectItem>
                      <SelectItem value="seo">SEO Services</SelectItem>
                      <SelectItem value="maintenance">Website Maintenance</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-2k">Under $2,000</SelectItem>
                      <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-plus">$10,000+</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Textarea
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[120px]"
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Send My Request 🚀
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                No spam. Free quote within 24 hours. No obligation.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-white space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us Now</p>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-100">hello@webdevagency.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Live Chat</p>
                    <p className="text-blue-100">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Serving</p>
                    <p className="text-blue-100">US, UK & Canada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Support Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick CTA */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Need It Urgently?
              </h4>
              <p className="text-gray-800 mb-4">
                Call us now for same-day consultation
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2">
                Call Now: +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
