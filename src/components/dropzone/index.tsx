import { useEffect, useRef, useState } from 'react';

export default function StickyBox() {
  const [isFixed, setIsFixed] = useState(true);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const box = boxRef.current;
      const stop = stopRef.current;

      if (box && stop) {
        const stopTop = stop.getBoundingClientRect().top;

        if (stopTop <= box.offsetHeight + 20) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[2000px] bg-gray-100 px-4 py-8">
      {/* 네모 박스 */}
      <div
        ref={boxRef}
        className={`w-40 h-40 bg-blue-500 text-white flex items-center justify-center transition-all duration-300 ${isFixed
          ? 'fixed top-10 left-10'
          : 'absolute top-[1500px] left-10'
          }`}
      >
        따라오는 박스
      </div>

      {/* 기준점 */}
      <div ref={stopRef} className="mt-[1500px] h-1 bg-red-500" />

      <p className="mt-20">스크롤해서 테스트해보세요!</p>
    </div>
  );
}
