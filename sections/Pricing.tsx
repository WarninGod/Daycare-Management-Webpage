import React from 'react';
import Button from '../components/Button';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const highlights = [
    "Custom proposals aligned to your number of locations and staffing model",
    "Predictable contracts with no hidden add-ons",
    "Onboarding and training included for every engagement",
    "EU data hosting and compliance baked into every agreement"
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pricing Tailored to Your Network
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We build a package around your locations, staffing model, and compliance needs. No published tiers, price tags, or calculators—let's align on what you need first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="bg-brand-100 p-2 rounded-full">
                <Check size={18} className="text-brand-600" />
              </div>
              <p className="text-slate-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="gap-2">
            Talk to Sales <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            Request a Demo
          </Button>
        </div>

        <p className="text-sm text-slate-500 mt-8">
          Share your context and we'll craft a recommendation—no public pricing tables.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
