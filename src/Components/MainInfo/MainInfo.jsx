import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gwagon from './../../assets/Images/Cars/Gwagon.svg';
import Search from './../../assets/Images/Icons/Search.svg';
import Face from './../../assets/Images/Icons/Face.svg';
import Calendar from './../../assets/Images/Icons/Calendar.svg';

function MainInfo() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration
  }, []);

  return (
    <div className="main px-6 sm:px-12 lg:px-20 py-10 flex flex-col gap-12">
      {/* Info Section */}
      <div className="info text-center flex flex-col items-center">
        <h2 className="font-bold text-2xl sm:text-3xl" data-aos="fade-up">
          How it Works
        </h2>
        <p
          className="w-full max-w-lg font-semibold text-base sm:text-lg mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Renting a luxury car has never been easier. Our streamlined process
          makes it simple for you to book and confirm your vehicle of choice
          online.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Steps */}
        <div className="Specs flex flex-col gap-6">
          {/* Step 1 */}
          <div
            className="Browse flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-slate-200 rounded-2xl shadow-lg items-center"
            data-aos="fade-right"
          >
            <img src={Search} className="w-10 h-10 sm:w-12 sm:h-12" alt="Search" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Browse And Select</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Choose from our wide range of premium cars, select the pickup
                and return dates and locations that suit you best.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="Book flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-slate-200 rounded-2xl shadow-lg items-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img src={Calendar} className="w-10 h-10 sm:w-12 sm:h-12" alt="Calendar" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Book And Confirm</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Book your desired car with just a few clicks and receive an
                instant confirmation via email or SMS.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="Enjoy flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-slate-200 rounded-2xl shadow-lg items-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img src={Face} className="w-10 h-10 sm:w-12 sm:h-12" alt="Face" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Enjoy your Ride</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Pick up your car at the designated location and enjoy your
                premium driving experience with our top-quality service.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div
          className="img bg-slate-200 rounded-lg shadow-lg flex items-center justify-center"
          data-aos="fade-left"
        >
          <img
            src={Gwagon}
            alt="Gwagon"
            className="max-w-full h-auto object-contain p-4"
          />
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
