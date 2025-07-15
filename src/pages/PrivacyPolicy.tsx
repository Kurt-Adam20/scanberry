
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
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
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">a. Personal Information</h3>
            <p className="text-gray-600 mb-4">We do not require you to provide personal information such as your name, email address, or contact details to use the App. However, if you contact us (e.g., via email), we may collect the personal information you provide.</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">b. Non-Personal Information</h3>
            <p className="text-gray-600 mb-4">We may automatically collect non-personal data, such as:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Device type, model, and operating system</li>
              <li>Usage statistics (e.g., time spent on the App)</li>
              <li>App performance data, including crash reports and errors</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">c. Cookies and Tracking Technologies</h3>
            <p className="text-gray-600 mb-4">The App does not currently use cookies or similar tracking technologies. However, third-party services integrated into the App (if any) may collect such data according to their own privacy policies.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect for purposes such as:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Ensuring the App functions properly</li>
              <li>Improving the App’s design, features, and performance</li>
              <li>Responding to your inquiries or feedback</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Sharing Your Information</h2>
            <p className="text-gray-600 mb-4">We do not sell, trade, or rent your personal information. We may share non-personal information with third parties, such as analytics providers, to improve the App.</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Third-Party Services</h3>
            <p className="text-gray-600 mb-4">The App may use third-party tools or services for analytics or performance monitoring. These third parties may collect information as governed by their own privacy policies. If you would like to know which third-party services are used, please contact us.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Retention</h2>
            <p className="text-gray-600 mb-4">We retain non-personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Any personal information collected (e.g., through user inquiries) is retained only as long as needed to provide support or comply with legal obligations.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. International Users</h2>
            <p className="text-gray-600 mb-4">If you access the App outside Belgium, your information may be transferred to and processed in Belgium, where privacy laws may differ from those in your country.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Legal Basis for Processing (for EEA Users)</h2>
            <p className="text-gray-600 mb-4">If you are in the European Economic Area (EEA), we process your data based on the following legal bases:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Consent: When you agree to provide information (e.g., by contacting us)</li>
              <li>Legitimate Interests: To ensure the functionality and improvement of the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Your Rights (for EEA and UK Users)</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (“right to be forgotten”)</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Request data portability (to receive your data in a commonly used format)</li>
              <li>Withdraw your consent at any time (where processing is based on consent)</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="text-gray-600 mb-4">To exercise any of these rights, please contact us at <a href="mailto:app.scanberry@gmail.com" className="underline hover:text-strawberry">app.scanberry@gmail.com</a>.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">We may update this Privacy Policy from time to time. Any changes will be posted within the App, and the “Effective Date” will be updated. Continued use of the App after such changes indicates your acceptance of the updated policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
            <p className="text-gray-600">If you have questions or concerns about this Privacy Policy or how your information is handled, please contact us at:<br />
              <strong>Email:</strong> app.scanberry@gmail.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
