import React, { useState, useEffect } from "react";
import {  BiTrash } from "react-icons/bi";
const CartComp = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const DeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 p-4">
    {/* Left Section */}
    <div className="py-10">
      {cart.map((item, index) => (
        <div
          className="flex flex-col md:flex-row justify-start bg-zinc-100  border-y border-emerald-600 gap-6 px-2 lg:gap-10 py-4"
          key={index}
        >
            <div className="mx-10">
          <img
            src={item.image}
            className="w-full h-auto max-w-full md:w-60 md:h-60 object-cover rounded-md"
            alt={item.title}
          />
            </div>
          <div className="ps-3 md:ps-0">
            <div className="py-2">
              <p className="font-bold text-emerald-600">Product</p>
              <p className="text-emerald-600">{item.title}</p>
            </div>
            <div className="py-2">
              <p className="font-bold text-emerald-600 pb-1">Quantity</p>
              <select
                className="border border-emerald-600 rounded-sm px-1"
                defaultValue={item.quantity}
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option value={qty} key={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
            <div className="py-2">
              <p className="font-bold text-emerald-600">Price</p>
              <p>{item.price}</p>
            </div>
            <div className="py-2">
              <BiTrash
                onClick={() => DeleteItem(index)}
                className="text-red-600 text-xl hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  
    <div className="lg:py-10 lg:ps-20">
    <div className="  border-y border-emerald-600 h-40 w-60">
      <div className=" p-4 divide-y divide-emerald-600 ">
        <p className="font-bold pb-2  text-emerald-600">Subtotal:</p>
        <p className="font-semibold pt-1 text-emerald-600">
          $ {cart.reduce((total, item) => total + item.price, 0)}
        </p>
      </div>
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-yellow-300 text-sm font-semibold hover:text-emerald-600 text-zinc-100 p-2 rounded-md w-full md:w-auto">
          Checkout
        </button>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default CartComp;
