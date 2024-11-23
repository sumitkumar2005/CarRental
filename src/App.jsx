import { Route, Routes } from 'react-router-dom';
import PageLayout from './Layout/PageLayout'
import Navbar from './Components/NavBar/Navbar';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import AllCars from './Pages/AllCars';
import ReservationForm from './Components/NavBar/ReservationForm';
import CarList from './Pages/CarList';

function App() {
  return (
    <>
     <Navbar/>
    <Routes>
     
      <Route path="/" element={< PageLayout/>} />
      <Route path="/CarList" element={<CarList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Booking" element={<Booking />} />
    </Routes>
    </>
  );
}

export default App;
