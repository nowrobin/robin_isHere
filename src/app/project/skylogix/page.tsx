'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Video } from '@/components/ui/video/video';

const projectImages = [
  {
    src: '/projectAssets/skyLogix/skyLogixPlanes.png',
    alt: '항공기 대여 페이지',
    description: '다양한 항공기 모델과 대여 옵션을 제공하는 페이지',
  },
  {
    src: '/projectAssets/skyLogix/skyLogixSteps.png',
    alt: '조종사 교육 서비스',
    description: '전문 조종사 교육 프로그램 소개',
  },
  {
    src: '/projectAssets/skyLogix/skyLogixContact.png',
    alt: '문의 양식',
    description: 'Node-mailer를 활용한 실시간 이메일 문의 시스템',
  },
];

const techStack = [
  'Next.js',
  'TypeScript',
  'Node-mailer',
  'Vercel',
  'Shadcn',
  'Tailwind CSS',
];

export default function SkyLogixProject() {
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
          <h1 className="text-4xl font-bold">SkyLogix Aviation</h1>
          <p className="text-xl mt-2">항공 아카데미 웹사이트</p>
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
                SkyLogix Aviation은 항공기 대여 및 조종사 교육을 전문으로 하는
                항공 아카데미의 공식 웹사이트입니다. 전체 프로젝트 기획부터
                디자인, 개발까지 End-to-End로 구현하여 완성도 높은 비즈니스
                웹사이트를 제작했습니다.
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
                  href="https://www.skylogixaviation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2  border-1 border-primary bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary hover:text-secondaryColor transition-colors"
                >
                  <ExternalLink size={20} />
                  라이브 데모
                </a>
                <a
                  href="https://github.com/nowrobin/SkyLogixAviation"
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
                src={'/projectAssets/skyLogix/hero.webm'}
                play={true}
                className={''}
                link={''}
                githubLink={''}
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
                <div className="relative h-64 md:h-80">
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    fill
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

      {/* Key Features */}
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
            주요 특징
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                End-to-End 개발
              </h3>
              <p className="text-gray-700">
                프로젝트 기획부터 디자인, 개발, 배포까지 전 과정을 단독으로 진행
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                이메일 시스템
              </h3>
              <p className="text-gray-700">
                Node-mailer를 활용한 실시간 문의 및 예약 시스템 구현
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                반응형 디자인
              </h3>
              <p className="text-gray-700">
                모든 디바이스에서 최적화된 사용자 경험 제공
              </p>
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
              <p className="text-lg">2025.03 ~ 2025.04</p>
              <p className="text-sm mt-2">1개월 집중 개발</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">개발 형태</h3>
              <p className="text-lg">개인 프로젝트</p>
              <p className="text-sm mt-2">풀스택 개발</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">주요 성과</h3>
              <p className="text-lg">비즈니스 웹사이트</p>
              <p className="text-sm mt-2">실제 운영 중인 상업적 웹사이트</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
