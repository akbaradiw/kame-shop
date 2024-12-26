import React from "react";
import { Best } from "../../data/Best";

import "./style.css";

const BestProducts = () => {
  return (
    <div className="bg-zinc-100 p-4 md:p-8 lg:p-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-emerald-600">
          Best Products
        </h1>
      </div>

      <div className="grid grid-cols-1 bg-emerald-600 p-6 rounded-md sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Best.map((product) => (
          <div key={product.id}>
            <div className="bg-zinc-100 p-6 divide-y divide-emerald-600 rounded-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-white">
              <img
                className="max-w-full h-auto object-cover"
                src={product.image}
                alt={product.name}
              />
              </div>
              <h1 className="text-xl font-semibold mb-4 pt-2 text-emerald-600">
                {product.name}
              </h1>
              <p className="text-emerald-600 font-semibold text-lg">$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
