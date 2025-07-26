'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Video } from '@/components/ui/video/video';

const projectImages = [
  {
    src: '/projectAssets/sulsul/hero.png',
    alt: 'SULSUL 랜딩 페이지',
    description: '직관적이고 모던한 디자인의 서비스 소개 페이지',
  },
  {
    src: '/projectAssets/sulsul/practiceMainPage.png',
    alt: '면접 연습 페이지',
    description: '실제 면접과 유사한 환경에서 연습할 수 있는 인터페이스',
  },
  {
    src: '/projectAssets/sulsul/practiceModal.png',
    alt: '질문 선택 모달',
    description: '자소서 기반으로 생성된 맞춤형 면접 질문 선택',
  },
  {
    src: '/projectAssets/sulsul/feedBackPage.png',
    alt: '피드백 시스템',
    description: 'AI 기반 답변 분석 및 개선점 제안',
  },
];

const techStack = [
  'Next.js',
  'Tailwind CSS',
  'Shadcn',
  'React-Query',
  'Storybook',
  'Zustand',
  'NextAuth',
];

const challenges = [
  {
    title: '무료 서버 이전으로 인한 API 속도 문제 (12초 → 5초)',
    problem:
      '개인 서버에서 Koyeb로 이전하면서 API 호출 시 데이터를 받아와 렌더링하는 컴포넌트에서 빈 화면이 12초간 지속되는 문제가 발생했습니다. 단순 로딩 처리로는 UX적으로 좋지 않은 경험을 제공했습니다.',
    solution:
      'usePrefetch를 활용하여 데이터를 미리 받아온 후 렌더링을 진행하도록 개선했습니다. 전체 데이터를 한 번에 불러오는 대신 자소서 질문 단위로 요청하여 빈 화면을 최소화하고, 오토포커스를 통해 미리 호출된 질문을 즉시 표시하여 UX를 개선했습니다.',
  },
  {
    title: '디자인 검증을 위한 Storybook 배포로 개발단계 최소화',
    problem:
      '기능 검증이 완료되지 않은 작업을 디자이너와 공유할 때 배포된 사이트를 통해서만 확인이 가능했습니다. 불안정한 상태에서 배포를 진행해야 했으며, 디자인 수정만을 위해서 배포를 하고 검증 받는 단계까지.',
    solution:
      '디자이너 확인이 필요한 컴포넌트는 Storybook과 Chromatic을 활용하여 별도 배포하고, 이를 통해 디자인 피드백을 받는 방식으로 개선했습니다. 디자인 검증 속도가 빨라지고 개발 일정 조율이 원활해졌으며, 실시간 피드백으로 개발 속도가 향상되었습니다.',
  },
];

export default function SulsulProject() {
  return (
    <div className="min-h-screen bg-quaternary">
      <motion.header
        className="bg-primary text-quaternary py-6 md:fixed top-0 left-0 w-full z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-tertiary transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            포트폴리오로 돌아가기
          </Link>

          <div className="flex items-center gap-4">
            <Image
              src={'/projectAssets/sulsul/logo.png'}
              alt={''}
              width={48}
              height={48}
              className="rounded-full"
            />
            <>
              <h1 className="text-4xl font-bold">
                SULSUL - 올인원 면접연습 서비스
              </h1>
              <p className="text-xl mt-2">AI 기반 맞춤형 면접 준비 플랫폼</p>
            </>
          </div>
        </div>
      </motion.header>

      {/* Project Overview */}
      <motion.section
        className="py-16 bg-white mt-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                프로젝트 개요
              </h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                SULSUL은 자소서 기반으로 생성된 맞춤형 질문으로 면접 연습을 할
                수 있는 올인원 면접 준비 서비스입니다. AI 피드백, 기출문제
                챌린지, 실전 면접 시뮬레이션을 통해 체계적인 면접 준비를
                지원합니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.sulsul-interview.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2  border-1 border-primary  bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary hover:text-secondaryColor transition-colors"
                >
                  <ExternalLink size={20} />
                  라이브 데모
                </a>
                <a
                  href="https://github.com/sulsulsulsul/sulsul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Video
                src={
                  'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//sulsulHero.webm'
                }
                play={true}
                className={''}
                link={''}
                githubLink={''}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Details */}
      <motion.section
        className="py-16 bg-primary text-quaternary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            프로젝트 상세 정보
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">개발 기간</h3>
              <p className="text-lg">2024.08 ~ 2024.11</p>
              <p className="text-sm mt-2">프론트엔드 개발</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">주요 기능</h3>
              <p className="text-lg">AI 면접 연습</p>
              <p className="text-sm mt-2">자소서 기반 질문 생성 및 피드백</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">담당 역할</h3>
              <p className="text-lg">프론트엔드 개발</p>
              <p className="text-sm mt-2">UI 구현, API 연동, Storybook 배포</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Images Gallery */}
      <motion.section
        className="py-16 bg-quaternary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            프로젝트 스크린샷
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {image.alt}
                  </h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technical Challenges */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            기술적 도전과 해결
          </motion.h2>
          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {challenge.title}
                </h3>
                <div className="mb-4">
                  <h4 className="text-lg font-medium mb-2 text-red-600">
                    문제점
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">
                    해결 방법
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
