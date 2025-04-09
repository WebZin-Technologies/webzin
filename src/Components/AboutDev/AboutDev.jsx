import React from 'react'
import './AboutDev.css'
function AboutDev() {
  const developers = [
    {
      name: "Risnan Rv",
      role: "Front-end & UI / UX",
      skills: ["React js", "Figma", "Bootstrap", "JavaScript"],
      portfolioText: "View Portfolio",
    },
    {
      name: "Ahindev B",
      role: "Back-end Developer",
      skills: ["React js", "Node.js", "MongoDB", "Express.js"],
      portfolioText: "View Portfolio",
    },
  ];

  return (
    <div className="about-dev">
       <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#4328c7] section-title">Our Creative Coders</h1>
        </div>
        <div className="dev-card-container ">
        {developers.map((dev, index) => (
  <div key={index} className="bg-[#4328c7] text-white p-4 rounded-lg text-center dev-card">
    <h2 className="text-3xl font-bold">{dev.name}</h2>
    <p className="text-lg mb-3">{dev.role}</p>
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {dev.skills.map((skill, i) => (
        <span key={i} className="bg-white text-black text-sm px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
    <a href="#" className=" inline-block font-semibold underline text-white transform hover:-translate-y-1 transition duration-300">
      {dev.portfolioText}
    </a>
    
  </div>
))}
</div>

    </div>
  )
}

export default AboutDev
