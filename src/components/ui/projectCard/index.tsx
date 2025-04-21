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
}


export default function ProjectCard({ index, name, videoSrc, logoSrc, description, setProject }: CardDetail) {
  return (
    <div className="flex flex-col gap-1 bg-gray-700 p-0.5 rounded-2xl text-white" onClick={() => setProject(index)}>
      <Video src={videoSrc} ></Video >
      <section className="flex flex-row gap-3 p-3">
        <Image src={logoSrc} alt={"logo"} width={64} height={40} className="rounded-2xl bg-white" />
        <article className="my-2 flex flex-col gap-3 text-lg leading-4.5 font-semibold">
          <div>{name}</div>
          <div>{description}</div>
        </article>
      </section>
    </div >
  )
}