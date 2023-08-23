import React from 'react'
import Image from 'next/image'
import { Bars4Icon } from '@heroicons/react/24/solid'

function HomeContent() {
  return (
    <div className="relative bg-black lg:top-[5.5rem]">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/home-bg.png")' }}
    ></div>

    <div className="relative w-full text-center p-16 bg-opacity-70 bg-black">
      <Bars4Icon className='lg:hidden block w-10 h-10 font-bold text-white' />
      <div className='lg:w-4/5 mx-auto'>
        {/* Header Text */}
        <h1 className="text-white text-4xl font-light mb-4">TRIPPRO - AN ECOMMERCE SOLUTION</h1>
        
        {/* Sub Header Text */}
        <p className="text-gray-300 text-md mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        
        {/* Three Sections */}
        <div className="lg:w-3/5 mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-40 place-items-center">
          <div className="flex items-center gap-2 text-lg text-white">
            <p className="font-bold">Built for:</p>
            <Image src="/assets/responsive.svg" height="50" width="50" alt="wordpress" />
            <div className='bg-white h-12 w-[2px] mx-8 hidden lg:block'> </div>
          </div>
          
          <div className="flex items-center text-white text-lg">
            <div className="">
              <p>Techonologies:</p>
              <p className='font-bold'> Wordpress</p>
            </div>
              <Image src="/assets/wordpress.svg" height="50" width="50" alt="wordpress" />
            <div className='bg-white h-12 w-[2px] mx-8 hidden lg:block'> </div>
          </div>

          <div className="flex items-center gap-2 text-white text-lg">
            <div>
            <p>Industry:</p>
            <p className='font-bold text-lg'> Ecommerce</p>
            </div>
            <Image src="/assets/shopping-cart.svg" height="50" width="50" alt="wordpress" />
          </div>
        </div>

        {/** Desktop UI */}
        <div className='flex justify-center relative animated-section'>
          <Image src="/assets/laptop-img.png" alt="Logo" width="600" height="400" className='absolute -top-20' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeContent
