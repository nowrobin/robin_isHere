'use client';

import RoundedCurvedText from '@/components/curvedText';
import Problem from '@/components/ui/problem';
import Header from '@/components/ui/header';
import ProjectCard from '@/components/ui/projectCard';
import Link from 'next/link';
import { useState } from 'react';
import { GithubIcon } from '../../../public/icons/github';

export default function Main() {
  const [project, setProject] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <main className="py-10 text-title ">
      <Header />
      <section className="relative tablet:pt-10 tablet:px-10 tablet:h-80 h-64 w-full flex flex-col tablet:flex-row justify-center tablet:justify-around items-center">
        <div className="flex text-pink-600 size-64 p-4 overflow-visible text-sm">
          <RoundedCurvedText text="Projects Projects Projects Projects Projects Projects Projects Projects Projects" />
        </div>
      </section>
      <section className="relative grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 tablet:gap-3 justify-items-center items-center px-4">
        <ProjectCard
          open={open}
          setOpen={setOpen}
          index={0}
          project={project}
          setProject={setProject}
          name={'SULSUL'}
          videoSrc={'/projectAssets/sulsul/hero.mp4'}
          logoSrc={'/projectAssets/sulsul/logo.png'}
          description={'면접 도우미 서비스'}
        />

        <ProjectCard
          open={open}
          setOpen={setOpen}
          index={1}
          project={project}
          setProject={setProject}
          name={'SkyLogix-Aviation'}
          videoSrc={'/projectAssets/skyLogix/hero.mp4'}
          logoSrc={'/projectAssets/skyLogix/logo.png'}
          description={'항공 렌탈 서비스'}
        />

        <ProjectCard
          open={open}
          setOpen={setOpen}
          index={2}
          project={project}
          setProject={setProject}
          name={'Woogyeol'}
          videoSrc={'/projectAssets/skyLogix/hero.mp4'}
          logoSrc={'/projectAssets/woogyeol/logo.png'}
          description={'모바일 청첩장 서비스'}
        />
      </section>
      <section className="flex flex-col px-16 py-10 gap-3 mt-10">
        <div className="text-4xl font-bold">
          SULSUL : 올인원 면접연습 서비스
        </div>
        <div className="text-xl text-gray-300">
          2024.08 ~ 2024.11 (프론트엔드)
        </div>
        <div>
          SULSUL 은 자소서 기반으로 만들어진 질문으로 면접연습과 답변에 대한
          피드백, 기출문제와 같은 챌린지 형식의 여러 경험으로 면접준비를
          제공하는 서비스입니다.
        </div>
        <div>
          기술스택 : Next JS, Tailwind , Shadcn, React-Query , Storybook ,
          Zustand , Next Auth
        </div>
        <div className="flex flex-row gap-4">
          <Link
            href={'https://www.sulsul-interview.kr/'}
            className="flex flex-row w-34 justify-center gap-2 items-center py-2 text-xl font-semibold group hover:bg-blue-500 bg-gray-500 text-white rounded-2xl"
          >
            WEBSITE
          </Link>
          <Link
            href={'https://github.com/sulsulsulsul/sulsul'}
            className="flex flex-row w-34 justify-center gap-2 items-center py-2 text-xl font-semibold group hover:bg-blue-500 bg-gray-500 text-white rounded-2xl"
          >
            <GithubIcon className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-white " />
            GITHUB
          </Link>
        </div>
        <div className="flex flex-row">
          역할:
          <ul className="flex flex-col">
            <li>랜딩페이지 UI 구현 </li>
            <li>면접 질문 선택 모달 구현</li>
            <li>면접 연습 페이지 UI 구현 </li>
            <li>면접 실전 연습 페이지 API 연동</li>
          </ul>
        </div>
        <div className="flex flex-row">
          경험 :
          <ul className="flex flex-col">
            <li>
              기존에 경험해보지 못했던 컨벤션, 코드 스타일, FSD(Feature Sliced
              Design) 같은 디자인 패턴을 접할수있는 기회가 되었습니다.
            </li>
            <li>
              복잡한 API를 효율적으로 관리하는 방법과 서버 성능이 저하되었을
              때의 대처 방법도 경험할 수 있었습니다.
            </li>
            <li>
              UX/UI 디자이너와 협업을 하면서 정교하게 만들어진 디자인을 상세하게
              구현하는 경험을 하면서 UI/UX 측면에서 많은 것을 배울 수 있었던
              프로젝트였습니다.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-3xl font-bold">프로젝트에서 겪은 문제점들</span>
          <div className="text-xl sm:text-2xl font-bold text-title">
            처음 겪어보는 아키텍처
          </div>

          <ul className="flex flex-col gap-10  mx-6 sm:flex-row">
            <Problem
              problem={true}
              content="프로젝트에 합류하면서 처음 접하는 낯선 구조와 기존에 구현된 기능을
              수정해야 했습니다. 하지만 코드의 흐름을 파악하는 데 시간이 오래
              걸려 어려움을 겪었습니다."
            />

            <Problem
              problem={false}
              content="FSD 구조로 작성된 프로젝트였기 때문에 큰 범위에서부터 하나씩
              내려가며 코드를 이해하려고 했습니다. 이해가 어려운 부분은
              팀원들에게 바로 질문하면서 학습했고, 질문을 통해 전역 상태 관리
              방식 등의 중요한 개념을 더 깊이 이해할 수 있었습니다. 초반에는
              시간이 오래 걸렸지만, 점점 익숙해지면서 속도가 붙었고, 구조를
              이해하는 데 큰 도움이 되었습니다."
            />
          </ul>
          <div className="text-xl sm:text-2xl font-bold">
            디자인 검증 Storybook 배포
          </div>
          <ul className="flex flex-col gap-10 mx-6 sm:flex-row">
            <Problem
              problem={true}
              content="  기능 검증이 완료되지 않은 작업을 디자이너와 공유해야 할 때, 배포된
              사이트를 통해서만 확인이 가능했습니다. 이로 인해 불안정한 상태에서
              배포를 진행해야 했으며, 배포 시간이 오래 걸리고 에러도 자주
              발생했습니다."
            />
            <Problem
              problem={false}
              content="디자이너가 확인해야 하는 컴포넌트는 Storybook과 Chromatic을
              활용하여 별도로 배포하고, 이를 통해 디자인 피드백을 받는 방식으로
              개선했습니다. 이 방법을 통해 디자인 검증 속도가 빨라졌고, 개발
              일정이 꼬이지 않도록 조율할 수 있었으며, 추가적인 디자인 검증 작업
              없이 실시간으로 피드백을 받을 수 있어 개발 속도가 향상 되었습니다."
            />
          </ul>
          <div className="text-xl sm:text-2xl font-bold">
            무료 서버 이전으로 발생한 API 속도 문제 ( 12초 → 4초)
          </div>
          <ul className="flex flex-col gap-10 mx-6  sm:flex-row">
            <Problem
              problem={true}
              content="개인 서버에서 Koyeb로 이전하면서 API 호출로 데이터를 받아와
              렌더링하는 컴포넌트에서 빈 화면이 계속 나타나는 문제가
              발생했습니다. 단순히 로딩 상태로 처리하기에는 12초라는 시간이 너무
              오래 걸려 UX적으로 좋지 않은 경험을 유발했습니다."
            />
            <Problem
              problem={false}
              content="usePrefetch를 활용하여 데이터를 미리 받아온 후 렌더링을
                진행하도록 했습니다. 또한, 전체 데이터를 한 번에 불러오는 것이
                아니라, 하나의 자소서(질문 단위)씩 요청하여 빈 화면을
                최소화했습니다. 추가적으로, 오토포커스를 활용하여 미리 호출된
                질문 데이터를 바로 보여주는 방식으로 UX를 개선했습니다. API 속도
                저하 문제를 완전히 해결하기 위해 백엔드와 협의하여 서비스 이용
                기간을 설정하고, 필요한 만큼의 리소스를 추가적으로 사용할 수
                있는 환경을 구축했습니다."
            />
          </ul>
        </div>
      </section>
    </main>
  );
}
