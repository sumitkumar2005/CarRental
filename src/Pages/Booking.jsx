import React, { useContext, useEffect, useState } from "react";
import { Calendar, Car, DollarSign, Palette } from "lucide-react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "./Footer";

import MyContext from "../Components/NavBar/MyContext";

const COLORS = [
  { name: "Cosmic Black", hex: "#1a1a1a" },
  { name: "Pearl White", hex: "#f5f5f5" },
  { name: "Racing Red", hex: "#dc2626" },
  { name: "Ocean Blue", hex: "#1d4ed8" },
  { name: "Emerald Green", hex: "#059669" },
];

const Booking = () => {
  const { name, img } = useContext(MyContext);
  const [storedCars, setStoredCars] = useState([]);
  const [booking, setBooking] = useState({
    days: 1,
    color: COLORS[0].hex,
    insurance: false,
    additionalDriver: false,
  });

  const basePrice = 78.9;
  const insurancePerDay = 15;
  const additionalDriverPerDay = 10;

  // Save car to localStorage when context changes
  useEffect(() => {
    if (name && img) {
      const newCar = { name, img, price: basePrice };
      const existingCars = JSON.parse(localStorage.getItem("selectedCars")) || [];
      const updatedCars = [...existingCars, newCar];
      localStorage.setItem("selectedCars", JSON.stringify(updatedCars));
      setStoredCars(updatedCars);
    }
  }, [name, img]);

  // Retrieve stored cars on initial render
  useEffect(() => {
    const cars = JSON.parse(localStorage.getItem("selectedCars")) || [];
    setStoredCars(cars);
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    const totalBasePrice = booking.days * basePrice;
    const insuranceCost = booking.insurance ? booking.days * insurancePerDay : 0;
    const additionalDriverCost = booking.additionalDriver
      ? booking.days * additionalDriverPerDay
      : 0;
    return totalBasePrice + insuranceCost + additionalDriverCost;
  };
 
  if (storedCars.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No car selected. Please select a car first.</p>
      </div>
    );
  }

  const selectedCar = storedCars[storedCars.length - 1]; // Latest selected car

  return (
    <div className="min-h-screen bg-black text-white">
 
  
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-700 to-black px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Complete Your Booking</h1>
          <p className="text-gray-400 mt-2">Customize your rental experience</p>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Left Section: Car Details */}
          <div className="space-y-6">
            <div className="relative bg-gray-900 rounded-xl p-6">
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: booking.color }}
              />
              <img
                src={selectedCar.img}
                alt={selectedCar.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h2 className="text-2xl font-bold mt-4">{selectedCar.name}</h2>
              <div className="flex items-center gap-2 mt-2 text-gray-300">
                <Car className="w-5 h-5 text-gray-500" />
                <span>Premium Vehicle</span>
              </div>
            </div>
  
            {/* Color Picker */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-300">
                <Palette className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-semibold">Select Color</h3>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {COLORS.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setBooking((prev) => ({ ...prev, color: color.hex }))}
                    className={`w-full aspect-square rounded-full border-4 ${
                      booking.color === color.hex ? "border-blue-500" : "border-gray-600"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
  
          {/* Right Section: Booking Details */}
          <div className="space-y-6">
            {/* Rental Duration */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-300">
                <Calendar className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-semibold">Rental Duration</h3>
              </div>
              <input
                type="number"
                min="1"
                value={booking.days}
                onChange={(e) =>
                  setBooking((prev) => ({ ...prev, days: Math.max(1, +e.target.value || 1) }))
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Additional Options */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Additional Options</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 text-gray-400">
                  <input
                    type="checkbox"
                    checked={booking.insurance}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, insurance: e.target.checked }))
                    }
                    className="w-4 h-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                  />
                  <span>Insurance Coverage ($15/day)</span>
                </label>
                <label className="flex items-center gap-3 text-gray-400">
                  <input
                    type="checkbox"
                    checked={booking.additionalDriver}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, additionalDriver: e.target.checked }))
                    }
                    className="w-4 h-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                  />
                  <span>Additional Driver ($10/day)</span>
                </label>
              </div>
            </div>
  
            {/* Price Breakdown */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-300">
                <DollarSign className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-semibold">Price Breakdown</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Base Rate ({booking.days} days × $78.9)</span>
                  <span>${(booking.days * basePrice).toFixed(2)}</span>
                </div>
                {booking.insurance && (
                  <div className="flex justify-between text-gray-500">
                    <span>Insurance ({booking.days} days × $15)</span>
                    <span>${(insurancePerDay * booking.days).toFixed(2)}</span>
                  </div>
                )}
                {booking.additionalDriver && (
                  <div className="flex justify-between text-gray-500">
                    <span>Additional Driver ({booking.days} days × $10)</span>
                    <span>${(additionalDriverPerDay * booking.days).toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-600 pt-2 mt-2">
                  <div className="flex justify-between font-bold text-white text-lg">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Confirm Button */}
            <button
              onClick={() => alert("Booking confirmed! Thank you for choosing our service.")}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <Footer />
  </div>
  
  );
};

export default Booking;
