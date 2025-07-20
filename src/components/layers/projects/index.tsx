'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Video } from '@/components/ui/video/video';
import { video } from 'framer-motion/client';
import { vi } from 'zod/locales';

const projects = [
  {
    title: 'Woogyeol - 우리 결혼했어요',
    description:
      '사용자가 직접 청첩장을 제작하고 공유하며, 여부 조사, 축하 메시지, 실시간 포토월 기능을 제공하는 모바일 청첩장 서비스',
    image: '/placeholder.svg?height=300&width=400',
    videoSrc: '/projectAssets/sulsul/hero.mp4',
    logoSrc: '/images/woogyeol-logo.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand'],
    link: 'https://woogyeol.site/',
    github: 'https://github.com/team-wedding',
    projectURL: '/woogyeol',
  },
  {
    title: 'SULSUL - 올인원 면접연습 서비스',
    description:
      '자소서 기반 질문 생성, 면접 연습, 피드백 제공, 기출문제 챌린지 등 종합적인 면접 준비 서비스',
    videoSrc: '/projectAssets/sulsul/hero.mp4',
    logoSrc: '/images/sulsul-logo.png',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['Next.js', 'Tailwind CSS', 'Shadcn', 'React-Query', 'Storybook'],
    link: 'https://www.sulsul-interview.kr/',
    github: 'https://github.com/sulsulsulsul/sulsul',
    projectURL: '/sulsul',
  },
  {
    title: 'SkyLogix Aviation',
    description:
      '항공기 대여 및 조종사 교육을 위한 항공 아카데미 웹사이트. 전체 기획부터 디자인, 개발까지 End-to-End로 구현',
    image: '/placeholder.svg?height=300&width=400',
    videoSrc: '/projectAssets/skyLogix/hero.mp4',
    logoSrc: '/images/skylogix-logo.png',
    tags: ['Next.js', 'TypeScript', 'Node-mailer', 'Vercel'],
    link: 'https://www.skylogixaviation.com/',
    github: 'https://github.com/nowrobin/SkyLogixAviation',
    projectURL: '/skylogix',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 md:h-52">
                <Video src={project.videoSrc} play={true}></Video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.projectURL && (
                    <a
                      href={project.projectURL}
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded text-sm hover:bg-secondary hover:text-black transition-colors"
                    >
                      Details
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-secondary hover:text-black transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-primary text-primary px-4 py-2 rounded text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
