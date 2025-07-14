
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">These Terms and Conditions (“Terms”) govern your use of ScanBerry (“App”), developed by ScanBerry (“Developer”). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Definitions</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>User</strong> refers to any person who downloads, installs, or uses the App.</li>
              <li><strong>Content</strong> refers to any text, images, audio, or other media available through the App.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎁 License</h2>
            <p className="text-gray-600 mb-4">Subject to your compliance with these Terms, the Developer grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔐 User Conduct</h2>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Use the App for any unlawful or fraudulent purposes.</li>
              <li>Copy, modify, adapt, or create derivative works of the App or its Content.</li>
              <li>Interfere with, disrupt, or overload the App or its underlying infrastructure.</li>
              <li>Attempt to gain unauthorized access to the App or any associated systems or networks.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💾 Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4">All rights, title, and interest in and to the App, including its Content and any associated intellectual property rights, are the exclusive property of the Developer and its licensors. You may not reproduce, distribute, or create derivative works of the App or its Content without the express written permission of the Developer.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🛡️ Disclaimer</h2>
            <p className="text-gray-600 mb-4">THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE DEVELOPER DOES NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌐 Governing Law</h2>
            <p className="text-gray-600 mb-4">These Terms shall be governed by and construed in accordance with the laws of Belgium, without regard to its conflict of laws principles.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 Modifications</h2>
            <p className="text-gray-600 mb-4">The Developer reserves the right to modify these Terms at any time, in its sole discretion. Your continued use of the App following any modification constitutes your acceptance of the modified Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📩 Contact Information</h2>
            <p className="text-gray-600">If you have any questions or concerns about these Terms or the App, please contact the Developer at:<br />
              <strong>Email:</strong> app.scanberry@gmail.com
            </p>
            <p className="text-gray-400 text-xs mt-4">This Mobile App Terms and Conditions template has been customized for ScanBerry. For legal certainty, consider consulting with legal counsel if necessary.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
