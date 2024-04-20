import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import { BackGround1 } from "@/data";
import Image from 'next/image'
import Description from "@/components/Description";
import Community from "@/components/Community";
import Aboutus from "@/components/Aboutus";


export default function Home() {
  return(
    <main >
       <div className='absolute  z-10 w-full opacity-50'>
        <Image src={BackGround1} alt="background" />
      </div>
      <Navbar/>
      <Hero/>
      <Description/>
      <Aboutus/>
      <Community/>
    </main>
  )
}
