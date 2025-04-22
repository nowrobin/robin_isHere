import { Video } from "@/components/ui/video/video";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";


interface CardDetail {
  index: number,
  project: number,
  name: string,
  videoSrc: string,
  logoSrc: string,
  description: string,
  setProject: Dispatch<SetStateAction<number>>
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}


export default function ProjectCard({ index, project, name, videoSrc, logoSrc, description, setProject, open, setOpen }: CardDetail) {
  const translate = index == 0 ? ' laptop:translate-x-[480px] laptop:-translate-y-34' : index == 2 ? 'laptop:-translate-x-[480px] laptop:-translate-y-34' : 'laptop:-translate-y-34'
  const modalOpen = open && index == project
  return (
    <div tabIndex={0} className={`flex flex-col gap-1 bg-gray-700 p-0.5 rounded-2xl text-white laptop:transition-transform duration-300 ease-in-out ${modalOpen ? `top-0 laptop:scale-x-210 laptop:scale-y-180 z-10 ${translate}` : 'scale-100'} ${open && 'items-center justify-items-center'} `} onClick={() => (setOpen(!open), setProject(index))} onBlur={() => setOpen(false)}>
      <div className={`transition-transform duration-300 ease-in-out ${modalOpen ? 'scale-0' : 'scale-100'}`}>
        <Video src={videoSrc} play={modalOpen || !open}></Video >
      </div>
      <section className={`flex flex-row gap-3 p-3 transition-transform duration-300 ease-in-out ${modalOpen ? '-translate-y-65 -translate-x-34 scale-60' : 'translate-y-0 scale-100'}`}>
        <Image src={logoSrc} alt={"logo"} width={64} height={40} className="rounded-2xl bg-white" />
        <article className="my-2 flex flex-col gap-3 text-lg leading-4.5 font-semibold">
          <div>{name}</div>
          <div>{description}</div>
        </article>
      </section>
      <section>
      </section>
    </div >
  )
}