
import React from 'react';
import { Button } from '@/components/ui/button';
import { Cherry, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-strawberry/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-strawberry rounded-full flex items-center justify-center">
              <img src="/ChatGPT Image 8 jul 2025, 22_21_54.png" alt="ScanBerry Icon" className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-strawberry">ScanBerry</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-strawberry transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-strawberry transition-colors">
              About
            </a>
            <a href="#privacy" className="text-gray-700 hover:text-strawberry transition-colors">
              Privacy
            </a>
            <a href="/contact" className="text-gray-700 hover:text-strawberry transition-colors">
              Contact Us
            </a>
            <Button className="bg-strawberry hover:bg-strawberry/90 text-white rounded-full px-6">
              Download Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-strawberry" />
            ) : (
              <Menu className="w-6 h-6 text-strawberry" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-strawberry/10">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-strawberry transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-strawberry transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#privacy"
                className="text-gray-700 hover:text-strawberry transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-strawberry transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <Button className="bg-strawberry hover:bg-strawberry/90 text-white rounded-full w-full mt-4">
                Download Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
