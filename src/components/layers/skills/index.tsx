'use client';
import { useState } from 'react';
import {
  Code2,
  Database,
  Globe,
  Settings,
  GitBranch,
  Palette,
  Server,
  Cloud,
  Terminal,
} from 'lucide-react';
import { motion } from 'framer-motion';
const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'React Query', level: 80 },
  { name: 'Zustand', level: 75 },
  { name: 'Storybook', level: 70 },
];

const skillsData = {
  'Frontend Development': {
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: 'JavaScript', icon: <Code2 className="w-4 h-4" /> },
      { name: 'TypeScript', icon: <Code2 className="w-4 h-4" /> },
      { name: 'React', icon: <Code2 className="w-4 h-4" /> },
      { name: 'Next.js', icon: <Code2 className="w-4 h-4" /> },
      { name: 'HTML5', icon: <Code2 className="w-4 h-4" /> },
      { name: 'CSS3', icon: <Palette className="w-4 h-4" /> },
      { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> },
      { name: 'Styled-Components', icon: <Palette className="w-4 h-4" /> },
    ],
  },
  'Backend Development': {
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
      { name: 'Express.js', icon: <Server className="w-4 h-4" /> },
      { name: 'prisma', icon: <Server className="w-4 h-4" /> },
      { name: 'Supabase', icon: <Server className="w-4 h-4" /> },
    ],
  },
  'Database & Cloud': {
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
      { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
      { name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Vercel', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Firebase', icon: <Cloud className="w-4 h-4" /> },
    ],
  },
  'Tools & Technologies': {
    icon: <Settings className="w-5 h-5" />,
    skills: [
      { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'GitHub', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'Docker', icon: <Settings className="w-4 h-4" /> },
      { name: 'Webpack', icon: <Settings className="w-4 h-4" /> },
      { name: 'Vite', icon: <Settings className="w-4 h-4" /> },
      { name: 'VS Code', icon: <Terminal className="w-4 h-4" /> },
      { name: 'cursor', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
};
const tabs = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const allSkills = Object.entries(skillsData).flatMap(([category, data]) =>
    data.skills.map((skill) => ({ ...skill, category })),
  );

  const getSkillsForTab = (tabId: string) => {
    switch (tabId) {
      case 'all':
        return allSkills;
      case 'frontend':
        return skillsData['Frontend Development'].skills;
      case 'backend':
        return skillsData['Backend Development'].skills;
      case 'database':
        return skillsData['Database & Cloud'].skills;
      case 'tools':
        return skillsData['Tools & Technologies'].skills;
      default:
        return [];
    }
  };
  const getCategoryInfo = (tabId: string) => {
    switch (tabId) {
      case 'frontend':
        return {
          title: 'Frontend Development',
          icon: <Globe className="w-5 h-5" />,
        };
      case 'backend':
        return {
          title: 'Backend Development',
          icon: <Server className="w-5 h-5" />,
        };
      case 'database':
        return {
          title: 'Database & Cloud',
          icon: <Database className="w-5 h-5" />,
        };
      case 'tools':
        return {
          title: 'Tools & Technologies',
          icon: <Settings className="w-5 h-5" />,
        };
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="w-full py-12 md:py-18 lg:py-18 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center text-primaryColor"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              기술 스택
            </motion.h2>
            {/* <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"></p> */}
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-8">
          <div className="w-full opacity-0 animate-[slideInFromTop_0.5s_ease-out_0.3s_forwards]">
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-1 p-1 bg-gray-100 rounded-lg mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-primaryColor text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="space-y-6">
              {activeTab !== 'all' && getCategoryInfo(activeTab) && (
                <div className="text-center mb-6 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]">
                  <h3 className="text-xl font-semibold flex items-center justify-center gap-2 text-gray-900">
                    {getCategoryInfo(activeTab)?.icon}
                    {getCategoryInfo(activeTab)?.title}
                  </h3>
                </div>
              )}

              <div className="flex flex-wrap gap-3 justify-center">
                {getSkillsForTab(activeTab).map((skill, index) => (
                  <span
                    key={`${skill.name}-${index}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-gray-200 opacity-0 animate-[fadeInUp_0.3s_ease-out_forwards]"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
