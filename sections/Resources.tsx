import React from 'react';
import { ClipboardList, Users, FileCheck, ArrowRight } from 'lucide-react';

const Resources = () => (
  <section id="resources" className="py-20 lg:py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Resources & Support
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to get started and succeed with CentraCare.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
          <div className="bg-brand-100 p-3 rounded-lg w-fit mb-4">
            <ClipboardList className="h-6 w-6 text-brand-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Documentation</h3>
          <p className="text-slate-600 mb-4">Comprehensive guides, API docs, and tutorials to help you get the most out of CentraCare.</p>
          <a href="#" className="text-brand-600 font-medium hover:text-brand-700 inline-flex items-center gap-1">
            Browse Docs <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
          <div className="bg-brand-100 p-3 rounded-lg w-fit mb-4">
            <Users className="h-6 w-6 text-brand-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Community</h3>
          <p className="text-slate-600 mb-4">Join our community of childcare professionals sharing best practices and insights.</p>
          <a href="#" className="text-brand-600 font-medium hover:text-brand-700 inline-flex items-center gap-1">
            Join Community <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
          <div className="bg-brand-100 p-3 rounded-lg w-fit mb-4">
            <FileCheck className="h-6 w-6 text-brand-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Case Studies</h3>
          <p className="text-slate-600 mb-4">Learn how organizations like yours are succeeding with CentraCare.</p>
          <a href="#" className="text-brand-600 font-medium hover:text-brand-700 inline-flex items-center gap-1">
            Read Stories <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Resources;
