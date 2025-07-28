'use client';

import { ExperienceDetail } from '@/types/content';
import { useTranslation } from 'react-i18next';

const education = [
  {
    school: '한국공학대학교 (한국산업기술대학교)',
    major: '컴퓨터공학과 소프트웨어 전공',
    period: '2022.03 ~ 2024.02',
  },
  {
    school: 'Oregon State University',
    major: 'Mechanical Engineering',
    period: '2016.08 ~ 2019.05, 2019.03 ~ 2020.12',
  },
];

const languages = [
  { name: 'TOEIC', score: '985', date: '2023.10.29' },
  { name: 'OPIc', score: 'IH', date: '2023.11.03' },
];

export default function Experience() {
  const { t } = useTranslation();

  const experiences = t('experience', {
    returnObjects: true,
  }) as ExperienceDetail[];
  return (
    <section id="experience" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6 flex flex-col gap-10">
        <div className="">
          <h3 className="text-3xl font-semibold mb-8 text-primary">
            경험 & 활동
          </h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <h4 className="text-xl font-semibold text-primary">
                    {exp.title}
                  </h4>
                  <span className="text-sm text-white font-bold bg-tertiary px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.type}
                  </span>
                </div>
                <p className="text-secondaryColor font-medium">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>

                <p className="text-gray-600">{`Results: ${exp.result}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            {t('commons.language')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold text-primaryColor mb-2">
                  {lang.name}
                </h4>
                <p className="text-2xl font-bold text-secondaryColor mb-2">
                  {lang.score}
                </p>
                <p className="text-gray-600 text-sm">{lang.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            {t('commons.education')}
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary mb-2">
                  {edu.school}
                </h4>
                <p className="text-secondaryColor font-medium mb-2">
                  {edu.major}
                </p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
