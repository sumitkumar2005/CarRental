import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">CAR Rental</h3>
          <p className="text-gray-400 mb-4">
            We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
          </p>
          <p className="text-white">
            <span className="font-bold">(123) 456-789</span>
          </p>
          <p className="text-gray-400">carrental@xyz.com</p>
          <p className="text-gray-500 mt-2">Design By Sumit Kumar</p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#gallery" className="text-gray-400 hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#careers" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#mobile" className="text-gray-400 hover:text-white">
                Mobile
              </a>
            </li>
            <li>
              <a href="#blog" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#how-we-work" className="text-gray-400 hover:text-white">
                How we work
              </a>
            </li>
          </ul>
        </div>

        {/* Working Hours Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">WORKING HOURS</h3>
          <p className="text-gray-400">Mon - Fri: 9:00AM - 9:00PM</p>
          <p className="text-gray-400">Sat: 9:00AM - 7:00PM</p>
          <p className="text-gray-400">Sun: Closed</p>
        </div>

        {/* Subscription Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SUBSCRIPTION</h3>
          <p className="text-gray-400 mb-4">
            Subscribe your Email address for the latest news & updates.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-gray-700 text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
