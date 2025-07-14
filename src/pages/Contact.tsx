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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-strawberry"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-strawberry"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-strawberry"
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
            Send Email
          </button>
        </form>
        <div className="mt-10 text-center">
          <span className="text-gray-400 text-sm">Or email us directly: <a href="mailto:app.scanberry@gmail.com" className="underline hover:text-strawberry">app.scanberry@gmail.com</a></span>
        </div>
      </div>
    </div>
  );
};

export default Contact; 