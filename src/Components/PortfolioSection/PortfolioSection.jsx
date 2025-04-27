import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './portfoliosection.css';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Luxe Fashion Store",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      description: "A premium e-commerce platform for luxury fashion with seamless checkout and product customization.",
      category: "ecommerce",
      tags: ["E-commerce", "React", "Payment Gateway"],
      liveLink: "https://luxefashionstore.com"
    },
    {
      id: 2,
      title: "Nexus Corporate",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      description: "A clean, professional corporate website with interactive elements and smooth animations.",
      category: "static",
      tags: ["Static Site", "HTML/CSS", "JavaScript"],
      liveLink: "https://nexuscorporate.com"
    },
    {
      id: 3,
      title: "Brew Haven Logo",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      description: "Modern logo design for a specialty coffee shop with warm tones and custom typography.",
      category: "logo",
      tags: ["Logo Design", "Branding", "Illustrator"],
      liveLink: "https://brewhaven.com"
    },
    {
      id: 4,
      title: "Finance Dashboard UI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      description: "Interactive dashboard design for financial analytics with data visualization components.",
      category: "ui",
      tags: ["UI Design", "Figma", "Dashboard"],
      liveLink: "https://financedashboard.com"
    },
    {
      id: 5,
      title: "TechGadget Store",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      description: "Feature-rich electronics e-commerce site with product comparisons and wishlist functionality.",
      category: "ecommerce",
      tags: ["E-commerce", "Vue.js", "API Integration"],
      liveLink: "https://techgadgetstore.com"
    },
    {
      id: 6,
      title: "Photographer Portfolio",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      description: "Elegant portfolio website with fullscreen gallery and contact form for a professional photographer.",
      category: "static",
      tags: ["Static Site", "Gallery", "Responsive"],
      liveLink: "https://photographerportfolio.com"
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'static', label: 'Static Site' },
    { id: 'logo', label: 'Logo Design' },
    { id: 'ui', label: 'UI Design' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
      className="portfolio-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="portfolio-header">
        <h1>WebZin Creations</h1>
        <p>Crafted with Passion, Designed for Excellence.</p>

        {/* Project Delivered Counter.Enable Later */}
        {/* <div className="stats-counter">
          <i className="fas fa-trophy"></i> {projects.length}+ Projects Delivered
        </div> */}
      </div>
{/* 
Project Filter Buttons.Enable Later

      <motion.div 
        className="filter-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </motion.div> */}

      <motion.div 
        className="portfolio-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card"
            data-category={project.category}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-btn"
              >
                View Project <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PortfolioSection;
