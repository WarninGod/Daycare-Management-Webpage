import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const handleDemoClick = () => {
    console.log('CTA Demo button clicked');
    alert('Request Demo - Contact form would open here');
  };

  const handleCallClick = () => {
    console.log('Schedule Call button clicked');
    alert('Schedule Call - Calendar booking would open here');
  };

  return (
  <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Ready to Centralize Your Operations?
      </h2>
      <p className="text-lg md:text-xl text-brand-100 mb-10 leading-relaxed">
        Join 120+ multi-location childcare organizations that trust CentraCare to manage their operations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={handleDemoClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-lg font-medium bg-white text-brand-600 hover:bg-slate-100 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Request a Demo <ArrowRight size={18} />
        </button>
        <button 
          onClick={handleCallClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-lg font-medium border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Schedule a Call
        </button>
      </div>
      <p className="text-sm text-brand-200 mt-8">
        Free 30-day trial • No credit card required • Setup in under 1 hour
      </p>
    </div>
  </section>
  );
};

export default CTA;
