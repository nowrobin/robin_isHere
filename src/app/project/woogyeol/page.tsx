import { Metadata } from 'next';
import WoogyeolClient from './WoogyeolClient';

export const metadata: Metadata = {
  title: 'Woogyeol - 우리 결혼해요 | 한정욱',
  description:
    'Woogyeol은 사용자가 직접 청첩장을 제작하고 공유할 수 있는 모바일 청첩장 서비스입니다. 참석 여부 조사, 축하 메시지, 실시간 포토월 기능을 통해 결혼 준비부터 당일까지 완전한 디지털 웨딩 솔루션을 제공합니다.',
  keywords: ['청첩장', '모바일 청첩장', 'React', 'TypeScript', 'Zustand', '웨딩', '포트폴리오'],
  openGraph: {
    title: 'Woogyeol - 우리 결혼해요 | 한정욱',
    description: '사용자가 직접 청첩장을 제작하고 공유할 수 있는 모바일 청첩장 서비스',
    url: '/project/woogyeol',
    type: 'website',
  },
};

export default function WoogyeolPage() {
  return <WoogyeolClient />;
}
