// src/pages/AboutPage.js

import React from 'react';
import exampleImage from '../assets/images/about-1.jpg';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600 mb-8">This is the About Page content</p>

      {/* Image with hover effect */}
      <div className="relative group overflow-hidden rounded-lg mb-12 flex justify-center">
        <img 
          src={exampleImage}
          alt="Wooden Boat"
          className="h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">The Legacy of Wooden Boats</h2>
        <p className="text-gray-600 leading-relaxed">
          Wooden boats have been built for centuries using various types of wood, such as oak, cedar, and mahogany. These materials provide durability, flexibility, and strength, making them ideal for constructing boats capable of withstanding the harsh conditions of water navigation.
        </p>
        <p className="text-gray-600 leading-relaxed">
          In the past, wooden boats were primarily used for transportation, fishing, and military purposes. They played a crucial role in trade and exploration, and many of the world's greatest explorers relied on wooden vessels to reach new lands. Today, wooden boats are often used for leisure, and many boat enthusiasts continue to preserve and restore them as part of maritime heritage.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
