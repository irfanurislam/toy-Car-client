import React from "react";

const Offer = () => {
  return (
    <div className="my-20">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-10">Our Offer</h2>
    </div>
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src="https://i.ibb.co/qDYvWVp/pexels-alexgtacar-1592384.png"
          className="min-w-md md:max-w-md rounded-md shadow-2xl" data-aos="fade-left"
          alt="Product Image"
        />
        <div className="lg:ml-8">
          <div  data-aos="fade-down" className="border-dotted border-2 px-6 py-4 border-cyan-400 hover:bg-white">
            <h2 className="text-2xl font-bold text-cyan-500">
              New Born Kids & Baby Toys
            </h2>
            <p className="py-6">
              This is Our New Baby Collection
              <span className="indicator-item badge badge-primary ml-2">
                New
              </span>
            </p>
          </div>
          <div  data-aos="fade-up" className="mt-7 border-dotted border-2 p-4 border-fuchsia-700 hover:bg-white">
            <h2 className="text-2xl font-bold text-cyan-500">Toys & Games</h2>
            <p className="py-6 text-gray-600">
              Our Best Selling Part in This shop
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Offer;
