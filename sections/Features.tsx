import React from 'react';
import { Building2, Users, FileCheck, BarChart3, Baby, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Multi-Site Management",
      description: "Centralized dashboard to monitor all locations in real-time. Track occupancy, staff ratios, and compliance across your entire network."
    },
    {
      icon: FileCheck,
      title: "Automated Compliance",
      description: "Stay audit-ready with automated tracking of Kind & Gezin regulations, staff certifications, and safety protocols."
    },
    {
      icon: Users,
      title: "Staff Scheduling",
      description: "Intelligent scheduling that ensures proper staff-to-child ratios at every location while optimizing labor costs."
    },
    {
      icon: BarChart3,
      title: "Unified Reporting",
      description: "Consolidated financial and operational reports across all sites. Export-ready formats for investors and regulators."
    },
    {
      icon: Baby,
      title: "Child & Parent Portal",
      description: "Digital check-in/out, daily reports, photos, and billing. Parents stay connected no matter which location they use."
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description: "Automated time tracking for staff and children with biometric options. Seamless payroll integration."
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Purpose-built for multi-location childcare organizations facing the complexity of centralized management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-6 rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all bg-white">
                <div className="bg-brand-100 p-3 rounded-lg w-fit mb-4 group-hover:bg-brand-600 transition-colors">
                  <Icon className="h-6 w-6 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
