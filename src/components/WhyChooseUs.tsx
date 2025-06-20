
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  DollarSign, 
  Headphones, 
  Award, 
  Globe, 
  Star,
  Zap,
  Shield
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Most websites completed in 14-30 days. We understand you need results quickly.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Rates",
      description: "Competitive pricing without compromising quality. Payment plans available.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24x7 Support",
      description: "Round-the-clock support via chat, email, and phone. We're always here to help.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "6+ Years Experience",
      description: "Proven track record with hundreds of successful projects across multiple industries.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "100+ Websites Built",
      description: "Extensive portfolio spanning startups to established businesses in US, UK & Canada.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Reviews",
      description: "Consistently rated 5 stars by our clients. Check our Google Reviews and testimonials.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Sites",
      description: "Optimized for speed and performance. Your site will load in under 3 seconds.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "SSL certificates, regular backups, and security monitoring included with every site.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Web Development Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine years of experience with cutting-edge technology to deliver websites that not only look great but drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have grown their business with our custom websites. 
              Get your free quote today and see the difference professional web development makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Free Quote Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  ;
};

export default WhyChooseUs;
