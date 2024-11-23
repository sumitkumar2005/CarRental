import React from 'react'
import Card from '../Components/Cards/card';
import Buttons from './Buttons';
function FamilyCars() {
  const carData = [
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

export default FamilyCars
