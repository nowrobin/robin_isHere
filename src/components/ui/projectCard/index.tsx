// import { Video } from '@/components/ui/video/video';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface CardDetail {
  index: number;
  project: number;
  name: string;
  videoSrc: string;
  logoSrc: string;
  description: string;
  setProject: Dispatch<SetStateAction<number>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ProjectCard({
  index,
  project,
  name,
  videoSrc,
  logoSrc,
  description,
  setProject,
  open,
  setOpen,
}: CardDetail) {
  const modalOpen = open && index == project;
  return (
    <div
      tabIndex={0}
      className={`flex flex-col gap-1 bg-gray-700 p-0.5 rounded-2xl text-white transform ease-in-out hover:-translate-y-3 shadow-white shadow-2xl`}
      onClick={() => (setOpen(!open), setProject(index))}
      onBlur={() => setOpen(false)}
    >
      <div className={``}>
        {/* <Video src={videoSrc} play={modalOpen || !open}></Video> */}
      </div>
      <section
        className={`flex flex-row gap-3 p-3  items-center justify-start`}
      >
        <Image
          src={logoSrc}
          alt={'logo'}
          width={64}
          height={40}
          className="rounded-2xl bg-white"
        />
        <article className="my-2 flex flex-col gap-3 text-lg leading-4.5 font-semibold">
          <div>{name}</div>
          <div>{description}</div>
        </article>
      </section>
    </div>
  );
}
