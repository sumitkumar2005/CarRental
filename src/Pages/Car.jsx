import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Card from '../Components/Cards/card';
import { Link } from 'react-router-dom';

// Array of car categories (same as before)
const PopularCars = [
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

const FamilyCars = [
    {
        name: "Toyota Crysta",
        img: "https://th.bing.com/th/id/OIP.Nd0JXuzjX_fjyzHT_RtXJgHaEG?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        name: "Mahindra Scorpio N",
        img: "https://th.bing.com/th/id/OIP.WZAx8oP31xMh__0uNnuDCQHaEK?w=1140&h=641&rs=1&pid=ImgDetMain",
      },
      {
        name: "Hyundai Alcazar",
        img: "https://th.bing.com/th/id/OIP.VyxHQXuMW9goXR8N8TEtbQHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain",
      },
      {
        name: "Kia Carnival",
        img: "https://th.bing.com/th/id/OIP.drjcCl8iCvmT40aA2WOkbQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
      },
      {
        name: "Maruti Suzuki XL6",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http:%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20190821115906_Maruti-Suzuki-XL6-front-lau.jpg&h=578&w=872&c=0",
      },
      {
        name: "Toyota Fortuner",
        img: "https://th.bing.com/th/id/OIP.FPhybtr_ph9JeJSCNtN1TgHaFj?w=1440&h=1080&rs=1&pid=ImgDetMain",
      },
];

const IndianCars = [
    {
        img: 'https://th.bing.com/th/id/OIP.eRPz5a4fxAuGpAOfApG7cgHaEI?rs=1&pid=ImgDetMain',
        name: 'XUV300',
      },
      {
        img: 'https://wallpaperaccess.com/full/94336.jpg',
        name: 'Tata Punch',
      },
      {
        img: 'https://th.bing.com/th/id/OIP.Jb23N5V4T35wC1t-epy4ZAAAAA?rs=1&pid=ImgDetMain',
        name: 'Tata Safari',
      },
      {
        img: 'https://www.foxpublication.com/wp-content/uploads/2022/10/maruti-suzuki-ignis-1280x720-min.webp',
        name: 'Wagon R',
      },
      {
        img: 'https://mediacloud.carbuyer.co.uk/image/private/s--guRM1Lfa--/v1603277599/carbuyer/2020/10/Hyundai%20i20%20hatchback%20official%20UK%20CB%202020-14.jpg',
        name: 'Hyundai I20',
      },
      {
        img: 'https://static.javatpoint.com/top10-technologies/images/top-10-hatchback-cars-in-india6.png',
        name: 'Hyundai',
      },
];

const LuxuryCars = [
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

const OffRoad = [
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

function Car() {
  const [selectedCars, setSelectedCars] = useState(PopularCars);

  const handleButtonClick = (carType) => {
    if (carType === 'popular') {
      setSelectedCars(PopularCars);
    } else if (carType === 'luxury') {
      setSelectedCars(LuxuryCars);
    } else if (carType === 'indian') {
      setSelectedCars(IndianCars);
    } else if (carType === 'family') {
      setSelectedCars(FamilyCars);
    } else if (carType === 'offroad') {
      setSelectedCars(OffRoad);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, offset: 120, once: true });
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="heading text-center" data-aos="fade-up">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sans mt-10 m-5">
          Our Impressive Collections Of Cars
        </h1>
        <p
          className="text-sm sm:text-base lg:text-lg font-semibold mb-10 mx-auto max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ranging from elegant sedans to powerful sports cars, all carefully
          selected to provide our customers with the ultimate driving experience.
        </p>
      </div>

      {/* Button Group */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {[
          { label: 'Popular Cars', type: 'popular' },
          { label: 'Luxury Cars', type: 'luxury' },
          { label: 'Indian Cars', type: 'indian' },
          { label: 'Family Cars', type: 'family' },
          { label: 'Off-road Cars', type: 'offroad' },
        ].map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn.type)}
            className="bg-white px-4 py-2 md:px-6 md:py-3 text-black rounded-xl hover:bg-black hover:text-white transition duration-300 text-sm md:text-base"
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Card Section */}
      <div className="car-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {selectedCars.map((car, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <Card img={car.img} name={car.name}></Card>
          </div>
        ))}
      </div>

      {/* All Cars Button */}
      <button
        className="bg-black text-white px-6 py-2 md:px-9 md:py-3 rounded-full mt-10 mx-auto block hover:bg-gray-800 transition duration-300"
      >
        <Link to="/CarList">All Cars</Link>
      </button>
    </div>
  );
}



export default Car;
