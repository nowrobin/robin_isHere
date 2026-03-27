import { Metadata } from 'next';
import Contact from '@/components/layers/contact';

export const metadata: Metadata = {
  title: '연락하기 | 한정욱',
  description: '한정욱에게 연락하세요. 협업 제안, 채용 문의, 프로젝트 관련 문의를 환영합니다.',
  openGraph: {
    title: '연락하기 | 한정욱',
    description: '협업 제안, 채용 문의, 프로젝트 관련 문의를 환영합니다.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
