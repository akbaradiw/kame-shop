import React from "react";
import "./style.css";
import { GiTurtle } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center bg-emerald-600 text-zinc-100 bottom-0 w-full z-50 py-6 gap-6">
    <div className="px-4">
      <div className="pb-4">
        <h1 className="font-semibold">Headquarter</h1>
        <p>
          Jl. Kapten Tsubuasa No. 10, Shizou, Kita-ku, Fukuoka-shi, Fukuoka
          Prefecture, Japan
        </p>
      </div>
      <div>
        <h1 className="font-semibold">Warehouse</h1>
        <p>
          Jl. Jendral Hayato Tani No 38, Osaka City, Osaka Prefecture, Japan
        </p>
      </div>
    </div>
    <div className="px-4">
      <div className="pb-4">
        <h1 className="font-semibold">Phone</h1>
        <p>0812-3456-7890</p>
      </div>
      <div>
        <h1 className="font-semibold">Email</h1>
        <p>kameshop@mail.com</p>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <GiTurtle className="text-6xl" />
      <h1 className="font-bold italic">KAME SHOP</h1>
    </div>
  </div>
  
  );
};

export default Footer;
