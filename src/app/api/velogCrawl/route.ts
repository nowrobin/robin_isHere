// app/api/nowrobin-posts/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

// Velog 포스트 데이터 타입 정의
interface VelogPost {
  id: string; // 포스트 고유 ID (slug)
  title: string;
  link: string;
  thumbnailUrl?: string; // 썸네일 이미지 URL
  publishedDate: string; // 게시 날짜
  shortDescription?: string; // 짧은 요약 또는 첫 줄
  username: string; // 작성자 Velog ID (여기서는 'nowrobin' 고정)
  likes: number; // 좋아요 수
  commentsCount: number; // 댓글 수
}

interface VelogPostsApiResponse {
  success: boolean;
  posts?: VelogPost[];
  message?: string;
}

export async function GET(request: Request) {
  try {
    const targetUrl = 'https://velog.io/@nowrobin/posts'; // @nowrobin님의 포스트 URL 고정

    const response = await axios.get(targetUrl);
    const $ = cheerio.load(response.data);
    console.table(response);

    const posts: VelogPost[] = [];

    // Velog의 포스트 카드 컨테이너 선택자 (현재 구조 기준)
    // 이 선택자는 Velog UI 업데이트에 따라 변경될 수 있습니다.
    $('.FlatPostCardList_block__VoFQe').each((i, element) => {
      const titleElement = $(element).find('.sc-bdnxIs.dItxYc'); // 제목
      const linkElement = $(element).find('a').first(); // 포스트 링크 (첫 번째 a 태그)
      const usernameElement = $(element).find('.sc-bdnxIs.hFfUjX'); // 사용자 이름
      const publishedDateElement = $(element).find('.sc-bdnxIs.gsPZfF').eq(0); // 게시 날짜
      const likesElement = $(element).find('.sc-bdnxIs.gsPZfF').eq(1); // 좋아요 수
      const commentsCountElement = $(element).find('.sc-bdnxIs.gsPZfF').eq(2); // 댓글 수
      const thumbnailUrlElement = $(element).find('.sc-pIjNv.bWpDkm img'); // 썸네일 이미지
      const title = titleElement.text().trim();
      const relativeLink = linkElement.attr('href');
      const link = relativeLink ? `https://velog.io${relativeLink}` : '#'; // 상대 경로를 절대 경로로 변환
      const username = usernameElement.text().trim();
      const publishedDate = publishedDateElement.text().trim();
      const likesText = likesElement.text().trim().replace('❤', '');
      const commentsCountText = commentsCountElement
        .text()
        .trim()
        .replace('💬', '');
      const thumbnailUrl = thumbnailUrlElement.attr('src');

      // 링크에서 포스트의 고유 ID (slug) 추출
      const idMatch = link.match(/\/@[^/]+\/(.+)/);
      const id = idMatch ? idMatch[1] : `post-${i}`; // ID가 없으면 인덱스 사용

      if (title && link && username && publishedDate) {
        posts.push({
          id: id,
          title: title,
          link: link,
          thumbnailUrl: thumbnailUrl || undefined,
          publishedDate: publishedDate,
          username: username,
          likes: parseInt(likesText || '0') || 0,
          commentsCount: parseInt(commentsCountText || '0') || 0,
        });
      }
    });

    return NextResponse.json<VelogPostsApiResponse>({
      success: true,
      posts: posts,
    });
  } catch (error: any) {
    console.error('Velog @nowrobin/posts 크롤링 오류:', error);
    return NextResponse.json<VelogPostsApiResponse>(
      {
        success: false,
        message: `Velog @nowrobin/posts 크롤링 중 오류가 발생했습니다: ${error.message}`,
      },
      { status: 500 },
    );
  }
}
