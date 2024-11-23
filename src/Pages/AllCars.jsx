import React, { useState } from "react";



const cars = [
  {
    name: "Audi A1 S-Line",
    image: "http://localhost:3000/static/media/audia1.d038cf70b700e34e607a.jpg",
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
    image: "http://localhost:3000/static/media/passatcc.bd82bd1deac8c11e3c4d.jpg",
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
    image: "http://localhost:3000/static/media/toyotacamry.3d493a56558c50b677cc.jpg",
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
    image: "http://localhost:3000/static/media/bmw320.84ab73b0c9133418f907.jpg",
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
    image: "http://localhost:3000/static/media/benz.0a6153731a2c1a68054a.jpg",
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
    image: "http://localhost:3000/static/media/passatcc.bd82bd1deac8c11e3c4d.jpg",
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

  return (
    <div className="m-12">
      <div className="info text-center">
    <h2 className="text-xl m-4">Vehicle Models</h2>
    <h1 className="text-5xl m-4 font-bold">Our rental fleet</h1>
    <h2 className="text-lg m-4">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</h2>
</div>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      
      <div className="container mx-auto flex gap-8 px-4">
        {/* Left Sidebar */}
        <div className="w-1/4">
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
        <div className="w-3/4 flex items-center gap-8">
          {/* Car Image */}
          <div className="w-1/2">
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full rounded shadow-lg"
            />
          </div>

          {/* Car Details */}
          <div className="w-1/2 bg-white p-6 rounded shadow-lg">
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
