import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "./footer";
import MyContext from "../Components/NavBar/MyContext";

const Booking = () => {
  const { name, img } = useContext(MyContext);
  const [storedCars, setStoredCars] = useState([]);

  // Save the selected car to localStorage when context changes
  useEffect(() => {
    if (name && img) {
      const newCar = { name, img, price: "$78.90/day" };

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

  // Debugging
  console.log("Stored Cars Data:", storedCars);

  return (
    <div className="main">
      <Navbar />
      <div className="content p-8">
        <h1 className="text-2xl font-bold mb-4">Booking Page</h1>
        {storedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storedCars.map((car, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-4 shadow-sm"
              >
                <p className="text-lg font-semibold">
                  <strong>Car Name:</strong> {car.name}
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  <strong>Price:</strong> {car.price}
                </p>
                {car.img && (
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-64 h-40 object-cover rounded-md border border-gray-300 mt-2"
                  />
                )}
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
