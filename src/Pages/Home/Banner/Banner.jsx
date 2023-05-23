import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      multiple:true, // Start animations on scroll
     
    });
  }, []);


  return (
    <div className="my-32">
      <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center gap-8">
        <div className="px-3 mt-10 md:mt-0" data-aos="fade-right">
          <h2 className="text-[#1A1919] md:text-4xl text-2xl font-bold">
            Best Kids Car Store and <span className="text-cyan-500">Online Shop</span>
          </h2>
          <p className="px-2 my-6 text-lg font-normal text-[#757575;">
            Discover the best-selling toy cars at our shop - guaranteed to ignite hours of fun and adventure!"
          </p>
          <button className="btn btn-primary">Discover</button>
        </div>
        <div className="h-96" data-aos="fade-left">
          <img className="rounded object-cover" src="https://i.ibb.co/LxQkFP6/baner1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
