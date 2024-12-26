import React from 'react';
import Image from 'next/image';

const Today = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16">
      <div className="flex items-center mt-4 sm:mt-6">
        <Image
          src="/rectangle.png"
          alt="icon"
          className="mr-2"
          width={24}
          height={24}
        />
        <h2 className="text-red-500 font-semibold text-xl sm:text-2xl">Todays</h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mr-16 sm:mr-8">
          Flash Sales
        </h2>

        <div className="flex items-center space-x-4 text-lg font-medium text-black mt-4 sm:mt-0">
          <div className="flex flex-col items-center">
            <span className="text-sm text-black">Days</span>
            <span className="ml-2 font-bold text-xl sm:text-2xl">03</span>
          </div>

          <span className="font-bold text-red-500">:</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-black">Hours</span>
            <span className="ml-2 font-bold text-xl sm:text-2xl">23</span>
          </div>

          <span className="font-bold text-red-500">:</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-black">Minutes</span>
            <span className="ml-2 font-bold text-xl sm:text-2xl">19</span>
          </div>

          <span className="font-bold text-red-500">:</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-black">Seconds</span>
            <span className="ml-2 font-bold text-xl sm:text-2xl">56</span>
          </div>
        </div>

        <div className="absolute right-8 flex gap-4 mt-4 sm:mt-0 md:mt-0">
          <div
            className="p-3 rounded-full hidden sm:block md:block"
            style={{ backgroundColor: '#F5F5F5' }}
          >
            <Image
              src="/arrowleft.png"
              alt="icon 1"
              className="w-8 h-8"
              width={32}
              height={32}
            />
          </div>

          <div
            className="p-3 rounded-full hidden sm:block md:block"
            style={{ backgroundColor: '#F5F5F5' }}
          >
            <Image
              src="/arrowright.png"
              alt="icon 2"
              className="w-8 h-8"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
