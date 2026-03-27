import type { BlogPost } from './index';

function Content() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          이 에러는 왜 항상 애매할까?
        </h2>
        <p className="mt-3 leading-relaxed">
          Next.js를 쓰다 보면 한 번쯤은 마주친다.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`Warning: Text content does not match server-rendered HTML.
Error: Hydration failed because the initial UI does not match what was rendered on the server.`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">
          메시지 자체는 단순한데, 막상 원인을 찾으려고 하면 막막하다. Zustand
          persist 때문인지, 조건부 렌더링 문제인지, i18n이 범인인지, 아니면
          그냥 Next.js 버그인지.
        </p>
        <p className="mt-3 leading-relaxed">
          이 글은 &quot;suppressHydrationWarning 추가하면 됩니다&quot; 같은 얘기를 하려는
          게 아니다. Hydration이 실제로 어떻게 동작하는지, 왜 저 에러가
          터지는지를 구조적으로 짚어본다.
        </p>
        <div className="mt-6 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">결론부터</p>
          <p className="mt-2 text-secondaryColor/80">
            Hydration mismatch는 React의 버그가 아니다. 서버와 클라이언트가
            서로 다른 입력을 받았기 때문에 생기는 일이다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          Hydration이 뭔지부터 짚고 가자
        </h2>
        <h3 className="mt-6 text-lg font-semibold text-primaryColor">
          내가 오해하는 부분
        </h3>
        <p className="mt-3 leading-relaxed">
          Hydration을 클라이언트에서 이벤트를 붙여서 다시 렌더링하는 것으로
          이해하기 쉽다. 하지만 이건 잘못된 이해다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">Hydration의 정확한 정의</p>
          <p className="mt-2 text-secondaryColor/80">
            서버가 만들어 놓은 HTML에 React의 상태와 이벤트 시스템을 붙이는 과정
          </p>
        </div>
        <p className="mt-4 leading-relaxed">SSR을 쓰면 이런 순서로 진행된다.</p>
        <ol className="mt-3 list-decimal pl-5 space-y-1">
          <li>서버가 HTML을 생성한다.</li>
          <li>브라우저가 그 HTML을 먼저 화면에 그린다.</li>
          <li>React가 JS를 로드하면서 DOM을 처음부터 새로 만드는 게 아니라,</li>
          <li>이미 있는 DOM을 그대로 재사용하려고 시도한다.</li>
        </ol>
        <p className="mt-4 leading-relaxed">
          여기서 <strong>&quot;재사용하려고 시도한다&quot;</strong>는 부분이 핵심이다.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          React가 내부적으로 하는 일
        </h3>
        <p className="mt-3 leading-relaxed">
          Hydration 과정에서 React는 이렇게 움직인다.
        </p>
        <ol className="mt-3 list-decimal pl-5 space-y-1">
          <li>서버에서 내려온 HTML DOM을 읽는다.</li>
          <li>클라이언트에서 컴포넌트를 한 번 실행해서 Virtual DOM을 만든다.</li>
          <li>둘을 비교한다.</li>
          <li>같으면 그냥 DOM을 재사용한다.</li>
          <li>다르면 해당 subtree를 버리고 새로 마운트한다.</li>
        </ol>
        <p className="mt-4 leading-relaxed">여기에 암묵적인 전제가 있다.</p>
        <div className="mt-3 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="text-secondaryColor/80">
            클라이언트의 첫 렌더 결과는 서버 렌더 결과와 무조건 같아야 한다.
          </p>
        </div>
        <p className="mt-3 leading-relaxed">
          이 전제가 깨지는 순간 Hydration mismatch가 발생한다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          &quot;서버&quot;가 구체적으로 어떤 환경인지 알아야 한다
        </h2>
        <p className="mt-3 leading-relaxed">
          Next.js App Router 기준으로, 서버란 브라우저 없이 React 컴포넌트를
          실행해서 HTML을 만들어내는 환경이다. Node.js든 Edge Runtime이든
          Vercel 서버든, 공통점은 하나다.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-tertiary bg-quaternary">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-tertiary text-primaryColor">
                <th className="border px-4 py-3 text-left font-semibold">API</th>
                <th className="border px-4 py-3 text-left font-semibold">서버</th>
                <th className="border px-4 py-3 text-left font-semibold">클라이언트</th>
              </tr>
            </thead>
            <tbody className="text-secondaryColor">
              <tr>
                <td className="border px-4 py-3">window</td>
                <td className="border px-4 py-3">❌</td>
                <td className="border px-4 py-3">✅</td>
              </tr>
              <tr className="bg-beige">
                <td className="border px-4 py-3">localStorage</td>
                <td className="border px-4 py-3">❌</td>
                <td className="border px-4 py-3">✅</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">navigator</td>
                <td className="border px-4 py-3">❌</td>
                <td className="border px-4 py-3">✅</td>
              </tr>
              <tr className="bg-beige">
                <td className="border px-4 py-3">Accept-Language 헤더</td>
                <td className="border px-4 py-3">✅</td>
                <td className="border px-4 py-3">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-secondaryColor/80">
          당연한 얘기처럼 보이지만, 실제로 어떤 게 없는지 까먹고 코드를
          작성하는 경우가 많다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          문제의 핵심: 결정성
        </h2>
        <p className="mt-3 leading-relaxed">
          SSR 환경에서 가장 중요한 원칙을 하나만 고르라면 이거다.
        </p>
        <div className="mt-3 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">같은 입력 → 같은 출력</p>
        </div>
        <p className="mt-4 leading-relaxed">
          Hydration은 서버와 클라이언트가 동일한 결과를 낸다고 가정한다.
          그런데 현실적으로 아래 값들은 서버와 클라이언트에서 완전히 다르다.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-tertiary bg-quaternary">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-tertiary text-primaryColor">
                <th className="border px-4 py-3 text-left font-semibold">항목</th>
                <th className="border px-4 py-3 text-left font-semibold">서버</th>
                <th className="border px-4 py-3 text-left font-semibold">클라이언트</th>
              </tr>
            </thead>
            <tbody className="text-secondaryColor">
              <tr>
                <td className="border px-4 py-3">localStorage</td>
                <td className="border px-4 py-3">❌</td>
                <td className="border px-4 py-3">✅</td>
              </tr>
              <tr className="bg-beige">
                <td className="border px-4 py-3">navigator.language</td>
                <td className="border px-4 py-3">❌</td>
                <td className="border px-4 py-3">✅</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Date.now()</td>
                <td className="border px-4 py-3">실행 시점 다름</td>
                <td className="border px-4 py-3">실행 시점 다름</td>
              </tr>
              <tr className="bg-beige">
                <td className="border px-4 py-3">Accept-Language 헤더</td>
                <td className="border px-4 py-3">✅</td>
                <td className="border px-4 py-3">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 leading-relaxed">
          입력이 다르면 출력이 달라진다. 출력이 달라지면 Hydration이 깨진다.
          이게 전부다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          Zustand persist + 조건부 렌더링이 왜 문제인가
        </h2>
        <h3 className="mt-6 text-lg font-semibold text-primaryColor">
          문제 예시 코드
        </h3>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`'use client';

const authed = useAuthStore((s) => s.authed);
return authed ? <App /> : <Login />;`}</code>
        </pre>
        <div className="mt-6 overflow-x-auto rounded-xl border border-tertiary bg-quaternary">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-tertiary text-primaryColor">
                <th className="border px-4 py-3 text-left font-semibold">단계</th>
                <th className="border px-4 py-3 text-left font-semibold">상태</th>
                <th className="border px-4 py-3 text-left font-semibold">결과</th>
              </tr>
            </thead>
            <tbody className="text-secondaryColor">
              <tr>
                <td className="border px-4 py-3">서버</td>
                <td className="border px-4 py-3">localStorage 없음 → authed = false</td>
                <td className="border px-4 py-3">{`<Login />`} HTML 생성</td>
              </tr>
              <tr className="bg-beige">
                <td className="border px-4 py-3">클라이언트 첫 렌더</td>
                <td className="border px-4 py-3">persist가 authed = true 복원</td>
                <td className="border px-4 py-3">{`<App />`} 렌더</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 leading-relaxed">
          서버는 <code className="rounded bg-quaternary px-1 py-0.5 text-sm">{`<Login />`}</code>을
          만들었는데, 클라이언트 첫 렌더는{' '}
          <code className="rounded bg-quaternary px-1 py-0.5 text-sm">{`<App />`}</code>이다.
          DOM 구조가 완전히 다르다. 당연히 mismatch가 터진다.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          조건부 렌더링이 특히 위험한 이유
        </h3>
        <p className="mt-3 leading-relaxed">
          텍스트 수준의 차이라면 피해가 작다.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`<div>{authed ? 'A' : 'B'}</div>`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">
          그런데 컴포넌트 트리 자체가 달라지면 얘기가 다르다.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`return authed ? <App /> : <Login />;`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">
          React는 DOM을 재사용하려고 하지만, 컴포넌트 타입이 다르면 subtree를
          통째로 버리고 새로 마운트한다. 그 순간 SSR로 얻을 수 있는 이점이
          사라지고, Layout shift가 생길 수도 있다.
        </p>
        <p className="mt-2 text-sm text-secondaryColor/70">
          Layout shift: 이미 화면에 그려진 요소들의 위치가 갑자기 이동하는
          현상
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          i18n이 섞이면 더 자주 터지는 이유
        </h2>
        <p className="mt-3 leading-relaxed">
          i18n 또한 자주 입력 불일치 문제를 일으킨다.
        </p>
        <div className="mt-4 grid gap-3 rounded-xl border border-tertiary bg-quaternary p-5">
          <p>
            <strong>서버에서 언어를 결정하는 방법</strong>: 보통{' '}
            <code className="rounded bg-button px-1 py-0.5 text-sm text-beige">
              Accept-Language
            </code>{' '}
            헤더를 본다.
          </p>
          <p>
            <strong>클라이언트에서 언어를 결정하는 방법</strong>:{' '}
            <code className="rounded bg-button px-1 py-0.5 text-sm text-beige">
              navigator.language
            </code>
            , localStorage, 사용자 설정값 등을 본다.
          </p>
        </div>
        <p className="mt-4 leading-relaxed">
          예를 들어 서버는 <code className="rounded bg-quaternary px-1 py-0.5 text-sm">ko</code>로
          렌더링했는데 클라이언트가{' '}
          <code className="rounded bg-quaternary px-1 py-0.5 text-sm">en</code>으로
          초기화된다면:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`<h1>{t('welcome')}</h1>

// 서버 결과: 환영합니다
// 클라이언트 첫 렌더: Welcome`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">텍스트 mismatch 발생.</p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          URL 없는 locale 전략의 함정
        </h3>
        <p className="mt-3 leading-relaxed">
          <code className="rounded bg-quaternary px-1 py-0.5 text-sm">/ko</code>,{' '}
          <code className="rounded bg-quaternary px-1 py-0.5 text-sm">/en</code>처럼
          URL에 locale을 박아넣는 방식이 아니라, 서버는 헤더를 보고 클라는
          localStorage를 보는 구조라면 결정 경로가 달라서 거의 항상 충돌한다.
        </p>
        <p className="mt-3 leading-relaxed">
          SSR 환경에서 언어는 &quot;상태&quot;가 아니라 &quot;입력&quot;으로 취급해야 한다. 그
          입력이 서버와 클라이언트에서 일치하지 않으면 Hydration은 반드시
          깨진다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          App Router에서 유독 자주 보이는 이유
        </h2>
        <p className="mt-3 leading-relaxed">
          Pages Router는 CSR처럼 동작하는 케이스가 많았다. App Router는
          다르다. 서버 컴포넌트가 기본이고, 서버에서 HTML이 먼저 확정된다.
        </p>
        <p className="mt-3 leading-relaxed">
          SSR이 기본값이 되다 보니, 서버와 클라이언트 환경 차이가 이전보다
          훨씬 직접적으로 드러난다. 예전엔 그냥 넘어가던 코드가 App Router에서는
          경고를 뱉는 이유가 여기 있다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="text-secondaryColor/80">
            그렇다고{' '}
            <code className="rounded bg-button px-1 py-0.5 text-sm text-beige">
              &apos;use client&apos;
            </code>
            를 남발하는 건 해결책이 아니다. 서버 컴포넌트의 이점을 포기하는
            것이기 때문이다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">해결 방향</h2>
        <ul className="mt-4 list-disc pl-5 space-y-3">
          <li>
            <strong>첫 렌더는 결정적이어야 한다.</strong> 무조건 같은 입력,
            무조건 같은 출력.
          </li>
          <li>
            <strong>브라우저 전용 API를 첫 렌더 입력으로 쓰지 않는다.</strong>{' '}
            localStorage, navigator, window는 hydration 이후에 사용해야 한다.
          </li>
          <li>
            <strong>persist 상태로 초기 분기하지 않는다.</strong> hydrated
            플래그가 true가 된 다음에 분기해야 한다.
          </li>
          <li>
            <strong>서버와 클라이언트의 입력을 통일한다.</strong> 쿠키를
            쓰거나, URL 기반 locale을 사용하면 양쪽이 같은 값을 볼 수 있다.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed">
          결국 서버 환경에서 어떤 API를 쓸 수 없는지 먼저 파악하는 것이
          출발점이다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">결론</h2>
        <p className="mt-3 leading-relaxed">
          Hydration mismatch는 React 버그 또는 직접적인 코드의 문제가 아니라
          구조적인 문제이다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="text-secondaryColor/80">
            서버와 클라이언트가 서로 다른 입력을 받아서 렌더링했기 때문에
            생기는 구조적인 결과다.
          </p>
        </div>
        <p className="mt-4 leading-relaxed">
          저 에러가 보이면 &quot;어떤 라이브러리를 잘못 썼나&quot;보다 &quot;서버와 클라이언트의
          입력이 어디서 갈라지고 있나&quot;를 먼저 보는 게 맞다.
        </p>
        <p className="mt-3 leading-relaxed">
          Zustand, 조건부 렌더링, i18n은 증상이다. 원인은 항상 하나다.
        </p>
        <p className="mt-3 font-semibold text-primaryColor">비결정적 렌더링.</p>
        <p className="mt-3 leading-relaxed">
          상태 관리를 어떻게 할지보다, 서버와 클라이언트가 같은 입력을 받도록
          설계하는 게 먼저다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-primaryColor">
          자주 묻는 질문 (FAQ)
        </h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              suppressHydrationWarning을 추가하면 해결되나요?
            </summary>
            <p className="mt-2">
              경고는 억제되지만 근본 원인은 그대로다. subtree가 여전히
              다시 마운트될 수 있고, SSR의 이점도 사라진다. 임시방편이지 해결책이
              아니다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              useEffect에서 localStorage를 읽으면 괜찮나요?
            </summary>
            <p className="mt-2">
              괜찮다. useEffect는 hydration이 완료된 이후에 실행되기 때문에
              첫 렌더 결과에 영향을 주지 않는다. 다만 그 값으로 UI를 분기할
              때는 hydrated 플래그를 함께 사용해야 한다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              Zustand persist를 쓰면서 SSR 분기를 안전하게 하려면?
            </summary>
            <p className="mt-2">
              persist의 onRehydrateStorage 또는 별도 hydrated 상태를
              추가해서, 클라이언트 복원이 완료된 뒤에 분기 로직을 실행하면
              된다. 첫 렌더는 항상 서버와 동일한 초기값으로 유지해야 한다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              &apos;use client&apos;를 붙이면 hydration mismatch가 없어지나요?
            </summary>
            <p className="mt-2">
              아니다. &apos;use client&apos; 컴포넌트도 서버에서 초기 HTML을 만들기
              때문에 동일한 문제가 생긴다. 클라이언트 전용으로 만들려면
              dynamic import에 ssr: false 옵션을 써야 한다.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

export const post: BlogPost = {
  slug: 'hydration-mismatch',
  title: 'Hydration Mismatch는 왜 생기는가: 비결정적 렌더링의 구조',
  description:
    'Next.js에서 자주 보이는 Hydration 에러의 실제 원인을 Zustand persist, 조건부 렌더링, i18n 사례로 분석합니다.',
  publishedAt: '2026-03-27T00:00:00+09:00',
  readTime: '8분 읽기',
  tags: ['Next.js', 'React', 'Hydration', 'SSR', 'App Router'],
  faq: [
    {
      question: 'Hydration mismatch는 왜 발생하나요?',
      answer:
        '서버와 클라이언트의 첫 렌더 결과가 다를 때 발생합니다. React는 서버 HTML을 재사용하려 하는데, 클라이언트가 다른 입력(localStorage, navigator 등)을 받아 다른 결과를 내면 mismatch가 생깁니다.',
    },
    {
      question: 'suppressHydrationWarning을 쓰면 해결되나요?',
      answer:
        '경고는 사라지지만 근본 원인은 그대로입니다. SSR 이점이 사라지고 Layout shift가 발생할 수 있어 임시방편에 불과합니다.',
    },
    {
      question: 'Zustand persist를 쓰면서 SSR 분기를 어떻게 처리하나요?',
      answer:
        'hydrated 플래그를 별도로 관리하고, 클라이언트 복원이 완료된 뒤에 분기 로직을 실행해야 합니다. 첫 렌더는 항상 서버와 동일한 초기값으로 유지해야 합니다.',
    },
    {
      question: 'App Router에서 hydration 에러가 더 자주 보이는 이유는?',
      answer:
        'App Router는 서버 컴포넌트가 기본이라 SSR이 기본값입니다. Pages Router처럼 CSR로 우회되던 케이스가 이제 서버-클라이언트 차이로 직접 드러나기 때문입니다.',
    },
    {
      question: 'i18n에서 hydration mismatch를 막으려면?',
      answer:
        '서버와 클라이언트가 같은 locale 결정 경로를 써야 합니다. 쿠키나 URL 기반 locale이 가장 안전합니다. 서버는 헤더를, 클라이언트는 localStorage를 보는 구조는 거의 항상 충돌합니다.',
    },
  ],
  Content,
};
