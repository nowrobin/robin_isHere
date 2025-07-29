'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import Image from 'next/image';
import { image } from 'framer-motion/client';
import { cn } from '@/lib/utils';

// inertia 플러그인 등록
gsap.registerPlugin(InertiaPlugin);

export default function GSAPEffect() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  //Images
  const images = [
    '/icons/react_Icon.svg',
    '/icons/next_Icon.svg',
    '/icons/reactQuery_Icon.svg',
    '/icons/zustand_Icon.svg',
    '/icons/playwright_Icon.svg',
    '/icons/tailwind_Icon.svg',
    '/icons/storybook_Icon.svg',
    '/icons/javascript_Icon.svg',
    '/icons/typescript_Icon.svg',
  ];

  // 마우스 위치 저장용
  const oldPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const deltaPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // 마우스 이동 이벤트 핸들러
    const handleMouseMove = (e: MouseEvent) => {
      deltaPos.current.x = e.clientX - oldPos.current.x;
      deltaPos.current.y = e.clientY - oldPos.current.y;

      oldPos.current.x = e.clientX;
      oldPos.current.y = e.clientY;
    };

    root.addEventListener('mousemove', handleMouseMove);

    const mediaElements = root.querySelectorAll<HTMLDivElement>('.media');

    const removeListeners: (() => void)[] = [];

    mediaElements.forEach((el) => {
      const handleMouseEnter = () => {
        const image = el.querySelector('img');
        if (!image) return;

        const tl = gsap.timeline({
          onComplete: (): void => {
            tl.kill();
          },
        });

        tl.timeScale(1.2);

        tl.to(image, {
          inertia: {
            x: {
              velocity: deltaPos.current.x * 30,
              end: 0,
            },
            y: {
              velocity: deltaPos.current.y * 30,
              end: 0,
            },
          },
        });

        tl.fromTo(
          image,
          { rotate: 0 },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut',
          },
          '<',
        );
      };

      el.addEventListener('mouseenter', handleMouseEnter);
      removeListeners.push(() =>
        el.removeEventListener('mouseenter', handleMouseEnter),
      );
    });

    // 클린업
    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      removeListeners.forEach((remove) => remove());
    };
  }, []);

  return (
    <div className={cn('mediaGrid')} ref={rootRef}>
      {images.map((src, index) => (
        <div className={'media'} key={index}>
          <Image
            src={src}
            className="mediaItems"
            alt={`Media ${index}`}
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
  );
}
