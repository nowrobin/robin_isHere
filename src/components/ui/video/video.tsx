import { Suspense } from "react";





export function Video({ src }: { src: string }) {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <div className="w-full max-w-md aspect-video">
        <video autoPlay muted preload="auto" loop className="w-full h-full rounded-2xl object-cover">
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </Suspense>
  )
}