import React from 'react'
import { LandPage } from '@/data'
import Image from 'next/image'


const Community = () => {
    return (
        <section className='w-full h-full '>
            <div className='flex justify-center relative mt-16'>
                <h2 className='text-2xl border-b-4 border-red-800 text-center font-mono  font-bold uppercase text-white z-10' >
                    Community Perks</h2>
            </div>

            <div className='flex justify-center mt-6' >
                <h1 className='text-5xl text-center font-mono font-bold uppercase text-yellow-500 z-10' >
                    JOIN THE LEAGUE
                </h1>
            </div>

            <div className="flex justify-center z-20 mt-8">
                <Image src={LandPage} alt='joinCommunity' width={650} height={500} />
            </div>

            <p className=' text-white text-center text-md font-bold mt-4 z-10 flex justify-center items-center'>
                A new society and group of enthusiasts awaits you. Join us in a new Era.<br /> Sign-up for our newsletter to gain insider access and exclusive updates.
            </p>

            <div className='flex justify-center mt-4 mb-10' >
            <button
            className="bg-[#000000] text-sm px-2 py-2 border-2 border-[#FFD700] text-[#FFD700] uppercase tracking-wide font-bold shadow-md shadow-yellow-400"
          >SIGN UP
          </button>
            </div>

        </section>
    )
}

export default Community