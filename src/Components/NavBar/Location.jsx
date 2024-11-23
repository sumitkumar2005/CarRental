import React, { useContext } from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi"; 
import MyContext from "./MyContext";

function Location() {
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Kolkata", "Chennai"];
  const { drop, setdrop, selectedCity, setSelectedCity, visible, setVisible } = useContext(MyContext);

  return (
    <div className="minInfo bg-gray-300 w-full max-w-[1500px] h-24 m-auto rounded-lg flex items-center gap-6 p-2 shadow-xl">
      <div className="flex flex-col items-start w-1/4">
        <label className="text-gray-700 font-medium mb-1 text-sm">Pick-up Location</label>
        <div className="relative w-full">
          <FiMapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Search a location
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-start w-1/5">
        <label className="text-gray-700 font-medium mb-1 text-sm">Pick-up Date</label>
        <div className="relative w-full">
          <FiCalendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            type="date"
            className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Drop-off Location with Independent State */}
      <div className="flex flex-col items-start w-1/4">
        <label className="text-gray-700 font-medium mb-1 text-sm">Drop-off Location</label>
        <div className="relative w-full">
          <FiMapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <select
            value={drop}
            onChange={(e) => setdrop(e.target.value)} // setdrop controls only the drop-off location
            className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Search a location
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Drop-off Date */}
      <div className="flex flex-col items-start w-1/5">
        <label className="text-gray-700 font-medium mb-1 text-sm">Drop-off Date</label>
        <div className="relative w-full">
          <FiCalendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            type="date"
            className="w-full pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="w-1/5 flex justify-center">
        <button
          className="px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none flex items-center gap-2 text-sm"
          onClick={(e) => setVisible(!visible)}
        >
          Find a Vehicle <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}

export default Location;
