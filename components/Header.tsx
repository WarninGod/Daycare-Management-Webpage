import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid, Globe, ChevronDown } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Platform', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Compliance', href: '#security' },
  { label: 'Resources', href: '#resources' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setActiveLang(lang);
    console.log(`Language switched to: ${lang}`);
    // You can add i18n logic here later
  };

  const handleLogin = () => {
    console.log('Login clicked');
    alert('Login functionality - Connect to your authentication system');
  };

  const handleDemo = () => {
    console.log('Request Demo clicked');
    alert('Demo Request - This would open a demo booking form or redirect to a booking page');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <LayoutGrid className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              CentraCare
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Lang */}
          <div className="hidden md:flex items-center space-x-4">
             <div className="flex items-center text-sm font-medium border-r border-slate-300 pr-4 mr-1 space-x-3">
                <button 
                  type="button"
                  onClick={() => handleLanguageChange('EN')} 
                  className={`cursor-pointer transition-colors px-2 py-1 rounded ${activeLang === 'EN' ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  EN
                </button>
                <button 
                  type="button"
                  onClick={() => handleLanguageChange('NL')} 
                  className={`cursor-pointer transition-colors px-2 py-1 rounded ${activeLang === 'NL' ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  NL
                </button>
                <button 
                  type="button"
                  onClick={() => handleLanguageChange('FR')} 
                  className={`cursor-pointer transition-colors px-2 py-1 rounded ${activeLang === 'FR' ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  FR
                </button>
             </div>
             <Button variant="ghost" size="sm" onClick={handleLogin}>Log In</Button>
            <Button variant="primary" size="sm" onClick={handleDemo}>Request a Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              type="button"
              onClick={() => handleLanguageChange(activeLang === 'EN' ? 'NL' : activeLang === 'NL' ? 'FR' : 'EN')}
              className="font-bold text-brand-600 text-sm px-2 py-1 rounded bg-brand-50 cursor-pointer hover:bg-brand-100"
            >
              {activeLang}
            </button>
            <button 
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-slate-100 my-2 pt-2 flex justify-center space-x-6 text-sm font-medium">
                <button 
                  type="button"
                  onClick={() => handleLanguageChange('EN')} 
                  className={`cursor-pointer transition-colors px-3 py-1.5 rounded ${activeLang === 'EN' ? 'text-white font-bold bg-brand-600' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  EN
                </button>
                <button 
                  type="button"
                  onClick={() => handleLanguageChange('NL')} 
                  className={`cursor-pointer transition-colors px-3 py-1.5 rounded ${activeLang === 'NL' ? 'text-white font-bold bg-brand-600' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  NL
                </button>
                <button 
                  type="button"
                  onClick={() => handleLanguageChange('FR')} 
                  className={`cursor-pointer transition-colors px-3 py-1.5 rounded ${activeLang === 'FR' ? 'text-white font-bold bg-brand-600' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  FR
                </button>
            </div>
            <div className="pt-2 space-y-3">
              <Button variant="primary" className="w-full justify-center" onClick={handleDemo}>Request a Demo</Button>
              <Button variant="outline" className="w-full justify-center" onClick={handleLogin}>Log In</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;