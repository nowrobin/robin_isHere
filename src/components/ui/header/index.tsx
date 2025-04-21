import Image from "next/image"

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-screen flex justify-between px-10 py-6">
      <Image src={"/RH_TEXT_.svg"} alt={""} width={128} height={128} />
      <div className="flex flex-row gap-5">
        <div>Project</div>
        <div>About Me</div>
        <div>Resume </div>
        <div>Contact Me</div>
      </div>
    </div>
  )
}