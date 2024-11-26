import React, { useEffect } from "react";
import Card from "../Components/Cards/card";
import AllCars from "./AllCars";
import Footer from "./footer";
import { motion } from "framer-motion";

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
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-5xl text-left mx-16">Car Models</h1>
      <div className="flex flex-wrap justify-center gap-4 p-8">
        {carData.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Card name={car.name} img={car.img} />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AllCars />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default CarList;
