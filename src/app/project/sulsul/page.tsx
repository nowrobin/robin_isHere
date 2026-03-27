import { Metadata } from 'next';
import SulsulClient from './SulsulClient';

export const metadata: Metadata = {
  title: 'SULSUL - 올인원 면접연습 서비스 | 한정욱',
  description:
    'SULSUL은 자소서 기반으로 생성된 맞춤형 질문으로 면접 연습을 할 수 있는 올인원 면접 준비 서비스입니다. AI 피드백, 기출문제 챌린지, 실전 면접 시뮬레이션을 통해 체계적인 면접 준비를 지원합니다.',
  keywords: ['면접 준비', 'AI 면접', 'Next.js', 'Tailwind CSS', 'Storybook', '자소서', '포트폴리오'],
  openGraph: {
    title: 'SULSUL - 올인원 면접연습 서비스 | 한정욱',
    description: 'AI 기반 맞춤형 면접 준비 플랫폼 - 자소서 기반 질문 생성 및 피드백',
    url: '/project/sulsul',
    type: 'website',
  },
};

export default function SulsulPage() {
  return <SulsulClient />;
}
