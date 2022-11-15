import Image from "next/image"
import auditicalogo from '../public/auditica_logo.png'
function Sidebar() {
  return (
    <section>
      <Image src = {auditicalogo} width= {56} height = {56}/>
      <Image/>
    </section>
  )
}

export default Sidebar