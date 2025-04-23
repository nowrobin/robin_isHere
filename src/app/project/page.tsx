'use client'

import RoundedCurvedText from "@/components/curvedText"
import Header from "@/components/ui/header"
import ProjectCard from "@/components/ui/projectCard"
import { useState } from "react"

// import { useRef, useState } from "react"

// interface SkillTech {
//   frontend: string[],
//   backend: string[]
// }

// interface Project {
//   name: string
//   date: string
// }


export default function Main() {
  const [project, setProject] = useState(0)
  const [open, setOpen] = useState(false)
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="py-10 bg-amber-50">
      <Header></Header>
      <section className="relative tablet:pt-10 tablet:px-10 tablet:h-80 h-64 w-full flex flex-col tablet:flex-row justify-center tablet:justify-around items-center">
        <div className="flex text-pink-600 size-64 p-4 overflow-visible text-sm">
          <RoundedCurvedText text="Projects Projects Projects Projects Projects Projects Projects Projects Projects" />
        </div>
        {/* <div className="flex flex-row">
          <span className="text-3xl self-center">Look More Into: </span>
          <div className="w-92 h-24 overflow-hidden relative p-10 rounded-2xl">
            <ul className="absolute grid grid-cols-2  gap-2 top-0 left-0 w-184 h-50 animate-[var(--animate-slide-grid)]">
              <div className="relative  w-92 h-24 flex items-center justify-center p-4 rounded-2xl">
                <Image fill src={'/projectAssets/sulsul/fullLogo.png'} alt="full-logo" className="rounded-2xl" />
              </div>
              <div className="relative w-92 h-24 flex items-center justify-center p-4 rounded-2xl">
                <Image fill src={'/projectAssets/skyLogix/fullLogo.png'} alt="full-logo" className="rounded-2xl" />
              </div>
              <div className="relative w-92 h-24 flex items-center justify-center p-4 rounded-2xl">
                <Image fill src={'/projectAssets/skyLogix/fullLogo.png'} alt="full-logo" className="rounded-2xl" />
              </div>
              <div className="relative w-92 h-24 flex items-center justify-center p-4 rounded-2xl">
                <Image fill src={'/projectAssets/skyLogix/fullLogo.png'} alt="full-logo" className="rounded-2xl" />
              </div>
            </ul>
          </div>
        </div> */}
      </section>
      <section className="relative grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 tablet:gap-3 justify-items-center items-center px-4">
        <ProjectCard open={open} setOpen={setOpen} index={0} project={project} setProject={setProject} name={"SULSUL"} videoSrc={"/projectAssets/sulsul/hero.mp4"} logoSrc={'/projectAssets/sulsul/logo.png'} description={"면접 도우미 서비스"}></ProjectCard>
        <ProjectCard open={open} setOpen={setOpen} index={1} project={project} setProject={setProject} name={"SkyLogix-Aviation"} videoSrc={"/projectAssets/skyLogix/hero.mp4"} logoSrc={'/projectAssets/skyLogix/logo.png'} description={"항공 렌탈 서비스"}></ProjectCard>
        <ProjectCard open={open} setOpen={setOpen} index={2} project={project} setProject={setProject} name={"Woogyeol"} videoSrc={"/projectAssets/skyLogix/hero.mp4"} logoSrc={'/projectAssets/woogyeol/logo.png'} description={"모바일 청첩장 서비스"}></ProjectCard>
      </section>
      <section>
      </section>
      <section>
      </section>
    </main>
  )
}