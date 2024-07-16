
import img1 from './images/siteLogo.png';
import im1 from './images/profile.webp';
import im2 from './images/heart.webp';
import im3 from './images/comm.png';
import im4 from './images/bag.webp';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


  

export default function Navbar(props){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <>
        <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={img1} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="#">MEN</Link></li>
            <li><Link to="#">WOMEN</Link></li>
            <li><Link to="#">KIDS</Link></li>
            <li><Link to="#">HOME & LIVING</Link></li>
            <li><Link to="#">BEAUTY</Link></li>
            <li><Link to="#">STUDIO</Link></li>
          </ul>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search for products..." />
        </div>
        <div className="navbar-icons">
          <p>
            <img src={im1} alt="Profile" />
            <span>Profile</span>
          </p>
          <p>
            <img src={im2} alt="Wishlist" />
            <span>Wishlist</span>
          </p>
          <Link to="/" className="link-no-highlight">
          <p>
            <img src={im3} alt="Community" />
            <span>Community</span>
          </p>
            </Link>
          <p>
            <img src={im4} alt="Bag" />
            <span>Bag</span>
          </p>
        </div>
      </div>
    </nav>
      
      </>
    )
}