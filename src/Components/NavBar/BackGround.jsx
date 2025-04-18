import React from 'react';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Car from './../../assets/Images/HomeCar.svg';
import Location from './Location';

function BackGround() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="background relative">
        <img
          src={Car}
          alt="Background"
          className="w-full h-auto object-cover"
        />

        {/* Car Info Text */}
        <div data-aos="fade-up" className="car_info text-white absolute top-20 left-0 right-0 text-center text-xl font-bold">
          Experience Luxury on the Road – Rent Premium Cars, Your Way!
        </div>

        {/* Location Component */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default BackGround;
