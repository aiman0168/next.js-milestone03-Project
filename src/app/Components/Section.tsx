import React from 'react';
import Image from 'next/image';

const Section: React.FC = () => {
  return (
    <div className="hidden sm:block">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[1170px] h-auto sm:h-[300px] md:h-[400px] lg:h-[500px] flex flex-col sm:flex-row items-center justify-center sm:justify-between p-6 sm:p-8 bg-gradient-to-r bg-black rounded-lg shadow-lg sm:m-10 md:m-14">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 sm:ml-8">
          <p className="text-green-500 text-xl font-bold sm:w-64 mb-4">Categories</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2">Enhance Your Music Experience</h2>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6 mb-4">
            <div className="flex flex-col items-center bg-white w-14 h-14 rounded-full justify-center text-center">
              <span className="text-base font-semibold">23</span>
              <span className="text-xs">Hours</span>
            </div>

            <div className="flex flex-col items-center bg-white w-14 h-14 rounded-full justify-center text-center">
              <span className="text-base font-semibold">05</span>
              <span className="text-xs">Days</span>
            </div>

            <div className="flex flex-col items-center bg-white w-14 h-14 rounded-full justify-center text-center">
              <span className="text-base font-semibold">59</span>
              <span className="text-xs">Minutes</span>
            </div>

            <div className="flex flex-col items-center bg-white w-14 h-14 rounded-full justify-center text-center">
              <span className="text-base font-semibold">35</span>
              <span className="text-xs">Seconds</span>
            </div>
          </div>

          <button className="bg-green-500 text-white px-11 py-3 rounded font-semibold hover:bg-gray-200 transition-colors">
            Buy Now!
          </button>
        </div>
        <div className="mt-6 sm:mt-0 sm:mr-14 relative flex justify-center">
          <div className="w-full sm:w-[250px] md:w-[200px] lg:w-[500px] h-auto sm:h-[150px] md:h-[130px] lg:h-[250px] shadow-2xl rounded-lg overflow-hidden">
            <Image
              src="/boombox.png"
              alt="Image"
              className="w-full h-full object-cover"
              width={500}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
