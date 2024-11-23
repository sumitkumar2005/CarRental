import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarList from './Pages/CarList';
import Booking from './Pages/Booking';
import Home from './Layout/PageLayout';
import Navbar from './Components/NavBar/Navbar';
import ContactUs from './Pages/ContactUs';
import Car from './Pages/Car';
import PageLayout from './Layout/PageLayout';
import BackGround from './Components/NavBar/BackGround';
import AllCars from './Pages/AllCars';
import ReservationForm from './Components/NavBar/ReservationForm';

function App() {
  return (
    <>

   <ReservationForm/>
 </>

  );
}

export default App;
