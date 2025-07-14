
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scan, Shield, AlertTriangle, Bell, Crown, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Scan,
      title: 'Camera Scanning',
      description: 'Simply point your camera at any product barcode and get instant results with clear visual feedback.',
      color: 'text-strawberry',
      bgColor: 'bg-strawberry/10'
    },
    {
      icon: Shield,
      title: 'Halal/Haram Detection',
      description: 'Instantly see if products are halal or contain haram ingredients with our comprehensive database.',
      color: 'text-fresh-green',
      bgColor: 'bg-fresh-green/10'
    },
    {
      icon: AlertTriangle,
      title: 'Boycott Brand Alerts',
      description: 'Stay informed about boycott brands and make conscious purchasing decisions.',
      color: 'text-warm-yellow',
      bgColor: 'bg-warm-yellow/10'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Get daily and weekly reminders to help you maintain consistent conscious shopping habits.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Crown,
      title: 'Premium Features',
      description: 'Unlock higher scan limits, ad-free experience, and exclusive content with premium membership.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: Smartphone,
      title: 'User-Friendly Interface',
      description: 'Clean, intuitive design that works seamlessly in English for users worldwide.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Powerful Features for <span className="text-strawberry">Conscious Shopping</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ScanBerry combines cutting-edge technology with comprehensive databases to help you make informed choices about the products you buy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="gradient-berry rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Scanning?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Join thousands of users making conscious choices every day
            </p>
            <button className="bg-white text-strawberry hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download ScanBerry Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
