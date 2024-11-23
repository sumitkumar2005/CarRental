import React from 'react';

import Card from '../Components/Cards/card';
import Buttons from './Buttons';
function PopularCars() {
  const carData = [
    {
      img: 'https://th.bing.com/th/id/OIP.o4ZtYJ3y4w_4xEfEJRiMxgHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain',
      name: 'Audi R8 2024',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.8ukpVQCPgiqinqNnJzVZiAHaEK?w=5120&h=2880&rs=1&pid=ImgDetMain',
      name: 'Lamborghini',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.yb1gxBK3_GWsYASe7J9EjgHaEK?w=1600&h=900&rs=1&pid=ImgDetMain',
      name: 'Ferrari 488 GTB',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.QtSb2_l6ZbMmr7e9Y0bq5QHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain',
      name: 'Bugatti Chiron',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.8LLfcbss0TLEsBU6aMCbfAHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain',
      name: 'Lexus LFA',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.FrRFl9RWtKdj1wk9hbq32QHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain',
      name: 'Porsche 911 Turbo',
    },
  ];

  return (
    <div className='container m-auto'>
      
     
      <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-[84rem] m-auto">
        {carData.map((car, index) => (
          <Card key={index} img={car.img} name={car.name} />
        ))}
        <button className="bg-black relative left-[33rem] w-52 text-white px-6 py-2 rounded-lg mt-8 mb-4 transform hover:scale-105 transition duration-300 ease-in-out">
          See all Cars
        </button>
      </div>
    </div>
  );
}

export default PopularCars;
