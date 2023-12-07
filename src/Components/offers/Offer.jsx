import React from 'react'
import './Offer.css'
import exclusiveImg from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusives</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER'S PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusiveImg} alt="" />
            
        </div>
    </div>
  )
}

export default Offer