
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    service: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", businessType: "", service: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234F46E5" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get a Custom-Built Website That{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Grows Your Business
                </span>{" "}
                in 30 Days or Less
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We specialize in responsive, SEO-optimized websites for small businesses in the US, UK & Canada. 
                Professional results, affordable pricing, guaranteed delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">100+ Websites Built</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">6+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
                  <p className="text-gray-600">No obligation. Response within 24 hours.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                  
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12"
                  />
                  
                  <Input
                    placeholder="Business Type (e.g., Restaurant, Law Firm)"
                    value={formData.businessType}
                    onChange={(e) => handleInputChange("businessType", e.target.value)}
                    className="h-12"
                  />
                  
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="What do you need? *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">New Website</SelectItem>
                      <SelectItem value="ecommerce">eCommerce Store</SelectItem>
                      <SelectItem value="redesign">Website Redesign</SelectItem>
                      <SelectItem value="seo">SEO Services</SelectItem>
                      <SelectItem value="maintenance">Website Maintenance</SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Get My Free Quote 🚀
                  </Button>
                </form>
                
                <p className="text-xs text-gray-500 text-center">
                  No spam. Your information is 100% secure.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
