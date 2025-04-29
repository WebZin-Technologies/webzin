import './AboutSection.css';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaPalette, FaShoppingCart, FaServer, FaMobileAlt, FaHandshake, FaClock, FaUserTie, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  const services = [
    { icon: <FaShoppingCart className="service-icon" />, title: "E-Commerce Websites", description: "We create shops that sell with seamless user experiences." },
    { icon: <FaCode className="service-icon" />, title: "Dynamic Websites", description: "Interactive web applications that engage your audience." },
    { icon: <FaServer className="service-icon" />, title: "Static Websites", description: "Lightning-fast websites for businesses that need speed." },
    { icon: <FaPalette className="service-icon" />, title: "Logo Creation", description: "Designs that define your brand identity." },
    { icon: <FaMobileAlt className="service-icon" />, title: "UI/UX Design", description: "Beautiful interfaces that users love to navigate." },
    { icon: <FaHandshake className="service-icon" />, title: "Web Maintenance", description: "Ongoing support to keep your site running smoothly." }
  ];

  const whyChooseUs = [
    { icon: <FaLightbulb className="benefit-icon" />, title: "Innovative Solutions", description: "Cutting-edge approaches tailored to your needs" },
    { icon: <FaUserTie className="benefit-icon" />, title: "Expert Team", description: "Seasoned professionals dedicated to excellence" },
    { icon: <FaPalette className="benefit-icon" />, title: "Design Excellence", description: "Award-winning designs that captivate audiences" },
    { icon: <FaClock className="benefit-icon" />, title: "Timely Delivery", description: "We respect deadlines and deliver promptly" },
    { icon: <FaMobileAlt className="benefit-icon" />, title: "Responsive Designs", description: "Flawless performance on all devices" },
    { icon: <FaChartLine className="benefit-icon" />, title: "Results-Driven", description: "Solutions that deliver measurable impact" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section className="hero-section" {...fadeInUp}>
        <div className="hero-content">
          <motion.div className="hero-tagline" {...fadeInUp}>Your Vision, Our Code</motion.div>
          <motion.h1 className="hero-title" {...fadeInUp}>Turning Digital Dreams Into Reality</motion.h1>
          <motion.p className="hero-subtitle" {...fadeInUp}>
            WebZin crafts exceptional web experiences that drive results
          </motion.p>
          <motion.div className="hero-cta" {...fadeInUp}>
            <button className="hero-button" onClick={() => navigate('/portfolio')}>
              Explore Our Work <FaRocket className="cta-icon" />
            </button>
          </motion.div>
        </div>
        <motion.div className="hero-pattern" {...fadeInUp}></motion.div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section className="section introduction-section" {...fadeInUp}>
        <div className="container">
          <div className="intro-content">
            <motion.h2 className="intro-heading" {...fadeInUp}>We Are WebZin</motion.h2>
            <motion.p className="intro-text" {...fadeInUp}>
              At WebZin, we transform ideas into digital masterpieces...
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section className="section mission-section" {...fadeInUp}>
        <div className="container">
          <div className="mission-content">
            <motion.div className="mission-icon" {...fadeInUp}>
              <FaLightbulb />
            </motion.div>
            <motion.h2 className="section-title" {...fadeInUp}>Our Mission</motion.h2>
            <motion.p className="mission-text" {...fadeInUp}>
              To empower businesses with powerful, beautiful, and effective digital solutions...
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section className="section services-section" {...fadeInUp}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" {...fadeInUp}>Our Expertise</motion.h2>
            <motion.p className="section-subtitle" {...fadeInUp}>
              Comprehensive digital solutions tailored to your needs
            </motion.p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div className="service-card" key={index} {...fadeInUp}>
                <div className="service-icon-container">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-hover-effect"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="section benefits-section" {...fadeInUp}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" {...fadeInUp}>Why Partner With WebZin</motion.h2>
            <motion.p className="section-subtitle" {...fadeInUp}>
              The competitive advantages we bring to your project
            </motion.p>
          </div>
          <div className="benefits-grid">
            {whyChooseUs.map((benefit, index) => (
              <motion.div className="benefit-card" key={index} {...fadeInUp}>
                <div className="benefit-icon-container">{benefit.icon}</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section className="section stats-section" {...fadeInUp}>
        <div className="container">
          <div className="stats-grid">
            <motion.div className="stat-card" {...fadeInUp}>
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            <motion.div className="stat-card" {...fadeInUp}>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Availability</div>
            </motion.div>
            <motion.div className="stat-card" {...fadeInUp}>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </motion.div>
            <motion.div className="stat-card" {...fadeInUp}>
              <div className="stat-number">24hr</div>
              <div className="stat-label">Average Response Time</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="section cta-section" {...fadeInUp}>
        <div className="container">
          <div className="cta-content">
            <motion.h2 className="cta-title" {...fadeInUp}>Ready to Elevate Your Digital Presence?</motion.h2>
            <motion.p className="cta-subtitle" {...fadeInUp}>Let's collaborate to create something extraordinary</motion.p>
            <div className="cta-buttons">
              <motion.button className="cta-button primary" onClick={() => navigate('/contact')} {...fadeInUp}>
                Get Started <FaRocket className="cta-icon" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default AboutPage;
