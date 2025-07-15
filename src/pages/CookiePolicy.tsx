
import React from 'react';
import { Link } from 'react-router-dom';
import { Cherry, ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-strawberry/10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-strawberry rounded-full flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}scanberry-logo.png`} alt="ScanBerry Icon" className="w-5 h-5" />
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files stored on your device when you visit our website or use our app. 
                They help us provide you with a better experience and understand how you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">Required for basic app functionality and security.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">Help us understand how users interact with our app to improve performance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Preference Cookies</h3>
                  <p className="text-gray-600">Remember your settings and preferences for a personalized experience.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Google Analytics for usage statistics</li>
                <li>App store analytics services</li>
                <li>Customer support platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control cookies through your device settings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Disable cookies in your browser settings</li>
                <li>Clear existing cookies from your device</li>
                <li>Set preferences for cookie acceptance</li>
                <li>Use private/incognito browsing mode</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Note: Disabling essential cookies may affect app functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookie Retention</h2>
              <p className="text-gray-600 mb-4">
                Different types of cookies are stored for different periods:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close the app</li>
                <li><strong>Persistent cookies:</strong> Stored for up to 2 years</li>
                <li><strong>Analytics cookies:</strong> Stored for up to 26 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time. Changes will be posted on this page 
                with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about our use of cookies, please contact us at:
                <br />
                <strong>Email:</strong> app.scanberry@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
