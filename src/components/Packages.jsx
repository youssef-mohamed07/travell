import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Desert Explorer',
    price: '$599',
    features: ['5 Days, 4 Nights', 'Luxury Desert Camp', 'Camel Trek', 'Stargazing Experience'],
    icon: '🏜️',
  },
  {
    title: 'Cultural Odyssey',
    price: '$899',
    features: ['7 Days, 6 Nights', 'Historical Site Tours', 'Local Cuisine Tasting', 'Traditional Art Workshops'],
    icon: '🕌',
  },
  {
    title: 'Coastal Retreat',
    price: '$1299',
    features: ['10 Days, 9 Nights', 'Beach Resort Stay', 'Snorkeling Adventure', 'Sunset Dhow Cruise'],
    icon: '🏖️',
  },
];

const Packages = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Unforgettable Journeys</h2>
          <p className="text-xl text-blue-100">Discover the Middle East with our curated travel experiences</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
                <div className="p-8">
                  <span className="text-6xl mb-4 block">{pkg.icon}</span>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{pkg.title}</h3>
                  <p className="text-3xl font-extrabold text-blue-700 mb-6">{pkg.price}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-blue-800">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-8 py-6 bg-blue-50">
                <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;