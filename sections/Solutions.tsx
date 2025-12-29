import React from 'react';
import Button from '../components/Button';
import { Layers, Check, ArrowRight, Building2 } from 'lucide-react';

const Solutions = () => (
  <section id="solutions" className="py-20 lg:py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Layers size={16} />
            For Growing Organizations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Built for Multi-Location Complexity
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Managing multiple childcare locations means juggling different staff, regulations, and parent expectations. 
            CentraCare brings it all into one unified system.
          </p>
          
          <div className="space-y-4">
            {[
              "Centralized staff credentials and certification tracking",
              "Real-time occupancy and capacity monitoring",
              "Standardized policies across all locations",
              "Consolidated billing and financial reporting",
              "Emergency contact access for entire network"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-brand-600 rounded-full p-1 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Button variant="primary" size="lg" className="gap-2">
              Schedule a Walkthrough <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="aspect-square bg-gradient-to-br from-brand-50 to-brand-100 rounded-lg flex items-center justify-center">
              <Building2 className="h-32 w-32 text-brand-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Solutions;
