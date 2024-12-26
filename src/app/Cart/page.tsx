'use client';
import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Apple', price: 2.5, quantity: 1 },
    { id: 2, name: 'Banana', price: 1.8, quantity: 2 },
    { id: 3, name: 'Orange', price: 3.0, quantity: 1 },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <span className="font-medium text-lg mr-4">{item.name}</span>
                <span className="text-gray-500">${item.price.toFixed(2)}</span>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-200 px-2 py-1 rounded-full mr-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  className="bg-gray-200 px-2 py-1 rounded-full ml-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-semibold">Total:</span>
        <span className="text-2xl font-bold text-gray-900">${getTotalPrice().toFixed(2)}</span>
      </div>
      <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;