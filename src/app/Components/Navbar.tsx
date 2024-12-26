'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between pt-8 pb-4 px-4 w-full border-b border-gray-300 overflow-x-hidden">
      <div className="sm:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center mb-4 sm:mb-0">
        <h1 className="font-bold text-3xl">Exclusive</h1>
      </div>

      <div
        ref={dropdownRef}
        className={`absolute top-16 left-4 bg-white border border-gray-300 rounded-md shadow-md sm:hidden z-10 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <a href="#home" className="block text-gray-800 hover:bg-gray-100 px-4 py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block text-gray-800 hover:bg-gray-100 px-4 py-2">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-gray-800 hover:bg-gray-100 px-4 py-2">
              Contact
            </a>
          </li>
          <li>
            <a href="#signup" className="block text-gray-800 hover:bg-gray-100 px-4 py-2">
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block md:block">
          <Image
            src="/search.png"
            alt="search"
            className="absolute h-5 right-2 top-2"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-black pl-4 pr-4 w-48 sm:w-64 h-9 rounded-md focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Image
            src="/Wishlist.png"
            alt="wishlist"
            className="h-5"
            width={20}
            height={20}
          />
          <Link href="/Cart">
            <Image
              src="/Cart.png"
              alt="cart"
              className="h-5"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;