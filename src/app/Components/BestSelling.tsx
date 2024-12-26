import React from 'react';
import Image from 'next/image';

interface BestSellingCardProps {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  discount: number;
  totalRatings: number;
}

const BestSellingCard: React.FC<BestSellingCardProps> = ({
  image,
  name,
  price,
  oldPrice,
  rating,
  discount,
  totalRatings,
}) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="w-full sm:w-[280px] h-auto rounded-lg relative group">
      <div className="relative w-full h-[250px] flex items-center justify-center bg-[#F5F5F5]">
        <Image
          src={image}
          alt="Product"
          className="w-48 h-44 rounded-lg object-contain"
          width={192}
          height={176}
        />

        <div className="absolute top-2 right-2 flex gap-2 flex-col">
          <div className="bg-white rounded-full p-2 shadow-md w-10 h-10">
            <Image src="/wishlist.png" alt="wishlist" width={48} height={48} />
          </div>
          <div className="bg-white rounded-full p-2 shadow-md w-10 h-10">
            <Image src="/Group.png" className="pt-1 w-full h-full" width={48} height={48} alt="group" />
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 text-lg font-semibold text-black">{name}</div>
      <div className="px-4 mt-2 flex items-center gap-2">
        <span className="text-lg font-semibold text-red-600">${price}</span>
        {discount > 0 && (
          <span className="text-sm line-through text-gray-500">${oldPrice}</span>
        )}
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

const BestSellingRow: React.FC = () => {
  const products = [
    { image: '/Product5.png', name: "The North Coat", price: 260, oldPrice: 360, rating: 5, discount: 40, totalRatings: 65 },
    { image: '/Product6.png', name: "Gucci Duffle Bag", price: 960, oldPrice: 1160, rating: 4.5, discount: 35, totalRatings: 65 },
    { image: '/Product7.png', name: "RGB Liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4.5, discount: 30, totalRatings: 65 },
    { image: '/Product8.png', name: "Small Bookshelf", price: 360, oldPrice: 400, rating: 5, discount: 25, totalRatings: 65 },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16">
      <div className="flex items-center mt-20">
        <Image src="/rectangle.png" alt="icon" className="mr-2" width={24} height={24} />
        <h2 className="text-red-500 font-semibold">This Month</h2>
      </div>

      <div className="flex items-center justify-between mt-4 mb-4">
        <h2 className="text-4xl font-semibold text-black">Best Selling Products</h2>

        <button className="bg-red-500 text-white hidden sm:block py-3 px-12 rounded hover:bg-red-700 transition-colors duration-300 mt-8 mb-8">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product, index) => (
          <BestSellingCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            discount={product.discount}
            totalRatings={product.totalRatings}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellingRow;