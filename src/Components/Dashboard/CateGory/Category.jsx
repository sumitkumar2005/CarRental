import React, { useEffect } from 'react';
import Toyota from './../../../assets/Images/Brands/Toyota.svg';
import Ford from './../../../assets/Images/Brands/ford.svg';
import Car1 from './../../../assets/Images/Brands/car1.svg';
import Car2 from './../../../assets/Images/Brands/car2.svg';
import Car3 from './../../../assets/Images/Brands/car3.svg';
import Car4 from './../../../assets/Images/Brands/car4.svg';
import Car5 from './../../../assets/Images/Brands/car5.svg';
import Car6 from './../../../assets/Images/Brands/car6.svg';
import Car7 from './../../../assets/Images/Brands/car7.svg';
import Car8 from './../../../assets/Images/Brands/car8.svg';

import Brand from './Brand';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Category.scss'; // Import custom SCSS file for styling

function Category() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          offset: 100,
          easing: 'ease-in-out',
          once: true,
        });
      }, []);
    
  return (
    <div className='category-container m-16'>
      <h2 className='text-center text-2xl font-bold mb-8'>Rent By Car Brands</h2>
     
      <div className="brands-grid">
        <Brand name="Toyota" img={Toyota} />
        <Brand name="Ford" img={Ford} />
        <Brand name="Tesla" img={Car1} />
        <Brand name="Hyundai" img={Car2} />
        <Brand name="Chevrolet" img={Car3} />
        <Brand name="BMW" img={Car4} />
        <Brand name="Audi" img={Car5} />
        <Brand name="Mercedes-Benz" img={Car6} />
        <Brand name="Volkswagen" img={Car7} />
        <Brand name="Ford" img={Car8} />
      </div>

      {/* <div className="cars flex justify-evenly m-9" data-aos="fade-right">
        <div className="car-item">
          <img src="https://www.kbb.com/wp-content/uploads/2020/12/2020-toyota-camry-hybrid-red-1600x1200-1.jpg" className='car-image' alt="Sedan" />
          <p className='car-label'>Sedan</p>
        </div>
        <div className="car-item">
          <img src="https://media.ed.edmunds-media.com/lexus/nx/2019/fe/2019_lexus_nx_f34_fe_408191_1600.jpg" className='car-image' alt="SUV" />
          <p className='car-label'>SUV</p>
        </div>
        <div className="car-item">
          <img src="https://th.bing.com/th/id/OIP.ceXXcUBTZUT78mg0Hf3JRgHaEK?rs=1&pid=ImgDetMain" className='car-image' alt="HatchBack" />
          <p className='car-label'>HatchBack</p>
        </div>
      </div> */}
    </div>
  );
}

export default Category;
