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
  shortDescription: string; // 짧은 요약 또는 첫 줄
  username?: string; // 작성자 Velog ID (여기서는 'nowrobin' 고정)
  likes?: number; // 좋아요 수
  commentsCount?: number; // 댓글 수
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

    const posts: VelogPost[] = [];

    const postContainer = $('.FlatPostCardList_block__VoFQe'); // 전체 리스트를 감싸는 컨테이너

    console.log(
      'find()',
      postContainer.find('.FlatPostCard_block__a1qM7').length,
    );
    // 2. 개별 포스트 아이템을 순회합니다.
    // 'postContainer' 내에서 'FlatPostCard_block__a1qM7' 클래스를 가진 모든 요소를 찾습니다.
    postContainer.find('.FlatPostCard_block__a1qM7').each((i, element) => {
      // 각 'element'는 하나의 개별 포스트 카드(FlatPostCard_block__a1qM7) 입니다.

      // 3. 각 포스트 아이템 내부에서 원하는 정보들을 찾습니다.
      // find() 안에는 클래스명 ('.클래스명'), ID명 ('#ID명'), 또는 태그명 ('h4', 'a', 'time', 'img')을 넣을 수 있습니다.
      // 여기서는 해당 정보가 특정 태그 안에 명확히 있다면 태그만 사용해도 되지만,
      // 더 안전하게 특정하려면 해당 요소에 고유한 클래스나 ID가 있는지 확인하고 사용하는 것이 좋습니다.

      const titleElement = $(element).find('h2'); // 제목은 보통 h4 태그 안에 있습니다.
      const linkElement = $(element).find(
        '.VLink_block__Uwj4P FlatPostCard_postThumbnail__s7Hld',
      ); // 포스트 링크는 보통 첫 번째 a 태그입니다.
      const publishedDateElement = $(element).find(
        '.FlatPostCard_subInfo__cT3J6',
      ); // 날짜는 time 태그 안에 있습니다.
      const thumbnailUrlElement = $(element).find('img'); // 썸네일은 img 태그 안에 있습니다 (없을 수도 있음).

      // 4. 추출한 텍스트 및 속성 값을 정리합니다.
      const title = titleElement.text().trim();
      const relativeLink = linkElement.attr('href');
      const link = relativeLink ? `https://velog.io${relativeLink}` : '#'; // 상대 경로를 절대 경로로 변환
      const publishedDate = publishedDateElement.text().trim();
      const thumbnailUrl = thumbnailUrlElement.attr('src'); // src 속성 값 추출
      const description = $(element).find('p').text();
      // 5. 링크에서 고유 ID 추출 (예: /@username/post-slug 부분에서 post-slug)
      const idMatch = link.match(/\/@[^/]+\/(.+)/);
      const id = idMatch ? idMatch[1] : `post-${i}`; // ID가 없으면 인덱스로 대체

      // 6. posts 배열에 객체 형태로 추가
      posts.push({
        id: id,
        title: title,
        link: link,
        // 썸네일 URL이 없으면 undefined로 설정
        thumbnailUrl: thumbnailUrl || undefined,
        publishedDate: publishedDate,
        shortDescription: description,
      });
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
