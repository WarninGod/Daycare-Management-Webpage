import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import SectionDivider from './components/SectionDivider';
import { 
  Building2, 
  Users, 
  FileCheck, 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  ArrowRight,
  Layers,
  Baby,
  ClipboardList,
  Lock,
  Globe,
  Check,
  Cookie,
  LayoutGrid
} from 'lucide-react';

// Cookie Consent Component
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 shadow-2xl animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="bg-slate-800 p-2 rounded-lg hidden sm:block">
            <Cookie className="text-brand-400 h-6 w-6" />
          </div>
          <div>
            <h4 className="text-white font-medium text-sm">We value your privacy</h4>
            <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-2xl">
              We use cookies to enhance your browsing experience and analyze our traffic in compliance with GDPR. 
              Data is stored securely within the EU.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white" onClick={() => setIsVisible(false)}>
            Customize
          </Button>
          <Button variant="primary" size="sm" onClick={() => setIsVisible(false)}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

// Sections
const Hero = () => {
  const handleDemoClick = () => {
    console.log('Demo button clicked');
    alert('Request Demo - This would open a contact form or calendar booking');
  };

  const handleVideoClick = () => {
    console.log('Video button clicked');
    alert('Watch Video - This would open a video modal or redirect to video page');
  };

  return (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <ShieldCheck size={16} />
          GDPR Compliant • EU Hosted • ISO 27001 Certified
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          The Operating System for<br />
          <span className="text-brand-600">Multi-Location Childcare</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          CentraCare centralizes compliance, operations, and reporting across all your daycare locations. 
          Built specifically for Belgian and EU childcare organizations managing multiple sites.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto" onClick={handleDemoClick}>
            Request a Demo <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={handleVideoClick}>
            Watch Video (2 min)
          </Button>
        </div>
        <p className="text-sm text-slate-500 mt-6">
          Trusted by 120+ childcare organizations • 5,000+ children • 800+ staff members
        </p>
      </div>
      
      {/* Hero Image/Mockup */}
      <div className="mt-16 relative">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 md:p-8">
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <LayoutGrid className="h-16 w-16 text-brand-600 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SectionDivider />
  </section>
  );
};

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

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "€299",
      period: "/month",
      description: "Perfect for organizations with 2-3 locations",
      features: [
        "Up to 3 locations",
        "150 children maximum",
        "Basic reporting",
        "Email support",
        "Parent portal",
        "Staff scheduling"
      ],
      cta: "Start Free Trial",
      variant: "outline" as const
    },
    {
      name: "Professional",
      price: "€599",
      period: "/month",
      description: "For established multi-site organizations",
      features: [
        "Up to 10 locations",
        "Unlimited children",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Request Demo",
      variant: "primary" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large networks and franchises",
      features: [
        "Unlimited locations",
        "White-label options",
        "Custom integrations",
        "24/7 phone support",
        "Training & onboarding",
        "SLA guarantees",
        "Compliance consulting"
      ],
      cta: "Contact Sales",
      variant: "secondary" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your organization. All plans include core features and EU data hosting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 border-2 ${
                plan.popular 
                  ? 'border-brand-600 shadow-2xl scale-105 bg-white' 
                  : 'border-slate-200 bg-slate-50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600 mb-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={plan.variant} className="w-full justify-center">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-slate-500 mt-12">
          All prices exclude VAT. Annual billing available with 2 months free.
        </p>
      </div>
    </section>
  );
};

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
