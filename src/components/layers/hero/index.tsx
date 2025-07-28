'use client';

import GSAPEffect from '@/components/gsap';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20"
    >
      <div className="container mx-auto px-6 py-24 md:flex md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('hero.name')}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">Frontend Developer</h2>
          <p className="text-lg mb-8">{t('hero.intro')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-tertiary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors text-center"
            >
              {t('commons.projectView')}
            </a>
            <a
              href="/contact"
              className="border-2 border-tertiary text-tertiary px-6 py-3 rounded-full font-semibold hover:bg-tertiary hover:text-primary transition-colors text-center"
            >
              {t('commons.contact')}
            </a>
            <a
              href="https://velog.io/@nowrobin/posts"
              className="bg-tertiary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors text-center"
            >
              {t('commons.velog')}
            </a>
            <a
              href="https://github.com/nowrobin"
              className="bg-tertiary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors text-center"
            >
              {t('commons.github')}
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <GSAPEffect />
        </div>
      </div>
    </section>
  );
}
