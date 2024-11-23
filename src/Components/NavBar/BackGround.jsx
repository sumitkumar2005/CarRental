import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Car from './../../assets/Images/HomeCar.svg';
import Location from './Location';

function BackGround() {
  return (
    <div className="relative">
      <div className="background">
        <img src={Car} alt="Background" className="w-full h-auto object-cover" />
        <div data-aos="fade-up" className="car_info text-white absolute top-20 left-0 right-0 text-center text-xl font-bold">
          Experience Luxury on the Road – Rent Premium Cars, Your Way!
        </div>
        <Location />
      </div>
    </div>
  );
}

export default BackGround;
