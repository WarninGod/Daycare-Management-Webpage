import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Solutions from './sections/Solutions';
import Pricing from './sections/Pricing';
import Security from './sections/Security';
import Resources from './sections/Resources';
import CTA from './sections/CTA';
import CookieBanner from './sections/CookieBanner';

// Main App Component
const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Pricing />
        <Security />
        <Resources />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;
