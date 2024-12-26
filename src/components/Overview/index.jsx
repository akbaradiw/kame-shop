import React from "react";
import "./style.css";
import { IoThumbsUpOutline } from "react-icons/io5";
import { MdOutlinePayment, MdLocalShipping } from "react-icons/md";

const Overview = () => {
  return (
    <div className="p-4 bg-emerald-600 md:p-8 lg:p-10">
      {/* <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-2xl font-bold text-zinc-100">
          Overview
        </h1>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex justify-center">
            <MdOutlinePayment className="text-4xl mb-2 text-zinc-100" />
          </div>
          <div className="flex justify-center">
            <h1 className="text-xl font-semibold mb-2 text-zinc-100">
              Secure Payment
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-semibold  text-zinc-100">
              100% Secure Payment
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <MdLocalShipping className="text-4xl text-center mb-2 text-zinc-100" />
          </div>
          <div className="flex justify-center">
            <h1 className="text-xl font-semibold mb-2 text-zinc-100">
              Free Shipping
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-semibold text-zinc-100">
              On orders over $2500
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <IoThumbsUpOutline className="text-4xl mb-2 text-zinc-100" />
          </div>
          <div className="flex justify-center">
            <h1 className="text-xl font-semibold mb-2 text-zinc-100">
              Top Quality Product
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-semibold text-zinc-100">
              100% Top Quality Product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
