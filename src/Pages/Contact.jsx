import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "./Footer";

const Contact = () => {

  return (
    <>
   <Navbar/>
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-16">
        {/* Left Section: Contact Info */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-black mb-6">
            Need additional information?
          </h2>
          <p className="text-gray-600 mb-6">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <p className="text-black font-semibold mb-2">
            (123) 456-7869
          </p>
          <p className="text-gray-600 mb-2">carrental@xyz.com</p>
          <p className="text-gray-600">Jalandhar , Punjab</p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2 bg-gray-100 p-8 rounded-md shadow-md">
          <form>
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block text-gray-600 font-medium mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder='E.g: "Joe Shmoe"'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-2"
              >
                Tell us about it <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Write Here.."
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
