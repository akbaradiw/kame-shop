import React from "react";
import "./style.css";
import { GiTurtle } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:px-10 bg-emerald-600 text-zinc-100 bottom-0 w-full z-50 py-6 gap-6">
    <div className="px-4">
      <div className="pb-4">
        <h1 className="font-semibold 2xl:text-2xl">Headquarter</h1>
        <p className="2xl:text-xl">
          Jl. Kapten Tsubuasa No. 10, Shizou, Kita-ku, Fukuoka-shi, Fukuoka
          Prefecture, Japan
        </p>
      </div>
      <div>
        <h1 className="font-semibold 2xl:text-2xl">Warehouse</h1>
        <p className="2xl:text-xl">
          Jl. Jendral Hayato Tani No 38, Osaka City, Osaka Prefecture, Japan
        </p>
      </div>
    </div>
    <div className="px-4">
      <div className="pb-4">
        <h1 className="font-semibold 2xl:text-2xl">Phone</h1>
        <p className="2xl:text-xl">0812-3456-7890</p>
      </div>
      <div>
        <h1 className="font-semibold 2xl:text-2xl">Email</h1>
        <p className="2xl:text-xl">kameshop@mail.com</p>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <GiTurtle className="text-6xl" />
      <h1 className="font-bold italic 2xl:text-2xl">KAME SHOP</h1>
    </div>
  </div>
  
  );
};

export default Footer;
