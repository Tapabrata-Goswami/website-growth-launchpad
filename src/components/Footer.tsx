
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  ExternalLink 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">WebDev Agency</h3>
                <p className="text-sm text-gray-400">Custom Websites That Convert</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              We specialize in building custom websites for small businesses across the US, UK, and Canada. 
              Our goal is to help you grow your business with professional, conversion-focused web solutions.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Custom Website Development",
                "eCommerce Solutions",
                "Website Redesign",
                "SEO Services",
                "Website Maintenance",
                "Mobile App Development",
                "Digital Marketing",
                "Branding & Design"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Portfolio",
                "Case Studies",
                "Client Reviews",
                "Blog",
                "Free Resources",
                "Privacy Policy",
                "Terms of Service"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">+44 20 7123 4567 (UK)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-gray-300">hello@webdevagency.com</p>
                  <p className="text-gray-300">support@webdevagency.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Locations</p>
                  <p className="text-gray-300">New York, USA</p>
                  <p className="text-gray-300">London, UK</p>
                  <p className="text-gray-300">Toronto, Canada</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-300">Mon-Fri: 8AM-8PM</p>
                  <p className="text-gray-300">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Get Free Quote Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} WebDev Agency. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Professional web development services for businesses in US, UK & Canada
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
