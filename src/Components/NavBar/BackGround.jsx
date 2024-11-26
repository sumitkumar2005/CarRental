import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Car from './../../assets/Images/HomeCar.svg';
import Location from './Location';

function BackGround() {
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
        <div
          data-aos="fade-up"
          className="car_info text-white absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
            Experience Luxury on the Road – Rent Premium Cars, Your Way!
          </h1>
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
