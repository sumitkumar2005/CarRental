import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleNavClick = (item) => {
    setActive(item); // Update the active link
  };

  return (
    <div className="Navbar">
      <div className="Info">
        {/* Logo */}
        <div className="Logo">
          <Link to="/" onClick={() => handleNavClick('Home')}>
            Car<span>Rental</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="NavList">
          <Link 
            to="/" 
            onClick={() => handleNavClick('Home')} 
            className={active === 'Home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/CarList" 
            onClick={() => handleNavClick('All Cars')} 
            className={active === 'All Cars' ? 'active' : ''}
          >
            All Cars
          </Link>
          <Link 
            to="/contact" 
            onClick={() => handleNavClick('Contact Us')} 
            className={active === 'Contact Us' ? 'active' : ''}
          >
            Contact Us
          </Link>
          <Link 
            to="/Booking" 
            onClick={() => handleNavClick('My Bookings')} 
            className={active === 'My Bookings' ? 'active' : ''}
          >
            My Bookings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
