import React, { useState, useContext } from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi"; 
import { MdDirectionsCar } from "react-icons/md"; 
import { AiOutlineClose } from "react-icons/ai"; // Import Close Icon
import MyContext from "./MyContext";  // Assuming you are using a context for managing states

function ReservationForm() {
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Kolkata", "Chennai"];
  const { drop, setdrop, selectedCity, setSelectedCity, visible, setVisible,date,setdate } = useContext(MyContext);

  const [selectedCar, setSelectedCar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const cars = [
    "Toyota Corolla",
    "BMW 3 Series",
    "Ford Mustang",
    "Honda Civic",
    "Mercedes-Benz GLC",
    "Tesla Model 3",
    "Jeep Wrangler"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleClose = () => {
    console.log("Close button clicked");
    setVisible(false);  
  };
  
  const handleConfirm =()=>{
    setVisible(false)
  }

  if (visible==false) return null; 

  return (
    <div className="w-full max-w-screen-md m-auto p-8 shadow-lg rounded-lg bg-white absolute top-16 left-1/2 transform -translate-x-1/2 duration-300">
    
      <button
  onClick={handleClose}  
  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
>
  <AiOutlineClose className="text-2xl" />
</button>


      <h1 className="text-2xl font-bold text-black mb-4">Complete Reservation</h1>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">

          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full pl-4 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-4 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full pl-4 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Pick-Up Location */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Pick-Up Location</label>
              <div className="relative w-full">
                <FiMapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" disabled>Search a location</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Pick-Up Date</label>
              <div className="relative w-full">
                <FiCalendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                <input
                  type="date"
                  name="pickUpDate"
                  className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e)=>setdate(e.target.value)}
                />
              </div>
            </div>

            {/* Drop-Off Location */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Drop-Off Location</label>
              <div className="relative w-full">
                <FiMapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                <select
                  value={drop}
                  onChange={(e) => setdrop(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" disabled>Search a location</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Drop-Off Date</label>
              <div className="relative w-full">
                <FiCalendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                <input
                  type="date"
                  name="dropOffDate"
                  className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Car Selection */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium text-sm mb-1">Choose Car</label>
              <div className="relative w-full">
                <MdDirectionsCar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                <select
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" disabled>Select a car</option>
                  {cars.map((car) => (
                    <option key={car} value={car}>{car}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none" onClick={handleConfirm}>
              Confirm Reservation
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
