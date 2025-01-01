import React from "react";
import "./style.css";
import donut from "../../assets/donut.jpg";
import shooping from "../../assets/shoopingmbak.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-zinc-100 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-16">
      <div className="w-full md:w-1/2 mb-6 md:pt-0 pt-4 md:mb-0">
        <h1 className="text-base text-emerald-600 md:text-lg lg:text-xl font-semibold mb-4 text-center md:text-left">
          WINTER / SPRING COLLECTION 2025
        </h1>
        <p className="text-base md:text-lg lg:text-5xl leading-relaxed text-emerald-600 mb-6 text-center md:text-left">
          Get up to 12% Off New Arrivals
        </p>
        <div className="text-center md:text-left ">
          <Link to={"/products"}>
            <button className="bg-emerald-600 font-semibold text-zinc-100 px-6 py-2 rounded-sm hover:bg-blue-700 ">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end lg:pe-12 gap-8 pt-7 md:pt-6 ">
          <div>
            <h1 className="text-2xl md:text-xl text-center text-blue-600 font-bold">2k+</h1>
            <p className="text-center  ">Brands</p>
          </div>
          <div>
          <h1 className="text-2xl md:text-xl text-center text-red-600 font-bold">100+</h1>
          <p className="text-center  ">Shops</p>
          </div>
          <div>
          <h1 className="text-2xl md:text-xl text-center text-yellow-500 font-bold">666k+</h1>
          <p className="text-center  ">Customers</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:p-3 md:w-1/2 flex justify-center">
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
