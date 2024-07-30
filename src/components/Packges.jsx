import React from 'react';

function Destinations() {
  const destinations = [
    {
      name: "Dubai, UAE",
      description: "Experience luxury and modernity in the heart of the Arabian desert.",
      image: "a.jpg",
      attractions: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"]
    },
    {
      name: "Cairo, Egypt",
      description: "Explore ancient wonders and vibrant culture in the land of the pharaohs.",
      image: "b.jpg",
      attractions: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"]
    },
    {
      name: "Istanbul, Turkey",
      description: "Bridge between East and West, rich in history and culinary delights.",
      image: "c.jpg",
      attractions: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"]
    },
    {
      name: "Petra, Jordan",
      description: "Discover the rose-red city, a marvel of ancient engineering.",
      image: "d.jpg",
      attractions: ["The Treasury", "Monastery", "Street of Facades"]
    },
    {
      name: "Marrakech, Morocco",
      description: "Immerse yourself in the colors and scents of this magical city.",
      image: "e.jpg",
      attractions: ["Jardin Majorelle", "Bahia Palace", "Djemaa el-Fna"]
    },
    {
      name: "Maldives",
      description: "Relax in paradise with crystal clear waters and overwater bungalows.",
      image:"f.jpg",
      attractions: ["Underwater restaurants", "Coral reefs", "Luxury resorts"]
    }
  ];

  return (
    <section id="destinations" className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">Discover Breathtaking Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">{destination.name}</h3>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <h4 className="text-lg font-medium mb-2 text-blue-500">Top Attractions:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {destination.attractions.map((attraction, i) => (
                  <li key={i}>{attraction}</li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;