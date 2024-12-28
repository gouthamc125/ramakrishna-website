import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-800">
              Gadwal Sarees
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-purple-800">
              Collections
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-purple-800">
              New Arrivals
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-purple-800">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-800">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}