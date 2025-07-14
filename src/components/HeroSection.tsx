
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Cherry, Scan, Shield, AlertTriangle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 gradient-soft min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-12 h-12 bg-strawberry rounded-full flex items-center justify-center mr-3 animate-pulse-soft">
                <img src="/ChatGPT Image 8 jul 2025, 22_21_54.png" alt="ScanBerry Icon" className="w-7 h-7" />
              </div>
              <span className="text-4xl lg:text-5xl font-bold text-strawberry">ScanBerry</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Scan. Check. <span className="text-strawberry">Eat with confidence!</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ScanBerry helps you make conscious choices at the supermarket. Scan products and instantly discover if they are halal, contain haram ingredients, or are part of a boycott brand.
            </p>
            
            <p className="text-lg text-strawberry font-semibold mb-8">
              Eat with peace of mind, every day! 🍓
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-strawberry hover:bg-strawberry/90 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Download ScanBerry
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-strawberry text-strawberry hover:bg-strawberry hover:text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Scan className="w-5 h-5 text-fresh-green" />
                <span className="text-sm text-gray-600">Quick Scan</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Shield className="w-5 h-5 text-fresh-green" />
                <span className="text-sm text-gray-600">Halal Check</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-warm-yellow" />
                <span className="text-sm text-gray-600">Boycott Alert</span>
              </div>
            </div>
          </div>

          {/* Right Column - App Screenshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screenshot */}
                  <img 
                    src="/lovable-uploads/8e8f0054-a438-4453-b660-205a127f4657.png" 
                    alt="ScanBerry App - Ice Cream Products with Halal Status"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-4 w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center animate-float shadow-lg">
                <img src="/ChatGPT Image 8 jul 2025, 22_21_54.png" alt="ScanBerry Icon" className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-6 w-8 h-8 bg-fresh-green rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
