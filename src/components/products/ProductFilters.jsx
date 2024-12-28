import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFilters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 bg-white z-10 py-4 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <select className="rounded-md border-gray-300 py-2 text-gray-600 focus:ring-purple-500 focus:border-purple-500">
              <option>All Categories</option>
              <option>Traditional</option>
              <option>Contemporary</option>
              <option>Bridal</option>
            </select>
            <select className="rounded-md border-gray-300 py-2 text-gray-600 focus:ring-purple-500 focus:border-purple-500">
              <option>Price Range</option>
              <option>Under ₹10,000</option>
              <option>₹10,000 - ₹20,000</option>
              <option>Above ₹20,000</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <select className="rounded-md border-gray-300 py-2 text-gray-600 focus:ring-purple-500 focus:border-purple-500">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}