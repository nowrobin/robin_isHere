'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import detailsEn from '../locales/en/translation';
import detailsKo from '../locales/ko/translation';

import commonEn from '../locales/en/common';
import commonKo from '../locales/ko/common';
import ProjectTransKo from '@/locales/ko/projectTranslation';
import ProjectTransEn from '@/locales/en/projectTranslation';

const resources = {
  en: {
    translation: {
      hero: detailsEn.hero,
      about: detailsEn.about,
      experience: detailsEn.experiences,
      projects: detailsEn.projects,
      contactInfo: detailsEn.contactInfo,
      commons: commonEn,
      woogyeol: ProjectTransEn.woogyeol,
      sulsul: ProjectTransEn.sulsul,
      skyLogix: ProjectTransEn.skyLogix,
    },
  },
  ko: {
    translation: {
      hero: detailsKo.hero,
      about: detailsKo.about,
      experience: detailsKo.experiences,
      projects: detailsKo.projects,
      contactInfo: detailsKo.contactInfo,
      commons: commonKo,
      woogyeol: ProjectTransKo.woogyeol,
      sulsul: ProjectTransKo.sulsul,
      skyLogix: ProjectTransKo.skyLogix,
    },
  },
} as const; // 타입을 명확히 하기 위해 `as const`를 사용합니다.

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    // 기본 네임스페이스를 설정합니다. 이는 `react-i18next.d.ts`의 `defaultNS`와 일치해야 합니다.
    defaultNS: 'translation',
  });

export default i18n;
