import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const { t } = useTranslation();
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
            <h4 className="text-white font-medium text-sm">{t('cookie.title')}</h4>
            <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-2xl">
              {t('cookie.description')}
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white" onClick={() => setIsVisible(false)}>
            {t('cookie.customize')}
          </Button>
          <Button variant="primary" size="sm" onClick={() => setIsVisible(false)}>
            {t('cookie.acceptAll')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
