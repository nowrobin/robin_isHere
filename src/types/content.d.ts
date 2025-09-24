import { Experience } from '@/components/layers/experience';

export type ContentDetails = {
  title: string;
  keywords: string[];
  highlight: string;
  summary: string;
};

export type VideoProps = {
  src: string;
  play: boolean;
  className: string;
  link: string;
  githubLink: string;
};

// Velog 포스트 데이터 타입 정의 (route.ts와 동일하게)
export interface VelogPost {
  id: string;
  title: string;
  link: string;
  thumbnailUrl?: string;
  publishedDate: string;
  shortDescription?: string;
  username: string;
  likes: number;
  commentsCount: number;
}

export interface ProjectDetail {
  title: string;
  description: string;
  videoSrc: string;
  logoSrc: string;
  tags: string[];
  link: string;
  github: string;
  projectURL: string;
}

export interface ExperienceDetail {
  title: string;
  period: string;
  description: string;
  type: string;
  result: string;
  link?: string;
}

export interface EducationDetail {
  school: string;
  major: string;
  period: string;
}

export interface Hero {
  name: string;
  intro: string;
}
