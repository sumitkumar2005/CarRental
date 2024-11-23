import React from "react";
import Card from "../Components/Cards/card";
import AllCars from "./AllCars";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "./footer";

const carData = [
  {
    name: "Toyota Corolla",
    img: "https://tse1.mm.bing.net/th?id=OIP.zpzKKlGI2tipYj1xjaFT_gHaE0&pid=Api",
  },
  {
    name: "Ford F-150",
    img: "https://tse3.mm.bing.net/th?id=OIP.NkIDoyGgD_RwblYoPczY5wHaE8&pid=Api",
  },
  {
    name: "Volkswagen Golf",
    img: "https://tse1.mm.bing.net/th?id=OIP.prEjq-iCf2ThAI-wqWgbmQHaE8&pid=Api",
  },
  {
    name: "Honda Civic",
    img: "https://tse2.mm.bing.net/th?id=OIP.vZDnbXsUylsW-Cs5buUGngHaE8&pid=Api",
  },
  {
    name: "BMW 3 Series",
    img: "https://tse2.mm.bing.net/th?id=OIP.ydX9inGy652pQRDmalEd3gHaFj&pid=Api",
  },
  {
    name: "Mercedes-Benz C-Class",
    img: "https://tse2.mm.bing.net/th?id=OIP.rnn1cv4_DqKtF_e5cAXyogHaEL&pid=Api",
  },
  {
    name: "Audi A4",
    img: "https://tse4.mm.bing.net/th?id=OIP.TiAkpXmxN0mNstaiuCirpgHaE7&pid=Api",
  },
  {
    name: "Chevrolet Silverado",
    img: "https://tse4.mm.bing.net/th?id=OIP.SloIl6WMFCEXwOPS71WT8wHaEK&pid=Api",
  },
  {
    name: "Hyundai Elantra",
    img: "https://tse2.mm.bing.net/th?id=OIP.Cbdgv0AxDd_lQkEwfswbFwHaEN&pid=Api",
  },

];

const CarList = () => {
  return (
    <>
    
    <Navbar/>
    <h1 className="text-5xl text-left m-36 ">Car Models</h1>
    <div className="flex flex-wrap justify-center gap-4 p-8">
      
      {carData.map((car, index) => (
        <Card key={index} name={car.name} img={car.img} />
      ))}
      <AllCars/>
    </div>
    <Footer/>
    </>
  );
};

export default CarList;
