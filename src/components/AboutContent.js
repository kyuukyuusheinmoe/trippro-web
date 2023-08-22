import React from 'react'

function AboutContent() {
  return (
    <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row">

        {/* Explanation Text and Button Section */}
        <div className="lg:w-1/3 px-4">
            <span className="text-2xl font-semibold mb-4 text-vone"><span className='text-black border-b-2 border-vone'>ABOUT </span> TRIPPRO </span>
            <p className="mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full bg-gradient-to-r from-[#3AE7AB]  to-[#2DC4EA] transition duration-300">Tour to Website</button>
        </div>

        {/* Large Image Section */}
        <div className="h-80 aspect-square px-4">
            <img src="/assets/Tablet.png" alt="Large Image" className="w-full rounded-lg shadow-lg" />
        </div>
        </div>
    </div>
  )
}

export default AboutContent
