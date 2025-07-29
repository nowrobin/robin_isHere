'use client';

import GSAPEffect from '@/components/gsap';
import { useTranslation } from 'react-i18next';
import { Github, BookOpen, ExternalLink, Sparkles } from 'lucide-react';

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
          <div className="grid grid-cols-2 items-center gap-4 md:pr-10">
            <a
              href="#projects"
              className="h-12 md:w-64 md:h-16 flex justify-center items-center bg-tertiary text-primary text-lg rounded-2xl font-semibold hover:bg-secondary transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl transition-colors text-center"
            >
              {t('commons.projectView')}
            </a>
            <a
              href="/contact"
              className="h-12 md:w-64 md:h-16  flex justify-center items-center border-2 border-tertiary text-tertiary text-lg rounded-2xl font-semibold hover:bg-tertiary hover:text-primary transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl transition-colors text-center"
            >
              {t('commons.contact')}
            </a>
            <a
              href="https://github.com/nowrobin"
              className="h-12 md:w-64 md:h-16"
            >
              <button
                className="w-full h-full group relative flex  justify-center items-center overflow-hidden bg-gray-900 hover:bg-gray-800 text-whitetext-lg font-semibold rounded-2xl shadow-lg transform transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2 md:gap-3">
                  <Github className="size-5 md:size-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {t('commons.github')}
                  </span>
                  <ExternalLink className="size-4 md:size-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" />
                </div>
              </button>
            </a>

            <a
              href="https://velog.io/@nowrobin/posts"
              className="h-12 md:w-64 md:h-16"
            >
              <button
                className="group w-full h-full group relative flex  justify-center items-center overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500
            hover:from-orange-600 hover:to-pink-600 text-white
            md:px-8 md:py-6 md:text-lg text-sm font-semibold rounded-2xl shadow-lg
            transform transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative flex items-center gap-2 md:gap-3">
                  <BookOpen className="size-5 md:size-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {t('commons.velog')}
                  </span>
                  <ExternalLink className="size-4 md:size-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" />
                </div>
              </button>
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
