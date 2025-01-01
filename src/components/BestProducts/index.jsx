import React from "react";
import { Best } from "../../data/Best";
import { GiShoppingCart } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const BestProducts = () => {
  return (
    <div className="py-10 px-10 rounded-sm shadow-sm">
      <div className=" p-4 md:p-8 lg:p-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl bg-zinc-100 p-1 rounded-lg shadow-sm md:text-4xl lg:text-5xl font-bold text-emerald-600">
            Best Products
          </h1>
        </div>

        <div className="grid grid-cols-1 md:p-0  rounded-md sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {Best.map((product) => (
            <div key={product.id}>
              <div className="bg-white p-4 divide-y border-emerald-600 border divide-emerald-600 rounded-md shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-white">
                  <img
                    className="max-w-full h-auto object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div>
                <p className=" text-sm text-end pt-2 text-emerald-500 underline underline-offset-4">
                    #{product.category}
                  </p>
                <Link to={"/products"}>
                  <h1 className="text-lg font-semibold cursor-pointer hover:text-blue-500 mb-1 pt-1 text-emerald-600">
                    {product.name}
                  </h1>
                  </Link>
                  <div className="flex justify-between">
                    <p className="text-blue-600 font-semibold text-lg">
                      ${product.price}
                    </p>

                    <div className="flex">
                      <div className="flex pt-1 pe-2">
                        <FaStar className=" text-sm text-yellow-400" />
                        <FaStar className=" text-sm text-yellow-400" />
                        <FaStar className=" text-sm text-yellow-400" />
                        <FaStar className=" text-sm text-yellow-400" />
                      </div>
                      <p className="text-yellow-400 font-semibold text-base">
                        {product.rate}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <button className="bg-pink-400 py-1 hover:bg-blue-600 px-4 rounded-sm">
                      <GiShoppingCart className="text-xl text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
