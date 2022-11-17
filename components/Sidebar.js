import Image from "next/image"
import auditicalogo from '../public/auditica_logo.png'
import {AiFillHome} from 'react-icons/ai'
function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-[#272727] w-[90px] h-screen
    space-y-8">
      
      <Image src={auditicalogo} width={56} height={56} objectFit="contain" alt="auditica logo"/>
      
      <div className="flex flex-col">
        <AiFillHome className="sidebarIcon w-10 opacity-[0.85]"/>
      </div>
    </section>
  )
}

export default Sidebar