import React, { useState, useEffect } from 'react';
import Car from './../../assets/Images/HomeCar.svg'
import './Navbar.scss';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
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
    setActive(item);
  };

  return (
    <div className=''>
      <div className="Info">
        <div className="NavList">
          <span
            onClick={() => handleNavClick('Home')}
            className={active === 'Home' ? 'active' : ''}
          >
            <Link to={"/"}> Home</Link>
         
          </span>
          <span
            onClick={() => handleNavClick('Bikes')}
            className={active === 'Bikes' ? 'active' : ''}
          >
        <Link to={"/CarList"}> AllCars</Link>
          </span>
          <span
            onClick={() => handleNavClick('Contact Us')}
            className={active === 'Contact Us' ? 'active' : ''}
          >
            <Link to={"/contact"}>   Contact Us</Link>
         
          </span>
          <span
            onClick={() => handleNavClick('My Bookings')}
            className={active === 'My Bookings' ? 'active' : ''}
          >
            <Link to={"Booking"}>   My Bookings</Link>
         
          </span>
        </div>
 
      </div>
      </div>
      );
}

      export default Navbar;
