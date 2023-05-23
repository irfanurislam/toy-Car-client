import React from "react";
import { FaTruck, FaUndo, FaHeadset } from "react-icons/fa";

const OurService = () => {
  return (
    <div className="mb-28">
      <h2 className="text-2xl text-center font-bold mb-10">Our Services</h2>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card w-full bg-base-100 text-[#494949] border border-transparent hover:border-gray-700 transition duration-300">
          <div className="card-body items-center text-center">
            <div className="hover:scale-105">
              <FaTruck className="text-3xl mx-auto mt-2" />
            </div>
            <h2 className="card-title">Free Shipping!</h2>
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 text-[#494949] border border-transparent hover:border-gray-700 transition duration-300">
          <div className="card-body items-center text-center">
            <div className="hover:scale-105">
              <FaUndo className="text-3xl mx-auto mt-2" />
            </div>
            <h2 className="card-title">Money Return</h2>
            <p>30-day money-back guarantee. with Condition</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 text-[#494949] border border-transparent hover:border-gray-700 transition duration-300">
          <div className="card-body items-center text-center">
            <div className="hover:scale-105">
              <FaHeadset className="text-3xl mx-auto mt-2" />
            </div>
            <h2 className="card-title">24/7 Support</h2>
            <p>Get assistance anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
