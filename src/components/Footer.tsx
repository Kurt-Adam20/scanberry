
import React from 'react';
import { Link } from 'react-router-dom';
import { Cherry, Heart, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-strawberry rounded-full flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}scanberry-logo.png`} alt="ScanBerry Icon" className="w-6 h-6" />
              </div>
              <span className="text-3xl font-bold text-strawberry">ScanBerry</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Scan. Check. Eat with confidence! Making conscious shopping choices easier for everyone, everywhere.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe className="w-4 h-4" />
              <span>Available worldwide in English</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-300 hover:text-strawberry transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-strawberry transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-strawberry transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-strawberry transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-strawberry transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-strawberry transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-strawberry transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-strawberry transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-gray-300 hover:text-strawberry transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <div className="gradient-berry rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Conscious Shopping Journey?
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Download ScanBerry now and make conscious choices every day!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-black rounded-xl p-4 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">
📱
</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Available on</div>
                  <div className="text-lg font-bold text-white">iOS only</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2024 ScanBerry. Made with</span>
              <Heart className="w-4 h-4 text-strawberry fill-current" />
              <span>for conscious consumers worldwide.</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:app.scanberry@gmail.com?subject=Contact%20via%20ScanBerry%20Website&body=Please%20describe%20your%20question%20or%20feedback%20here." className="text-gray-400 hover:text-strawberry transition-colors" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-400">
                SEO: halal scanner, boycott brands, haram ingredients, halal food app
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
