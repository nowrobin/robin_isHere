import type { BlogPost } from './index';

function Content() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          AI에게 질문하는 시대
        </h2>
        <p className="mt-3 leading-relaxed">
          몇 년 전만 해도 개발하다 막히면 구글 검색을 먼저 켰다. 스택오버플로우에서
          비슷한 질문을 찾고, 답변 중에 골라서 적용하는 흐름이었다.
        </p>
        <p className="mt-3 leading-relaxed">
          지금은 ChatGPT나 Claude를 먼저 켠다. AI가 여러 소스를 종합해서 바로 답을
          만들어준다.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>AI는 그 답변을 어디서 가져오는 걸까?</strong>
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="text-secondaryColor/80">
            AI가 내 블로그 글을 읽고 답변에 인용한다면? 그게 AEO가 작동하는 방식이다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">AEO란</h2>
        <p className="mt-3 leading-relaxed">
          AEO(Answer Engine Optimization)는 AI 답변 엔진에 콘텐츠가 인용되도록
          최적화하는 것이다.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-tertiary bg-quaternary">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-tertiary text-primaryColor">
                <th className="border px-4 py-3 text-left font-semibold"></th>
                <th className="border px-4 py-3 text-left font-semibold">SEO</th>
                <th className="border px-4 py-3 text-left font-semibold">AEO</th>
              </tr>
            </thead>
            <tbody className="text-secondaryColor">
              <tr>
                <td className="border px-4 py-3 font-semibold text-primaryColor">목표</td>
                <td className="border px-4 py-3">검색 결과 상위 노출</td>
                <td className="border px-4 py-3">AI 답변의 출처가 됨</td>
              </tr>
              <tr className="bg-beige">
                <td className="border px-4 py-3 font-semibold text-primaryColor">대상</td>
                <td className="border px-4 py-3">Google, Naver</td>
                <td className="border px-4 py-3">ChatGPT, Claude, Perplexity</td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold text-primaryColor">핵심</td>
                <td className="border px-4 py-3">키워드, 백링크</td>
                <td className="border px-4 py-3">콘텐츠 구조, 인용 가능성</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed">
          SEO가 &quot;검색 결과 1페이지에 뜨느냐&quot;라면, AEO는{' '}
          <strong>&quot;AI가 내 콘텐츠를 자신 있게 인용할 수 있느냐&quot;</strong>다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          직접 분석해보며 느낀 것들
        </h2>
        <p className="mt-3 leading-relaxed">
          JavaScript Date 타임존 글을 들여다봤다. Schema Markup, FAQ까지 챙겼으니
          어느 정도 될 거라 생각했는데 결과는 기대와 달랐다.
        </p>
        <p className="mt-3 leading-relaxed">
          &quot;Date 타입은 왜 날짜가 아니라고 하나요?&quot;를 검색하면 AI 상위 결과에 내
          URL이 없었다. 콘텐츠 품질만으로는 부족할 수 있겠다는 생각이 들었다.
        </p>
        <p className="mt-4 font-semibold text-primaryColor">몇 가지 패턴이 눈에 띄었다.</p>

        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">
              1. AI는 &quot;여러 곳에서 같은 말을 하는지&quot;를 보는 것 같다
            </p>
            <p className="mt-2 text-secondaryColor/80">
              내 블로그에서만 말할 때보다, 외부 여러 곳에서 같은 내용이 나올 때 AI가
              더 자신 있게 인용하는 경향이 있어 보인다. 정확한 기준은 알 수 없지만.
            </p>
          </div>
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">
              2. Schema Markup은 생각보다 영향이 제한적일 수 있다
            </p>
            <p className="mt-2 text-secondaryColor/80">
              구조화 데이터는 AI가 콘텐츠를 <strong>이해하는 데</strong> 도움을 줄 수
              있다. 다만 <strong>발견하는 것</strong>과는 별개인 것 같다.
            </p>
          </div>
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">
              3. 인용하기 좋은 문장이 있으면 유리할 수 있다
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
              <code>{`"Date는 특정 날짜가 아니라 UTC 기준의 '순간(instant)'을 의미한다"`}</code>
            </pre>
            <p className="mt-2 text-secondaryColor/80">
              맥락 없이도 의미가 완결되는 문장이 AI가 뽑아 쓰기 좋은 형태가 아닐까 싶다.
            </p>
          </div>
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">
              4. 오리지널 데이터가 있으면 유리할 것 같다
            </p>
            <p className="mt-2 text-secondaryColor/80">
              자체 실험 결과나 1차 데이터는 &quot;다른 곳에서도 볼 수 있는 정보&quot;보다 인용
              가치가 높을 것 같다는 직관이 있다. 아직 검증은 못 했다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          AI 에이전트 친화적 기술
        </h2>
        <h3 className="mt-6 text-lg font-semibold text-primaryColor">
          Markdown Content Negotiation
        </h3>
        <p className="mt-3 leading-relaxed">
          Vercel이 쓴 에이전트를 위한 문서 제공 가이드를 읽고 이 개념이 떠올랐다.
          핵심은 간단하다 — 같은 URL에서 <code className="rounded bg-quaternary px-1 py-0.5 text-sm">Accept</code> 헤더에
          따라 사람에게는 HTML, 에이전트에게는 Markdown을 다르게 내려주라는 것.
        </p>
        <p className="mt-3 leading-relaxed">
          AI 에이전트가 웹페이지를 요청할 때 실제로 이런 헤더를 보낸다.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`# Claude Code가 실제로 보내는 헤더
Accept: text/markdown, text/html, */*`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">
          서버가 이를 지원하면 500KB HTML 대신 2KB Markdown으로 응답할 수 있다. AI
          입장에서는 불필요한 파싱 없이 콘텐츠를 바로 소비한다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="text-secondaryColor/80">
            여기서 한 가지 의문이 생겼다. 같은 URL에서{' '}
            <code className="rounded bg-button px-1 py-0.5 text-sm text-beige">.md</code>{' '}
            파일이 존재한다면, AI가 HTML보다 먼저 그걸 찾아서 읽을 수 있을까?
            <code className="mx-1 rounded bg-button px-1 py-0.5 text-sm text-beige">/blog/timezone</code>을
            요청했을 때{' '}
            <code className="rounded bg-button px-1 py-0.5 text-sm text-beige">/blog/timezone.md</code>가
            있다면 그쪽을 우선하는지. 아직 확인하지 못했지만, 그렇다면 정적 Markdown
            파일을 함께 서빙하는 것만으로도 효과가 있을 수 있다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          가설: AI 인용을 결정하는 두 가지 변수
        </h2>

        <h3 className="mt-6 text-lg font-semibold text-primaryColor">
          가설 1 — 신뢰되는 도메인
        </h3>
        <p className="mt-3 leading-relaxed">
          AI는 모든 URL을 동등하게 취급하지 않는다. GitHub, MDN, 위키피디아, 공식 문서처럼{' '}
          <strong>AI가 학습 과정에서 반복적으로 신뢰할 만한 정보를 얻어온 도메인</strong>이
          존재한다.
        </p>
        <p className="mt-3 leading-relaxed">
          개인 블로그가 아무리 좋은 콘텐츠를 써도, 신뢰 도메인의 짧은 글 한 줄보다
          인용되기 어려울 수 있다. SEO의 도메인 권위도(Domain Authority)와 비슷하지만,
          AI는 그 기준을 직접 노출하지 않는다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">실제로 테스트해봤다</p>
          <p className="mt-2 text-secondaryColor/80">
            동일한 내용을 벨로그와 개인 블로그에 동시에 올렸다. 오히려 개인 블로그
            쪽을 AEO에 더 최적화해서 작성했다. Schema Markup, Answer-First 구조, 인용
            가능 문장까지 챙겼다.
          </p>
          <p className="mt-2 text-secondaryColor/80">
            결과는 벨로그만 AI 답변에 채택됐다. 콘텐츠 품질이나 구조가 아니라,{' '}
            <strong>도메인 자체의 신뢰도</strong>가 먼저 작동하는 것 같다.
          </p>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          가설 2 — 신뢰 도메인에서의 노출 횟수
        </h3>
        <p className="mt-3 leading-relaxed">
          한 번 언급되는 것보다, 여러 신뢰 도메인에서 반복적으로 같은 내용이 등장할 때
          AI의 확신이 높아지는 것으로 보인다.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`개인 블로그 1곳          → AI: "불확실"
신뢰 도메인 1곳          → AI: "참고 가능"
신뢰 도메인 3곳 이상     → AI: "인용 가능"`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">
          이건 AI가 정보를 &quot;다수결&quot;로 검증하는 방식과 연결된다. 여러 독립적인 소스가
          같은 사실을 말할 때 사실로 받아들인다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          블로그를 넘어서 — 서비스에 적용한다면?
        </h2>
        <p className="mt-3 leading-relaxed">
          AEO를 블로그 최적화 기법으로만 보면 범위가 너무 좁다.
        </p>
        <p className="mt-3 leading-relaxed">
          생각해보면, AI가 어떤 서비스를 추천할 때도 같은 로직이 작동한다.
          &quot;여행 앱 추천해줘&quot;라고 물으면 AI는 특정 앱을 답변에 넣는다. 그 판단 근거는
          어디서 오는가?
        </p>
        <p className="mt-3 leading-relaxed">
          실제로 테스트해봤을 때, AI가 답변 하단에 표시한 출처가 여행 앱 공식 사이트가
          아니라 여행 앱들을 비교하는 사이트들이었다. 앱을 잘 만든 것과 AI에 추천되는
          것은 별개다.
        </p>
        <div className="mt-6 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">
            서비스 관점에서 AEO를 다시 정의하면
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-secondaryColor/80">
            <li>공식 문서를 AI가 인용하기 좋은 구조로 쓴다</li>
            <li>GitHub README, 릴리즈 노트를 Answer-First로 작성한다</li>
            <li>신뢰 도메인(HackerNews, Reddit, 공식 블로그)에서 일관된 메시지를 반복한다</li>
            <li>
              &quot;이 서비스는 X 문제를 Y 방법으로 해결한다&quot;는 문장을 여러 곳에 심는다
            </li>
            <li>
              <strong>비교 사이트에 내 서비스를 올린다</strong> — 비교 사이트에서 다른
              앱들과 함께 나열되면, AI가 그 비교 사이트를 인용하면서 내 서비스도 자연스럽게
              딸려온다
            </li>
          </ul>
        </div>
        <p className="mt-4 leading-relaxed">
          검색 광고가 SEO 시대의 유료 노출이었다면, AI 시대의 노출은{' '}
          <strong>신뢰 도메인에서의 언급 밀도</strong>로 결정될지 모른다.
        </p>
        <p className="mt-3 leading-relaxed text-secondaryColor/70">
          아직 가설이다. 하지만 방향은 맞다고 생각한다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">정리</h2>
        <p className="mt-3 leading-relaxed">
          AEO에서 유일한 질문은{' '}
          <strong>&quot;AI가 내 콘텐츠를 자신 있게 인용할 수 있는가&quot;</strong>다.
        </p>
        <ol className="mt-4 list-decimal pl-5 space-y-2">
          <li>
            <strong>콘텐츠 구조</strong> — 인용 가능한 문장, Answer-First 구조
          </li>
          <li>
            <strong>기술적 접근성</strong> — Schema Markup, Markdown 서빙
          </li>
          <li>
            <strong>외부 검증</strong> — 신뢰 도메인에서 반복적 언급
          </li>
          <li>
            <strong>신뢰 시그널</strong> — 오리지널 데이터, 공식 출처, 저자 전문성
          </li>
        </ol>
        <p className="mt-4 leading-relaxed text-secondaryColor/70">
          아직 AEO는 초기 단계다. 확립된 정답도 없고, 내가 정리한 것들도 가설에 가깝다.
          그래도 AI가 콘텐츠를 소비하는 방식이 바뀌고 있다는 건 분명하다. 지금부터 한
          번쯤 고민해볼 만한 시점인 것 같다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-primaryColor">
          자주 묻는 질문 (FAQ)
        </h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              AEO와 SEO를 동시에 해야 하나요?
            </summary>
            <p className="mt-2">
              둘은 상충하지 않는다. 좋은 SEO 구조(명확한 헤딩, 간결한 문장)는 AEO에도
              도움이 된다. 다만 백링크나 키워드 밀도 같은 SEO 전술은 AEO에 직접
              연결되지 않는다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              Schema Markup이 AEO에 효과가 없다는 건가요?
            </summary>
            <p className="mt-2">
              효과가 없다는 게 아니다. AI가 콘텐츠를 이해하고 파싱하는 데 도움을 줄 수
              있다. 다만 Schema Markup이 있다고 해서 AI가 해당 URL을 발견하거나
              우선적으로 참조하는 건 아닌 것으로 보인다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              개인 블로그는 AEO에서 불리한가요?
            </summary>
            <p className="mt-2">
              도메인 신뢰도 면에서는 불리할 수 있다. 하지만 완전히 불가능한 건 아니다.
              신뢰 도메인(벨로그, 미디엄, 개발 커뮤니티)에 동일한 콘텐츠를 배포하거나,
              오리지널 데이터가 있는 1차 출처로 포지셔닝하면 가능성이 높아진다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              Markdown 서빙은 어떻게 구현하나요?
            </summary>
            <p className="mt-2">
              Next.js 기준으로, middleware에서 Accept 헤더를 확인해 text/markdown 요청이
              들어오면 정적 .md 파일을 응답으로 내려주는 방식으로 구현할 수 있다. 또는
              /blog/[slug].md 경로로 정적 파일을 함께 서빙하는 방법도 있다.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

export const post: BlogPost = {
  slug: 'aeo-ai-citation',
  title: 'AEO를 목표로 — AI에게 내 콘텐츠를 인용시키는 방법',
  description:
    'SEO 다음은 AEO다. AI 답변 엔진에 내 콘텐츠가 인용되도록 최적화하는 방법과 직접 분석한 가설을 정리합니다.',
  publishedAt: '2026-03-27T00:00:00+09:00',
  readTime: '7분 읽기',
  tags: ['AEO', 'SEO', 'AI', 'Next.js', '콘텐츠 전략'],
  faq: [
    {
      question: 'AEO란 무엇인가요?',
      answer:
        'AEO(Answer Engine Optimization)는 ChatGPT, Claude, Perplexity 같은 AI 답변 엔진에 내 콘텐츠가 인용되도록 최적화하는 것입니다. SEO가 검색 결과 상위 노출을 목표로 한다면, AEO는 AI 답변의 출처가 되는 것을 목표로 합니다.',
    },
    {
      question: 'AEO에서 가장 중요한 요소는 무엇인가요?',
      answer:
        '도메인 신뢰도와 신뢰 도메인에서의 반복 노출이 가장 중요한 것으로 보입니다. 콘텐츠 품질이나 Schema Markup보다 AI가 학습 과정에서 신뢰한 도메인에서 얼마나 많이 언급되는지가 우선 작동하는 것 같습니다.',
    },
    {
      question: 'Schema Markup은 AEO에 도움이 되나요?',
      answer:
        'AI가 콘텐츠를 이해하는 데는 도움이 될 수 있습니다. 하지만 AI가 해당 URL을 발견하거나 우선적으로 참조하게 만드는 효과는 제한적인 것으로 보입니다.',
    },
    {
      question: 'AI 에이전트 친화적 기술에는 어떤 것이 있나요?',
      answer:
        'Accept 헤더에 따라 AI에게 Markdown을 응답하는 Content Negotiation이 대표적입니다. 500KB HTML 대신 2KB Markdown을 내려주면 AI가 불필요한 파싱 없이 콘텐츠를 바로 소비할 수 있습니다.',
    },
    {
      question: '서비스에 AEO를 적용하려면 어떻게 해야 하나요?',
      answer:
        '공식 문서를 Answer-First 구조로 작성하고, GitHub README를 AI 인용 가능한 형태로 정리하며, 비교 사이트에 서비스를 등록하는 것이 효과적입니다. AI는 서비스 공식 사이트보다 비교 사이트를 출처로 인용하는 경향이 있습니다.',
    },
  ],
  Content,
};
