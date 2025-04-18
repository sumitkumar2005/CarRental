import React from 'react'

import Category from '../Components/Dashboard/CateGory/Category'
import Minfo from '../Components/Dashboard/Minfo'
import Body_main from '../Components/Dashboard/CateGory/Body'
import Footer from './../Pages/Footer'
import MainInfo from '../Components/MainInfo/MainInfo'
import ServicesAndBenefits from '../Components/Services/Service'
import BackGround from '../Components/NavBar/BackGround'
import ReservationForm from '../Components/NavBar/ReservationForm'


import Car from '../Pages/Car'
function PageLayout() {
  return (
    <div>
    
  
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
