import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Traditional',
    description: 'Classic Gadwal designs that embody timeless elegance',
    image: '/images/traditional.jpg'
  },
  {
    name: 'Contemporary',
    description: 'Modern interpretations of traditional patterns',
    image: '/images/contemporary.jpg'
  },
  {
    name: 'Bridal',
    description: 'Exquisite sarees for your special day',
    image: '/images/bridal.jpg'
  }
];

export default function FeaturedCategories() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Curated Collections
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our handpicked selection of finest Gadwal sarees
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="mt-2 text-gray-200">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}