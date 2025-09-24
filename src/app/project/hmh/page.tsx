'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Video } from '@/components/ui/video/video';
import { useTranslation } from 'react-i18next';
import { ProjectChallenge, ProjectImage } from '@/types/react-i18next';

export default function WoogyeolProject() {
  const { t } = useTranslation();

  const projectImages = t('hmh.projectImages', {
    returnObjects: true,
  }) as ProjectImage[];
  const challenges = t('hmh.challenges', {
    returnObjects: true,
  }) as ProjectChallenge[];
  const techStack = t('hmh.techStack', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="min-h-screen bg-quaternary">
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
            {t('commons.backToPortfolio')}
          </Link>

          <div className="flex items-center gap-4">
            <Image
              src={'/projectAssets/hmh/hmh_logo.png'}
              alt={''}
              width={48}
              height={48}
              className="rounded-lg"
            />
            <>
              <h1 className="text-4xl font-bold">{t('hmh.title')}</h1>
              <p className="text-xl mt-2">{t('hmh.shortDescription')}</p>
            </>
          </div>
        </div>
      </motion.header>
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
                {t('commons.projectOverview')}
              </h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                {t('hmh.detailedDescription')}
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
                  href="https://frontend-five-sepia-55.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2  border-1 border-primary  bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary hover:text-secondaryColor transition-colors"
                >
                  <ExternalLink size={20} />
                  {t('commons.liveDemo')}
                </a>
                <a
                  href="https://github.com/Shinhan-Hackaton-Team-HMH/frontend"
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
                src="/projectAssets/hmh/hmh_mainPTT.png"
                alt="Woogyeol 프로젝트 메인 이미지"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
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
            {t('commons.projectDetails')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">
                {t('commons.developmentPeriod')}
              </h3>
              <p className="text-lg">2025.02 ~ 2025.06</p>
              {/* <p className="text-md mt-2">프로그래머스 풀스택 최종 프로젝트</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">
                {t('commons.teamMember')}
              </h3>
              <p className="text-lg">{t('hmh.team')}</p>
              <p className="text-md  mt-2">{t('hmh.members')}</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">
                {t('commons.myRole')}
              </h3>
              <p className="text-lg">{t('commons.frontend')}</p>
              <p className="text-md mt-2">{t('hmh.mainRole')}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
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
            {t('commons.projectScreenshots')}
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
            {t('commons.technicalChallengesAndSolutions')}
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
                    {t('commons.problem')}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">
                    {t('commons.solution')}
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
