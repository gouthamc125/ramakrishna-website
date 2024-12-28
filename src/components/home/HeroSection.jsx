import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
          src="/images/hero-banner.jpg"
          alt="Gadwal Sarees Collection"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          <span className="block">Timeless Elegance</span>
          <span className="block text-purple-300">Gadwal Heritage</span>
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Experience the royal heritage of Gadwal handloom sarees, where each thread tells a story of tradition and craftsmanship.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/products"
            className="inline-block bg-purple-800 border border-transparent rounded-md py-3 px-8 text-lg font-medium text-white hover:bg-purple-700 transition-colors duration-200"
          >
            Explore Collection
          </Link>
          <Link
            to="/products/featured"
            className="inline-block border-2 border-white rounded-md py-3 px-8 text-lg font-medium text-white hover:bg-white/10 transition-colors duration-200"
          >
            View Featured
          </Link>
        </div>
      </motion.div>
    </div>
  );
}