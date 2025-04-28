import React from 'react';
import { FiGlobe, FiCode, FiShoppingCart, FiPenTool, FiTool, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './ServicesCards.css';

const ServicesCards = () => {
  const services = [
    {
      icon: <FiGlobe className="service-card__icon" />,
      title: "Static Website",
      description: "Fast, secure, and reliable static websites perfect for small businesses and portfolios."
    },
    {
      icon: <FiCode className="service-card__icon" />,
      title: "Dynamic Website",
      description: "Interactive and data-driven websites with powerful backend functionality."
    },
    {
      icon: <FiShoppingCart className="service-card__icon" />,
      title: "E-Commerce Website",
      description: "Full-featured online stores with secure payment processing and inventory management."
    },
    {
      icon: <FiPenTool className="service-card__icon" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience."
    },
    {
      icon: <FiTool className="service-card__icon" />,
      title: "Web Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website running smoothly."
    },
    {
      icon: <FiAward className="service-card__icon" />,
      title: "Logo Design",
      description: "Professional and memorable logo designs that represent your brand."
    }
  ];

  return (
    <section className="services">
      <div className="services__container">
        <motion.h2 
          className="services__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="services__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="service-card__content">
                <div className="service-card__icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCards;