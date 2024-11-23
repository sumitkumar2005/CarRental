import React from 'react';
import Speed from './../../assets/Images/Icons/SpeedMeter.svg';
import GearBox from './../../assets/Images/Icons/GearBox.svg';
import Person from './../../assets/Images/Icons/person.svg';
import Fuel from './../../assets/Images/Icons/fuel.svg';
import MyContext from '../NavBar/MyContext';
import { useContext } from 'react';

function Card(props) {
  
  const{name,setname,img,setimg}  = useContext(MyContext);
  const handleClick =()=>{
    alert("Car Successfully booked")
    setimg(props.img);
    setname(props.name);
  }
  
 
  return (
    <div className="m-8 ">
      <div className="card w-80 h-96 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out bg-white">
        {/* Image Section */}
        <div className="img w-full h-56 overflow-hidden rounded-t-xl">
          <img
            src={props.img}
            className="h-full w-full object-cover"
            alt="Audi R8" 
          />
        </div>

        {/* Content Section */}
        <div className="p-4  rounded-3xl">
          {/* Title and Price */}
          <div className="word flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800 ">{props.name}</p>
            <p className="text-lg font-bold text-rose-600">$78.90/day</p>
          </div>

          {/* Icon Section */}
          <div className="icons flex justify-between m-4 bg-slate-200 rounded-md">
            <span className="flex flex-col items-center text-sm text-gray-600">
              <img src={Speed} className="w-8 h-8 mb-1" alt="Speed" />
          
            </span>
            <span className="flex flex-col items-center text-sm text-gray-600">
              <img src={GearBox} className="w-8 h-8 mb-1" alt="GearBox" />
          
            </span>
            <span className="flex flex-col items-center text-sm text-gray-600">
              <img src={Person} className="w-8 h-8 mb-1" alt="Person" />
             
            </span>
            <span className="flex flex-col items-center text-sm text-gray-600">
              <img src={Fuel} className="w-8 h-8 mb-1" alt="Fuel" />
            
            </span>
          </div>

          {/* Rent Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-white w-64 text-black px-6 py-2 m-3 rounded-lg font-medium shadow-md hover:bg-black hover:text-white transition duration-300" onClick={handleClick}>
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
