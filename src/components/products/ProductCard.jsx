import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-[400px] w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <HeartIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-purple-800">{product.price}</span>
          <button className="flex items-center space-x-2 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            <ShoppingBagIcon className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}