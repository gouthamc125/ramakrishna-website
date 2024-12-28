import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'Traditional Gadwal Silk Saree',
      price: '₹15,999',
      quantity: 1,
      image: '/images/product-1.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-gray-500">{item.price}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span>{item.quantity}</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>
                <button className="text-red-600">Remove</button>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹15,999</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹100</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹16,099</span>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block w-full bg-purple-800 text-white py-2 text-center rounded-md hover:bg-purple-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Your cart is empty</p>
          <Link
            to="/products"
            className="mt-4 inline-block bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-700"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}