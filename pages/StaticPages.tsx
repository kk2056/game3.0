import React from 'react';
import { Mail, Shield, Info, Gamepad2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Shared styles to ensure 100% design consistency
const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-gradient-to-br from-slate-900 to-purple-900/50 rounded-xl p-8 border border-slate-700 shadow-2xl text-slate-200">
    {children}
  </div>
);

const Header: React.FC<{ icon: any; title: string }> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
    <div className="p-3 bg-purple-600 rounded-lg shadow-lg shadow-purple-500/20">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
  </div>
);

export const AboutPage: React.FC = () => (
  <PageContainer>
    <Header icon={Info} title="About Us" />
    
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        Welcome to <strong className="text-purple-400">SnakeGame.cfd</strong>, your premier destination for the best free online games in 2025. 
        We are dedicated to providing a seamless, unblocked gaming experience that requires <span className="text-white font-semibold">no downloads</span> and <span className="text-white font-semibold">no installation</span>.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
        <Gamepad2 className="w-5 h-5 text-purple-400" />
        Our Game Collection
      </h3>
      <p className="mb-4 text-slate-300">
        We curate high-quality HTML5 games that run instantly in your browser. Our current top titles include:
      </p>
      
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors">
          <strong className="text-white block mb-1">Sudoku Master</strong>
          <span className="text-sm text-slate-400">The ultimate logic puzzle for brain training with multiple difficulty tiers.</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors">
          <strong className="text-white block mb-1">Falling Cubes</strong>
          <span className="text-sm text-slate-400">A modern, fast-paced take on the classic block-stacking arcade genre.</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors">
          <strong className="text-white block mb-1">Classic Checkers</strong>
          <span className="text-sm text-slate-400">Strategic board gameplay powered by smart AI opponents.</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors">
          <strong className="text-white block mb-1">Othello Reversi</strong>
          <span className="text-sm text-slate-400">Deep strategy game where you flip pieces to conquer the board.</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors">
          <strong className="text-white block mb-1">Word Puzzle</strong>
          <span className="text-sm text-slate-400">Expand your vocabulary with our engaging word search challenges.</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Why Choose Us?</h3>
      <ul className="space-y-2 text-slate-300">
        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 100% Free Forever</li>
        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Instant Play (No Lag)</li>
        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Mobile & Desktop Compatible</li>
      </ul>
    </div>
  </PageContainer>
);

export const ContactPage: React.FC = () => (
  <PageContainer>
    <Header icon={Mail} title="Contact Us" />

    <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center mb-8">
      <p className="text-lg text-slate-300 mb-6">
        Have questions, suggestions, or need support? We are here to help!
      </p>
      
      <div className="inline-block p-4 bg-slate-900 rounded-lg border border-purple-500/30 mb-4">
        <span className="text-slate-400 text-sm block mb-1 uppercase tracking-wider">Email Support</span>
        <a href="mailto:contact@snakegame.cfd" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
          contact@snakegame.cfd
        </a>
      </div>
      
      <p className="text-sm text-purple-300 mt-4 bg-purple-900/20 inline-block px-4 py-1 rounded-full border border-purple-500/20">
        ⚡ We usually reply within 24 hours
      </p>
    </div>

    <div className="text-sm text-slate-500 text-center">
      For business inquiries or advertising opportunities, please use the subject line "Business Inquiry".
    </div>
  </PageContainer>
);

export const PrivacyPage: React.FC = () => (
  <PageContainer>
    <Header icon={Shield} title="Privacy Policy" />

    <div className="prose prose-invert prose-sm max-w-none text-slate-300 space-y-6">
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Last Updated: January 1, 2025</p>
        <p>
          At <strong>SnakeGame.cfd</strong>, accessible from https://snakegame.cfd, one of our main priorities is the privacy of our visitors. 
          This Privacy Policy document contains types of information that is collected and recorded by SnakeGame.cfd and how we use it.
        </p>
      </div>

      <section>
        <h3 className="text-lg font-bold text-white mb-2">Log Files</h3>
        <p>
          SnakeGame.cfd follows a standard procedure of using log files. These files log visitors when they visit websites. 
          The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. 
          These are not linked to any information that is personally identifiable.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-white mb-2">Cookies and Web Beacons</h3>
        <p>
          Like any other website, SnakeGame.cfd uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. 
          The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>
      </section>

      <section className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-lg font-bold text-white mb-2">Google DoubleClick DART Cookie</h3>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. 
          However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – 
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline ml-1">https://policies.google.com/technologies/ads</a>
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-white mb-2">GDPR Data Protection Rights</h3>
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-bold text-white mb-2">CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
        <p>
          Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
          SnakeGame.cfd does not sell your personal data.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-white mb-2">Children's Information</h3>
        <p>
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          SnakeGame.cfd does not knowingly collect any Personal Identifiable Information from children under the age of 13.
        </p>
      </section>

      <div className="pt-6 border-t border-slate-700 mt-8">
        <p className="text-center">
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to 
          <Link to="/contact" className="text-purple-400 hover:underline ml-1">contact us</Link>.
        </p>
      </div>
    </div>
  </PageContainer>
);