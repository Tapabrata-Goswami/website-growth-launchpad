
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "The Local Bistro",
      location: "Toronto, Canada",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ae?w=100&h=100&fit=crop&crop=face",
      testimonial: "Our restaurant's online orders increased by 150% after they built our new website. The online ordering system is seamless and our customers love it. Best investment we've made!",
      result: "150% increase in online orders"
    },
    {
      name: "Michael Chen",
      business: "Chen & Associates Law",
      location: "New York, USA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      testimonial: "Professional, fast, and results-driven. They completely transformed our outdated website into a modern, client-attracting machine. We're getting 3x more inquiries now.",
      result: "3x more client inquiries"
    },
    {
      name: "Emma Thompson",
      business: "FitLife Wellness Studio",
      location: "London, UK",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      testimonial: "The class booking system they built has automated our entire scheduling process. Members can book classes 24/7, and we've reduced admin work by 80%. Brilliant team!",
      result: "80% less admin work"
    },
    {
      name: "David Rodriguez",
      business: "Rodriguez Real Estate",
      location: "Miami, USA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      testimonial: "They integrated our MLS system perfectly and created a property search that our clients actually want to use. Lead generation has doubled since the new site went live.",
      result: "Doubled lead generation"
    },
    {
      name: "Lisa Park",
      business: "Park Dental Care",
      location: "Vancouver, Canada",
      rating: 5,
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&h=100&fit=crop&crop=face",
      testimonial: "They understood our need for HIPAA compliance and built a secure patient portal that patients love. Online appointment bookings have increased by 200%.",
      result: "200% more online bookings"
    },
    {
      name: "James Wilson",
      business: "Wilson Auto Repair",
      location: "Birmingham, UK",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      testimonial: "From outdated to outstanding! Our new website showcases our services beautifully and the online booking system has streamlined our operations completely.",
      result: "Fully automated bookings"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners across US, UK & Canada say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-blue-200" />
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-sm italic">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-800 font-semibold text-sm">
                      📈 Result: {testimonial.result}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                      <p className="text-xs text-blue-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Average Rating from 150+ Google Reviews
            </h3>
            <p className="text-gray-600 mb-6">
              Join our growing family of satisfied clients who've transformed their business with professional websites
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
              Read All Google Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
