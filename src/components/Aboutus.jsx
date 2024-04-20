import React from 'react'
import { Reactangle, MainCharacter } from '@/data'
import Image from 'next/image'


const Aboutus = () => {
    return (
        <section className='w-full h-full mt-20 '>
            <div className='flex justify-center relative w-auto'>
                <Image src={Reactangle} width={1300} height={745} className='opacity-30' />
                
            </div>
        </section>


    )
}

export default Aboutus