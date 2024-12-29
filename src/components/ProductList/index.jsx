import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrView } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
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
      <div className="lg:mx-40 mx-4 rounded-md bg-zinc-100">
        <form
          className="flex flex-wrap gap-4 m-1 p-3 lg:m-4 lg:p-4 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full sm:w-auto md:flex-1 p-2 border rounded-md"
            type="text"
            placeholder="Search by name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="w-full sm:w-auto text-emerald-600 font-semibold md:flex-1 p-2 border rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <select
            className="w-full sm:w-auto md:flex-1 p-2 border text-emerald-600 font-semibold rounded-md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Price</option>
            <option value="0-50">0-50</option>
            <option value="51-100">51-100</option>
            <option value="101-200">101-200</option>
            <option value="201-300">201-300</option>
          </select>
          <div className="flex gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
              type="submit"
            >
              <FaRegCheckCircle className="lg:text-2xl md:text-xl" />
            </button>
            {filter && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                type="button"
                onClick={handleReset}
              >
                <GrPowerReset className="lg:text-2xl md:text-xl" />
              </button>
            )}
          </div>
        </form>
      </div>
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
