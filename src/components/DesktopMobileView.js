import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

function DesktopMobileView() {
    
  return (
    <>
        <div className='wrap w-5/6 mx-auto'>
            <div className='grid grid-cols-10'>
                <div className='row-span-full col-start-2 col-span-4 relative'>
                    <Image src="/assets/desktop-view.png" alt="desktop" layout='fill' className='desktop relative'/>
                </div>
                <div className='row-span-full col-span-7 col-start-4 col-end-11 self-end bg-gradient-to-r from-[#3AE7AB]  to-[#2DC4EA] px-4 py-10 flex justify-end'>
                    <div className="lg:w-4/6 pr-8">
                        <p className='text-2xl font-bold text-white mb-10'> Their Old Website & Problems</p>
                        <div className='flex flex-col gap-6'>
                            <div className="flex items-center text-sm text-white">
                            <ArrowRightIcon className="h-5 w-5 text-white" />
                            <p className="ml-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            </div>
                            <div className="flex items-center text-sm text-white">
                            <ArrowRightIcon className="h-5 w-5 text-white" />
                            <p className="ml-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            </div>
                            <div className="flex items-center text-sm text-white">
                            <ArrowRightIcon className="h-5 w-5 text-white" />
                            <p className="ml-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                        </div>
                        <div class="flex gap-4 mt-10">
                            <ChevronLeftIcon className="h-5 w-5 text-white" />
                            <ChevronRightIcon className="h-5 w-5 text-white" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DesktopMobileView
