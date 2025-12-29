import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import SectionDivider from '../components/SectionDivider';
import { ShieldCheck, ArrowRight, LayoutGrid } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
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
          {t('hero.badge')}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          {t('hero.title')}<br />
          <span className="text-brand-600">{t('hero.titleHighlight')}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto" onClick={handleDemoClick}>
            {t('hero.requestDemo')} <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={handleVideoClick}>
            {t('hero.watchVideo')}
          </Button>
        </div>
        <p className="text-sm text-slate-500 mt-6">
          {t('hero.trustedBy')}
        </p>
      </div>
      
      {/* Hero Image/Mockup */}
      <div className="mt-16 relative">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 md:p-8">
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <LayoutGrid className="h-16 w-16 text-brand-600 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">{t('hero.dashboardPreview')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SectionDivider />
  </section>
  );
};

export default Hero;
