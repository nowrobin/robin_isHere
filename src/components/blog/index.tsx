// app/velog/page.tsx
import { VelogPost } from '@/types/content';
import axios from 'axios';
import Image from 'next/image'; // Image 컴포넌트 사용을 위해 임포트

export default async function VelogPage() {
  let posts: VelogPost[] = [];
  let error: string | null = null;

  try {
    const response = await axios.get('http://localhost:3000/api/velogCrawl');
    console.log('Velog posts fetched successfully:', response.data);
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch Velog posts: ${response.statusText}`);
    // }

    // const data: { success: boolean; posts?: VelogPost[]; message?: string } =
    //   await response.json();

    // if (data.success && data.posts) {
    //   posts = data.posts;
    // } else {
    //   error = data.message || 'Velog 포스트를 가져오는 데 실패했습니다.';
    // }
  } catch (err: any) {
    console.error('Error fetching Velog posts:', err);
    error = `데이터 로드 중 오류 발생: ${err.message}`;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Velog 최신 포스트</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {posts.length > 0
          ? posts.map((post) => (
              <div
                key={post.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {post.thumbnailUrl && (
                    <div
                      style={{
                        width: '100%',
                        height: '200px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        fill // 부모 컨테이너에 맞춰 이미지를 채웁니다.
                        style={{ objectFit: 'cover' }} // 이미지가 잘리지 않게 조정
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 반응형 이미지 최적화
                      />
                    </div>
                  )}
                  <div style={{ padding: '15px' }}>
                    <h2
                      style={{
                        fontSize: '1.2em',
                        margin: '0 0 10px 0',
                        lineHeight: '1.4',
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontSize: '0.9em',
                        color: '#555',
                        margin: '0 0 5px 0',
                      }}
                    >
                      @{post.username} • {post.publishedDate}
                    </p>
                    <p
                      style={{
                        fontSize: '0.85em',
                        color: '#777',
                        margin: '0 0 10px 0',
                      }}
                    >
                      ❤ {post.likes} 💬 {post.commentsCount}
                    </p>
                  </div>
                </a>
              </div>
            ))
          : !error && <p>불러올 Velog 포스트가 없습니다.</p>}
      </div>
    </div>
  );
}
