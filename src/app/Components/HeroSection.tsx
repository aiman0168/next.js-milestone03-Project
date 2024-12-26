"use client";
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col sm:flex-row overflow-x-hidden">
      <div
        className={`sm:flex flex-col space-y-4 bg-white text-black pl-6 sm:pl-20 border-b sm:border-r border-gray-300 w-full sm:w-80 sm:h-[420px] absolute sm:relative top-0 left-0 transition-transform duration-300 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        } sm:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 sm:hidden">
          <button onClick={toggleSidebar} className="text-black">
            {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </button>
        </div>
        
        <div className="p-4">
          <ul className="space-y-2 mt-4">
            <li><a href="#womens-fashion" className="hover:underline">Womens Fashion</a></li>
            <li><a href="#mens-fashion" className="hover:underline">Mens Fashion</a></li>
            <li><a href="#electronics" className="hover:underline">Electronics</a></li>
            <li><a href="#home-lifestyle" className="hover:underline">Home & Lifestyle</a></li>
            <li><a href="#medicine" className="hover:underline">Medicine</a></li>
            <li><a href="#sports-outdoor" className="hover:underline">Sports & Outdoor</a></li>
            <li><a href="#babys-toys" className="hover:underline">Babys & Toys</a></li>
            <li><a href="#groceries-pets" className="hover:underline">Groceries & Pets</a></li>
            <li><a href="#health-beauty" className="hover:underline">Health & Beauty</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center w-full bg-black text-white mt-10 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-x-6 sm:space-y-0">
          <div className="flex flex-col items-center sm:items-start space-y-4 sm:pl-6">
            <div className="flex items-center space-x-2">
              <Image 
                src="/Applelogo.png" 
                alt="apple logo" 
                width={48} // Explicit width for the Apple logo
                height={48} // Explicit height for the Apple logo
                className="sm:w-12 sm:h-12"
              />
              <p className="text-white text-lg font-light">iPhone 14 Series</p>
            </div>
            <p className="text-white text-4xl sm:text-5xl font-semibold text-center sm:text-left">Up to 10% off Voucher</p>
            <div className="flex items-center space-x-2">
              <a href="#shop-now" className="text-white text-sm underline font-light">Shop Now</a>
              <FiArrowRight size={20} color="white" />
            </div>
          </div>

          <div className="ml-0 sm:ml-6 mt-6 sm:mt-0">
            <Image
              src="/hero.png"
              alt="Hero Image"
              className="w-[320px] sm:w-[462px] h-auto object-contain"
              width={320} // Explicit width for hero image
              height={462} // Explicit height for hero image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
