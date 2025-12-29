import React from 'react';
import { LayoutGrid, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <LayoutGrid className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CentraCare</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The premier operating system for multi-location childcare organizations in Belgium and the EU.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Multi-Site Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance & Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Scheduling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parent Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-brand-500" />
                <span>Rue de la Loi 15<br/>1000 Brussels, Belgium</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-500" />
                <a href="mailto:contact@centracare.eu" className="hover:text-white">contact@centracare.eu</a>
              </li>
              <li className="flex items-center gap-2">
                 <Phone size={16} className="text-brand-500" />
                 <a href="tel:+3225550101" className="hover:text-white">+32 (0)2 555 01 01</a>
              </li>
              <li className="pt-4 flex space-x-4">
                <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white"><Twitter size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CentraCare Systems. All rights reserved.</p>
          <p className="mt-2 md:mt-0">BE 0999.999.999 • GDPR Compliant • Hosted in EU (Frankfurt)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;