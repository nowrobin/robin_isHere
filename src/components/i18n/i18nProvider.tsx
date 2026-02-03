'use client';

import React, { ReactNode, useState } from 'react';
import '../../app/i18n';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface I18nProviderProps {
  children: ReactNode;
  initialLocale: 'ko' | 'en';
}

const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  initialLocale,
}) => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<'ko' | 'en'>(initialLocale);
  const isKorean = locale === 'ko';

  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  const handleLanguageToggle = () => {
    const newLang = isKorean ? 'en' : 'ko';
    setLocale(newLang);
    i18n.changeLanguage(newLang);
    document.cookie = `locale=${newLang}; path=/; max-age=31536000`;
  };
  return (
    <>
      {children}
      <div className="fixed bottom-10 right-10 z-50 group scale-125 md:scale-150  ">
        <motion.button
          className="relative w-20 h-10 bg-gray-200 group-hover:bg-primaryColor rounded-full p-1 transition-colors duration-300"
          onClick={handleLanguageToggle}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-y-1 w-8 bg-white rounded-full shadow-sm flex items-center justify-center"
            animate={{
              x: isKorean ? 38 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          >
            <span className="text-xs font-medium text-gray-700">
              {isKorean ? 'KOR' : 'ENG'}
            </span>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
            <span
              className={`text-xs font-medium transition-opacity group-hover:text-white ${
                !isKorean ? 'opacity-0' : 'opacity-40 '
              }`}
            >
              ENG
            </span>
            <span
              className={`text-xs font-medium transition-opacity group-hover:text-white ${
                isKorean ? 'opacity-0' : 'opacity-40 '
              }`}
            >
              KOR
            </span>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default I18nProvider;
