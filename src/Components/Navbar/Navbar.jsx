import React from "react"; 
import "./Navbar.css"
import { useState } from "react";
import logo from "../Assets/logo.png"
import cartIcon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
const Navbar = () => {

    const [menu , setmenu] = useState("shop");

    return (
        <div className="navbar">
           <div className="nav-Logo">
            <img src= {logo} alt="logo" srcset="" />
            <p>Shopper</p>
           </div>
           <ul className="nav-menu">
                <li onClick={() => {setmenu("shop")}}> <Link to = '/'  style={{textDecoration: 'none'}}>Shop</Link> {menu === "shop"?<hr/>:<></>}</li>
                <li onClick={() => {setmenu("mens")}}> <Link to= '/mens'  style={{textDecoration: 'none'}} >Men</Link> {menu === "mens"?<hr/>:<></>}</li>
                <li onClick={() => {setmenu("women")}}> <Link to= '/womens'  style={{textDecoration: 'none'}}>Women</Link> {menu === "women"?<hr/>:<></>}</li>
                <li onClick={() => {setmenu("kids")}}> <Link to= '/Kids'  style={{textDecoration: 'none'}}>Kids</Link> {menu === "kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to= '/login'><button>Login</button></Link>
                <Link to= '/cart' > <img src= {cartIcon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar