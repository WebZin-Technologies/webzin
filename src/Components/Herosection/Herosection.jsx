import React from 'react'
import './Herosection.css'
import { FaAngleRight } from "react-icons/fa";
import { BackgroundLines } from '../Ui/background-lines';

function Herosection() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 z-0">
    <div className='herosection'>

      <div className="header-section">
        <h1 className="hero-header">Your Vision,<span>Our Code</span></h1>
      </div>

      <div className="hero-subtitle">
        <h6>Transforming visions into digital reality — WebZin crafts custom websites that captivate, convert, and elevate your online presence</h6>
      </div>

      <div className="btn-container">
      <button className="btn-purple">Get a Quote <FaAngleRight/> </button>
      </div>
      
      <div className="rating-hero">
      <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
      <p className="rating-text">5.0 by over 200 users</p>
      </div>
    </div>
     </BackgroundLines>
  )
}

export default Herosection
