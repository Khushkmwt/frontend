import React from 'react'
import footerLogo from '../Assets/logo_big.png'
import instIcon from '../Assets/instagram_icon.png'
import pintrestIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icon-container">
                <img src={instIcon} alt="" />
            </div>
           < div className="footer-icon-container">
                <img src={pintrestIcon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsappIcon} alt="" />
            </div>
        </div>
        <div className="footer-copyrights">
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer