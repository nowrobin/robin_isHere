import type { ReactNode } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  content: () => ReactNode;
  faq?: { question: string; answer: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: 'date-is-not-a-date',
    title: 'Date는 날짜가 아니다: 타임존 실수를 막는 기준 정리',
    description:
      'Date 타입을 날짜로 착각했을 때 발생하는 오류를 UTC/KST/ISO 8601 기준과 실수 사례로 정리합니다.',
    publishedAt: '2026-02-03T00:00:00+09:00',
    readTime: '6분 읽기',
    tags: ['TypeScript', 'Date', 'UTC', 'KST'],
    faq: [
      {
        question: 'Date 타입은 왜 날짜가 아니라고 하나요?',
        answer:
          'Date는 특정 날짜가 아니라 UTC 기준의 "순간(instant)"을 의미합니다. 같은 Date라도 타임존에 따라 해석되는 날짜가 달라집니다.',
      },
      {
        question: 'new Date()는 어디 기준으로 동작하나요?',
        answer:
          'new Date()는 현재 시점의 UTC 타임스탬프를 생성합니다. 표시할 때는 로컬 타임존으로 변환되어 보입니다.',
      },
      {
        question: "new Date('2026-01-01')은 왜 위험한가요?",
        answer:
          '문자열로 날짜만 전달하면 UTC 자정으로 해석되는 경우가 있어, 로컬 타임존에서 하루가 밀리는 문제가 발생할 수 있습니다.',
      },
      {
        question: '타임존 오류를 줄이는 실전 기준은 무엇인가요?',
        answer:
          'API는 UTC로 저장하고, 표시는 사용자 타임존으로 변환하며, 날짜만 필요하면 문자열로 따로 관리하는 기준이 안전합니다.',
      },
      {
        question: '서머타임(DST)은 어떻게 처리해야 하나요?',
        answer:
          '직접 계산하기보다 UTC로 저장한 뒤 타임존 정보를 통해 표시 단계에서 변환하는 방식이 가장 안전합니다.',
      },
    ],
    content: () => null, // content is rendered in the slug page directly
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
