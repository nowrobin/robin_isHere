import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/data/posts';

export const runtime = 'edge';
export const alt = '블로그 글';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? '블로그';
  const description = post?.description ?? '';
  const baseUrl = getBaseUrl();

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4B5945 0%, #66785F 50%, #91AC8F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
        }}
      >
        {/* 상단: 파비콘 + 이름 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${baseUrl}/favicon/favicon-32x32.png`}
            width={36}
            height={36}
            style={{ borderRadius: 6 }}
            alt=""
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#f0f2f1', letterSpacing: '0.02em' }}>
              한정욱
            </span>
            <span style={{ fontSize: 13, color: '#B2C9AD', letterSpacing: '0.12em' }}>
              HANJUNGWOOK
            </span>
          </div>
        </div>

        {/* 본문: 제목 + 설명 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#f0f2f1',
              lineHeight: 1.3,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#B2C9AD',
              lineHeight: 1.6,
              maxWidth: '85%',
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
