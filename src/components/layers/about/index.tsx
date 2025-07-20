import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">소개</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="한정욱"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              안녕하세요. 저는 다양한 관점으로 문제를 바라보고, 더 나은 사용자
              경험을 고민하며 기능을 만드는 프론트엔드 개발자입니다.
            </p>
            <p className="mb-4">
              특히 사용자의 입장에서 자연스럽게 느껴지는 화면과 흐름을 설계하는
              데 큰 흥미를 느끼며, 반복적인 테스트와 개선을 통해 더 나은 방향을
              끌어내는 과정에 가치를 둡니다.
            </p>
            <p className="mb-4">
              소프트웨어 전공자로서 컴퓨팅 사고력과 논리적인 문제 해결 능력을
              바탕으로, 기능 구현뿐 아니라 UI 구조 설계와 인터랙션 흐름까지
              세심하게 고민하는 개발자입니다.
            </p>
            <p>
              앞으로는 기술적 완성도와 사용자 경험을 모두 고려할 수 있는 UI/UX
              중심의 프론트엔드 개발자로 성장하여, 사용자와 팀 모두에게 신뢰받는
              개발자가 되는 것이 저의 목표입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
