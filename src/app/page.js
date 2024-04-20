import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import { BackGround1 } from "@/data";
import Image from 'next/image'


export default function Home() {
  return(
    <main >
       <div className='absolute  z-10 w-full opacity-50'>
        <Image src={BackGround1}  />
      </div>
      <Navbar/>
      <Hero/>
    </main>
  )
}
