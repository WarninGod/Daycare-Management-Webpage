import React from 'react';
import { ShieldCheck, Lock, Globe, FileCheck } from 'lucide-react';

const Security = () => (
  <section id="security" className="py-20 lg:py-32 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Lock size={16} />
          Security & Compliance
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enterprise-Grade Security
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Your data and your families' data protected with bank-level security and full GDPR compliance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: ShieldCheck, title: "GDPR Compliant", description: "Full compliance with EU data protection regulations" },
          { icon: Lock, title: "ISO 27001", description: "Certified information security management" },
          { icon: Globe, title: "EU Data Centers", description: "All data stored in Frankfurt, Germany" },
          { icon: FileCheck, title: "Regular Audits", description: "Third-party security audits quarterly" }
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-brand-600 p-4 rounded-lg w-fit mx-auto mb-4">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 bg-slate-800 rounded-2xl p-8 border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-brand-400 mb-2">99.9%</div>
            <p className="text-slate-300">Uptime SLA</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-400 mb-2">256-bit</div>
            <p className="text-slate-300">AES Encryption</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-400 mb-2">24/7</div>
            <p className="text-slate-300">Security Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Security;
