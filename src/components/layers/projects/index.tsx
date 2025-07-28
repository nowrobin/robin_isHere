'use client';

import { motion } from 'framer-motion';
import { Video } from '@/components/ui/video/video';
import Image from 'next/image';
import { ProjectDetail } from '@/types/content';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const projectList = t('projects', {
    returnObjects: true,
  }) as ProjectDetail[];
  return (
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
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
              <div className="p-6 flex flex-col justify-between relative gap-4">
                <div className="flex flex-row items-center justify-start gap-4 md:h-[92px]">
                  <div className="size-16 relative">
                    <Image src={project.logoSrc} alt={`logo`} fill sizes="16" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold my-2 break-words">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
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
