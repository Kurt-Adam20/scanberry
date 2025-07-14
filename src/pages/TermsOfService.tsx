
import React from 'react';
import { Link } from 'react-router-dom';
import { Cherry, ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-strawberry/10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-strawberry rounded-full flex items-center justify-center">
                <img src="/ChatGPT Image 8 jul 2025, 22_21_54.png" alt="ScanBerry Icon" className="w-5 h-5" />
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By downloading, installing, or using the ScanBerry mobile application, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                ScanBerry is a mobile application that helps users scan products to check for halal/haram status, 
                boycott information, health scores, and nutritional insights. We provide this service for informational purposes only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the app only for lawful purposes</li>
                <li>Provide accurate information when creating an account</li>
                <li>Keep your account credentials secure</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to reverse engineer or hack the app</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                While we strive for accuracy, ScanBerry's information is provided "as is" without warranties. 
                Users should verify critical information independently. We are not responsible for decisions made based on our app's data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Premium Subscription</h2>
              <p className="text-gray-600 mb-4">
                Premium features require a paid subscription. Subscriptions auto-renew unless cancelled. 
                Refunds are handled according to app store policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                ScanBerry and its creators shall not be liable for any indirect, incidental, special, 
                or consequential damages arising from the use of our application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to terminate or suspend accounts that violate these terms. 
                Users may delete their accounts at any time through the app settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, contact us at:
                <br />
                <strong>Email:</strong> app.scanberry@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
