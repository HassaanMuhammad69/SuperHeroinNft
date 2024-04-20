import React from 'react'
import { Yellow } from "../data"
import Image from 'next/image'

const navLists = ['HOME', 'DIGITAL COLLECTIBLES', 'JOIN THE LEAGUE', 'WORLD', 'GAZETTE']

const Navbar = () => {
  return (
    <header className='w-auto py-5 px-14 flex justify-between relative items-center bg-transparent'>
      <nav className='flex w-full'>
        <Image src={Yellow} alt='Logo' width={200} height={22} />

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
              key={nav}>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline  max-sm:justify-end max-sm:flex-1'>
          <button
            className="bg-[#000000] text-sm px-4 py-2 border-2 border-[#FFD700] text-[#FFD700] uppercase tracking-wide font-bold shadow-md shadow-yellow-400"
          >EXCLUSIVE MINT COMING SOON
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar