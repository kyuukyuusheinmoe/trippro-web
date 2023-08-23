"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

function DesktopMobileView() {
    const [desktopView, setDesktopView] = useState(true)
    const toggleView = () => {
        setDesktopView(!desktopView)
    }
  return (
    <>
        <div className='wrap w-5/6 mx-auto'>
            <div className='grid grid-cols-10'>
            {desktopView ?
                <div className='row-span-full col-start-2 col-span-4 relative'>
                    <Image src="/assets/desktop-view.png" alt="desktop" layout='fill' className='desktop relative'/>
                </div>: 
                <div className='row-span-full col-start-4 col-span-4 relative'>
                    <Image src="/assets/mobile-view.png" alt="desktop" layout='fill' className='!w-[17rem] relative'/>
                </div>}
                <div className='row-span-full col-span-7 col-start-5 col-end-11 self-end bg-gradient-to-r from-[#3AE7AB]  to-[#2DC4EA] px-4 py-10 flex justify-end'>
                    <div className="lg:w-4/5 pr-8">
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
                        <div class="flex gap-4 mt-5">
                            <ChevronLeftIcon className="h-5 w-5 text-white" />
                            <ChevronRightIcon className="h-5 w-5 text-white" />
                        </div>
                    </div>
                    <div className="lg:w-1/5 bg-gradient-to-r to-[#3AE7AB]  from-[#2DC4EA] p-2 rounded-full mt-8 grid grid-cols-2 place-items-center">
                        <label
                            className="inline-block pl-[0.15rem] hover:cursor-pointer px-2"
                            for="flexSwitchCheckDefault">{desktopView ? "Desktop": "Mobile"}</label>
                            <input
                                className="h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 
                                before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] 
                                after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
                                checked:bg-primary 
                                checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary 
                                checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 
                                hover:cursor-pointer 
                                focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                                focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] 
                                checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                                dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault" 
                                onChange={toggleView}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DesktopMobileView
