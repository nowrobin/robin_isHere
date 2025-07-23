'use client';

import { motion } from 'framer-motion';
import { Video } from '@/components/ui/video/video';
import Image from 'next/image';
import { ProjectDetail } from '@/types/content';
const projects: ProjectDetail[] = [
  {
    title: 'Woogyeol - 우리 결혼했어요',
    description: '커스텀 모바일 청첩장 서비스',
    videoSrc:
      'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationResult.webm',
    logoSrc: '/projectAssets/woogyeol/logo.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand'],
    link: 'https://woogyeol.site/',
    github: 'https://github.com/team-wedding',
    projectURL: '/project/woogyeol',
  },
  {
    title: 'SULSUL - 올인원 면접연습',
    description: '종합적인 면접 준비 서비스',
    videoSrc:
      'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//sulsulHero.webm',
    logoSrc: '/projectAssets/sulsul/logo.png',
    tags: ['Next.js', 'Tailwind CSS', 'Shadcn', 'React-Query', 'Storybook'],
    link: 'https://www.sulsul-interview.kr/',
    github: 'https://github.com/sulsulsulsul/sulsul',
    projectURL: '/project/sulsul',
  },
  {
    title: 'SkyLogix Aviation',
    description: '항공 아카데미 웹사이트',
    videoSrc:
      'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//skyLogixHero.webm',
    logoSrc: '/projectAssets/skyLogix/logo.png',
    tags: [
      'Next.js',
      'TypeScript',
      'Node-mailer',
      'Vercel',
      'Shadcn',
      'Tailwind CSS',
    ],
    link: 'https://www.skylogixaviation.com/',
    github: 'https://github.com/nowrobin/SkyLogixAviation',
    projectURL: '/project/skylogix',
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
              className="bg-white rounded-lg shadow-lg overflow-hidden relative group hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Video
                src={project.videoSrc}
                play={true}
                className={'group-hover:backdrop-blur-2xl'}
                link={project.link}
                githubLink={project.github}
              />
              <div className="p-6 flex flex-col justify-between relative">
                <div className="flex flex-row items-center justify-start mb-4 gap-8 ">
                  <div className="size-16 relative">
                    <Image src={project.logoSrc} alt={`logo`} fill />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold my-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm group hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.projectURL}
                  className="flex items-center justify-center text-center gap-2 bg-primary text-white px-4 py-2 rounded text-sm hover:bg-secondary hover:text-black transition-colors"
                >
                  Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
