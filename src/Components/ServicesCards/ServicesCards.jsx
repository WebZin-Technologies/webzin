import React from 'react';
import { FaGlobe, FaCode, FaShoppingCart, FaPalette, FaTools, FaPencilRuler, FaAngleRight } from 'react-icons/fa';
import './ServicesCards.css'
function ServicesCards() {
  const services = [
    { id: 1, name: "Static Website", icon: <FaGlobe /> },
    { id: 2, name: "Dynamic Website", icon: <FaCode /> },
    { id: 3, name: "E-Commerce Website", icon: <FaShoppingCart /> },
    { id: 4, name: "Web UI Design", icon: <FaPalette /> },
    { id: 5, name: "Web Maintenance & Support", icon: <FaTools /> },
    { id: 6, name: "Logo Design", icon: <FaPencilRuler /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-16 sm:mt-24 services-cards">
      <div className="text-center mb-12 relative">
      <h1 className="text-3xl font-bold text-[#4328c7] section-title inline-block relative">
  Our Services
</h1>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-100 rounded-xl p-4  shadow-md text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mx-auto w-fit  text-[#4328c7] mb-3">{service.icon}</div>
            <h2 className="text-lg font-semibold">{service.name}</h2>
          </div>
        ))}
      </div>
      <div className="btn-purple-container">
      <button className="btn-purple">Explore More <FaAngleRight/></button>
      </div>
    
    </div>
  );
}

export default ServicesCards;
