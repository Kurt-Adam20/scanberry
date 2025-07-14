
import React from 'react';
import { Link } from 'react-router-dom';
import { Cherry, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-strawberry/10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-strawberry rounded-full flex items-center justify-center">
                <Cherry className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-strawberry">ScanBerry</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-strawberry transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to ScanBerry. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and protect your information when you use our mobile application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Product scan data and search history</li>
                <li>Health preferences and dietary restrictions</li>
                <li>Usage analytics and app performance data</li>
                <li>Device information and operating system details</li>
                <li>Account information (if you create an account)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide personalized health scores and recommendations</li>
                <li>Improve our product database and scanning accuracy</li>
                <li>Send you relevant notifications and updates</li>
                <li>Analyze usage patterns to enhance app functionality</li>
                <li>Ensure app security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or share your personal information with third parties for marketing purposes. 
                We may share anonymized, aggregated data for research and improvement purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your data, including encryption, 
                secure servers, and regular security audits.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> privacy@scanberry.app
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
