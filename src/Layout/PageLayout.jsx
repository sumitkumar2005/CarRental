import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Category from '../Components/Dashboard/CateGory/Category'
import Minfo from '../Components/Dashboard/Minfo'
import Body_main from '../Components/Dashboard/CateGory/Body'

import MainInfo from '../Components/MainInfo/MainInfo'
import ServicesAndBenefits from '../Components/Services/Service'
import BackGround from '../Components/NavBar/BackGround'
import ReservationForm from '../Components/NavBar/ReservationForm'

import Footer from '../Pages/footer'
import Car from '../Pages/Car'
function PageLayout() {
  return (
    <div>
    
        <Navbar/>
         <BackGround/>
         <ReservationForm/>
      <Minfo/>
      <Category/>
     
      <Body_main/> 
      <Car/>

   <MainInfo/>
    <ServicesAndBenefits/>
   
     <Footer/>
   
    </div>
  )
}

export default PageLayout
