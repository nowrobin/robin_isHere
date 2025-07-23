'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Video } from '@/components/ui/video/video';

const projectImages = [
  {
    src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationCreate.webm',
    alt: 'Woogyeol 메인 페이지',
    description: '사용자가 직접 청첩장을 제작할 수 있는 메인 인터페이스',
  },
  {
    src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationResult.webm',
    alt: '청첩장 완성본',
    description: '완성본을 확인하고 공유할 수 있는 청첩장 에디터',
  },
  {
    src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//rsvpStat.webm',
    alt: '참석 여부 관리',
    description: '실시간 참석 여부 조사 및 관리 시스템',
  },
  {
    src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//photoTalk.webm',
    alt: '실시간 포토월',
    description: '결혼식 당일 실시간으로 사진을 공유할 수 있는 포토월',
  },
];

const techStack = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'React-Query',
  'Zustand',
  'Playwright',
];

const challenges = [
  {
    title: '과도한 Zustand 오버렌더링 문제',
    problem:
      '사용자 입력 내용을 완성본에 즉각 반영하기 위해 Zustand를 사용했지만, 입력값이 바뀔 때마다 불필요한 렌더링이 발생하여 성능 저하와 화면 깜빡임 현상이 발생했습니다.',
    solution:
      'Zustand Store 내부에서 useCallback을 활용한 최적화 작업을 진행하고, 디바운싱을 도입하여 입력 후 일정 시간 후에 렌더링을 트리거하도록 개선했습니다. 이를 통해 렌더링 횟수를 대폭 감소시켰습니다.',
  },
  {
    title: 'POST 요청 시 과도한 데이터 전송 문제',
    problem:
      '청첩장 생성 시 모든 값을 한 번에 전송하여 에러 트래킹과 디버깅이 어려웠고, 검증되지 않은 상태에서 요청을 보내는 문제가 있었습니다.',
    solution:
      '생성 단계를 나누어 필요한 데이터만 단계별로 전송하도록 개선했습니다. 이를 통해 에러 발생 시 특정 단계에서 확인이 가능해져 디버깅 시간이 단축되었고, 사용자 플로우에도 더 적합한 방식이 되었습니다.',
  },
];

export default function WoogyeolProject() {
  return (
    <div className="min-h-screen bg-quaternary">
      {/* Header */}
      <motion.header
        className="bg-primary text-quaternary py-6"
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
          <h1 className="text-4xl font-bold">Woogyeol - 우리 결혼했어요</h1>
          <p className="text-xl mt-2">모바일 청첩장 제작 및 공유 서비스</p>
        </div>
      </motion.header>

      {/* Project Overview */}
      <motion.section
        className="py-16 bg-white"
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
                Woogyeol은 사용자가 직접 청첩장을 제작하고 공유할 수 있는 모바일
                청첩장 서비스입니다. 참석 여부 조사, 축하 메시지, 실시간 포토월
                기능을 통해 결혼 준비부터 당일까지 완전한 디지털 웨딩 솔루션을
                제공합니다.
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
                  href="https://woogyeol.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2  border-1 border-primary  bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary hover:text-secondaryColor transition-colors"
                >
                  <ExternalLink size={20} />
                  라이브 데모
                </a>
                <a
                  href="https://github.com/team-wedding"
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
              <Image
                src="/projectAssets/woogyeol/woogyeolHero.png"
                alt="Woogyeol 프로젝트 메인 이미지"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
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
                <div className="relative h-64 md:h-92">
                  <Video
                    src={image.src}
                    play={true}
                    className={'w-full h-full object-cover'}
                    link={''}
                    githubLink={''}
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
              <p className="text-lg">2025.02 ~ 2025.06</p>
              <p className="text-sm mt-2">프로그래머스 풀스택 최종 프로젝트</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">팀 구성</h3>
              <p className="text-lg">총 7명</p>
              <p className="text-sm mt-2">프론트엔드 4명, 백엔드 3명</p>
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
              <p className="text-sm mt-2">API 연동, 상태관리, 성능 최적화</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
