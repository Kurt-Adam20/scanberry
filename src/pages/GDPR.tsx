
import React from 'react';
import { Link } from 'react-router-dom';
import { Cherry, ArrowLeft } from 'lucide-react';

const GDPR = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">GDPR Compliance</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Your Rights Under GDPR</h2>
              <p className="text-gray-600 mb-4">
                As a user in the European Union, you have specific rights under the General Data Protection Regulation (GDPR). 
                ScanBerry is committed to protecting these rights.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Right to Information:</strong> Know what data we collect and how we use it</li>
                <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we process your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
                <li><strong>Rights Related to Automated Decision-Making:</strong> Opt-out of automated profiling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Legal Basis for Processing</h2>
              <p className="text-gray-600 mb-4">We process your personal data based on:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Consent:</strong> You have given clear consent for specific purposes</li>
                <li><strong>Contract:</strong> Processing is necessary for our service agreement</li>
                <li><strong>Legal Obligation:</strong> Required by law</li>
                <li><strong>Legitimate Interest:</strong> For our business operations, balanced against your rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data Protection Measures</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Data encryption in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Data anonymization and pseudonymization where possible</li>
                <li>Secure data backup and recovery procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Retention</h2>
              <p className="text-gray-600 mb-4">We retain your data only as long as necessary:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account data:</strong> Until account deletion</li>
                <li><strong>Scan history:</strong> Up to 3 years for service improvement</li>
                <li><strong>Analytics data:</strong> Up to 26 months in anonymized form</li>
                <li><strong>Support communications:</strong> Up to 2 years</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                If we transfer your data outside the EU, we ensure appropriate safeguards are in place, 
                including Standard Contractual Clauses or adequacy decisions by the European Commission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. How to Exercise Your Rights</h2>
              <p className="text-gray-600 mb-4">To exercise any of your GDPR rights:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the in-app settings for account management</li>
                <li>Email us at gdpr@scanberry.app</li>
                <li>We will respond within 30 days</li>
                <li>Identity verification may be required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Protection Officer</h2>
              <p className="text-gray-600 mb-4">
                For data protection matters, you can contact our Data Protection Officer at:
                <br />
                <strong>Email:</strong> dpo@scanberry.app
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Supervisory Authority</h2>
              <p className="text-gray-600 mb-4">
                You have the right to lodge a complaint with your local data protection supervisory authority 
                if you believe your data protection rights have been violated.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
