import type { ReactNode } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  faq?: { question: string; answer: string }[];
  Content: () => ReactNode;
}

// ── 새 글 추가 시 여기에 import 하나만 추가 ──
import { post as dateIsNotADate } from './date-is-not-a-date';
import { post as hydrationMismatch } from './hydration-mismatch';
import { post as aeoAiCitation } from './aeo-ai-citation';

export const posts: BlogPost[] = [
  aeoAiCitation,
  hydrationMismatch,
  dateIsNotADate,
  // 새 글: import 후 이 배열에 추가
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
