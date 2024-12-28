import React from 'react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Traditional Gadwal Silk Saree',
      price: '₹15,999',
      image: '/images/product-1.jpg',
      description: 'Handwoven pure silk saree with traditional Gadwal border'
    },
    // Add more products here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Collection</h1>
      
      {/* Filters */}
      <div className="flex items-center space-x-4 mb-8">
        <select className="rounded-md border-gray-300">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
        
        <select className="rounded-md border-gray-300">
          <option>Filter by</option>
          <option>Traditional</option>
          <option>Contemporary</option>
          <option>Bridal</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button className="mt-2 w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}