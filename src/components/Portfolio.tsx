
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Restaurant Chain Website",
      category: "Restaurant",
      description: "Increased online orders by 150% with modern design and online ordering system",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      results: "150% increase in orders",
      tech: ["WordPress", "WooCommerce", "SEO"]
    },
    {
      title: "Law Firm Redesign",
      category: "Legal Services",
      description: "Professional rebrand that generated 200% more leads in first month",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
      results: "200% more leads",
      tech: ["Custom Design", "Contact Forms", "SEO"]
    },
    {
      title: "E-commerce Fashion Store",
      category: "E-commerce",
      description: "Built scalable online store with 500+ products and mobile-first design",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      results: "500+ products managed",
      tech: ["Shopify", "Custom Theme", "Mobile Optimization"]
    },
    {
      title: "Healthcare Clinic Portal",
      category: "Healthcare",
      description: "HIPAA-compliant patient portal with appointment booking system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      results: "HIPAA compliant",
      tech: ["React", "Secure Forms", "Database Integration"]
    },
    {
      title: "Real Estate Agency",
      category: "Real Estate",
      description: "MLS integration with advanced property search and lead capture",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      results: "MLS integration",
      tech: ["Property Search", "Lead Generation", "CRM Integration"]
    },
    {
      title: "Fitness Studio Website",
      category: "Fitness",
      description: "Class booking system with member portal and payment integration",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      results: "Automated bookings",
      tech: ["Booking System", "Payment Gateway", "Member Portal"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work & Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours grow with custom websites that deliver real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {project.results}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
