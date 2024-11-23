import React from 'react';

function ServicesAndBenefits() {
    return (
        <div className="bg-black text-white">
            {/* Header Section */}
            <div className="container mx-auto py-16">
                <h2 className="text-3xl font-bold mb-6">Our Services & Benefits</h2>
                <p className="text-lg mb-12">
                    To make renting easy and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Quality Choice</h3>
                        <p>We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Affordable Prices</h3>
                        <p>Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Convenient Online Booking</h3>
                        <p>With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.</p>
                    </div>
                </div>
            </div>

            {/* Customer Testimonial Section */}
            <div className="container mx-auto py-16 bg-gray-900">
                <h2 className="text-3xl font-bold mb-6 p-8 text-white">What Our Customers Say</h2>
                <div className="flex items-center">
                    <div className="flex-1">
                        <p className="text-lg p-8 text-white">"I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience."</p>
                        <div className="flex items-center mt-4">
                         
                            <div>
                                <h3 className="text-white">Sumit Kumar</h3>
                                <p className="text-gray-400">Punjab</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile App Section */}
        </div>
    )
}
export default ServicesAndBenefits