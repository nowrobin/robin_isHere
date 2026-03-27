import { Metadata } from 'next';
import HmhClient from './HmhClient';

export const metadata: Metadata = {
  title: 'HMH - 광고 원스탑 솔루션 | 한정욱',
  description:
    'AI 영상 생성 기술을 활용하여 자영업자도 전문적인 광고 영상을 손쉽게 제작할 수 있는 원스톱 솔루션입니다. 예산, 기간, 위치 선택만으로 업종 맞춤 광고 기기 추천 및 예산 자동 분배를 제공합니다.',
  keywords: ['광고', 'AI 광고', '자영업자', '광고 기기 추천', '예산 분배', '포트폴리오'],
  openGraph: {
    title: 'HMH - 광고 원스탑 솔루션 | 한정욱',
    description: 'AI 기반 광고 원스탑 솔루션 - 기기 추천, 예산 자동 분배, 광고 소재 제작',
    url: '/project/hmh',
    type: 'website',
  },
};

export default function HmhPage() {
  return <HmhClient />;
}
