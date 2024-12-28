import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import NewArrivals from '../components/home/NewArrivals';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <NewArrivals />
      <TestimonialsSection />
    </div>
  );
}