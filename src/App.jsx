import { Route, Routes } from 'react-router-dom';
import PageLayout from './Layout/PageLayout'
import Navbar from './Components/NavBar/Navbar';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import CarList from './Pages/CarList';
import LoginPage from './Pages/Login';


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
