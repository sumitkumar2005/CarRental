import React from 'react'
import Gwagon from './../../assets/Images/Cars/Gwagon.svg'
import Search from './../../assets/Images/Icons/Search.svg'
import Face from './../../assets/Images/Icons/Face.svg'
import Calendar from './../../assets/Images/Icons/Calendar.svg'
function MainInfo() {
  return (
    <div className='main m-20 flex flex-col gap-20'>

      <div className="info m-4 text-center  flex flex-col align-middle justify-center">
        <h2 className='font-bold text-xl'>How it Works</h2>
        <p className='w-96 mx-auto font-semibold text-base'>
          Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <div className="Specs">
          <div className="Browse flex flex-col sm:flex-row gap-6 sm:gap-3 w-full sm:w-[40rem] bg-slate-200 h-auto p-6 rounded-2xl shadow-lg align-middle justify-center my-5">
            <img src={Search} width={30} alt="" />
            <div className='box-border'>
              <h2 className='text-2xl font-semibold mb-4'>Browse And Select</h2>
              <p className='text-lg text-gray-700'>
                Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.
              </p>
            </div>
          </div>
          <div className="Book flex flex-col sm:flex-row gap-6 sm:gap-3 w-full sm:w-[40rem] bg-slate-200 h-auto p-6 rounded-2xl shadow-lg align-middle justify-center my-5">
            <img src={Calendar} width={30} alt="" />
            <div className='box-border'>
              <h2 className='text-2xl font-semibold mb-4'>Book And Confirm</h2>
              <p className='text-lg text-gray-700'>
              Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.
              </p>
            </div>
          </div>
          <div className="Enjoy flex flex-col sm:flex-row gap-6 sm:gap-3 w-full sm:w-[40rem] bg-slate-200 h-auto p-6 rounded-2xl shadow-lg align-middle justify-center my-5">
            <img src={Face} width={30} alt="" />
            <div className='box-border'>
              <h2 className='text-2xl font-semibold mb-4'>Enjoy your Ride</h2>
              <p className='text-lg text-gray-700'>
              Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.
              </p>
            </div>
          </div>
        </div>

        <div className="img bg-slate-200 h-[35rem] flex align-middle justify-center rounded-lg shadow-lg">
          <img src={Gwagon} alt="Gwagon" />
        </div>
      </div>

    </div>

  )
}

export default MainInfo
