import { useEffect, useRef, useState } from "react";

export function Video({ src, play }: { src: string; play: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (play) {
      video.play().catch(err => console.error('play error:', err));
    } else {
      video.pause();
    }
  }, [play]);

  return (
    <div className="w-full max-w-md aspect-video relative overflow-hidden rounded-2xl">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse z-10 rounded-2xl" />
      )}
      <video
        ref={videoRef}
        muted
        preload="auto"
        loop
        autoPlay={play}
        onCanPlay={() => setIsLoaded(true)}
        className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
