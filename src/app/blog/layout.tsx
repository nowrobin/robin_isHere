import type { Metadata } from 'next';

const title = '블로그 | Date는 날짜가 아니다: 타임존 실수를 막는 기준 정리';
const description =
  'Date 타입을 날짜로 착각하면 왜 문제가 생기는지, UTC/KST/ISO 8601 기준과 실제 실수 사례로 정리합니다. 질문-답변 중심으로 빠르게 이해할 수 있게 구성했습니다.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Date 타입',
    'JavaScript Date',
    'TypeScript',
    'UTC',
    'KST',
    'ISO 8601',
    '타임존',
    '날짜 처리',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white text-gray-900">{children}</div>;
}
