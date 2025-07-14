
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacySection = () => {
  const privacyFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your personal information is encrypted and securely stored using industry-standard protocols.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'We only collect data necessary to improve your experience and never sell your information to third parties.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'You have full control over your data and can view, modify, or delete your information at any time.'
    },
    {
      icon: Database,
      title: 'Minimal Collection',
      description: 'We follow data minimization principles, collecting only what we need to provide our services.'
    }
  ];

  return (
    <section id="privacy" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Your <span className="text-strawberry">Privacy</span> Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your data is safe with us. We respect your privacy and are committed to protecting your personal information.
          </p>
          <div className="bg-strawberry/10 border border-strawberry/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-strawberry font-semibold">
              🔒 Your data is safe. We respect your privacy and only use your data to improve your experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-strawberry/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-strawberry" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Privacy Policy Link */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to Know More?
            </h3>
            <p className="text-gray-600 mb-6">
              Read our detailed privacy policy and terms of service to understand exactly how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/privacy" 
                className="inline-flex items-center justify-center px-6 py-3 bg-strawberry text-white rounded-full font-semibold hover:bg-strawberry/90 transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-strawberry text-strawberry rounded-full font-semibold hover:bg-strawberry hover:text-white transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
