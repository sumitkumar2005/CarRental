import React from "react";

import Confetti from "react-confetti";
import { useState,useEffect } from "react";
import { useContext } from "react";
import MyContext from "./MyContext";

const Celebration= () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const {date,setdate} = useContext(MyContext);

    useEffect(() => {
      // Stop confetti after 5 seconds
      const timer = setTimeout(() => setShowConfetti(false), 5000);
  
      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {showConfetti && <Confetti />}
        <h2 style={{ color: "green", fontSize: "28px" }}>
          Booking Confirmed! 🎉
        </h2>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Your car will be ready for pickup on <strong>{date}</strong>.
        </p>
      </div>
    );
  };

export default Celebration;
