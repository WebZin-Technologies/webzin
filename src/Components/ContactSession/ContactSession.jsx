import React from 'react';
import './ContactSession.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function ContactSession() {
  const contactLinks = [
    {
      id: 1,
      icon: <SiGmail />,
      title: 'Email us',
      subtitle: 'webzin.dev@gmail.com',
      link: 'mailto:webzin.dev@gmail.com',
    },
    {
      id: 2,
      icon: <FaInstagram />,
      title: 'Instagram',
      subtitle: 'webzin.dev',
      link: 'https://instagram.com/webzin.dev',
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      subtitle: 'WebZin Technologies',
      link: 'https://linkedin.com/company/webzin-technologies',
    },
  ];

  return (
    <div className="contact-session">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#4328c7] section-title">Contact Us</h1>
      </div>

      {/* Main Container */}
      <div className="contact-container">
        {/* Form Section */}
        <div className="message-form">
          <h1 className="text-2xl font-bold contact-head">Send Us Message</h1>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" className="input-small" /><br />
            <input type="email" placeholder="Email Address" className="input-small" /><br />
            <input type="text" placeholder="Phone Number" className="input-small" /><br />
            <textarea className="input-medium" placeholder="Tell us about your project" /><br />
            <button className="contact-button">Send Message</button>
          </div>
        </div>

        {/* Social Section */}
        <div className="social-section">
          <h1 className="text-2xl font-bold text-center contact-head">Other Ways To Connect</h1>
          <div className="social-container">
            {contactLinks.map((contactlink) => (
              <a
                key={contactlink.id}
                href={contactlink.link}
                className="social-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-social-icon">{contactlink.icon}</div>
                <div className="contact-social-details">
                  <h2 className="details-title">{contactlink.title}</h2>
                  <h3 className="details-subtitle">{contactlink.subtitle}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSession;
