import Link from 'next/link';
import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="bg-black text-white h-8 sm:h-14 w-full px-4 sm:px-8 flex items-center relative overflow-x-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 max-w-full overflow-x-auto">
        <p className="text-[8px] sm:text-xs md:text-base text-center sm:text-left max-w-xs sm:max-w-none whitespace-nowrap">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="#shop-now" className="text-white px-4 underline font-semibold text-[8px] sm:text-xs md:text-base sm:inline-block">
          Shop Now
        </Link>
      </div>

      <div className="flex items-center space-x-2 absolute right-6">
        <p className="text-[8px] sm:text-xs md:text-sm hidden sm:block md:block">English</p>
        <Image
          src="/DropDown.png"
          alt="dropdown"
          className="h-4 sm:h-5 md:h-6 hidden sm:block md:block"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default TopBar;