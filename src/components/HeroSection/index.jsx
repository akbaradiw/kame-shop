import React from "react";
import './style.css'
import donut from '../../assets/donut.jpg'
import shooping from '../../assets/shoopingmbak.jpg'


const HeroSection = () => {
  return (
    <div className="bg-zinc-100 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-16">
        {/* <div className="w-full md:w-1/2 flex justify-center">
      <img
        className="max-w-full h-auto object-cover rounded-lg shadow-lg"
        src={shooping}
        alt="sweet"
      />
    </div> */}
    <div className="w-full md:w-1/2 mb-6 md:mb-0">
      <h1 className="text-2xl text-emerald-600 md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left">
        Welcome to our website
      </h1>
      <p className="text-sm md:text-base lg:text-lg leading-relaxed text-emerald-600 mb-6 text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Soluta, quibusdam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Soluta, quibusdam. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Soluta, quibusdam. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, voluptate. Soluta, quibusdam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptate. Soluta, quibusdam.
      </p>
      <div className="text-center md:text-left">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Shop Now
        </button>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center">
      <img
        className="max-w-full h-auto object-cover rounded-lg shadow-lg"
        src={shooping}
        alt="sweet"
      />
    </div>
  </div>
  );
};

export default HeroSection;
