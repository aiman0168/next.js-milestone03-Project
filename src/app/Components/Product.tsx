import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  detail: string;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  discount: number;
  totalRatings: number;
}

const ProductCard: React.FC<ProductCardProps> = ({detail, image, name, price, oldPrice, rating, discount, totalRatings }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="w-full sm:w-[280px] h-auto rounded-lg relative group">
    <Link href={`/product/${detail}`} passHref>
      <div className="relative w-full h-[250px] flex items-center justify-center bg-[#F5F5F5]">
        <Image
          src={image}
          alt="Product"
          className="w-48 h-44 rounded-lg"
          width={192}
          height={176}
        />

        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-4 py-2 rounded text-xs font-light">
            -{discount}%
          </div>
        )}

        <div className="absolute top-2 right-2 flex gap-2 flex-col">
          <div className="bg-white rounded-full p-2 shadow-md w-10 h-10">
            <Image src="/Wishlist.png" alt="wishlist" width={20} height={20} />
          </div>
          <div className="bg-white rounded-full p-2 shadow-md w-10 h-10">
            <Image src="/Group.png" className="pt-1" alt="group" width={20} height={20} />
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
      </Link>
    </div>
  );
};

const ProductRow: React.FC = () => {
  const products = [
    { detail: '1', image: '/Product1.png', name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, rating: 5, discount: 40, totalRatings: 88 },
    { detail: '2', image: '/Product2.png', name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, rating: 4, discount: 35, totalRatings: 75 },
    { detail: '3', image: '/Product3.png', name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, rating: 5, discount: 30, totalRatings: 99 },
    { detail: '4', image: '/Product4.png', name: "S-Series Comfort Chair", price: 375, oldPrice: 400, rating: 4.5, discount: 25, totalRatings: 99 },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 overflow-x-hidden">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            detail={product.detail}
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
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white py-3 px-12 rounded hover:bg-red-700 transition-colors duration-300 mt-8 mb-8">
          View All Products
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="w-full sm:w-[1250px] border-b border-gray-300"></div>
      </div>
    </div>
  );
};

export default ProductRow;
