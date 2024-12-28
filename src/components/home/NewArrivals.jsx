import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../products/ProductCard';

const newArrivals = [
  {
    id: 1,
    name: 'Royal Gadwal Silk Saree',
    price: '₹18,999',
    description: 'Pure silk with traditional zari border',
    image: '/images/product-1.jpg'
  },
  {
    id: 2,
    name: 'Contemporary Gadwal Saree',
    price: '₹15,999',
    description: 'Modern design with classic elements',
    image: '/images/product-2.jpg'
  },
  {
    id: 3,
    name: 'Bridal Gadwal Silk Saree',
    price: '₹25,999',
    description: 'Exquisite bridal collection piece',
    image: '/images/product-3.jpg'
  },
  {
    id: 4,
    name: 'Designer Gadwal Saree',
    price: '₹21,999',
    description: 'Designer piece with unique patterns',
    image: '/images/product-4.jpg'
  }
];

export default function NewArrivals() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            New Arrivals
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Latest additions to our exclusive collection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}