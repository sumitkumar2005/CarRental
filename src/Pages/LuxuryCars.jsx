import React from 'react'
import Card from '../Components/Cards/card';
import Buttons from './Buttons';
function LuxuryCars() {
  const carData = [
    {
      img: 'https://wallpapercave.com/wp/wp9015951.jpg',
      name: 'Bentley',
    },
    {
      img: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls_royce_phantom_top_10.jpg?itok=P4JYsn-X',
      name: 'Rolls Royce',
    },
    {
      img: 'https://wallpapercave.com/wp/wp2406797.jpg',
      name: 'Ferrari 488 GTB',
    },
    {
      img: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg',
      name: 'Audi R8',
    },
    {
      img: 'https://www.topgear.com/sites/default/files/news-listicle/image/bmw_750li_xdrive_19_0.jpg',
      name: 'BMW 750Li',
    },
    {
      img: 'https://3.bp.blogspot.com/-FQ1_FG0HDj4/VvDM47kJ8VI/AAAAAAAAoes/jOoxWwJM1-YHChj4pzDWvBI-2ngioecXwCHM/s1600/the-most-affordable-luxury-cars.jpg',
      name: 'Porsche 789 ',
    },
  ];

  return (
    <div className='container m-auto'>
      <Buttons/>
      <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-[84rem] m-auto ">
        {carData.map((car, index) => (
          <Card key={index} img={car.img} name={car.name} />
        ))}
        <button className="bg-black relative left-[33rem] w-52 text-white px-6 py-2 rounded-lg mt-8 mb-4transform hover:scale-105 transition duration-300 ease-in-out">
          See all Cars
        </button>
      </div>
    </div>
  );
}


export default LuxuryCars
