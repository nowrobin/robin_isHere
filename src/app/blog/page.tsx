const publishedAt = '2026-02-03T00:00:00+09:00';

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Date 타입은 왜 날짜가 아니라고 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Date는 특정 날짜가 아니라 UTC 기준의 “순간(instant)”을 의미합니다. 같은 Date라도 타임존에 따라 해석되는 날짜가 달라집니다.',
      },
    },
    {
      '@type': 'Question',
      name: 'new Date()는 어디 기준으로 동작하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'new Date()는 현재 시점의 UTC 타임스탬프를 생성합니다. 표시할 때는 로컬 타임존으로 변환되어 보입니다.',
      },
    },
    {
      '@type': 'Question',
      name: "new Date('2026-01-01')은 왜 위험한가요?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: '문자열로 날짜만 전달하면 UTC 자정으로 해석되는 경우가 있어, 로컬 타임존에서 하루가 밀리는 문제가 발생할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '타임존 오류를 줄이는 실전 기준은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'API는 UTC로 저장하고, 표시는 사용자 타임존으로 변환하며, 날짜만 필요하면 문자열로 따로 관리하는 기준이 안전합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '서머타임(DST)은 어떻게 처리해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '직접 계산하기보다 UTC로 저장한 뒤 타임존 정보를 통해 표시 단계에서 변환하는 방식이 가장 안전합니다.',
      },
    },
  ],
};

const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Date는 날짜가 아니다: 타임존 실수를 막는 기준 정리',
  description:
    'Date 타입을 날짜로 착각했을 때 발생하는 오류를 UTC/KST/ISO 8601 기준과 실수 사례로 정리합니다.',
  datePublished: publishedAt,
  dateModified: publishedAt,
  author: {
    '@type': 'Person',
    name: '한정욱',
  },
};

export default function BlogPage() {
  return (
    <main className="bg-beige text-primaryColor">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <article className="container mx-auto px-6 py-14 max-w-4xl text-secondaryColor">
        <header className="mb-10">
          <p className="text-sm text-secondaryColor/70">
            2026.02.03 · 6분 읽기
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-primaryColor">
            Date는 날짜가 아니다: 타임존 실수를 막는 기준 정리
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            날짜가 들어가는 값은 무조건 <strong>Date</strong>로 처리해야 한다고
            생각했다. 하지만 Date는 단순한 날짜가 아니라 UTC 기준의 “순간”을
            의미한다. 이 글은 그 착각이 어떻게 하루가 밀리는 버그로 이어졌는지,
            그리고 어떤 기준으로 정리해야 안전해지는지를 질문-답변 중심으로
            정리한다.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            Date 타입은 왜 날짜가 아니라고 하나요?
          </h2>
          <p className="mt-3 leading-relaxed">
            Date는 특정 날짜가 아니라 UTC 기준의 “순간(instant)”을 의미한다.
            같은 Date라도 해석하는 타임존에 따라 날짜가 달라질 수 있다.
          </p>
          <div className="mt-6 rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">Date 타입 예시</p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
              <code>{`const date: Date = new Date();
------------------------------
const a: Date = new Date();                      // 현재 시각
const b: Date = new Date('2026-01-01');          // UTC 자정
const c: Date = new Date('2026-01-01T00:00+09'); // KST 자정
// a, b, c 모두 Date 타입`}</code>
            </pre>
            <p className="mt-3 text-sm text-secondaryColor/80">
              TypeScript에서는 세 값 모두 동일하게 Date 타입으로 취급된다. 문제는
              서로 다른 의미의 값이 같은 타입으로 표현된다는 점이다.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            Date 타입 하나로 해결되지 않는 문제는 무엇인가요?
          </h2>
          <p className="mt-3 leading-relaxed">
            Date 타입 하나로는 아래 구분을 안전하게 표현할 수 없다.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>날짜만인지, 시간만인지, 둘 다인지</li>
            <li>UTC 기준인지, KST 기준인지</li>
            <li>서버 기준인지, 사용자 기준인지</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            기준(UTC/KST/ISO 8601)을 어떻게 정해야 하나요?
          </h2>
          <div className="mt-4 grid gap-4 rounded-xl border border-tertiary bg-quaternary p-5">
            <p>
              <strong>UTC</strong>: 전 세계 기준 시간. 서머타임이 없고 어디에도
              속하지 않는 기준.
            </p>
            <p>
              <strong>KST</strong>: 한국 표준시. UTC +9시간이며 서머타임 없음.
            </p>
            <p>
              <strong>ISO 8601</strong>: 날짜/시간을 문자열로 표현하는 국제 표준
              포맷.
            </p>
            <pre className="overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
              <code>{`2026-01-01T00:00:00Z
2026-01-01T00:00:00+09:00  // KST
2026-01-01T00:00:00-08:00  // PST`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            new Date()는 어디 기준인가요?
          </h2>
          <p className="mt-3 leading-relaxed">
            new Date()는 현재 시점의 UTC 타임스탬프를 생성한다. 다만 문자열로
            변환하면 로컬 타임존으로 표시된다.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
            <code>{`const d = new Date();
d.toString();     // 로컬(KST)로 표시
d.toISOString();  // UTC로 표시`}</code>
          </pre>
          <p className="mt-3 text-secondaryColor/80">
            toString()은 표현만 바꾸고 내부 UTC 타임스탬프는 그대로 유지한다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            문자열로 Date를 만들면 안전한가요?
          </h2>
          <p className="mt-3 leading-relaxed">
            문법적으로는 안전해 보이지만, 의도하지 않은 시간 값이 생성될 수
            있다. 특히 “날짜만” 원했는데 UTC 기준으로 해석되면 하루가 밀리는
            문제가 발생한다.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
            <code>{`// 원했던 값: 2026-01-01 00:00 (KST)
const date = new Date('2026-01-01');
const key = date.toISOString().split('T')[0];`}</code>
          </pre>
          <p className="mt-3 text-secondaryColor/80">
            KST 자정을 UTC로 변환하면 전날로 바뀌고, 다시 KST로 해석하면 하루가
            밀린 것처럼 보인다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            실수 사례: 왜 하루가 밀렸나요?
          </h2>
          <p className="mt-3 leading-relaxed">
            호스트는 KST 기준으로 예약을 만들고, 게스트는 로컬 타임존으로
            해석한다는 가정이 깨졌다. 저장은 UTC로, 표시는 KST로 변환해야 하는데
            이를 생략하면서 하루가 밀렸다.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-tertiary bg-quaternary">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-tertiary text-primaryColor">
                  <th className="border px-4 py-3 text-left font-semibold">
                    단계
                  </th>
                  <th className="border px-4 py-3 text-left font-semibold">
                    결과
                  </th>
                </tr>
              </thead>
              <tbody className="text-secondaryColor">
                <tr>
                  <td className="border px-4 py-3">저장</td>
                  <td className="border px-4 py-3">
                    Date.now()로 UTC 기준 타임스탬프 저장
                  </td>
                </tr>
                <tr className="bg-beige">
                  <td className="border px-4 py-3">표시</td>
                  <td className="border px-4 py-3">
                    KST로 표시하면서 하루가 밀림
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">결과</td>
                  <td className="border px-4 py-3">
                    의도한 날짜보다 하루 뒤로 보임
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">결론</h2>
          <ol className="mt-4 list-decimal pl-5">
            <li>Date는 날짜가 아니라 “순간”이다.</li>
            <li>API 저장은 UTC, 표시 단계는 사용자 타임존 변환이 기본이다.</li>
            <li>날짜만 필요하면 문자열로 분리해서 관리한다.</li>
            <li>Timezone 값을 명시해 변환 기준을 통일한다.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            서머타임은 어떻게 처리해야 하나요?
          </h2>
          <p className="mt-3 leading-relaxed">
            DST는 하루가 24시간이라는 기준을 깨뜨린다. 직접 계산하기보다 UTC로
            저장한 뒤 타임존 정보를 통해 표시 단계에서 변환하는 방식이 가장
            안전하다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">세 줄 요약</h2>
          <ul className="mt-4 list-disc pl-5">
            <li>Date는 날짜가 아니다.</li>
            <li>Date는 UTC 기준의 “순간”이다.</li>
            <li>날짜는 그 순간을 어떻게 해석하느냐의 문제다.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">
            자주 묻는 질문 (FAQ)
          </h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-lg border border-tertiary bg-quaternary p-4">
              <summary className="cursor-pointer font-semibold text-primaryColor">
                Date.now()를 써도 안전한가요?
              </summary>
              <p className="mt-2">
                안전하다. 다만 타임존 변환 기준을 정하지 않으면 표시 단계에서
                문제를 만들 수 있다.
              </p>
            </details>
            <details className="rounded-lg border border-tertiary bg-quaternary p-4">
              <summary className="cursor-pointer font-semibold text-primaryColor">
                날짜만 저장할 때는 어떤 타입이 좋나요?
              </summary>
              <p className="mt-2">
                날짜만 필요하다면 문자열(예: 2026-01-01)로 별도 관리하는 것이
                안전하다.
              </p>
            </details>
            <details className="rounded-lg border border-tertiary bg-quaternary p-4">
              <summary className="cursor-pointer font-semibold text-primaryColor">
                API는 왜 UTC로 저장하나요?
              </summary>
              <p className="mt-2">
                서버 간 기준을 통일하고 DST 영향을 줄이기 위해 UTC를 기본으로
                유지하는 것이 일반적이다.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primaryColor">관련 글</h2>
          <p className="mt-2 text-secondaryColor/80">
            같은 주제를 다룬 글을 추가로 준비 중이다.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>타임존 기준을 설계하는 체크리스트 (준비 중)</li>
            <li>캘린더 서비스에서 발생하는 날짜 버그 모음 (준비 중)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primaryColor">
            PPA (People Also Ask)
          </h2>
          <p className="mt-2 text-secondaryColor/80">
            사람들이 실제로 자주 묻는 질문을 짧게 정리했다.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>“UTC로 저장하면 로컬에서는 어떻게 보여지나요?”</li>
            <li>“타임존 변환은 클라이언트에서만 해도 되나요?”</li>
            <li>“Date 대신 사용할 만한 라이브러리가 있나요?”</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
