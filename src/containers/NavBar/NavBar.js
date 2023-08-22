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
        <div className="flex space-x-2">
          <span className="flex space-x-2 items-center">
            <PhoneIcon className="h-4 w-4 text-gray-600" />
            Phone: 123-456-7890
         </span>
          <span className="flex items-center">
            <ChatIcon className="h-4 w-4 text-gray-600" />
              WhatsApp
          </span>
          <span className="flex items-center">
            <MailIcon className="h-4 w-4 text-gray-600 mr-1" />
            Email: example@example.com
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Quote</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Language</button>
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
            <Link href="#" className="flex items-center">
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
                <SearchIcon className="h-6 w-6 mr-2 text-gray-600 cursor-pointer" />
            </div>
        </ul>

      </div>
      
    </nav>
  );
};

export default NavBar;
