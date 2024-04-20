import React from 'react'
import { MainCharacter, Reactangle, Yellow } from "@/data";
import Image from 'next/image';


const Aboutus = () => {
    return (
        <section className="w-full h-full mt-20 ">
            <div className="relative max-w-[1520px] m-auto">
                <div className="w-full h-[745px]">
                    <Image
                        src={Reactangle}
                        alt='reactangle'
                        className="opacity-30 absolute block w-full h-full"
                    />
                </div>
                <div className="flex justify-center items-center gap-8 absolute top-0">
                    <div className="flex-[0.4]">
                        <Image src={MainCharacter} alt='mainCharachter' className="w-full h-full" />
                    </div>
                    <div className="flex flex-col flex-[0.5] items-start gap-6">
                        <div className="w-[400px] h-[40px]">
                            <Image src={Yellow} alt='logo' className="block w-full" />
                        </div>
                        <h2 className="text-2xl text-yellow-400">About Us</h2>
                        <p>
                            Superheroine Era is a digital collectibles project that aims to
                            design a new society of superheroes. Launching with an evocative
                            3-act, 54-scene screenplay and otherworld based on the digital
                            collectibles, with each of the 54-scenes evolving into its own
                            unique comic and character storylines. Traverse this world with
                            us, co-create and enrich the expansive universe.
                        </p>
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl text-yellow-400">To Our Holders:</h2>
                            <p>
                                brace yourselves for what's coming. It's going to be
                                legendary!
                            </p>
                        </div>
                        <p>
                            Our mission is to foster ownership and engagement within our
                            web-3 brand by bridging the gap between our community and the
                            web-2 world, creating a space where members can participate
                            through incentives and mechanics without compromising the
                            integrity of their NFTs
                        </p>
                        <p>
                            Join us on
                            <a href="/"> Discord </a>&<a href="/"> Twitter </a>
                        </p>
                        <button
                            className="bg-[#000000] text-sm px-2 py-2 border-2 border-[#FFD700] text-[#FFD700] uppercase tracking-wide font-bold shadow-md shadow-yellow-400"
                        >Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus