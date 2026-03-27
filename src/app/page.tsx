import { Metadata } from 'next';
import Header from '@/components/layers/header';
import Hero from '@/components/layers/hero';
import Projects from '@/components/layers/projects';
import Skills from '@/components/layers/skills';
import About from '@/components/layers/about';
import Experience from '@/components/layers/experience';
import Footer from '@/components/layers/footer';
import { StrictMode } from 'react';
import './i18n';

export const metadata: Metadata = {
  title: '한정욱 | 프론트엔드 개발자 포트폴리오',
  description:
    '사용자 경험을 중시하는 프론트엔드 개발자 한정욱의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 프로젝트들을 소개합니다.',
  keywords: ['프론트엔드 개발자', 'React', 'Next.js', 'TypeScript', '포트폴리오', '한정욱'],
  openGraph: {
    title: '한정욱 | 프론트엔드 개발자 포트폴리오',
    description: '사용자 경험을 중시하는 프론트엔드 개발자 한정욱의 포트폴리오',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <StrictMode>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
      </main>
      <Footer />
    </StrictMode>
  );
}
