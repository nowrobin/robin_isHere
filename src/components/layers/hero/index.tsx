import GSAPEffect from '@/components/gsap';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20"
    >
      <div className="container mx-auto px-6 py-24 md:flex md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">한정욱</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Frontend Developer</h2>
          <p className="text-lg mb-8">
            사용자 경험을 중시하며, 더 나은 UI/UX를 고민하는 프론트엔드
            개발자입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-tertiary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors text-center"
            >
              프로젝트 보기
            </a>
            <a
              href="mailto:nowrobin3@gmail.com"
              className="border-2 border-tertiary text-tertiary px-6 py-3 rounded-full font-semibold hover:bg-tertiary hover:text-primary transition-colors text-center"
            >
              연락하기
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <GSAPEffect />
        </div>
      </div>
    </section>
  );
}
