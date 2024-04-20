import React from 'react'
import Image from 'next/image'
import { MainCharacter,SideCharacter1,SideCharacter2 } from '@/data'


const Hero = () => {
  return (
    <section className='w-full bg-black relative'>

      <div className='flex justify-center relative mt-16'>
        <h1 className='text-4xl font-bold uppercase text-yellow-500 z-10' >
          DIGITAL COLLECTIBLES FOR THE CREATOR ECONOMY</h1>
      </div>
      <p className=' text-white text-md font-bold mt-4 z-10 flex justify-center items-center'>Discover Superheroine Era, join The League and gain prime <br /> access to exclusive launch information and giveaways.</p>
      <div className='flex justify-center mt-2' >
        <button className=' bg-yellow-500 z-10 px-2 py-1 text-black rounded-2xl'>Let's Explore</button>
      </div>

<div className="flex justify-center z-20 mt-8">
  <div className='z-20 w-1/3 mt-28'><Image src={SideCharacter1} width={440} height={505}/></div>
  <div className='z-20 w-1/3'><Image src={MainCharacter} width={678} height={807} /></div>
  <div className='z-20 w-1/3 mt-28'><Image src={SideCharacter2} width={440} height={505}/></div>
</div>



    </section>

  )
}

export default Hero