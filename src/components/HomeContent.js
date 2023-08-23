import React from 'react'
import Image from 'next/image'

function HomeContent() {
  return (
    <div className="relative bg-black top-[5.5rem]">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/home-bg.png")' }}
    ></div>

    <div className="relative w-full text-center p-16 bg-opacity-70 bg-black">
      <div className='lg:w-4/5 mx-auto'>
        {/* Header Text */}
        <h1 className="text-white text-4xl font-bold mb-4">TRIPPRO - AN ECOMMERCE SOLUTION</h1>
        
        {/* Sub Header Text */}
        <p className="text-gray-300 text-md mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        
        {/* Three Sections */}
        <div className="lg:w-3/5  mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 place-items-center mb-40">
          <div className="px-10 border-r-2 border-white rounded-none flex items-center gap-2 text-lg text-white">
            <p className="font-bold">Built for:</p>
            <Image src="/assets/responsive.svg" height="50" width="50" alt="wordpress" />
          </div>
          
          <div className="px-10 border-r-2 border-white rounded-none flex items-center gap-2 text-white text-lg">
            <div>
            <p>Techonologies:</p>
            <p className='font-bold'> Wordpress</p>
            </div>
            <Image src="/assets/wordpress.svg" height="50" width="50" alt="wordpress" />
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
        <div className='flex justify-center relative'>
          <Image src="/assets/laptop-img.png" alt="Logo" width="600" height="400" className='absolute -top-20' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeContent
