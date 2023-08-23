import React from 'react'
import Image from 'next/image';
import ChallengeList from './ChallengeList';

function ChallengeContent() {
    
  return (
    <div className="container mx-auto py-10">
        <div className="flex justify-center mb-4">
            <span className="text-2xl font-semibold text-vone lg:ml-[15rem]"><span className='text-black'>OUR </span> CHALLENGES </span>
        </div>
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <Image src="/assets/case-study.png" alt="Challenge Image" layout="fill" className="object-contain" />
            </div>
            <div className="lg:w-1/2 relative">
              <ChallengeList/>
            </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="lg:ml-[15rem] flex flex-row-reverse text-white py-3 px-6 mb-8 rounded-full bg-gradient-to-r from-[#3AE7AB]  to-[#2DC4EA] transition duration-300">View More</button>
        </div>
    </div>
  )
}

export default ChallengeContent
