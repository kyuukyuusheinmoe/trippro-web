import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, SearchIcon ,  PhoneIcon, MailIcon, ChatIcon} from '@heroicons/react/solid';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full">
    {/* Information Row */}
      <div className="bg-gray-200 flex justify-between items-center lg:px-32">
        <div className="flex items-center">
            <Image src="/assets/logo.jpeg" alt="Logo" width="200" height="0" className='-mb-6' />
        </div>
        <div className="flex space-x-6">
          <div className="flex gap-2 items-center">
            <PhoneIcon className="h-4 w-4 text-vone" />
            6248 0838
         </div>
         <div className="flex gap-2 items-center">
            <ChatIcon className="h-4 w-4 text-vone" />
              8484 9948
          </div>
          <div className="flex gap-2 items-center">
            <MailIcon className="h-4 w-4 text-vone" />
            info@visibleone.com
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Quote</button>
          <button className="text-vone px-4 py-2 border border-vone">SG EN</button>
        </div>
      </div>
      {/* Logo and Navigation*/}
      <div className="bg-white flex flex-row-reverse items-center lg:px-32">
        {/* Menu Items */}
        <ul className="flex space-x-6 py-2">
            <li>
                <Link href="#" className="flex items-center">
                    Home 
            </Link>      
            </li>
            <li>
            <Link href="/about" className="flex items-center">
                    Services <ChevronDownIcon className='w-3  z-50 text-gray-500'/>
            </Link>    
            </li>
            <li>
                <Link href="#" className="flex items-center">
                    Blog
            </Link>      
            </li>
            <li>
                <Link href="#" className="flex items-center">
                    Contact us <ChevronDownIcon className='w-3 z-50 text-gray-500'/>
            </Link>   
            </li>
            <div className="flex items-center z-50">
                <SearchIcon className="h-6 w-6 mr-2  cursor-pointer" />
            </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
