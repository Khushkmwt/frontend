import React from 'react'
import "./Hero.css"
import handIcon from "../Assets/hand_icon.png"
import  arrowIcon from  "../Assets/arrow.png"
import heroImg from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
              <h2>NEW ARRIVELS ONLY</h2>
              <div>
                 <div className="hero-hand-icon">
                      <p>New</p>
                      <img src={handIcon} alt="" />
                </div>
                 <p>Collections</p>
                 <p>For Everyone</p>
             </div>
             <div className="hero-latest-btn">
                  <div>Latest Collections</div>
                  <img src= {arrowIcon} alt="" />
             </div>
        </div>

        <div className="hero-right">
             <img src= {heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero