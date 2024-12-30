import React from "react";
import { GiShirt, GiHealthPotion } from "react-icons/gi";
import { LuMonitorSmartphone } from "react-icons/lu";
import { MdToys } from "react-icons/md";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="p-4 md:p-8 lg:p-10 pt-10">
      <div>
        <h1 className="text-2xl md:text-3xl text-emerald-600 text-center lg:text-3xl font-bold">
          Explore Our Products
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-20 gap-10 pt-10">
          <div>
            <div className="flex justify-center">
              <Link to="/products">
                <GiShirt className="text-6xl text-emerald-600 " />
              </Link>
            </div>
            <div className="flex justify-center">
              <h1 className="text-emerald-600 ">Fashion</h1>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Link to="/products">
                <LuMonitorSmartphone className="text-6xl text-emerald-600 " />
              </Link>
            </div>
            <div className="flex justify-center">
              <h1 className="text-emerald-600">Electronics</h1>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Link to="/products">
                <GiHealthPotion className="text-6xl text-emerald-600 " />
              </Link>
            </div>
            <div className="flex justify-center">
              <h1 className="text-emerald-600">Beauty & Health</h1>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Link to="/products"></Link>
              <MdToys className="text-6xl text-emerald-600 " />
            </div>
            <div className="flex justify-center">
              <h1 className="text-emerald-600">Toys</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
