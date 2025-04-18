import React, { useState } from "react";
import MyContext from "../Components/NavBar/MyContext";
import { useContext } from "react";

const Register = () => {
  const {Pname,email,password,setPname,setEmail,setPassword} = useContext(MyContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( email && password) {
      // Save data to local storage
      localStorage.setItem(
        "userData",
        JSON.stringify({  email, password })
      );

      alert("Login successful! Data saved in local storage.");
      // Clear form fields
     
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
