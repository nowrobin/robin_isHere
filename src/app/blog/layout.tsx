import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '블로그 | 한정욱',
  description: '개발하면서 정리한 글 모음 - 프론트엔드, TypeScript, React, Next.js',
  robots: { index: true, follow: true },
  alternates: { canonical: '/blog' },
  openGraph: {
    title: '블로그 | 한정욱',
    description: '개발하면서 정리한 글 모음',
    type: 'website',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: '블로그 | 한정욱',
    description: '개발하면서 정리한 글 모음',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white text-gray-900">{children}</div>;
}
