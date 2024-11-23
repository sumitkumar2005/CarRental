import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "./footer";
import MyContext from "../Components/NavBar/MyContext";

const Booking = () => {
  const { name, img } = useContext(MyContext);
  const [storedCars, setStoredCars] = useState([]);
  const [days, setDays] = useState(1); // State to store number of rental days
  const [totalPrice, setTotalPrice] = useState(0); // State to store calculated total price

  // Save the selected car to localStorage when context changes
  useEffect(() => {
    if (name && img) {
      const newCar = { name, img, price: 78.9 }; // Store price as a number for calculations

      // Get existing cars from localStorage
      const existingCars = JSON.parse(localStorage.getItem("selectedCars")) || [];

      // Add the new car to the list and update localStorage
      const updatedCars = [...existingCars, newCar];
      localStorage.setItem("selectedCars", JSON.stringify(updatedCars));

      console.log("Storing Car Data: ", updatedCars);
      setStoredCars(updatedCars); // Update state
    }
  }, [name, img]);

  // Retrieve cars from localStorage on initial render
  useEffect(() => {
    const cars = JSON.parse(localStorage.getItem("selectedCars")) || [];
    console.log("Parsed Data from LocalStorage: ", cars);
    setStoredCars(cars);
  }, []);

  // Handle changes in number of days
  const handleDaysChange = (e) => {
    const newDays = parseInt(e.target.value) || 1;
    setDays(newDays);

    // Recalculate total price
    if (storedCars.length > 0) {
      const selectedCar = storedCars[storedCars.length - 1]; // Assuming the last car is selected
      const newTotalPrice = selectedCar.price * newDays;
      setTotalPrice(newTotalPrice);
    }
  };

  // Debugging
  console.log("Stored Cars Data:", storedCars);

  return (
    <div className="main">
      <Navbar />
      <div className="content p-8">
        <h1 className="text-2xl font-bold mb-8">Booking Page</h1>
        {storedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {storedCars.map((car, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-md p-6 shadow-lg bg-white"
              >
                {/* Left Side: Car Image and Details */}
                <div className="w-full md:w-1/3 text-center">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-lg font-semibold">{car.name}</p>
                  <p className="text-gray-600">{`Price: $${car.price}/day`}</p>
                </div>

                {/* Right Side: Days Selection, Price Breakup */}
                <div className="w-full md:w-2/3 mt-4 md:mt-0">
                  <div className="mb-4">
                    <label
                      htmlFor={`days-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Number of Days:
                    </label>
                    <input
                      type="number"
                      id={`days-${index}`}
                      value={days}
                      min="1"
                      onChange={handleDaysChange}
                      className="mt-1 p-2 w-20 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Price Breakdown */}
                  <div className="text-gray-700">
                    <div className="flex justify-between mb-2">
                      <span>Rent for 1 Day:</span>
                      <span>${car.price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Days Renting:</span>
                      <span>{days} days</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Price:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No cars selected. Please select a car to view details.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
