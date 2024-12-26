import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 bg-zinc-100 lg:px-40 lg:pt-10 rounded-md sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="transition transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden">
              <div className="bg-white">
                <img
                  className="w-full  p-6 h-80  2xl:h-96 sm:h-48 md:h-80 lg:h-60 object-cover  rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <h1  className="text-xl font-semibold mb-4 pt-2 text-emerald-600">{product.title}</h1>
              <p  className="text-emerald-600 font-semibold text-lg">{product.price}</p>
            </div>
          </div>
        ))}
        <h1>kaos</h1>
      </div>
    </div>
  );
};

export default ProductList;
