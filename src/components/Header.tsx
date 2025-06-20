
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hello@webdevagency.com</span>
            </div>
          </div>
          <div className="text-blue-600 font-medium">
            🌟 Free Consultation Available - Book Now!
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WebDev Agency</h1>
              <p className="text-xs text-gray-500">Custom Websites That Convert</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Get Quote
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Get Free Quote
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  Call Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
