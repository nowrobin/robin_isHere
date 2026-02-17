import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/data/posts';

export const runtime = 'edge';
export const alt = '블로그 글';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? '블로그';
  const description = post?.description ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4B5945 0%, #66785F 50%, #91AC8F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: '#B2C9AD',
            marginBottom: 20,
            letterSpacing: '0.05em',
          }}
        >
          Blog · 한정욱
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: '#f0f2f1',
            lineHeight: 1.3,
            marginBottom: 32,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#B2C9AD',
            lineHeight: 1.6,
            maxWidth: '80%',
          }}
        >
          {description}
        </div>
      </div>
    ),
    { ...size },
  );
}
