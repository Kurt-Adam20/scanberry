
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '50K+', label: 'Happy Users' },
    { icon: Zap, number: '1M+', label: 'Products Scanned' },
    { icon: Globe, number: '25+', label: 'Countries' },
    { icon: Heart, number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 px-4 gradient-soft">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-strawberry">ScanBerry</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              ScanBerry was created with a simple mission: to empower consumers to make conscious, informed choices about the products they purchase.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our comprehensive database includes detailed information about halal certification, haram ingredients, and boycott status of thousands of products. We believe everyone deserves to shop with confidence and peace of mind.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-strawberry/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-strawberry" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">Made with Care</h4>
                <p className="text-sm text-gray-600">Every feature designed with users in mind</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-fresh-green" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">Global Reach</h4>
                <p className="text-sm text-gray-600">Supporting communities worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-strawberry/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-strawberry" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              "To create a world where every consumer can make informed, conscious choices about their purchases, 
              ensuring they align with their values and beliefs. ScanBerry is more than an app – it's a movement 
              towards more transparent and ethical consumption."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
