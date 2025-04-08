import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { BackgroundLines } from '../Ui/background-lines';
import './Herosection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <BackgroundLines>
        <div className="hero__content">
          <h1 className="hero__title">
            Your Vision, <span>Our Code</span>
          </h1>
          
          <p className="hero__subtitle">
            Transforming visions into digital reality — WebZin crafts custom websites
            that captivate, convert, and elevate your online presence
          </p>

          <button className="hero__cta">
            Get a Quote <FaAngleRight className="hero__cta-icon" />
          </button>

          <div className="hero__rating">
            <div className="hero__stars">★★★★★</div>
            <p className="hero__rating-text">5.0 by over 200 users</p>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default HeroSection;