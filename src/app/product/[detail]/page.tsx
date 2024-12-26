"use client";
import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const ProductDetail = () => {
  const { detail } = useParams();

  const products = [
    { detail: '1', name: 'HAVIT HV-G92 Gamepad', image: '/Product1.png', description: 'The HAVIT HV-G92 is a wired gamepad designed for comfort and precision. It features ergonomic grips, responsive buttons, and dual vibration motors. Compatible with PC, PlayStation, and other devices, it offers a great gaming experience with anti-slip features and quick input response.', price: 120, oldPrice: 160, rating: 5, totalRatings: 88, discount: 40 },
    { detail: '2', name: 'AK-900 Wired Keyboard', image: '/Product2.png', description: 'The AK 900 Wired Keyboard is a mechanical keyboard with customizable RGB lighting and anti-ghosting support. It offers tactile feedback for fast typing and gaming, a durable build, and ergonomic design to reduce wrist strain, making it perfect for both gamers and professionals..', price: 960, oldPrice: 1160, rating: 4, totalRatings: 75, discount: 35 },
    { detail: '3', name: 'IPS LCD Gaming Monitor', image: '/Product3.png', description: 'An IPS LCD Gaming Monitor delivers superior color accuracy and wide viewing angles. With fast refresh rates (up to 144Hz) and low response times (1ms or 5ms), it ensures smooth gameplay and clear visuals, ideal for gamers who prioritize high-quality display performance.', price: 370, oldPrice: 400, rating: 5, totalRatings: 99, discount: 30 },
    { detail: '4', name: 'S-Series Comfort Chair', image: '/Product4.png', description: 'The S-Series Comfort Chair offers ergonomic support with adjustable lumbar support, headrest, and armrests. Its high-density foam padding and reclining backrest ensure comfort for long gaming sessions, making it a great choice for gamers and office workers.', price: 375, oldPrice: 400, rating: 4.5, totalRatings: 99, discount: 25 },
  ];

  const product = products.find(p => p.detail === detail);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 mt-8">
      <div className="flex gap-8">
        <div className="w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-4 text-lg text-gray-700">{product.description}</p>
          <div className="mt-4">
            <span className="text-xl font-semibold text-red-600">${product.price}</span>
            {product.discount > 0 && (
              <span className="text-sm line-through text-gray-500 ml-2">${product.oldPrice}</span>
            )}
          </div>
          <div className="mt-2 flex items-center gap-2">
            {[...Array(Math.floor(product.rating))].map((_, index) => (
              <span key={index} className="text-yellow-500">&#9733;</span>
            ))}
            {[...Array(5 - Math.floor(product.rating))].map((_, index) => (
              <span key={index} className="text-gray-300">&#9734;</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.totalRatings} ratings)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
