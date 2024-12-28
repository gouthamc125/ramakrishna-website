import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    content: 'The quality and craftsmanship of my bridal Gadwal saree exceeded all expectations. It made my special day even more memorable.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Anita Reddy',
    role: 'Fashion Designer',
    content: 'As a designer, I appreciate the intricate details and authentic designs. These sarees are truly a work of art.',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Meera Patel',
    role: 'Regular Customer',
    content: "I've been buying Gadwal sarees for years, and the quality has always been consistently excellent.",
    rating: 5,
    image: '/images/testimonial-3.jpg'
  }
];

export default function TestimonialsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real experiences from our valued customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}