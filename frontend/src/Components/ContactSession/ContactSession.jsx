import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import './ContactSession.css';
import { FaInstagram, FaLinkedin, FaPaperPlane, FaPhone, FaUser, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function ContactSession() {
  const contactLinks = [
    {
      id: 1,
      icon: <SiGmail className="contact-icon" />,
      title: 'Email us',
      subtitle: 'webzin.dev@gmail.com',
      link: 'mailto:webzin.dev@gmail.com',
      color: '#D44638',
    },
    {
      id: 2,
      icon: <FaWhatsapp className="contact-icon" />,
      title: 'WhatsApp',
      subtitle: 'Chat with us | Click here',
      link: 'https://wa.me/1234567890',
      color: '#25D366',
    },
    {
      id: 3,
      icon: <FaInstagram className="contact-icon" />,
      title: 'Instagram',
      subtitle: '@webzin.dev',
      link: 'https://instagram.com/webzin.dev',
      color: '#E1306C',
    },
    {
      id: 4,
      icon: <FaLinkedin className="contact-icon" />,
      title: 'LinkedIn',
      subtitle: 'WebZin Technologies',
      link: 'https://linkedin.com/company/webzin-technologies',
      color: '#0077B5',
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="contact-session" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="contact-container">
        {/* Left Side - Contact Form */}
        <motion.div className="contact-form-container" variants={fadeUp}>
          <div className="form-header">
            <motion.h2 className="section-subtitle" variants={fadeUp}>Get in Touch</motion.h2>
            <motion.h1 className="section-title" variants={fadeUp}>Send Us a Message</motion.h1>
            <motion.p className="section-description" variants={fadeUp}>
              Have a project in mind or want to collaborate? Fill out the form below and we'll get back to you within 24 hours.
            </motion.p>
          </div>

          <motion.form className="contact-form" variants={fadeUp}>
            <motion.div className="input-group" variants={fadeUp}>
              <span className="input-icon"><FaUser /></span>
              <input type="text" placeholder="Your Name" className="form-input" />
            </motion.div>

            <motion.div className="input-group" variants={fadeUp}>
              <span className="input-icon"><SiGmail /></span>
              <input type="email" placeholder="Email Address" className="form-input" />
            </motion.div>

            <motion.div className="input-group" variants={fadeUp}>
              <span className="input-icon"><FaPhone /></span>
              <input type="text" placeholder="Phone Number" className="form-input" />
            </motion.div>

            <motion.div className="input-group textarea-group" variants={fadeUp}>
              <span className="input-icon"><FaPaperPlane /></span>
              <textarea placeholder="Tell us about your project" className="form-textarea"></textarea>
            </motion.div>

            <motion.button className="submit-button" variants={fadeUp}>
              Send Message
              <FaPaperPlane className="button-icon" />
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div className="contact-info-container" variants={fadeUp}>
          <div className="info-header">
            <motion.h2 className="section-subtitle" variants={fadeUp}>Other Ways to</motion.h2>
            <motion.h1 className="section-title" variants={fadeUp}>Connect With Us</motion.h1>
            <motion.p className="section-description" variants={fadeUp}>
              Prefer other communication methods? Here's how else you can reach our team.
            </motion.p>
          </div>

          <motion.div className="contact-methods" variants={fadeUp}>
            {contactLinks.map((method) => (
              <motion.a
                href={method.link}
                key={method.id}
                className="contact-method"
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--method-color': method.color }}
                variants={fadeUp}
              >
                <div className="method-icon-container">
                  {method.icon}
                </div>
                <div className="method-details">
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-subtitle">{method.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="contact-decoration" variants={fadeUp}>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactSession;
