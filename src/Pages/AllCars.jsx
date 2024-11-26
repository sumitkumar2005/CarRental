import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cars = [
  {
    name: "Audi A1 S-Line",
    image: "https://th.bing.com/th/id/OIP.bi7N-Ds0dwr-EivfK4FESAHaEu?w=1330&h=850&rs=1&pid=ImgDetMain",
    price: 45,
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  },
  {
    name: "VW Golf 6",
    image: "https://th.bing.com/th/id/OIP.w0OZ-PsN12v-JQLDGUcZ-gHaDX?w=1678&h=763&rs=1&pid=ImgDetMain",
    price: 50,
    model: "Volkswagen",
    mark: "Golf 6",
    year: "2013",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    name: "Toyota Camry",
    image: "https://www.motortrend.com/uploads/sites/10/2017/11/2016-toyota-camry-se-sedan-angular-front.png",
    price: 40,
    model: "Toyota",
    mark: "Camry",
    year: "2014",
    doors: "4",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  },
  {
    name: "BMW 320 ModernLine",
    image: "https://www.pngplay.com/wp-content/uploads/13/BMW-320-PNG-Photo-Image.png",
    price: 60,
    model: "BMW",
    mark: "320",
    year: "2015",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
  {
    name: "Mercedes-Benz GLK",
    image: "https://www.pngmart.com/files/22/Mercedes-Benz-G-Class-Transparent-PNG.png",
    price: 70,
    model: "Mercedes",
    mark: "GLK",
    year: "2016",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    name: "VW Passat CC",
    image: "https://www.motortrend.com/uploads/sites/10/2017/11/2016-volkswagen-cc-sport-plus-triptronic-sedan-angular-front.png",
    price: 55,
    model: "Volkswagen",
    mark: "Passat CC",
    year: "2017",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  },
  // Add more cars here...
];

const AllCars = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return (
    <div className="m-5">
      {/* Header Section */}
      <div className="info text-center" data-aos="fade-up">
        <h2 className="text-xl m-4">Vehicle Models</h2>
        <h1 className="text-5xl m-4 font-bold">Our rental fleet</h1>
        <h2 className="text-lg m-4">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </h2>
      </div>

      {/* Main Content */}
      <div
        className="flex justify-center items-center min-h-screen bg-gray-50"
        data-aos="fade-in"
      >
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4">
          {/* Left Sidebar */}
          <div
            className="w-full lg:w-1/4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-bold mb-6">Vehicle Models</h2>
            <ul className="space-y-2">
              {cars.map((car, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCar(car)}
                  className={`py-2 px-4 rounded cursor-pointer ${
                    selectedCar.name === car.name
                      ? "bg-black text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {car.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Car Image and Info */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-8">
            {/* Car Image */}
            <div
              className="w-full lg:w-1/2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full rounded shadow-lg"
              />
            </div>

            {/* Car Details */}
            <div
              className="w-full lg:w-1/2 bg-white p-6 rounded shadow-lg"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                ${selectedCar.price} / rent per day
              </h3>
              <table className="w-full text-sm text-gray-600">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Model</td>
                    <td className="py-2 text-right">{selectedCar.model}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Mark</td>
                    <td className="py-2 text-right">{selectedCar.mark}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Year</td>
                    <td className="py-2 text-right">{selectedCar.year}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Doors</td>
                    <td className="py-2 text-right">{selectedCar.doors}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">AC</td>
                    <td className="py-2 text-right">{selectedCar.ac}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Transmission</td>
                    <td className="py-2 text-right">{selectedCar.transmission}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Fuel</td>
                    <td className="py-2 text-right">{selectedCar.fuel}</td>
                  </tr>
                </tbody>
              </table>
              <button className="mt-4 w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-600">
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
