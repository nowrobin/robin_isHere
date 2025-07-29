import 'react-i18next';

import type detailsEn from './locales/en/translation';
import { detailsKo } from './locales/ko/translation';

import type commonEn from '../locales/en/common';
import type commonKo from '../locales/ko/common';
import { Experience, Hero, ProjectDetail } from '@/types/content';

interface I18nNamespaces {
  commons: { [key: string]: string };
  hero: Hero;
  experience: (typeof detailsKo)['education'];
  projects: ProjectDetail[];
  woogyeol: BaseProjectDetails;
  sulsul: BaseProjectDetails;
  skyLogix: SkyLogixProjectDetails;
}

// 모듈 확장
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: I18nNamespaces;
  }
}

// 개별 프로젝트 이미지 타입
export interface ProjectImage {
  src: string;
  alt: string;
  description: string;
}

// 프로젝트의 도전 과제/해결책 타입
export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

// SkyLogix의 'points' 배열 아이템 타입 (옵셔널)
export interface SkyLogixPoint {
  point: string;
  detail: string;
}

// 단일 프로젝트의 상세 정보 타입 (Woogyeol, Sulsul 공통)
export interface BaseProjectDetails {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  mainFeature: string[];
  mainRole: string;
  projectImages: ProjectImage[];
  challenges: ProjectChallenge[];
  techStack: string[];
  team: string;
  members: string;
}

export interface SkyLogixProjectDetails extends BaseProjectDetails {
  points: SkyLogixPoint[];
  results: string[];
  format: string[];
}

export interface ProjectTranslation {
  woogyeol: BaseProjectDetails;
  sulsul: BaseProjectDetails;
  skyLogix: SkyLogixProjectDetails;
}

export interface I18nTranslationContent {
  hero: HeroData;
  about: string[];
  education: EducationItem[];
  experiences: ExperienceItem[];
  buttons: Buttons;
  projects: ProjectTranslation;
}
