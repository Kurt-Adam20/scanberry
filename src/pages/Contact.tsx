import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact via ScanBerry Website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:app.scanberry@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-soft-cream">
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <div className="flex items-center mb-6">
            <svg className="w-7 h-7 text-strawberry mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" /></svg>
            <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-white border border-strawberry rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-strawberry placeholder-gray-400"
                placeholder="Your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-white border border-strawberry rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-strawberry placeholder-gray-400"
                placeholder="your.email@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea
                className="w-full bg-white border border-strawberry rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-strawberry placeholder-gray-400"
                placeholder="How can we help you?"
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-strawberry text-white font-bold py-3 rounded-lg hover:bg-strawberry/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-strawberry mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" /></svg>
              <span className="text-lg font-bold text-gray-800">Direct Email</span>
            </div>
            <p className="text-gray-600 mb-1">For immediate assistance, reach out directly:</p>
            <span className="font-semibold text-strawberry">app.scanberry@gmail.com</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-warm-yellow mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              <span className="text-lg font-bold text-gray-800">Response Time</span>
            </div>
            <p className="text-gray-600">We typically respond to all inquiries within 24 hours.<br />For urgent technical issues, we aim to respond within 12 hours.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-fresh-green mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
              <span className="text-lg font-bold text-gray-800">What can we help with?</span>
            </div>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1">
              <li>Technical support and bug reports</li>
              <li>Feature requests and suggestions</li>
              <li>Questions about product or content accuracy</li>
              <li>App store and installation issues</li>
              <li>Feedback and general inquiries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 