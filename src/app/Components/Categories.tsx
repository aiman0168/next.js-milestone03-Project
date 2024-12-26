import React from 'react';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex items-center mt-20 ml-8">
        <Image src="/rectangle.png" alt="icon" className="mr-2" width={24} height={24} />
        <h2 className="text-red-500 font-semibold">Categories</h2>
      </div>

      <div className="flex items-center mt-6 ml-8 sm:ml-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mr-16">Browse by Category</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-8">
        <div className="w-full max-w-[170px] h-[145px] border border-gray-300 flex flex-col items-center justify-center rounded-md">
          <Image src="/icon2.png" alt="Phones Category" width={48} height={48} />
          <span className="mt-2 text-sm font-medium text-gray-700">Phones</span>
        </div>

        <div className="w-full max-w-[170px] h-[145px] border border-gray-300 rounded-md flex flex-col items-center justify-center">
          <Image src="/icon3.png" alt="Computers Category" width={48} height={48} />
          <span className="mt-2 text-sm font-medium text-gray-700">Computers</span>
        </div>

        <div className="w-full max-w-[170px] h-[145px] border border-gray-300 rounded-md flex flex-col items-center justify-center">
          <Image src="/icon6.png" alt="SmartWatch Category" width={48} height={48} />
          <span className="mt-2 text-sm font-medium text-gray-700">SmartWatch</span>
        </div>

        <div className="w-full max-w-[170px] h-[145px] border border-gray-300 bg-red-500 rounded-md flex flex-col items-center justify-center">
          <Image src="/icon1.png" alt="Camera Category" width={48} height={48} />
          <span className="mt-2 text-sm font-medium text-white">Camera</span>
        </div>

        <div className="w-full max-w-[170px] h-[145px] border border-gray-300 rounded-md flex flex-col items-center justify-center">
          <Image src="/icon5.png" alt="Headphones Category" width={48} height={48} />
          <span className="mt-2 text-sm font-medium text-gray-700">HeadPhones</span>
        </div>

        <div className="w-full max-w-[170px] h-[145px] border border-gray-300 rounded-md flex flex-col items-center justify-center">
          <Image src="/icon4.png" alt="Gaming Category" width={48} height={48} />
          <span className="mt-2 text-sm font-medium text-gray-700">Gaming</span>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="w-full sm:w-[1250px] border-b border-gray-300"></div>
      </div>
    </div>
  );
};

export default Categories;