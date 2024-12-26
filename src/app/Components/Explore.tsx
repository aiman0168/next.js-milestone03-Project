import React from 'react';
import Image from 'next/image';

interface ExploreCardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  totalRatings: number;
}

const ExploreProductCard: React.FC<ExploreCardProps> = ({ image, name, price, rating, totalRatings }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="w-full sm:w-[280px] h-auto rounded-lg relative group">
      <div className="relative w-full h-[250px] flex items-center justify-center bg-[#F5F5F5]">
        <Image src={image} alt={name} className="w-48 h-44 sm:w-56 sm:h-48 rounded-lg" width={192} height={176}/>

        <div className="absolute top-2 right-2 flex gap-2 flex-col">
          <div className="bg-white rounded-full p-2 shadow-md w-10 h-10">
            <Image src="/Wishlist.png" alt="wishlist" width={40} height={40} />
          </div>
          <div className="bg-white rounded-full p-2 shadow-md w-10 h-10">
            <Image src="/Group.png" className="pt-1" alt="group" width={40} height={40} />
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 text-lg font-semibold text-black">{name}</div>
      <div className="px-4 mt-2 flex items-center gap-2">
        <span className="text-lg font-semibold text-red-600">${price}</span>
      </div>

      <div className="mt-2 flex items-center justify-start px-4">
        {[...Array(fullStars)].map((_, index) => (
          <span key={index} className="text-yellow-500">&#9733;</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index} className="text-gray-300">&#9734;</span>
        ))}
        <span className="ml-2 text-sm text-gray-600">({totalRatings})</span>
      </div>
    </div>
  );
};

const ProductRow: React.FC = () => {
  const products = [
    { image: '/Product9.png', name: "Breed Dry Dog Food", price: 100, rating: 3, totalRatings: 35 },
    { image: '/Product10.png', name: "CANON EOS DSLR Camera", price: 360, rating: 4, totalRatings: 95 },
    { image: '/Product11.png', name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, totalRatings: 325 },
    { image: '/Product1.png', name: "Curology Product Set", price: 500, rating: 4, totalRatings: 145 },
    { image: '/Product13.png', name: "Kids Electric Car", price: 960, rating: 5, totalRatings: 65 },
    { image: '/Product14.png', name: "Jr.Zoom Soccer Cleats", price: 1160, rating: 5, totalRatings: 35 },
    { image: '/Product15.png', name: "GP11 ShooterUSB Gamepad", price: 660, rating: 4.5, totalRatings: 55 },
    { image: '/Product16.png', name: "Quilted Satin Jacket", price: 660, rating: 4.5, totalRatings: 55 },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16">
      <div className="flex items-center mt-4 sm:mt-6">
        <Image src="/rectangle.png" alt="icon" className="mr-2" width={20} height={20}/>
        <h2 className="text-red-500 font-semibold">Our Products</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mr-16 sm:mr-8">
          Explore Our Products
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product, index) => (
          <ExploreProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            totalRatings={product.totalRatings}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white py-3 px-12 rounded hover:bg-red-700 transition-colors duration-300 mt-8 mb-8">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
