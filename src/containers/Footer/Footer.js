import React from 'react';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="absolute inset-0 bg-footer-bg bg-cover bg-center z-0">
        <Image src="/assets/singapore.jpg" alt="Singapore" layout="fill" className='object-cover'/>
      </div>
        <div className="relative bg-black bg-opacity-60 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Quick Links */}
                    <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">QUICK LINKS</h4>
                    <ul className="list-disc pl-6">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Quotation</a></li>
                        <li><a href="#">Partnership</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    </div>

                    {/* Our Services */}
                    <div className="lg:mb-6">
                    <h4 className="text-xl font-semibold mb-4">OUR SERVICES</h4>
                    <ul className="list-disc pl-6">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Responsive Web Design</a></li>
                        <li><a href="#">CMS Web Design</a></li>
                        <li><a href="#">Custom Web Design</a></li>
                        <li><a href="#">UI & UX Web Design</a></li>
                        <li><a href="#">360 Virtual Tour</a></li>
                    </ul>
                    </div>

                    {/* Our Jobs */}
                    <div className="mb-6 lg:mt-10">
                        <ul className="list-disc pl-6">
                            <li><a href="#">Ecommerce Development</a></li>
                            <li><a href="#">WooCommerce Development</a></li>
                            <li><a href="#">osCommerce Development</a></li>
                            <li><a href="#">Magento Development</a></li>
                            <li><a href="#">BigCommerce Development</a></li>
                            <li><a href="#">SSL Certificate</a></li>
                            <li><a href="#">Promotion Video</a></li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="text-center lg:text-left flex flex-col gap-4 mb-6">
                        <h4 className="text-xl font-semibold mb-4">VISIBLE ONE SINGAPORE</h4>
                        <p className='text-lg font-semibold'>+656 248 0838</p>
                        <div className='flex gap-2 items-center'>
                            <EnvelopeIcon className='w-4 h-4 '/> <p>info@visibleone.com</p>
                        </div>
                        <p>24 Sin Ming Lane Midview City #07-93 Singapore 573970</p>
                        <p>Office Hour: Mon-Fri (9am-6pm)</p>
                        <div className="flex justify-between items-center">
                            <button className='bg-vone text-white p-4'>Contact us</button>
                            <p className='text-vone'> Contact HK Office</p>
                        </div>
                    </div>
                </div>
                <div className='border border-y-1 border-x-0 border-white py-4 flex lg:flex-row-reverse'>
                    <div>
                        <p className='text-sm'> Subscribe to our new, tips and guidlines</p>
                        <div className='lg:flex md:flex gap-3 grid place-items-center'>
                            <input className='p-4 bg-transparent border border-white'/>
                            <button className='bg-vone text-white p-4'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center text-white">
                <ul className="list-disc pl-6 lg:flex lg:gap-8 grid">
                    <li><a href="#">Shopping T&C</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li className='last:list-none'><a href="#">&copy; 2018 - Visible  One</a></li>
                </ul>
        </div>
        </div>
        
    </footer>
  );
}

export default Footer;
