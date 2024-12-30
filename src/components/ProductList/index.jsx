import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrView } from "react-icons/gr";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { GrPowerReset } from "react-icons/gr";
import FilterProducts from "../FilterProducts";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getCartFromLocalStorage, saveCartToLocalStorage } from "../../helper/helper";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [filter, setFilter] = useState(false);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to fetch products. Please try again later.");
    }
  };


  
  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filtered = products;

    if (name) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (price) {
      const [min, max] = price.split("-").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }
    setFilteredProducts(filtered);
    setFilter(true);
  };

  const handleReset = () => {
    setName("");
    setCategory("");
    setPrice("");
    setFilteredProducts(products);
    setFilter(false);
  };

  const handleAddToCart = (product) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
    saveCartToLocalStorage(updateCart);
  };

  return (
    <div className="py-4">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <FilterProducts className="z-50 fixed w-full"
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
        handleReset={handleReset}
        filter={filter}
      />
      <div className="grid grid-cols-1 mt-10 lg:px-40 px-10 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <div className="transition border-2 transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden">
                <div className="bg-white">
                  <img
                    className="w-full p-6 h-80 sm:h-48 lg:h-60 object-cover rounded-t-lg"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="px-4 pb-2 bg-zinc-100">
                  <h1 className="text-base font-semibold mb-4 pt-2 text-emerald-600">
                    {product.title}
                  </h1>
                  <div className="flex justify-between">
                    <p className="text-emerald-600 font-semibold text-base">
                      ${product.price}
                    </p>
                    <p className="text-emerald-600 font-semibold text-base">
                      Rate: {product.rating.rate}
                    </p>
                  </div>
                  <div className="flex justify-start px-4 gap-2">
                    <Link to={`/detail/${product.id}`}>
                      <GrView />
                    </Link>
                    <button onClick={() => handleAddToCart(product)}>
                      <GiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>

    </div>
  );
};

export default ProductList;
