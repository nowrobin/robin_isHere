import type { BlogPost } from './index';

function Content() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          AI는 어떤 기준으로 답을 만드는 걸까?
        </h2>
        <p className="mt-3 leading-relaxed">
          최근 AEO에 관심이 생겨서 공부를 시작했다. AI가 어떤 기준으로 답을
          만들고, 어떤 콘텐츠를 인용하는지 직접 실험하면서 정리한 내용은{' '}
          <a
            href="https://velog.io/@nowrobin/SEO%EB%8A%94-%EC%9E%8A%EC%96%B4%EB%9D%BC-%EC%9D%B4%EC%A0%9C%EB%8A%94-AEO%EB%8B%A4-AI%EC%97%90%EA%B2%8C-%EB%82%B4-%EC%BD%98%ED%85%90%EC%B8%A0%EB%A5%BC-%EC%9D%B8%EC%9A%A9%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryColor underline underline-offset-2"
          >
            이전 글
          </a>
          에 정리해두었다.
        </p>
        <p className="mt-3 leading-relaxed">
          AEO(Answer Engine Optimization)를 공부하다 보면 자연스럽게 이런
          질문이 생긴다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">
            &quot;AI는 어떤 기준으로 답을 만드는 걸까?&quot;
          </p>
        </div>
        <p className="mt-4 leading-relaxed">
          처음에는 단순히 프롬프트나 콘텐츠 품질 문제라고 생각했다. 하지만
          직접 여러 번 테스트하면서 생각이 조금 바뀌었다.
        </p>
        <p className="mt-3 leading-relaxed">
          AI는 완전히 새로운 답을 만드는 게 아니라,{' '}
          <strong>웹 전반에 존재하는 정보의 분포를 기반으로 답을 구성한다</strong>는
          느낌이 강했다. 그리고 그 &quot;분포&quot;를 가장 현실적으로 확인할 수 있는
          곳이 바로 SERP였다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          SERP는 결과가 아니라 힌트다
        </h2>
        <p className="mt-3 leading-relaxed">
          처음에는 SERP를 그냥 참고용으로만 봤다. 그저 SEO로 상위에 올라온
          글들 어떤가 하는 정도로. 그런데 이건 본질이 아니었다. 검색 결과는
          분명 의미 있는 데이터였지만, 그걸 어떻게 해석해야 하는지는 또 다른
          문제였다.
        </p>
        <p className="mt-3 leading-relaxed">
          그래서 단순히 &quot;누가 상위에 있는지&quot;가 아니라 조금 다른 기준으로 보기
          시작했다.
        </p>
        <div className="mt-4 space-y-2">
          {[
            '왜 리스트형 글이 많은지',
            '왜 제목 구조가 비슷한지',
            '왜 특정 키워드가 반복되는지',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-tertiary bg-quaternary px-4 py-3"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primaryColor" />
              <span className="text-secondaryColor/80">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed">
          이걸 보기 시작하면서 관점이 바뀐다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          SERP를 하나의 데이터로 보기
        </h2>
        <p className="mt-3 leading-relaxed">
          SERP 결과를 수집해서 구조적으로 보기 시작했다.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`const axios = require("axios");

async function fetchSerp(keyword) {
  const res = await axios.get("https://serpapi.com/search.json", {
    params: {
      engine: "google",
      q: keyword,
      api_key: process.env.SERPAPI_KEY,
    },
  });

  return res.data.organic_results.map((item, i) => ({
    rank: i + 1,
    title: item.title,
    link: item.link,
  }));
}`}</code>
        </pre>
        <p className="mt-4 leading-relaxed">이제 결과를 보면 이런 데이터가 나온다.</p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`[
  {
    "rank": 1,
    "title": "10 Best Frontend Monitoring Tools in 2026",
    "link": "https://example.com/..."
  },
  {
    "rank": 2,
    "title": "Top Frontend Monitoring Tools Compared",
    "link": "https://example2.com/..."
  },
  {
    "rank": 3,
    "title": "What is Frontend Monitoring? Guide",
    "link": "https://example3.com/..."
  }
]`}</code>
        </pre>
        <p className="mt-4 leading-relaxed">이 데이터를 보면 몇 가지가 바로 보인다.</p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <ul className="space-y-2 text-secondaryColor/80">
            <li>
              • <strong className="text-primaryColor">Best, Top, Compare</strong>{' '}
              → 리스트/비교형 콘텐츠
            </li>
            <li>
              • <strong className="text-primaryColor">What is</strong> → 정의형
              콘텐츠
            </li>
            <li>• 제목 구조가 반복됨</li>
          </ul>
        </div>
        <p className="mt-4 leading-relaxed">
          결과를 보다 보면 검색 엔진이 선호하는 답변 형태의 패턴을 확인할 수
          있다.
        </p>
        <p className="mt-3 leading-relaxed">
          하지만 한 번이 아니라 여러 번 봐야 한다. SERP는 고정된 결과가 아니라
          시간, 사용자, 위치에 따라 조금씩 바뀌기 때문이다. 한 번 보는 건
          의미가 없고, 여러 번 반복해서 봐야 패턴이 보인다. 어떤 사이트가
          꾸준히 등장하는지, 어떤 구조가 유지되는지를 파악할 수 있다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          그럼 이게 AEO에도 필요한가?
        </h2>
        <p className="mt-3 leading-relaxed">
          ChatGPT나 Perplexity 같은 시스템은 경우에 따라 검색을 활용하기도
          하지만, 기본적으로는 웹 전반에서 학습된 정보 패턴을 기반으로 답을
          생성한다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">AI가 신뢰도 높은 답으로 구성할 가능성이 높은 콘텐츠</p>
          <ul className="mt-3 space-y-1 text-secondaryColor/80">
            <li>• 여러 출처에서 반복되는 정보</li>
            <li>• 비슷한 구조로 정리된 콘텐츠</li>
          </ul>
        </div>
        <p className="mt-4 leading-relaxed">
          그래서 SERP 결과의 패턴을 확인하는 게 중요하다.
        </p>
        <p className="mt-3 leading-relaxed">
          SERP는 AI의 입력 데이터는 아니다. 하지만{' '}
          <strong>웹에서 검증된 정보 구조를 압축해서 보여준다.</strong> 그래서
          SERP를 분석하면, AI가 생성할 가능성이 높은 &quot;평균적인 답 구조&quot;를
          추정할 수 있다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">정리</h2>
        <p className="mt-3 leading-relaxed">
          AEO를 이해하려고 시작했는데 결국 SERP 검색결과로 돌아왔다.
        </p>
        <div className="mt-4 space-y-2">
          {[
            'SERP는 결과 페이지가 아니라 구조를 보여주는 데이터',
            '상위 결과는 우연이 아니라 반복된 패턴',
            '이 패턴은 AI가 만드는 답변과도 일정 부분 닮아 있다',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-tertiary bg-quaternary px-4 py-3"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primaryColor" />
              <span className="text-secondaryColor/80">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed">
          당연히 검색결과에 노출되려면 SEO 최적화가 필요하고, 이러한 결과가
          AEO 최적화에도 영향을 준다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          자주 묻는 질문 (FAQ)
        </h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              SERP 분석이 AEO에 직접적인 영향을 주나요?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              직접적인 입력은 아니지만, SERP 상위 결과는 웹에서 반복·검증된
              정보 구조를 반영한다. AI는 비슷한 패턴의 콘텐츠를 더 신뢰도 높게
              처리하는 경향이 있어, SERP 패턴을 파악하면 AI 답변 구조를 추정할
              수 있다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              SerpAPI 외에 SERP 데이터를 수집할 수 있는 방법이 있나요?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              ValueSERP, ScaleSerp, Dataforseo 같은 대안이 있다. 소규모
              실험이라면 무료 티어로도 충분하고, Google Search Console 데이터를
              함께 활용하면 더 풍부한 인사이트를 얻을 수 있다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              SERP 패턴 분석에서 가장 먼저 봐야 할 것은?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              제목 구조의 반복이다. Best / Top / What is / How to 같은 패턴이
              얼마나 자주 나타나는지를 보면, 해당 키워드에서 검색 엔진과 AI가
              선호하는 콘텐츠 형태를 바로 파악할 수 있다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              SERP는 위치나 시간에 따라 달라지는데, 어떻게 분석해야 하나요?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              단일 수집보다 반복 수집이 중요하다. 동일 키워드를 며칠에 걸쳐
              수집하거나, 여러 지역 파라미터로 수집하면 고정적으로 등장하는
              구조와 변동적인 구조를 구분할 수 있다. 꾸준히 등장하는 패턴이
              실질적인 신호다.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

export const post: BlogPost = {
  slug: 'serp-analysis-for-aeo',
  title: 'SERP 분석이 필요한 이유 — AEO 관점에서 보기',
  description:
    'AI는 웹 정보의 분포를 기반으로 답을 구성한다. SERP를 단순한 검색결과가 아닌 구조 데이터로 보면, AI 답변의 패턴을 추정할 수 있다.',
  publishedAt: '2026-04-01T00:00:00+09:00',
  readTime: '5분 읽기',
  tags: ['AEO', 'SEO', 'SERP', 'AI'],
  faq: [
    {
      question: 'SERP 분석이 AEO에 직접적인 영향을 주나요?',
      answer:
        '직접적인 입력은 아니지만, SERP 상위 결과는 웹에서 반복·검증된 정보 구조를 반영한다. AI는 비슷한 패턴의 콘텐츠를 더 신뢰도 높게 처리하는 경향이 있어, SERP 패턴을 파악하면 AI 답변 구조를 추정할 수 있다.',
    },
    {
      question: 'SerpAPI 외에 SERP 데이터를 수집할 수 있는 방법이 있나요?',
      answer:
        'ValueSERP, ScaleSerp, Dataforseo 같은 대안이 있다. 소규모 실험이라면 무료 티어로도 충분하고, Google Search Console 데이터를 함께 활용하면 더 풍부한 인사이트를 얻을 수 있다.',
    },
    {
      question: 'SERP 패턴 분석에서 가장 먼저 봐야 할 것은?',
      answer:
        '제목 구조의 반복이다. Best / Top / What is / How to 같은 패턴이 얼마나 자주 나타나는지를 보면, 해당 키워드에서 검색 엔진과 AI가 선호하는 콘텐츠 형태를 바로 파악할 수 있다.',
    },
    {
      question: 'SERP는 위치나 시간에 따라 달라지는데, 어떻게 분석해야 하나요?',
      answer:
        '단일 수집보다 반복 수집이 중요하다. 동일 키워드를 며칠에 걸쳐 수집하거나, 여러 지역 파라미터로 수집하면 고정적으로 등장하는 구조와 변동적인 구조를 구분할 수 있다. 꾸준히 등장하는 패턴이 실질적인 신호다.',
    },
  ],
  Content,
};
