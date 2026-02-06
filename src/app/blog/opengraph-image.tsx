import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Date는 날짜가 아니다: 타임존 실수를 막는 기준 정리';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
            fontSize: 52,
            fontWeight: 'bold',
            color: '#f0f2f1',
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          Date는 날짜가 아니다:
        </div>
        <div
          style={{
            fontSize: 42,
            fontWeight: 'bold',
            color: '#f0f2f1',
            lineHeight: 1.3,
            marginBottom: 32,
          }}
        >
          타임존 실수를 막는 기준 정리
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#B2C9AD',
            lineHeight: 1.6,
          }}
        >
          UTC / KST / ISO 8601 기준과 실수 사례 정리
        </div>
      </div>
    ),
    { ...size },
  );
}
