import { Metadata } from 'next';
import SkylogixClient from './SkylogixClient';

export const metadata: Metadata = {
  title: 'SkyLogix Aviation | 한정욱',
  description:
    'SkyLogix Aviation은 항공기 대여 및 조종사 교육을 전문으로 하는 항공 아카데미의 공식 웹사이트입니다. 전체 프로젝트 기획부터 디자인, 개발까지 End-to-End로 구현한 비즈니스 웹사이트입니다.',
  keywords: ['항공', 'Next.js', 'TypeScript', 'Node-mailer', '개인 프로젝트', '포트폴리오'],
  openGraph: {
    title: 'SkyLogix Aviation | 한정욱',
    description: '항공기 대여 및 조종사 교육 전문 항공 아카데미 웹사이트 - End-to-End 개발',
    url: '/project/skylogix',
    type: 'website',
  },
};

export default function SkylogixPage() {
  return <SkylogixClient />;
}
