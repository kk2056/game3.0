import React from 'react';
import { Mail, Shield, Info } from 'lucide-react';

export const AboutPage: React.FC = () => (
  <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-purple-600 rounded-lg">
        <Info className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-white">About SnakeGame.cfd</h1>
    </div>
    
    <div className="prose prose-invert max-w-none text-slate-300">
      <p className="text-lg mb-6">
        Welcome to <span className="text-purple-400 font-bold">SnakeGame.cfd</span> — your one-stop destination for free HTML5 online games!
        We are dedicated to providing high-quality, clean browser gaming experiences so every player can enjoy games anytime, anywhere.
      </p>
      
      <h3 className="text-white text-xl font-bold mt-8 mb-4">Our Mission</h3>
      <p>
        Our mission is simple: to break down device and platform barriers. No tedious downloads, installations, or settings required—just classic, fun games at your fingertips.
        We believe great gaming experiences should be free, convenient, and ubiquitous.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="bg-slate-700/50 p-4 rounded-lg">
          <h4 className="font-bold text-white mb-2">⚡ Instant Play</h4>
          <p className="text-sm">Built on HTML5 technology. Click link to play immediately, no download waiting.</p>
        </div>
        <div className="bg-slate-700/50 p-4 rounded-lg">
          <h4 className="font-bold text-white mb-2">📱 Multi-Device</h4>
          <p className="text-sm">Perfectly adapted for iOS, Android phones, tablets, and desktop browsers.</p>
        </div>
      </div>
    </div>
  </div>
);

export const ContactPage: React.FC = () => (
  <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-purple-600 rounded-lg">
        <Mail className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-white">Contact Us</h1>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-slate-300 mb-6">
          Have any questions, feedback, or suggestions? We'd love to hear from you!
          Your input is the driving force behind our platform improvements.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-300">
            <Mail className="w-5 h-5 text-purple-400" />
            <span>contact@snakegame.cfd</span>
          </div>
          <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-sm text-slate-400">
              <strong>Business Cooperation:</strong> For advertising or game integration,
              please include "Business" in your email subject line.
            </p>
          </div>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
          <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
          <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
          <textarea className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white h-32 focus:outline-none focus:border-purple-500" placeholder="Please describe your question or suggestion..."></textarea>
        </div>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export const PrivacyPage: React.FC = () => (
  <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-purple-600 rounded-lg">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
    </div>

    <div className="prose prose-invert max-w-none text-slate-300 text-sm">
      <p>Last Updated: November 14, 2025</p>
      
      <h3 className="text-white text-lg font-bold mt-6">Information We Collect</h3>
      <p>At SnakeGame.cfd, we are committed to protecting your privacy. This privacy policy explains what information we collect and how we use it.</p>

      <h3 className="text-white text-lg font-bold mt-6">Google AdSense</h3>
      <p>
        This website uses Google AdSense to display advertisements. Google AdSense uses Cookies and Web Beacons to serve ads based on your prior visits to this website or other websites.
        Google may use Cookies to collect information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
      </p>

      <h3 className="text-white text-lg font-bold mt-6">Cookie Usage</h3>
      <p>This website uses cookies to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Remember your preferences (e.g., volume)</li>
        <li>Enable advertisement functionality</li>
        <li>Analyze website traffic via Google Analytics to improve experience</li>
      </ul>

      <h3 className="text-white text-lg font-bold mt-6">Your Rights</h3>
      <p>You have the right to visit Google's Ad Settings to opt-out of personalized advertising, or disable cookies in your browser settings.</p>
    </div>
  </div>
);