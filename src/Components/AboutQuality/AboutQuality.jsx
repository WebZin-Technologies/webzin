import React from 'react'
import './AboutQuality.css'
import { FaLightbulb ,  FaHandshake} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { TfiTimer } from "react-icons/tfi";

function AboutQuality() {

  const coreQualities = [
    {
      title: "Innovation",
      icon: <FaLightbulb />,
      description: "Fresh ideas. Modern solutions. Future-ready websites.",
    },
    {
      title: "Precision",
      icon: <FiTarget />,
      description: "Clean code. Sharp design. No detail missed.",
    },
    {
      title: "Partnership",
      icon: <FaHandshake />,
      description: "Fresh ideas. Modern solutions. Future-ready websites.",
    },
    {
      title: "Efficiency",
      icon: <TfiTimer />,
      description: "Fresh ideas. Modern solutions. Future-ready websites.",
    },
  ];
  
  return (
    <div className="about-quality">

       <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#4328c7] section-title">Our Core Qualities</h1>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 quality-card-container">
        {coreQualities.map((coreQuality) => (
          <div className="bg-gray-100 rounded-xl p-4  shadow-md text-center hover:scale-105 transition-transform duration-300 quality-card"
          >
            <div className="text-6xl mx-auto w-fit  text-[#4328c7] mb-3">{coreQuality.icon}</div>
            <h2 className="text-2xl font-semibold">{coreQuality.title}</h2>
            <p className="text-xl">{coreQuality.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AboutQuality
