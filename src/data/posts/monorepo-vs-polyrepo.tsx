import type { BlogPost } from './index';

function Content() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          이 선택은 왜 생각보다 중요한가
        </h2>
        <p className="mt-3 leading-relaxed">
          프로젝트를 설계하다 보면 자연스럽게 이런 질문을 하게 된다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">&quot;모노레포로 갈까, 아니면 레포를 나눌까?&quot;</p>
        </div>
        <p className="mt-3 leading-relaxed">
          처음에는 그저 GitHub에서 분리하는 걸 생각했다. 자연스럽게 레포를
          분리하는 게 관리하기 편하다고 느꼈고, 모노레포에 대한 큰 이점이
          없다고 생각했다. 그러다 최근 새로운 프로젝트에서 모노레포를 사용하게
          되었다.
        </p>
        <p className="mt-3 leading-relaxed">
          모노레포로 결정한 이유는 단순히 코드 저장 방식에 대한 고민이 아니었다.
          의존성 관리, 협업 방식, 배포 전략, 장애 영향 범위까지 전부 결정할 수
          있는, 오히려 관리하기 편하게 만드는 전략적 선택이다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          모노레포란 무엇인가
        </h2>
        <p className="mt-3 leading-relaxed">
          모노레포는 여러 서비스와 패키지를 하나의 저장소에서 관리하는 구조다.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`/apps
  /web
  /api
/packages
  /ui
  /types
  /utils`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">
          하지만 핵심은 폴더 구조가 아니다. 모노레포의 본질은 다음 세 가지다.
        </p>
        <div className="mt-4 space-y-2">
          {[
            '하나의 의존성 그래프',
            '하나의 lockfile',
            'workspace 기반 패키지 연결',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-tertiary bg-quaternary px-4 py-3"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primaryColor" />
              <span className="font-medium text-primaryColor">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed">
          즉, <strong>시스템 전체를 하나의 프로젝트로 취급한다는 관점</strong>이다.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          레포 분리는 정반대다
        </h3>
        <p className="mt-3 leading-relaxed">
          레포 분리는 서비스 단위로 저장소를 나누는 방식이다.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-button p-4 text-sm text-beige">
          <code>{`web-repo/
api-repo/
shared-types-repo/`}</code>
        </pre>
        <p className="mt-3 leading-relaxed">
          각 레포는 독립적인 생명주기를 가진다. 의존성, 배포, 버전 관리가 모두
          분리된다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          모노레포의 장점
        </h2>
        <p className="mt-3 leading-relaxed">
          모노레포의 가장 큰 장점은{' '}
          <strong>함께 바뀌는 코드를 함께 다룰 수 있다는 점</strong>이다.
        </p>
        <p className="mt-3 leading-relaxed">
          예를 들어 API 응답이 바뀌는 상황을 생각해보자.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">하나의 PR로 처리 가능한 변경</p>
          <ul className="mt-3 space-y-1 text-secondaryColor/80">
            <li>• backend 수정</li>
            <li>• frontend 호출 수정</li>
            <li>• shared type 수정</li>
          </ul>
        </div>
        <p className="mt-4 leading-relaxed">
          이건 단순한 편의가 아니라{' '}
          <strong>개발 속도와 안정성에 직접적인 영향을 준다.</strong> 특히
          분야가 나뉘어 있지 않고 각 기능을 풀스택으로 만들어야 했던 우리
          팀에는 이 방식이 굉장히 효율적이었다.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          공통 코드 재사용이 자연스럽다
        </h3>
        <p className="mt-3 leading-relaxed">
          UI 컴포넌트, 타입 정의, 유틸 함수, ESLint / TS 설정 같은 것들을 별도
          publish 없이 바로 공유할 수 있다. 속도가 우선순위였던 만큼 문서 없이
          진행하면서 타입이 꼬일 수 있었는데, 타입을 재사용하면서 그런 이슈가
          많이 줄었다.
        </p>
        <p className="mt-3 leading-relaxed">
          첫 Phase가 지나고 문서화를 하면서 점점 타입이 많아지고, AI가 코드를
          작성하다 보니 중복 타입, enum 겹침 등 여러 문제가 있었다. 한번 정리하고
          문서화를 했지만, 그래도 큰 에러 없이 첫 phase를 끝낼 수 있었다.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          의존성 버전 통일
        </h3>
        <p className="mt-3 leading-relaxed">
          하나의 lockfile로 TypeScript, React, Prisma 같은 핵심 라이브러리의
          버전을 강제할 수 있기 때문에 환경이 어긋나는 문제를 구조적으로 줄일
          수 있다.
        </p>
        <p className="mt-3 leading-relaxed">
          개발 경험도 좋아진다. 전체 코드 검색이 쉽고, 변경 영향 범위를
          파악하기도 훨씬 수월하다. 특히 이제 AI 시대인 만큼 하나의 프로젝트로
          바로 전달이 가능하기 때문에 작업하기 편했다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          모노레포의 비용
        </h2>
        <p className="mt-3 leading-relaxed">
          하지만 모노레포는 비용도 분명하다.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-primaryColor">
          첫 번째: 복잡도
        </h3>
        <p className="mt-3 leading-relaxed">
          프로젝트가 커질수록 빌드 시스템, 캐시 전략, CI 구성까지 고려해야 할
          요소가 많아진다. 백엔드와 프론트엔드만 나뉘었을 때는 빌드 구성에 큰
          어려움이 없었는데, 앱까지 추가되면서 많이 복잡해졌다. 특히 배포를
          한꺼번에 하지 않고 따로 진행하면서 경로나 CI 구성에서 에러가 많았다.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          두 번째: Blast Radius
        </h3>
        <p className="mt-3 leading-relaxed">
          공유 dependency와 shared package 구조 때문에, 한 변경이 전체에 영향을
          줄 수 있다. 이른바 <strong>blast radius가 커진다.</strong> 팀원들이 각각
          맡은 기능을 구현하면서 라이브러리를 마음대로 설치했고, 잘못된 버전이나
          충돌이 생기는 경우가 있었다. 충돌은 머지할 때 드러나기 때문에 초반
          세팅에서 staging에 올릴 때마다 고쳤던 기억이 있다.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          세 번째: 배포 환경과의 충돌
        </h3>
        <p className="mt-3 leading-relaxed">
          Docker build context나 Railway의 root directory 같은 제약이 있는
          환경에서는 모노레포 구조가 오히려 불편하게 작동할 수 있다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">딜레마</p>
          <p className="mt-2 text-secondaryColor/80">
            프로젝트 루트를 watch path로 하면 루트에서 뭔가 바뀔 때마다
            redeploy가 트리거된다. 그렇다고 /api만 따로 배포하면, 루트에서
            버전이 바뀌거나 /web에서 패키지를 설치하면 api 배포는 직접
            확인하고 재배포해야 한다.
          </p>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-primaryColor">
          네 번째: 코드 소유권
        </h3>
        <p className="mt-3 leading-relaxed">
          팀 규모가 커질수록 코드 소유권이 흐려지고, 리뷰 범위가 커지는 문제도
          생긴다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          레포 분리의 장점과 단점
        </h2>
        <p className="mt-3 leading-relaxed">
          레포 분리는 정반대의 장점을 가진다. 가장 큰 특징은{' '}
          <strong>완전한 독립성</strong>이다. 각 서비스는 자신의 dependency,
          build, deploy를 독립적으로 관리한다.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">장점</p>
            <ul className="mt-3 space-y-1 text-sm text-secondaryColor/80">
              <li>• 한 서비스 문제가 다른 서비스에 영향 없음</li>
              <li>• 하나의 package.json, lockfile, pipeline</li>
              <li>• 팀 단위 ownership 명확</li>
              <li>• 배포 플랫폼 기본 설정과 잘 맞음</li>
            </ul>
          </div>
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">단점</p>
            <ul className="mt-3 space-y-1 text-sm text-secondaryColor/80">
              <li>• API 변경 시 여러 레포에 걸쳐 작업 필요</li>
              <li>• 공통 코드 공유에 npm publish 등 필요</li>
              <li>• 시간이 지나면 버전 불일치 누적</li>
              <li>• 전체 시스템 관점이 약해짐</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          실제로 체감한 배포 단계
        </h2>
        <p className="mt-3 leading-relaxed">
          프로젝트에서는 초반 설계를 잡고 가지만, 실제로 이러한 설계를 체감하는
          건 배포 단계였다.
        </p>
        <div className="mt-4 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">배포 환경의 제약</p>
          <ul className="mt-3 space-y-1 text-secondaryColor/80">
            <li>• Docker build context</li>
            <li>• Railway root directory</li>
            <li>• 서비스별 독립 배포 요구</li>
          </ul>
        </div>
        <p className="mt-4 leading-relaxed">
          이런 제약이 있으면 루트 lockfile을 그대로 사용할 수 없고, workspace
          구조가 깨지거나 dependency가 다시 resolve되는 문제가 발생한다.
        </p>
        <p className="mt-3 leading-relaxed">
          이때 종종 선택하는 방법이 <strong>서비스별 lockfile을 따로 두는 전략</strong>이다.
          이 방식은 배포 안정성과 재현성을 확보하는 데 효과적이다. 하지만 동시에
          단일 dependency graph라는 모노레포의 핵심 장점을 일부 포기하는 현실적인
          타협이 된다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          선택의 본질
        </h2>
        <p className="mt-3 leading-relaxed">
          결국 이 선택의 본질은 두 가지다.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">의존성 그래프</p>
            <p className="mt-2 text-sm text-secondaryColor/80">
              모노레포는 단일 그래프, 레포 분리는 다중 그래프를 가진다.
            </p>
          </div>
          <div className="rounded-xl border border-tertiary bg-quaternary p-5">
            <p className="font-semibold text-primaryColor">결합도</p>
            <p className="mt-2 text-sm text-secondaryColor/80">
              모노레포는 높은 결합, 레포 분리는 낮은 결합 구조다.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-tertiary bg-quaternary p-5">
          <p className="font-semibold text-primaryColor">판단 기준 한 문장</p>
          <p className="mt-2 text-secondaryColor/80">
            &quot;이 코드들은 함께 바뀌는가?&quot;
          </p>
        </div>
        <p className="mt-4 leading-relaxed">
          모노레포와 레포 분리는 기술 선택이 아니다.{' '}
          <strong>결합도를 어디까지 허용할 것인가에 대한 결정이다.</strong>
          모노레포는 일관성과 협업 효율을 극대화하고, 레포 분리는 독립성과
          안정성을 극대화한다. 이 질문에 대한 답이 구조를 결정한다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primaryColor">
          자주 묻는 질문 (FAQ)
        </h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              모노레포를 처음 도입할 때 가장 많이 실수하는 부분은?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              폴더 구조만 모노레포처럼 만들고 workspace 연결이나 단일 lockfile
              관리는 하지 않는 경우다. 폴더 구조보다 의존성 그래프를 단일하게
              유지하는 것이 모노레포의 핵심이다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              작은 팀에서도 모노레포가 유리한가요?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              오히려 작은 팀, 특히 풀스택으로 기능 단위로 개발하는 팀에서 더
              유리할 수 있다. 레포 간 컨텍스트 전환 비용이 없고, 하나의 PR로
              전체 변경을 처리할 수 있기 때문이다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              모노레포에서 서비스별로 독립 배포가 가능한가요?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              가능하다. Turborepo나 Nx 같은 도구를 사용하면 변경된 패키지만
              빌드·배포할 수 있다. 다만 플랫폼 제약이 있는 경우 서비스별 lockfile
              전략 같은 타협이 필요할 수 있다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              레포 분리에서 공통 타입을 공유하는 가장 현실적인 방법은?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              npm private registry에 별도 패키지로 publish하거나, git
              submodule, git dependency를 사용하는 방법이 있다. 다만 버전 관리
              오버헤드가 생기므로, 공유 범위가 넓을수록 모노레포 전환을
              검토할 만하다.
            </p>
          </details>
          <details className="rounded-lg border border-tertiary bg-quaternary p-4">
            <summary className="cursor-pointer font-semibold text-primaryColor">
              모노레포 도구는 무엇을 써야 하나요?
            </summary>
            <p className="mt-2 text-secondaryColor/80">
              pnpm workspace만으로도 시작할 수 있다. 프로젝트가 커지면
              Turborepo(빌드 캐시, 파이프라인)나 Nx(더 세밀한 의존성 그래프
              제어)를 도입하는 순서가 일반적이다.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

export const post: BlogPost = {
  slug: 'monorepo-vs-polyrepo',
  title: '모노레포 vs 레포 분리: 결합도를 어디까지 허용할 것인가',
  description:
    '모노레포와 레포 분리는 기술 선택이 아니라 결합도에 대한 결정이다. 실제 프로젝트 경험을 바탕으로 두 전략의 Trade-off를 정리한다.',
  publishedAt: '2026-04-01T00:00:00+09:00',
  readTime: '9분 읽기',
  tags: ['Monorepo', 'Architecture', 'DevOps', 'CI/CD'],
  faq: [
    {
      question: '모노레포를 처음 도입할 때 가장 많이 실수하는 부분은?',
      answer:
        '폴더 구조만 모노레포처럼 만들고 workspace 연결이나 단일 lockfile 관리는 하지 않는 경우다. 폴더 구조보다 의존성 그래프를 단일하게 유지하는 것이 모노레포의 핵심이다.',
    },
    {
      question: '작은 팀에서도 모노레포가 유리한가요?',
      answer:
        '오히려 작은 팀, 특히 풀스택으로 기능 단위로 개발하는 팀에서 더 유리할 수 있다. 레포 간 컨텍스트 전환 비용이 없고, 하나의 PR로 전체 변경을 처리할 수 있기 때문이다.',
    },
    {
      question: '모노레포에서 서비스별로 독립 배포가 가능한가요?',
      answer:
        '가능하다. Turborepo나 Nx 같은 도구를 사용하면 변경된 패키지만 빌드·배포할 수 있다. 다만 플랫폼 제약이 있는 경우 서비스별 lockfile 전략 같은 타협이 필요할 수 있다.',
    },
    {
      question: '레포 분리에서 공통 타입을 공유하는 가장 현실적인 방법은?',
      answer:
        'npm private registry에 별도 패키지로 publish하거나, git submodule, git dependency를 사용하는 방법이 있다. 다만 버전 관리 오버헤드가 생기므로, 공유 범위가 넓을수록 모노레포 전환을 검토할 만하다.',
    },
    {
      question: '모노레포 도구는 무엇을 써야 하나요?',
      answer:
        'pnpm workspace만으로도 시작할 수 있다. 프로젝트가 커지면 Turborepo(빌드 캐시, 파이프라인)나 Nx(더 세밀한 의존성 그래프 제어)를 도입하는 순서가 일반적이다.',
    },
  ],
  Content,
};
