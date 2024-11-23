import React from 'react'
import Body from './Bodyimg.jsx'
import bd1 from './../../../assets/Images/Body/bd1.svg'
import bd2 from './../../../assets/Images/Body/bd2.svg'
import bd3 from './../../../assets/Images/Body/bd3.svg'
import bd4 from './../../../assets/Images/Body/bd4.svg'
import bd5 from './../../../assets/Images/Body/bd5.svg'
import bd7 from './../../../assets/Images/Body/bd7.svg'
import bd8 from './../../../assets/Images/Body/bd8.svg'
import bd10 from './../../../assets/Images/Body/bd10.svg'
import bd6 from './../../../assets/Images/Body/bd6.svg'
import bd9 from './../../../assets/Images/Body/bd9.svg'
import './Body.scss'
function Body_main() {
  return (
    <div className="main">
      <h2 className='text-center text-2xl font-bold mb-8'>Rent By Car model</h2>
    <div className='brands-grid'>
      <Body img={bd1} name="SUV"/>
      <Body img={bd2} name="Crossover"/>
      <Body img={bd3} name="Wagon"/>
      <Body img={bd4} name="Family MBP"/>
      <Body img={bd5} name="Sport coupe"/>
      <Body img={bd6} name="Compact"/>
      <Body img={bd7} name="Sedan"/>
      <Body img={bd8} name="BMW"/>
      <Body img={bd9} name="Limousine"/>
      <Body img={bd10} name="convertible"/>
    </div>
    </div>
  )
}

export default Body_main
