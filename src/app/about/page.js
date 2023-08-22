import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className="container mx-auto py-10">
    <div className="grid lg:grid-cols-2 grid-cols-1 ">

      {/* Explanation Text and Button Section */}
      <div className="col-span-1 px-4 lg:w-2/3 justify-self-center place-content-center">
        <span className="text-2xl font-semibold mb-8 text-vone"><span className='text-black border-b-2 border-vone'>ABOUT </span> TRIPPRO </span>
        <p className="mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
        <button className="bg-blue-500 text-white py-2 px-4 mb-8 rounded-full bg-gradient-to-r from-[#3AE7AB]  to-[#2DC4EA] transition duration-300">Tour to Website</button>
      </div>

      {/* Large Image Section */}
      <div className="col-span-1 px-4 ">
        <div className='lg:w-3/5 aspect-square relative'>
          <Image src="/assets/Tablet.png" alt="Large Image" layout="fill" className="relative object-contain" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
