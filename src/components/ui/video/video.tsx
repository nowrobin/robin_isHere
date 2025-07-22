import { cn } from '@/lib/utils';
import { VideoProps } from '@/types/content';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { GithubIcon } from '../../../../public/icons/github';

export function Video({ src, play, className, link, githubLink }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (play) {
      video.play().catch((err) => console.error('play error:', err));
    } else {
      video.pause();
    }
  }, [play]);

  return (
    <div
      className={cn(
        'w-full aspect-video relative overflow-hidden rounded-sm',
        className,
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse z-10 rounded-lg" />
      )}
      <video
        ref={videoRef}
        muted
        preload="auto"
        loop
        autoPlay={play}
        onCanPlay={() => setIsLoaded(true)}
        className={`w-full h-full object-cover rounded-t-lg transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={src} type="video/webm" />
      </video>
      {link && githubLink && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-secondary hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Demo
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center gap-1 bg-primary text-white px-4 py-2 rounded text-sm hover:bg-secondary hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 group"
            >
              <GithubIcon className="inline-block w-5 h-5" />
              GitHub
            </a>
          </div>
        </>
      )}
    </div>
  );
}
